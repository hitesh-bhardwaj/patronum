import Pricing from '@/components/PageComponents/PricePage/Pricing';
import ProductFeatures from '@/components/PageComponents/PricePage/ProductFeature';
import PageLayout from '@/components/PageLayout';
import dynamic from "next/dynamic";
const Faqs = dynamic(() => import("@/components/PageComponents/FeaturesPage/Faq"), { ssr: true });

export default function PricePage() {

    return (
        <>
            <PageLayout
                pageTitle1="No Setup Fee,"
                pageTitle2="No Surprises, No Worries"
                pagePara="Honest, Transparent and Fair Pricing."
                imgSrc="pricing.svg"
                boldpara="Enjoy full access to all features for 30 days - absolutely FREE!"
                title={"Pricing for Patronum: A Google Workspace Manager"}
                description={"Patronum provides a better way to manage Google Workspace (G Suite). It fully automates all administrator and user tasks to ensure an efficient, effective, and secure process. For pricing information, please visit our website."}
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