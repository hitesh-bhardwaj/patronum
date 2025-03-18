const feed = require('./plugins/feed');
const indexSearch = require('./plugins/search-index');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  productionBrowserSourceMaps: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: [{ loader: "@svgr/webpack", options: { icon: true } }],
    });
    return config;
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'wordpress-213572-4463644.cloudwaysapps.com',
      },
      {
        protocol: 'https',
        hostname: 'i0.wp.com',
      }
    ],
  },
  async redirects() {
    return [
      {
        source: '/use-utm-code-within-your-email-signature-to-track-the-success-of-your-email-marketing',
        destination: '/use-utm-code-within-your-email-signature',
        permanent: true,
      },
      {
        source: '/standard-contractual-clauses',
        destination: 'https://docs.google.com/document/d/1C3PqmGvh1jItmMvN2FrL13V8V-rOestnw0QkWkNFIvc/edit?usp=drive_link',
        permanent: true,
      },
      {
        source: '/anti-slavery-and-human-trafficking-statement',
        destination: 'https://docs.google.com/document/d/1mb7Rh5glrBbqTv_zYSQs9eniASpQp9OLq4vAojohGY4/edit?usp=drive_link',
        permanent: true,
      },
      {
        source: '/partner-agreement',
        destination: 'https://docs.google.com/document/d/1UfaCFOtQfOLWkHHmR0p0iAHWqG7xEuh4ESWj5cCvy2c/edit?usp=drive_link',
        permanent: true,
      },
      {
        source: '/terms-and-conditions',
        destination: 'https://docs.google.com/document/d/19ie2gkbs2fv2kQ6gwyPwaEYpU2mg4t0eyvSKNgDF-bE/edit?usp=drive_link',
        permanent: true,
      },
      {
        source: '/terms-and-conditions-for-direct-customers',
        destination: 'https://docs.google.com/document/d/19ie2gkbs2fv2kQ6gwyPwaEYpU2mg4t0eyvSKNgDF-bE/edit?usp=drive_link',
        permanent: true,
      },
      {
        source: '/master-subscription-agreement',
        destination: 'https://docs.google.com/document/d/1w_SjHlAx6H31A0AYARI_lVhHxDh-CZKWertRKANQT-U/edit?usp=drive_link',
        permanent: true,
      },
      {
        source: '/data-processing-agreement',
        destination: 'https://docs.google.com/document/d/1v197Nm8LzqHIRTx4pQEVAGlENpr0t8yFIyVAg48mNH4/edit?usp=drive_link',
        permanent: true,
      },
      {
        source: '/bespinlabs-legal-agreements-faqs',
        destination: 'https://docs.google.com/document/d/1Kg49JPhpKArM2MPeSt-IXe2HnJTABzZCn-uy0nI7zqI/edit?usp=drive_link',
        permanent: true,
      },
      {
        source: '/blog/page/1',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/sitemap.xml',
        destination: '/sitemap_index.xml',
        permanent: true,
      },
      {
        source: '/google-drive-management/',
        destination: '/google-drive-management',
        permanent: true,
      },
      {
        source: '/support/',
        destination: '/support',
        permanent: true,
      },
      {
        source: '/organisational-chart/',
        destination: '/organisational-chart',
        permanent: true,
      },
      {
        source: '/patronum-google-drive-beta/',
        destination: '/patronum-google-drive-beta',
        permanent: true,
      },
      {
        source: '/email-signature-management/',
        destination: '/email-signature-management',
        permanent: true,
      },
      {
        source: '/on-boarding/',
        destination: '/on-boarding',
        permanent: true,
      },
      {
        source: '/patronum-awarded-best-ease-of-use-and-best-value-by-capterra/',
        destination: '/patronum-awarded-best-ease-of-use-and-best-value-by-capterra',
        permanent: true,
      },
      {
        source: '/category',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/blog/page',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/the-4-quadrant-approach-for-google-drive-file-management-ensure-compliance-protect-sensitive-data-amp-supercharge-efficiency',
        destination: '/four-quadrant-approach-for-google-drive-file-management',
        permanent: true,
      },
      {
        source: '/term-conditions',
        destination: 'https://docs.google.com/document/d/19ie2gkbs2fv2kQ6gwyPwaEYpU2mg4t0eyvSKNgDF-bE/edit?usp=drive_link',
        permanent: true,
      },
      {
        source: '/google-group-data-exposure-due-to-misconfiguration-at-weather-company-and-spotx',
        destination: '/google-group-data-exposure-due-to-misconfiguration',
        permanent: true,
      },
      {
        source: '/15-tips-to-boost-your-brand-with-email-signature-branding',
        destination: '/15-tips-to-boost-your-brand-with-email-signature',
        permanent: true,
      },
      {
        source: '/have-you-added-she-her-hers-to-your-email-signature',
        destination: '/have-you-added-she-her-hers-to-your-email-signatures',
        permanent: true,
      },
      {
        source: '/:slug/feed',
        destination: '/feed.xml',
        permanent: true,
      },
      {
        source: '/faqs/:slug*',
        destination: '/',
        permanent: true,
      },
      {
        source: '/faqpage/:slug*',
        destination: '/',
        permanent: true,
      },
      {
        source: '/author/:slug',
        destination: '/',
        permanent: true,
      },
      {
        source: '/testimonial/:slug',
        destination: '/',
        permanent: true,
      },
      {
        source: '/category/all/page/:slug',
        destination: '/blog/page/:slug',
        permanent: true,
      },
      {
        source: '/case-studies',
        destination: '/category/case-study',
        permanent: true,
      },
      {
        source: '/category/all/:slug',
        destination: '/category/:slug',
        permanent: true,
      },
      {
        source: '/webinar',
        destination: '/webinars',
        permanent: true,
      },
      {
        source: '/environment-policy',
        destination: '/environmental-policy',
        permanent: true,
      },
      {
        source: '/category/all/:slug/feed',
        destination: '/feed.xml',
        permanent: true,
      },
      {
        source: '/employment-date-within-',
        destination: '/employment-date-within-patronum-google-workspace-account',
        permanent: true,
      },
      {
        source: '/automate-user-archiving-',
        destination: '/automate-user-archiving-with-patronum',
        permanent: true,
      },
      {
        source: '/a-deep-dive-into-google-contacts-best-practices-for-organizing-and-sharing-contacts',
        destination: '/best-practices-google-contact-sharing-organising',
        permanent: true,
      },
      {
        source: '/gmail-gets-a-massive-redesign-to-become-your-work-hub',
        destination: '/gmail-gets-a-massive-redesign',
        permanent: true,
      },
      {
        source: '/how-patronum-helps-save-',
        destination: '/how-patronum-helps-save-costs-on-saas-management-spend',
        permanent: true,
      },
      {
        source: '/remote-working-guide',
        destination: '/the-full-switch-to-remote-work-5-best-practices-for-an-effective-and-safe-remote-workplace',
        permanent: true,
      },
      {
        source: '/web-stories',
        destination: '/',
        permanent: true,
      },
      {
        source: '/gmail-email-signature',
        destination: '/email-signature-management',
        permanent: true,
      },
      {
        source: '/contact-sharing',
        destination: '/google-contact-sharing',
        permanent: true,
      },
      {
        source: '/bespin-labs-supports-pennine-distribution-and-training-with-patronum-the-google-workspace-manager-2',
        destination: '/bespin-labs-supports-pennine-distribution-and-training-with-patronum-the-google-workspace-manager',
        permanent: true,
      },
      {
        source: '/guide-to-email-signatures',
        destination: '/a-quick-guide-to-email-signatures-and-best-practices-for-2022',
        permanent: true,
      },
      {
        source: '/faq',
        destination: '/',
        permanent: true,
      },
      {
        source: '/how-important-are-backups-in-the-cloud',
        destination: '/how-important-are-backups-in-google-workspace',
        permanent: true,
      },
      {
        source: '/patronum-partners',
        destination: '/partner-with-us',
        permanent: true,
      },
      {
        source: '/patronum-backup',
        destination: '/google-workspace-backup',
        permanent: true,
      },
      {
        source: '/the-ultimate-guide-to-using-google-workspace-',
        destination: '/the-ultimate-guide-to-using-google-workspace-marketplace',
        permanent: true,
      },
      {
        source: '/category/all/email-signature/:slug*',
        destination: '/category/email-signature',
        permanent: true,
      },
      {
        source: '/patronum-partners-with-email-signature',
        destination: '/patronum-partners-with-email-signature-experts',
        permanent: true,
      },
      {
        source: '/amazing-things-you-didnt-',
        destination: '/amazing-things-you-didnt-know-about-patronum',
        permanent: true,
      },
      {
        source: '/dynamic-creation-of-',
        destination: '/dynamic-creation-of-dynamic-google-groups',
        permanent: true,
      },
      {
        source: '/set-up-a-google-contacts-',
        destination: '/set-up-a-google-contacts-policy',
        permanent: true,
      },
      {
        source: '/avenue-live-gain-control-and-consistency-over-emails-branding-with-patronum/',
        destination: '/avenue-live-gain-control-and-consistency',
        permanent: true,
      },
      {
        source: '/unravelling-the-mysteries-of-google-workspace-google-admin-console-gam-the-ultimate-productivity-trio-🚀',
        destination: '/unravelling-the-mysteries-of-google-workspace-google-admin-console-gam-the-ultimate-productivity-trio',
        permanent: true,
      },
      {
        source: '/how-to-use-multiple-email-signatures-in-gmail-2',
        destination: '/how-to-use-multiple-email-signatures-in-gmail',
        permanent: true,
      },
    ]
  },
  env: {
    POSTS_PRERENDER_COUNT: "10",
    WORDPRESS_GRAPHQL_ENDPOINT: process.env.WORDPRESS_GRAPHQL_ENDPOINT,
  },
  env: {
    WORDPRESS_GRAPHQL_ENDPOINT: process.env.WORDPRESS_GRAPHQL_ENDPOINT,
  },
}

// export default nextConfig;
module.exports = () => {
  const plugins = [indexSearch, feed, withBundleAnalyzer];
  return plugins.reduce((acc, plugin) => plugin(acc), nextConfig);
};

/**
 * parseEnv
 * @description Helper function to check if a variable is defined and parse booelans
 */

function parseEnvValue(value, defaultValue) {
  if (typeof value === 'undefined') return defaultValue;
  if (value === true || value === 'true') return true;
  if (value === false || value === 'false') return false;
  return value;
}