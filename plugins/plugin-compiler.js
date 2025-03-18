const path = require('path');

const { createApolloClient, createFile, terminalColor, removeLastTrailingSlash } = require('./util');

class WebpackPlugin {
  constructor(options = {}) {
    this.options = options;
  }

  async index(outputLocation, options) {
    const { url, plugin, verbose = false, nextConfig } = options;

    try {
      plugin.outputLocation = path.join(plugin.outputDirectory, plugin.outputName);

      verbose && console.log(`[${plugin.name}] Compiling file ${plugin.outputLocation}`);

      const hasUrl = typeof url === 'string';

      if (!hasUrl) {
        throw new Error(
          `[${plugin.name}] Failed to compile: Please check that WORDPRESS_GRAPHQL_ENDPOINT is set and configured in your environment. WORDPRESS_HOST is no longer supported by default.`
        );
      }

      const apolloClient = createApolloClient(removeLastTrailingSlash(url));

      const data = await plugin.getData(apolloClient, plugin.name, verbose);

      const file = await plugin.generate(data, nextConfig);

      if (file !== false) {
        await createFile(file, plugin.name, plugin.outputDirectory, plugin.outputLocation, verbose);
      }

      //If there is an additional action to perform
      if (plugin.postcreate) {
        plugin.postcreate(plugin);
      }

      !verbose && console.log(`Successfully created: ${terminalColor(plugin.outputName, 'info')}`);
    } catch (e) {
      console.error(`${terminalColor(e.message, 'error')}`);
    }
  }

  apply(compiler) {
    const { plugin } = this.options;

    let hasRun = false;

    compiler.hooks.run.tap(plugin.name, async (compiler) => {
      if (!compiler.options.entry.main || hasRun) return;

      await this.index(compiler, this.options);
      hasRun = true;
    });

    compiler.hooks.watchRun.tap(plugin.name, async (compiler) => {
      const entries = await compiler.options.entry();
      if (!entries || !entries.main || hasRun) return;
      await this.index(compiler, this.options);
      hasRun = true;
    });
  }
}

module.exports = WebpackPlugin;
