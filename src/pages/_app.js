import '@/styles/fonts.css';
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
import { SearchProvider } from '@/hooks/use-search';
import { ModalProvider } from '@/components/Modals/ModalContext';

const Crispchat = dynamic(() => import("@/components/Crispchat"), { ssr: false });
const Cookie = dynamic(() => import("@/components/Cookie"), { ssr: false });

export default function App({ Component, pageProps, router }) {

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
      <DefaultSeo {...nextSeoConfig} />

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

        <script
          defer
          dangerouslySetInnerHTML={{
            __html: `!function () {
        var reb2b = window.reb2b = window.reb2b || [];
        if (reb2b.invoked) return;
        reb2b.invoked = true;
        reb2b.methods = ["identify", "collect"];
        reb2b.factory = function (method) {
          return function () {
            var args = Array.prototype.slice.call(arguments);
            args.unshift(method);
            reb2b.push(args);
            return reb2b;
          };
        };
        for (var i = 0; i < reb2b.methods.length; i++) {
          var key = reb2b.methods[i];
          reb2b[key] = reb2b.factory(key);
        }
        reb2b.load = function (key) {
          var script = document.createElement("script");
          script.type = "text/javascript";
          script.async = true;
          script.src = "https://s3-us-west-2.amazonaws.com/b2bjsstore/b/" + key + "/7N850HQ11KN1.js.gz";
          var first = document.getElementsByTagName("script")[0];
          first.parentNode.insertBefore(script, first);
        };
        reb2b.SNIPPET_VERSION = "1.0.1";
        reb2b.load("7N850HQ11KN1");
      }();`,
          }}
        />
      </Head>

      <Cookie />
      <Crispchat />
      <SearchProvider>
        <ModalProvider>

          <ReactLenis root options={{ lerp: 0.08 }}>
            <AnimatePresence mode="wait">
              <Component {...pageProps} key={router.route} />
            </AnimatePresence>
          </ReactLenis>
        </ModalProvider>

      </SearchProvider>

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
