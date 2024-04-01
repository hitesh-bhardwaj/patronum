import '@/styles/globals.css'
import { DefaultSeo } from 'next-seo';
import dynamic from 'next/dynamic';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from "@vercel/analytics/react"
import { ReactLenis } from '@studio-freight/react-lenis';
import { ModalProvider } from '@/components/InstallModal/ModelContext';
import { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
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
      
      // const preloaderTimeout = setTimeout(() => {
      //   setShowPreloader(false); 
      //   sessionStorage.setItem('hasVisited', 'true');
      // }, 4000);

      // return () => clearTimeout(preloaderTimeout);
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

      {showPreloader && <PreLoader />} 
      <ReactLenis root options={{ duration: 0.8 }}>
        <ModalProvider>
          {/* <AnimatePresence mode="wait"> */}
            <Component {...pageProps} key={router.route}/>
          {/* </AnimatePresence> */}
          <InstallModal />
          <DemoModal />
        </ModalProvider>
      </ReactLenis>
      <SpeedInsights />
      <Analytics />
      {loadBackground && <Background />}
    </>
  ); 
}
