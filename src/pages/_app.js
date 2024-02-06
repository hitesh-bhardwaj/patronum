import '@/styles/globals.css'
import { DefaultSeo } from "next-seo";
import { useEffect } from 'react';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/scrollbar';

import '@/styles/gradient.css';

export default function App({ Component, pageProps }) {

  // Scroll to top on reload
  useEffect(() => {
    // Scroll to top after a delay of 100ms on reload
    const scrollToTop = () => {
      setTimeout(() => {
        window.scrollTo({ top: 0 });
      }, 1);
    };
    scrollToTop();
    // Clean up any resources if necessary
    return () => {
      // Clean-up code here, if needed
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
        }
        ]}
      />
      <Component {...pageProps} />
    </>
  ); 
}
