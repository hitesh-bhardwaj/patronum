import '@/styles/globals.css'
import { DefaultSeo } from "next-seo";
import { useEffect } from 'react';
import dynamic from 'next/dynamic';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/scrollbar';

import { ReactLenis, useLenis } from '@studio-freight/react-lenis'
import Script from 'next/script';

// Import the Background component dynamically
const BackgroundWithNoSSR = dynamic(() => import('@/components/Background'), {
  ssr: false, // This will only import Background on the client-side
  loading: () => <p>Loading background...</p>, // Optional loading component
});

export default function App({ Component, pageProps }) {

  // const lenis = useLenis(({ scroll }) => {
  //   // called every scroll
  // })

  useEffect(() => {
    // Scroll to the top when the component mounts or when the route changes
    const handleRouteChange = () => {
        window.scrollTo(0, 0)
    };

    // Attach the event listener for route changes
    window.addEventListener("beforeunload", handleRouteChange);

    // Remove the event listener when the component is unmounted
    return () => {
      window.removeEventListener("beforeunload", handleRouteChange);
    };
  }, []); // Empty dependency array ensures the effect runs only once on mount

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
        }
        ]}
      />
      <ReactLenis root options={{ duration: 3, lerp: 0.5 }}>
        <Component {...pageProps} />
      </ReactLenis>
      <BackgroundWithNoSSR />
    </>
  ); 
}
