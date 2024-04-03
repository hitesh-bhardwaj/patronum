import Faqs from '@/components/PageComponents/FeaturesPage/Faq';
import Pricing from '@/components/PageComponents/PricePage/Pricing';
import ProductFeatures from '@/components/PageComponents/PricePage/ProductFeature';
import PageLayout from '@/components/PageLayout';

export default function PricePage() {

    return(
        <>
            <PageLayout
                pageTitle1="No Setup Fee,"
                pageTitle2="No Upsells, No Worries"
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

                <Faqs featureName="pricing"/>

            </PageLayout>
        </>
    )
}