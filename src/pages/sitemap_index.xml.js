import getSitemapPages from "../utils/getSitemapPages";
import getTotalCounts from "../lib/getTotalCounts";
import { frontendUrl } from "@/utils/variables";
export default function SitemapIndexPage() {
  return null;
}
export async function getServerSideProps({ res }) {
  const details = await getTotalCounts();

  let sitemapIndex = `<?xml version='1.0' encoding='UTF-8'?>
  <sitemapindex xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
           xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/siteindex.xsd"
           xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     ${details.map((item) => getSitemapPages(item)).join("")}
     <sitemap>
      <loc>
          ${frontendUrl}/sitemap/page_sitemap1.xml
      </loc>
    </sitemap>
  </sitemapindex>`;
  res.setHeader("Content-Type", "text/xml; charset=utf-8");
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=600, stale-while-revalidate=600"
  );
  res.write(sitemapIndex);
  res.end();
  return { props: {} };
}