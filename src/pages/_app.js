import '@/styles/globals.css'
import { DefaultSeo } from "next-seo";

export default function App({ Component, pageProps }) {
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
