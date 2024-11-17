import '@/styles/globals.css'
import { DefaultSeo } from 'next-seo';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from "@vercel/analytics/react"
import { ReactLenis } from 'lenis/react';
import { useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Head from 'next/head';
import { GoogleTagManager } from '@next/third-parties/google'
import dynamic from 'next/dynamic';
import nextSeoConfig from '../../next-seo.config';

const Crispchat = dynamic(() => import("@/components/Crispchat"), { ssr: false });
const Cookie = dynamic(() => import("@/components/Cookie"), { ssr: false });

export default function App({ Component, pageProps, router }) {

  // useEffect(() => {
  //   const handleRouteChange = () => {
  //     window.scrollTo(0, 0);
  //     document.body.style.pointerEvents = 'none';
  //     const enablePointerEvents = () => {
  //       document.body.style.pointerEvents = 'auto';
  //       document.removeEventListener('mousemove', enablePointerEvents);
  //     };
  //     document.addEventListener('mousemove', enablePointerEvents);
  //   };
  //   router.events.on('routeChangeStart', handleRouteChange);
  //   return () => {
  //     router.events.off('routeChangeStart', handleRouteChange);
  //     document.removeEventListener('mousemove', handleRouteChange);
  //   };
  // }, [router]);

  useEffect(() => {
    const handleRouteChange = () => {
      window.scrollTo(0, 0);
    };
    
    router.events.on('routeChangeStart', handleRouteChange);
    
    return () => {
      router.events.off('routeChangeStart', handleRouteChange);
    };
  }, [router]);

  return (
    <>
      <DefaultSeo {...nextSeoConfig}
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
      />
      
      <Head>
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
                "logo": "https://www.patronum.io/Patronum-logo.jpg",
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

      <Cookie />
      <Crispchat />
      <ReactLenis root options={{ lerp: 0.08 }}>
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
    </>
  );
}
