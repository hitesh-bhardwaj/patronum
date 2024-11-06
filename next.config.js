const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  productionBrowserSourceMaps: true,
  experimental: {
    nextScriptWorkers: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'wordpress-213572-4463644.cloudwaysapps.com',
      },
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
    ]
  },
}

module.exports = withBundleAnalyzer(nextConfig)