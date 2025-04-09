import ProductFeatures from '@/components/PageComponents/PricePage/ProductFeature';
import PageLayout from '@/components/PageLayout';
import dynamic from "next/dynamic";
import EducationPricing from '@/components/PricingPagesComp/EducationPricing';
const Faqs = dynamic(() => import("@/components/PageComponents/FeaturesPage/Faq"), { ssr: false });

export default function EducationPricingPage() {

    return (
        <>
            <PageLayout
                 pageTitle1="Google Workspace "
                pageTitle2="Management for Education"
                pagePara="Honest, Transparent and Fair Pricing."
                imgSrc="education-price-hero.svg"
                title={"Pricing for Patronum: A Google Workspace Manager"}
                description={"Patronum provides a better way to manage Google Workspace (G Suite). It fully automates all administrator and user tasks to ensure an efficient, effective, and secure process. For pricing information, please visit our website."}
                url={"pricing"}
                img={"pricing.jpg"}
                date_published={"2023-04-24T12:00"}
                date_modified={"2024-04-04T12:00"}
                keywords={"Google Workspace"}
            >
                <EducationPricing/>
                <ProductFeatures />
                <Faqs featureName="pricing" />
            </PageLayout>
        </>
    )
}