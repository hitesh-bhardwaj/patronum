import '@/styles/globals.css'
import { DefaultSeo } from 'next-seo';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from "@vercel/analytics/react"
import { ReactLenis } from '@studio-freight/react-lenis';
import { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Head from 'next/head';
import PreLoader from '@/components/PreLoader';
import Pixi from '@/components/Pixi';
import Cookie from '@/components/Cookie';
import useWindowSize from "@/components/Header/useWindowSize";
import { Suspense } from 'react';
// import { GoogleTagManager } from '@next/third-parties/google'

export default function App({ Component, pageProps, router }) {
  const [showPreloader, setShowPreloader] = useState(true);
  const { width } = useWindowSize();

  useEffect(() => {
    const hasVisited = sessionStorage.getItem('hasVisited');

    if (!hasVisited) {
      setShowPreloader(true);

      const preloaderTimeout = setTimeout(() => {
        setShowPreloader(false);
        sessionStorage.setItem('hasVisited', 'true');
      }, 4000);

      return () => clearTimeout(preloaderTimeout);
    }
    else {
      setShowPreloader(false);
    }
  }, []);

  useEffect(() => {
    const handleRouteChange = () => {
      // Disable pointer events on route change
      document.body.style.pointerEvents = 'none';

      // Enable pointer events when mouse moves
      const enablePointerEvents = () => {
        document.body.style.pointerEvents = 'auto';
        document.removeEventListener('mousemove', enablePointerEvents);
      };
      document.addEventListener('mousemove', enablePointerEvents);
    };

    router.events.on('routeChangeStart', handleRouteChange);

    return () => {
      router.events.off('routeChangeStart', handleRouteChange);
    };
  }, [router]);

  useEffect(() => {
    const handleRouteChange = () => {
      window.scrollTo(0, 0)
    };

    window.addEventListener("beforeunload", handleRouteChange);

    return () => {
      window.removeEventListener("beforeunload", handleRouteChange);
    };
  }, []);

  return (
    <>
      <DefaultSeo
        title='Patronum - Best Platform for Google Workspace (GSuite) Management'
        description='Patronum provides a better way to manage Google Workspace (GSuite). Patronum is your Google Workspace (GSuite) manager that fully automates all administrator and user tasks to ensure an efficient, effective, and secure process.'
        additionalMetaTags={[
          {
            name: 'viewport',
            content: 'width=device-width, initial-scale=1.0, maximum-scale=5.0'
          },
        ]}
        additionalLinkTags={[
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
          }
        ]}
        openGraph={{
          type: 'website',
          locale: 'en_US',
          title: "Patronum - Best Platform for Google Workspace (GSuite) Management",
          "description": "Patronum provides a better way to Google Workspace (GSuite) Management. Patronum fully automates all the administrator and user tasks to ensure an efficient, effective and secure process.",
          images: [
            {
              url: "https://www.patronum.io/assets/seo/homepage.png",
              width: 1200,
              height: 630,
              alt: "Patronum",
              type: "image/png",
            },
          ],
          siteName: "Patronum",
        }}
        twitter={{
          site: 'Patronum',
          cardType: 'summary_large_image',
        }}
      />
      <Head>
        <meta charSet="utf-8" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              {
                "@context": "https://schema.org",
                "@type": "Organization",
                "@id": "https://www.patronum.io/#organization",
                "name": "Patronum",
                "url": "https://www.patronum.io",
                "logo": "https://www.patronum.io/logo.svg",
                "sameAs": [
                  "https://www.instagram.com/patronum.io/",
                  "https://www.linkedin.com/company/wearepatronum/",
                  "https://www.facebook.com/patronum.io",
                  "https://twitter.com/Patronum_io",
                  "https://www.youtube.com/@wearepatronum"
                ]
              },
            ),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              {
                "@context": "https://schema.org",
                "@type": "WebSite",
                "@id": "https://www.patronum.io/#website",
                "name": "Patronum",
                "url": "https://www.patronum.io",
                "publisher": [
                  {
                    "@id": "https://www.patronum.io/#organization"
                  }
                ],
                "inLanguage": "en-US",
              },
            ),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              {
                "@context": "https://schema.org",
                "@type": "ImageObject",
                "@id": "https://www.patronum.io/assets/seo/homepage.jpg",
                "url": "https://www.patronum.io/assets/seo/homepage.jpg",
                "width": "1295",
                "height": "594",
                "inLanguage": "en-US"
              },
            ),
          }}
        />
      </Head>

      {showPreloader && <PreLoader />}
      <Cookie />
      <ReactLenis root options={{ duration: 0.8 }}>
        <AnimatePresence mode="wait">
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </ReactLenis>

      {/* Google Tag Manager */}
      <GoogleTagManager gtmId="GTM-MDWM3Z7J" />

      {/* Vercel Analytics */}
      <SpeedInsights
        strategy="afterInteractive"
      />
      <Analytics
        strategy="afterInteractive"
      />
      {/* WEBGL Background */}
      {width >= 1024 ? (
        <Suspense fallback={null}>
          <Pixi />
        </Suspense>
      ) : (
        <></>
      )}
    </>
  );
}
