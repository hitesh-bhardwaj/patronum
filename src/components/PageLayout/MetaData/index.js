import { NextSeo } from "next-seo";
import Head from "next/head";

export default function MetaData({ title, description, url, img, date_published, date_modified, keywords }) {
    return (
        <>
            <NextSeo
                title={title}
                description={description}
                openGraph={{
                    url: `https://www.patronum.io/${url}`,
                    title: `${title}`,
                    "description": `${description}`,
                    images: [
                        {
                            url: `https://www.patronum.io/assets/seo/${img}`,
                            width: 1200,
                            height: 630,
                            alt: "Patronum",
                            type: "image/jpg",
                        },
                    ],
                    siteName: "Patronum",
                }}

                additionalMetaTags={[
                    {
                        name: "twitter:title",
                        content: `${title}`
                    },
                    {
                        name: "twitter:description",
                        content: `${description}`
                    },
                    {
                        name: "twitter:image",
                        content: `https://www.patronum.io/assets/seo/${img}`
                    },
                ]}
                canonical={`https://www.patronum.io/${url}`}
                languageAlternates={[{
                    hrefLang: 'en-US',
                    href: `https://www.patronum.io/${url}`
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
                                "@id": `https://www.patronum.io/${url}#webpage`,
                                "url": `https://www.patronum.io/${url}`,
                                "name": `${title}`,
                                "description": `${description}`,
                                "datePublished": `${date_published}:00+00:00`,
                                "dateModified": `${date_modified}:00+00:00`,
                                "publisher": {
                                    "@type": "Organization",
                                    "name": "Patronum",
                                    "logo": {
                                        "@type": "ImageObject",
                                        "url": "https://www.patronum.io/logo.svg",
                                    }
                                },
                                "about": {
                                    "@id": `https://www.patronum.io/${url}#organization`
                                },
                                "isPartOf": {
                                    "@id": `https://www.patronum.io/${url}#website`
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
                                "headline": `${title}`,
                                "keywords": `${keywords}`,
                                "@id": `https://www.patronum.io/${url}#richSnippet`,
                                "datePublished": `${date_published}:00+00:00`,
                                "dateModified": `${date_modified}:00+00:00`,
                                "url": `https://www.patronum.io/${url}`,
                                "name": `${title}`,
                                "description": `${description}`,
                                "author": {
                                    "name": "Patronum",
                                    "@id": "https://www.patronum.io/admin/",
                                },
                                "publisher": {
                                    "@id": "https://www.patronum.io/#organization"
                                },
                                "mainEntityOfPage": {
                                    "@id": `https://www.patronum.io/${url}#webpage`
                                },
                                "image": {
                                    "@id": `https://www.patronum.io/assets/seo/${img}`,
                                },
                                "isPartOf": {
                                    "@id": `https://www.patronum.io/${url}#website`
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