import { frontendUrl } from "@/utils/variables";
import * as fs from "fs";
import * as path from "path";

const Sitemap = () => {
  return null;
};

export const getServerSideProps = async ({ res }) => {
  const BASE_URL = frontendUrl;

  const pagesDir = path.join(process.cwd(), "/src/pages");
  console.log("Reading directory:", pagesDir);
  const staticPaths = fs
    .readdirSync(pagesDir)
    .filter((staticPage) => {
      console.log("Found static page:", staticPage);
      return ![
        "api",
        "_app.js",
        "_document.js",
        "sitemap.xml.js",
        "sitemap",
        "blog",
        "category",
        "[slug].js",
        "index.js",
        "web-stories",
      ].includes(staticPage);
    })
    .map((staticPagePath) => {
      const pageName = staticPagePath.replace(/\.js$/, "");
      return `${BASE_URL}/${pageName}`;
    });
  console.log("Static paths:", staticPaths);
  // const staticPaths = fs
  //   .readdirSync(pagesDir)
  //   .filter((staticPage) => {
  //     return ![
  //       "api",
  //       "_app.js",
  //       "_document.js",
  //       "sitemap.xml.js",
  //       "sitemap",
  //       "blog",
  //       "category",
  //       "[slug].js",
  //       "index.js",
  //       "web-stories",
  //     ].includes(staticPage);
  //   })
  //   .map((staticPagePath) => {
  //     const pageName = staticPagePath.replace(/\.js$/, "");
  //     return `${BASE_URL}/${pageName}`;
  //   });

  const mainPaths = [`${BASE_URL}/`];
  const redirectPaths = [
    `${BASE_URL}/standard-contractual-clauses`,
    `${BASE_URL}/partner-agreement`,
    `${BASE_URL}/terms-and-conditions`,
    `${BASE_URL}/terms-and-conditions-for-direct-customers`,
    `${BASE_URL}/master-subscription-agreement`,
    `${BASE_URL}/data-processing-agreement`,
    `${BASE_URL}/bespinlabs-legal-agreements-faqs`,
  ];

  const allPaths = [...mainPaths, ...staticPaths, ...redirectPaths];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${allPaths
        .map((url) => {
          return `
            <url>
              <loc>${url}</loc>
              <lastmod>${new Date().toISOString()}</lastmod>
              <changefreq>monthly</changefreq>
              <priority>1.0</priority>
            </url>
          `;
        })
        .join("")}
    </urlset>
  `;

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

export default Sitemap;
