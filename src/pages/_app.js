import '@/styles/globals.css'
import { DefaultSeo } from "next-seo";
import dynamic from 'next/dynamic';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from "@vercel/analytics/react"

import { ReactLenis } from '@studio-freight/react-lenis';
import { ModalProvider } from '@/components/InstallModal/ModelContext';
import InstallModal from '@/components/InstallModal';
import DemoModal from '@/components/InstallModal/DemoModal';
import { useEffect } from 'react';

// Import the Background component dynamically
const Background = dynamic(() => import('@/components/Pixi'), {
  ssr: false, 
});

export default function App({ Component, pageProps, router }) {

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
        title='Patronum - Best Platform for Google Workspace Management'
        description='Patronum provides a better way to Google Workspace Management. Patronum fully automates all the admin and user tasks to ensure an effective and secure process.'
        additionalMetaTags={[{
          name: 'viewport',
          content: 'width=device-width, initial-scale=1.0, maximum-scale=5.0'
        },
        ]}

        additionalLinkTags={[{
          rel: 'icon',
          href: '/favicon.png',
        },
        {
          rel: 'preload',
          href: '/assets/fonts/Aeonik/Aeonik-Regular.woff2',
          as: 'font',
          crossOrigin: 'anonymous'
        }
        ]}
      />
      
      <ReactLenis root options={{ duration: 0.8 }}>
        <ModalProvider>
          {/* <AnimatePresence mode="popLayout" onExitComplete={() => window.scrollTo(0, 0)}> */}
            <Component {...pageProps} key={router.route}/>
            <SpeedInsights />
            <Analytics />
          {/* </AnimatePresence> */}
          <InstallModal />
          <DemoModal />
        </ModalProvider>
      </ReactLenis>
      <Background />
    </>
  ); 
}
