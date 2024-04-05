import { frontendUrl } from "@/utils/variables";
import * as fs from "fs";
const Sitemap = () => {
  return null;
};

export const getServerSideProps = async ({ res }) => {
  const BASE_URL = frontendUrl;

  const staticPaths = fs
    .readdirSync("src/pages")
    .filter((staticPage) => {
      return ![
        "api",
        "about",
        "_app.js",
        "_document.js",
        "404.js",
        "sitemap.xml.js",
        "sitemap",
        "blog",
        "category",
        "[slug].js",
        "page_sitemap.xml.js",
        "test.js",
        "index.js",
      ].includes(staticPage);
    })
    .map((staticPagePath) => {
      const pageName = staticPagePath.replace(/\.js$/, "");
      return `${BASE_URL}/${pageName}`;
    });

  const mainPaths = [`${BASE_URL}/`]  
  const redirectPaths = [`${BASE_URL}/standard-contractual-clauses`, `${BASE_URL}/partner-agreement`, `${BASE_URL}/terms-and-conditions`, `${BASE_URL}/terms-and-conditions-for-direct-customers`, `${BASE_URL}/master-subscription-agreement`, `${BASE_URL}/data-processing-agreement`, `${BASE_URL}/bespinlabs-legal-agreements-faqs`];
  const dynamicPaths = [`${BASE_URL}/blog/page/2`, `${BASE_URL}/blog/page/3`, `${BASE_URL}/blog/page/4`, `${BASE_URL}/blog/page/5`, `${BASE_URL}/blog/page/6`, `${BASE_URL}/blog/page/7`, `${BASE_URL}/blog/page/8`, `${BASE_URL}/blog/page/9`, `${BASE_URL}/blog/page/10`, `${BASE_URL}/blog/page/11`, `${BASE_URL}/blog/page/12`, `${BASE_URL}/blog/page/13`, `${BASE_URL}/blog/page/14`, `${BASE_URL}/blog/page/15`, `${BASE_URL}/blog/page/16`, `${BASE_URL}/blog/page/17`, `${BASE_URL}/blog/page/18`, `${BASE_URL}/blog/page/19`];

  const allPaths = [...mainPaths, ...staticPaths, ...redirectPaths, ...dynamicPaths];

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