import Hero from '@/components/ContactTrial/Hero';
import Pricing from '@/components/ContactTrial/PricePage/Pricing';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

import ProductFeatures from '@/components/PageComponents/PricePage/ProductFeature';
import dynamic from "next/dynamic";
const Faqs = dynamic(() => import("@/components/PageComponents/FeaturesPage/Faq"), { ssr: true });

export default function PricePage() {

    return (
        <>
        <Header/>
        <Hero  pageTitle1="No Setup Fee,"
                pageTitle2="No Surprises, No Worries"
                pagePara="Honest, Transparent and Fair Pricing."
                imgSrc="pricing.svg"
                boldpara="Enjoy full access to all features for 30 days - absolutely FREE!"/>
            <Pricing />
            <ProductFeatures />
            <Faqs featureName="pricing" />
            <Footer/>
        </>
    )
}