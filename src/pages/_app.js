import '@/styles/globals.css'
import { DefaultSeo } from 'next-seo';
import dynamic from 'next/dynamic';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from "@vercel/analytics/react"
import { ReactLenis } from '@studio-freight/react-lenis';
import { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Head from 'next/head';
import Script from 'next/script';
import { ModalProvider } from '@/components/InstallModal/ModelContext';
import PreLoader from '@/components/PreLoader';
import InstallModal from '@/components/InstallModal';
import DemoModal from '@/components/InstallModal/DemoModal';

// Import the Background component dynamically
const Background = dynamic(() => import('@/components/Pixi'), {
  ssr: false, 
});

export default function App({ Component, pageProps, router }) {
  const [showPreloader, setShowPreloader] = useState(true);
  const [loadBackground, setLoadBackground] = useState(false);

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
    // Set a timer to change loadBackground state after a specific time
    const timer = setTimeout(() => {
      setLoadBackground(true);
    }, 3000); // Delay in milliseconds before importing/rendering the component

    return () => clearTimeout(timer); // Cleanup the timer
  }, []);

    useEffect(() => {
    const handleRouteChange = () => {
        window.scrollTo(0, 0)
    };

    window.addEventListener("beforeunload", handleRouteChange);

    return () => {
      window.removeEventListener("beforeunload", handleRouteChange);
    };
  }, []);

  return(
    <>
      <DefaultSeo
        title='Patronum - Best Platform for Google Workspace (GSuite) Management'
        description='Patronum provides a better way to Google Workspace (GSuite) Management. Patronum fully automates all the administrator and user tasks to ensure an efficient, effective and secure process.'
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
              "publisher":[
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
              "@id": "https://patronum.io/assets/seo/Google-Workspace.png",
              "url": "https://patronum.io/assets/seo/Google-Workspace.png",
              "width": "1295",
              "height": "594",
              "inLanguage": "en-US"
            },
          ),
        }}
      />
    </Head>

      {showPreloader && <PreLoader />} 
      <ReactLenis root options={{ duration: 0.8 }}>
        <ModalProvider>
          <AnimatePresence mode="wait">
            <Component {...pageProps} key={router.route}/>
          </AnimatePresence>
          <InstallModal />
          <DemoModal />
        </ModalProvider>
      </ReactLenis>

      {/* Vercel Analytics */}
      <SpeedInsights />
      <Analytics />

      {/* Google Tag Manager */}
      <Script
        async
        strategy="worker"
        src="https://www.googletagmanager.com/gtag/js?id=G-QTG00X44EP"
      />

      {/* Google Analytics */}
      <Script
        strategy="worker"
        id="google-analytics"
        >
          {` window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-QTG00X44EP', {
              page_path: window.location.pathname,
            });
          `}
      </Script>

      {/* WEBGL Background */}
      {loadBackground && <Background />}
    </>
  ); 
}
