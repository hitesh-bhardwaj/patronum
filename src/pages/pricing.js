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
                pagePara="The only tool you'll ever need to streamline your Google Workspace management."
                imgSrc="pricing.svg"
            >

                <Pricing />

                <ProductFeatures />

                <Faqs featureName="on_boarding"/>

            </PageLayout>
        </>
    )
}