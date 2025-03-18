export default {
    title: 'Patronum - Best Platform for Google Workspace (GSuite) Management',
    description: 'Patronum provides a better way to manage Google Workspace (GSuite). Patronum is your Google Workspace (GSuite) manager that fully automates all administrator and user tasks to ensure an efficient, effective, and secure process.',
    additionalLinkTags: [
        {
          rel: 'icon',
          href: '/favicon.png',
        },
        {
            rel: 'preload',
            href: '/assets/fonts/Aeonik/Aeonik-Regular.woff2',
            as: 'font',
            type: 'font/woff2',
            crossOrigin: 'anonymous'
          },
        {
          rel: 'alternate',
          type: 'application/rss+xml',
          title: 'Patronum Posts Feed',
          href: `https://www.patronum.io/feed.xml`
        },
      ],
    openGraph: {
        type: 'website',
        locale: 'en_US',
        images: [
            {
                url: "https://www.patronum.io/assets/seo/homepage.jpg",
                width: 1200,
                height: 630,
                alt: "Patronum",
                type: "image/png",
            },
        ],
        url: 'https://www.patronum.io',
        siteName: 'Patronum',
    },
    twitter: {
        site: 'Patronum',
        cardType: 'summary_large_image',
    },
};