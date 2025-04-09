import { frontendUrl } from "@/utils/variables";

const Sitemap = () => {
  return null;
};

export const getServerSideProps = async ({ res }) => {
  const BASE_URL = frontendUrl;
  // Static paths manually defined
  const staticPaths = [
    "about-us",
    "anti-slavery-and-human-trafficking-statement",
    "become-a-partner",
    "blog",
    // "case-studies",
    "contact-us",
    "cookie-policy",
    // "ebooks",
    "email-signature-management",
    "features",
    "google-contact-sharing",
    "google-drive-compliance",
    "google-drive-management",
    "google-workspace-backup",
    // "guides",
    "legal",
    "on-boarding",
    "organisational-chart",
    "partner-with-us",
    "patronum-for-business",
    "patronum-for-education",
    "patronum-for-hr",
    "patronum-for-it-admins",
    "patronum-for-sales-marketing",
    "patronum-for-users",
    "pricing",
    "privacy-policy",
    'pricing-for-education',
    'pricing-for-business',
    'better-cloud-alternative',
    'cloudm-manage-alternative',
    'promevo-gpanel-alternative',
    // "product-videos",
    "refer-a-customer",
    "register-an-opportunity",
    "support",
    "use-cases",
    "webinars",
    "security-and-compliance",
    "environmental-policy",
  ].map((page) => `${BASE_URL}/${page}`);

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

  const allPaths = [...staticPaths, ...redirectPaths];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <url>
        <loc>${BASE_URL}/</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>1.0</priority>
      </url>
      ${allPaths
        .map((url) => {
          return `
            <url>
              <loc>${url}</loc>
              <lastmod>${new Date().toISOString()}</lastmod>
              <changefreq>monthly</changefreq>
              <priority>0.8</priority>
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
