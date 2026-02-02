import Hero from '@/components/ContactTrial/Hero';
import Pricing from '@/components/ContactTrial/PricePage/Pricing';
import ProductFeatures from '@/components/ContactTrial/PricePage/ProductFeature';
import { PricingHero } from '@/components/Illustrations/PricingHero';
import Layout from '@/components/Layout';
import MetaData from '@/components/PageLayout/MetaData';
import dynamic from "next/dynamic";
const Faqs = dynamic(() => import("@/components/ContactTrial/FaqSection"), { ssr: true });

export default function PricePage() {

    return (
        <>
        <MetaData
                title={"Pricing for Patronum: A Google Workspace Manager"}
                description={"Patronum provides a better way to manage Google Workspace (G Suite). It fully automates all administrator and user tasks to ensure an efficient, effective, and secure process. For pricing information, please visit our website."}
                url={"pricing"}
                img={"pricing.jpg"}
                date_published={"2023-04-24T12:00"}
                date_modified={"2024-04-04T12:00"}
                keywords={"Google Workspace"}
            />
            <Layout>
                <main>
                    <Hero
                        pageTitle1="No Setup Fee,"
                pageTitle2="No Surprises, No Worries"
                pagePara="Honest, Transparent and Fair Pricing."
                imgSrc="pricing.svg"
                boldpara="Enjoy full access to all features for 30 days - absolutely FREE!"
                svgElement= {<PricingHero className={"h-full w-full"}/>}
                         />
                     <Pricing />
            <ProductFeatures />
            <Faqs featureName="pricing" />
                </main>
            </Layout>
        </>
    )
}