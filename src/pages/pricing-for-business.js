import BusinessPricing from '@/components/PricingPagesComp/BusinessPricing';

import ProductFeatures from '@/components/PageComponents/PricePage/ProductFeature';
import PageLayout from '@/components/PageLayout';
import dynamic from "next/dynamic";
const Faqs = dynamic(() => import("@/components/PageComponents/FeaturesPage/Faq"), { ssr: true });

export default function BusinessPricingPage() {

    return (
        <>
            <PageLayout
                pageTitle1="Google Workspace"
                pageTitle2="Management for Business"
                pagePara="Scalable Business-Ready Plans"
                boldpara=""
                imgSrc="business-price-hero.svg"
                title={"Pricing for Business: A Google Workspace Manager"}
                description={"Patronum provides a better way to manage Google Workspace (G Suite). It fully automates all administrator and user tasks to ensure an efficient, effective, and secure process. For pricing information, please visit our website."}
                url={"pricing-for-business"}
                img={"pricing.jpg"}
                date_published={"2023-04-24T12:00"}
                date_modified={"2024-04-04T12:00"}
                keywords={"Google Workspace"}
            >
                <BusinessPricing/>
                <ProductFeatures />
                <Faqs featureName="pricing" />
            </PageLayout>
        </>
    )
}