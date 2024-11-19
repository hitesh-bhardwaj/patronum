import { NextSeo } from "next-seo";
import Head from "next/head";

export default function MetaData() {
    return (
        <>
            <NextSeo
                canonical="https://www.patronum.io"
                languageAlternates={[{
                    hrefLang: 'en-US',
                    href: 'https://www.patronum.io'
                }]}
            />
            <Head>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(
                            {
                                "@context": "https://schema.org",
                                "@type": "WebPage",
                                "@id": "https://www.patronum.io/#webpage",
                                "url": "https://www.patronum.io",
                                "name": "Patronum - Best Platform for Google Workspace (GSuite) Management",
                                "description": "Patronum provides a better way to Google Workspace (GSuite) Management. Patronum fully automates all the administrator and user tasks to ensure an efficient, effective and secure process.",
                                "datePublished": "2020-12-21T12:01:00+00:00",
                                "dateModified": "2024-04-04T12:00:00+00:00",
                                "publisher": {
                                    "@type": "Organization",
                                    "name": "Patronum",
                                    "logo": {
                                        "@type": "ImageObject",
                                        "url": "https://www.patronum.io/logo.svg",
                                    }
                                },
                                "about": {
                                    "@id": "https://www.patronum.io/#organization"
                                },
                                "isPartOf": {
                                    "@id": "https://www.patronum.io/#website"
                                },
                                "inLanguage": "en_US",
                            }
                        ),
                    }}
                />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(
                            {
                                "@context": "https://schema.org",
                                "@type": "Article",
                                "headline": "Patronum - Best Platform for Google Workspace (GSuite) Management",
                                "keywords": "Patronum,Google Workspace,GSuite Management",
                                "@id": "https://www.patronum.io/#richSnippet",
                                "datePublished": "2020-12-21T12:01:00+00:00",
                                "dateModified": "2024-04-04T12:00:00+00:00",
                                "url": "https://www.patronum.io",
                                "name": "Patronum - Best Platform for Google Workspace (GSuite) Management",
                                "description": "Patronum provides a better way to Google Workspace (GSuite) Management. Patronum fully automates all the administrator and user tasks to ensure an efficient, effective and secure process.",
                                "author": {
                                    "name": "Patronum",
                                    "@id": "https://www.patronum.io/admin/",
                                },
                                "publisher": {
                                    "@id": "https://www.patronum.io/#organization"
                                },
                                "mainEntityOfPage": {
                                    "@id": "https://www.patronum.io/#webpage"
                                },
                                "image": {
                                    "@id": "https://www.patronum.io/assets/seo/homepage.jpg",
                                },
                                "isPartOf": {
                                    "@id": "https://www.patronum.io/#website"
                                },
                                "inLanguage": "en_US",
                            }
                        ),
                    }}
                />
            </Head>
        </>
    )
}