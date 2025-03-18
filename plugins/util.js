/* eslint-disable no-unused-vars */
const fs = require('fs');
const he = require('he');
const { gql, ApolloClient, InMemoryCache } = require('@apollo/client');
const RSS = require('rss');

const config = require('../package.json');

/**
 * createFile
 */

async function createFile(file, process, directory, location, verbose = false) {
  try {
    mkdirp(directory);
    verbose && console.log(`[${process}] Created directory ${directory}`);
    await promiseToWriteFile(location, file);
    verbose && console.log(`[${process}] Successfully wrote file to ${location}`);
  } catch (e) {
    throw new Error(`[${process}] Failed to create file: ${e.message}`);
  }
}

/**
 * promiseToWriteFile
 */

function promiseToWriteFile(location, content) {
  return new Promise((resolve, reject) => {
    fs.writeFile(location, content, (err) => {
      if (err) {
        reject(err);
        return;
      }
      resolve();
    });
  });
}

/**
 * mkdirp
 */

function mkdirp(directory) {
  const split = directory.split('/');
  let temp = '.';

  split.forEach((dir) => {
    temp = `${temp}/${dir}`;

    if (!fs.existsSync(temp)) {
      fs.mkdirSync(temp);
    }
  });
}

/**
 * createApolloClient
 */

function createApolloClient(url) {
  return new ApolloClient({
    uri: url,
    cache: new InMemoryCache(),
  });
}

/**
 * getAllPosts
 */

async function getAllPosts(apolloClient, process, verbose = false) {
  const query = gql`
    {
      posts(first: 10000) {
        edges {
          node {
            title
            excerpt
            slug
            date
            categories {
              edges {
                node {
                  name
                }
              }
            }
            featuredImage {
              node {
                altText
                mediaItemUrl
              }
            }
            contentType {
              node {
                label
              }
            }
          }
        }
      }
    }
  `;

  let posts = [];

  try {
    const data = await apolloClient.query({ query });
    const nodes = [...data.data.posts.edges.map(({ node = {} }) => node)];

    posts = nodes.map((post) => {
      const data = { ...post };

      if (data.author) {
        data.author = data.author.node.name;
      }

      if (data.categories) {
        data.categories = data.categories.edges.map(({ node }) => node.name);
      }

      if (data.excerpt) {
        //Sanitize the excerpt by removing all HTML tags
        const regExHtmlTags = /(<([^>]+)>)/g;
        data.excerpt = data.excerpt.replace(regExHtmlTags, '');
      }

      return data;
    });

    verbose && console.log(`[${process}] Successfully fetched posts from ${apolloClient.link.options.uri}`);
    return {
      posts,
    };
  } catch (e) {
    throw new Error(`[${process}] Failed to fetch posts from ${apolloClient.link.options.uri}: ${e.message}`);
  }
}

/**
 * getAllSearchPosts
 */

async function getAllSearchPosts(apolloClient, process, verbose = false) {
  const query = gql`
    {
      posts(first: 10000) {
        edges {
          node {
            title
            slug
            date
          }
        }
      }
    }
  `;

  let posts = [];

  try {
    const data = await apolloClient.query({ query });

    // Combine posts, pages, and portfolios
    const postsNodes = data.data.posts.edges.map(({ node }) => node);

    const allNodes = [...postsNodes];

    posts = allNodes.map((post) => {
      const data = { ...post };
      return data;
    });

    verbose &&
      console.log(
        `[${process}] Successfully fetched posts from ${apolloClient.link.options.uri}`
      );

    return {
      posts,
    };
  } catch (e) {
    throw new Error(
      `[${process}] Failed to fetch data from ${apolloClient.link.options.uri}: ${e.message}`
    );
  }
}

/**
 * generateIndexSearch
 */

function generateIndexSearch({ posts }) {
  const index = posts.map((post = {}) => {
    const title = he.decode(post.title);

    return {
      title,
      slug: post.slug,
      date: post.date,
    };
  });

  const indexJson = JSON.stringify({
    generated: Date.now(),
    posts: index,
  });

  return indexJson;
}

/**
 * getFeedData
 */

async function getFeedData(apolloClient, process, verbose = false) {
  const posts = await getAllPosts(apolloClient, process, verbose);
  return {
    ...posts,
  };
}

/**
 * generateFeed
 */

function generateFeed({ posts = [], metadata = {} }) {
  const { homepage = '' } = config;

  const feed = new RSS({
    title: 'Patronum - Best Platform for Google Workspace (GSuite) Management',
    description: 'Patronum provides a better way to manage Google Workspace (GSuite). Patronum is your Google Workspace (GSuite) manager that fully automates all administrator and user tasks to ensure an efficient, effective, and secure process.',
    site_url: homepage,
    feed_url: `${homepage}/feed.xml`,
    copyright: `${new Date().getFullYear()} Patronum`,
    language: metadata.language,
    pubDate: new Date(),
  });

  posts.map((post) => {
    feed.item({
      title: post.title,
      guid: `${homepage}/${post.slug}`,
      url: `${homepage}/${post.slug}`,
      date: post.date,
      description: post.excerpt,
      author: post.author,
      categories: post.categories || [],
    });
  });

  return feed.xml({ indent: true });
}

/**
 * resolvePathname
 */

function resolvePublicPathname(outputDirectory, outputName) {
  const directory = outputDirectory.split('/');
  const index = directory.indexOf('public');
  const path = directory
    .map((path, i) => {
      // If actual folder is a 'public' direct subfolder and is not empty, add to pathname
      if (i > index && path) {
        return `/${path}`;
      }
    })
    .join('');

  return `${path}/${outputName}`;
}

/**
 * removeLastTrailingSlash
 */

function removeLastTrailingSlash(url) {
  if (typeof url !== 'string') return url;
  return url.replace(/\/$/, '');
}

/**
 * terminalColor
 */

function terminalColor(text, level) {
  switch (level) {
    /** green */
    case 'info':
    default:
      return `\x1b[32m${text}\x1b[0m`;
    /** yellow */
    case 'warn':
      return `\x1b[33m${text}\x1b[0m`;
    /** red */
    case 'error':
      return `\x1b[31m${text}\x1b[0m`;
  }
}

module.exports = {
  createFile,
  promiseToWriteFile,
  mkdirp,
  createApolloClient,
  getAllPosts,
  getAllSearchPosts,
  generateIndexSearch,
  getFeedData,
  generateFeed,
  removeLastTrailingSlash,
  resolvePublicPathname,
  terminalColor,
};
