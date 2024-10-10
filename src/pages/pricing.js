import Faqs from '@/components/PageComponents/FeaturesPage/Faq';
import Pricing from '@/components/PageComponents/PricePage/Pricing';
import ProductFeatures from '@/components/PageComponents/PricePage/ProductFeature';
import PageLayout from '@/components/PageLayout';
import Head from 'next/head';

export default function PricePage() {

    return (
        <>
            <Head>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(
                            {
                                "@context": "https://schema.org",
                                "@type": "FAQPage",
                                "mainEntity": [
                                    {
                                        "@type": "Question",
                                        "name": "How much does Patronum cost and what’s included?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "Patronum is based on the number of Google Workspace licenses you have within your Google domain. When you purchase Patronum you are given access to all the various features. Patronum pricing is fair and completely transparent."
                                        }
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "What is a user?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "A user is defined as one personalized email address (you@yourcompany). Group email aliases such as sales@yourcompany and support@yourcompany are included in the pricing and don’t count as additional users."
                                        }
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "What if I increase users mid-contract?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "We offer two types of billing options, annual and monthly. With both, you only need to pay for the users you have at the beginning of your subscription. When you renew, your renewal will be based on your current user count."
                                        }
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "Will I pay more for some features?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "No. All prices indicated are flat. We believe in treating our customers right, and you pay a per-user yearly fee for the number of active accounts within your Google Workspace environment."
                                        }
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "Is VAT included in plan prices?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "As most of our customers are businesses, they do not owe VAT, and thus we charge the advertised flat price. EU businesses should enter their VAT number to remove VAT from the price."
                                        }
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "I’m a Non-Profit / Education organization. Do you offer discounts?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "Yes, we offer huge discounts for non-profit and education organizations."
                                        }
                                    }
                                ]
                            }
                        )
                    }}
                />
            </Head>
            <PageLayout
                pageTitle1="No Setup Fee,"
                pageTitle2="No Surprises, No Worries"
                pagePara="Honest, Transparent and Fair Pricing."
                imgSrc="pricing.svg"
                title={"Pricing - Patronum"}
                description={"Patronum provides a better way to Google Workspace (GSuite) Management. Patronum fully automates all the administrator and user tasks to ensure an efficient, effective and secure process."}
                url={"pricing"}
                img={"pricing.jpg"}
                date_published={"2023-04-24T12:00"}
                date_modified={"2024-04-04T12:00"}
                keywords={"Google Workspace"}
            >

                <Pricing />

                <ProductFeatures />

                <Faqs featureName="pricing" />

            </PageLayout>
        </>
    )
}