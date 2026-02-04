import dynamic from "next/dynamic";
import MetaData from '@/components/PageLayout/MetaData';
import Layout from '@/components/Layout';
import Hero from '@/components/ContactTrial/Hero';
import ProductFeatures from '@/components/ContactTrial/PricePage/ProductFeature'
import { PricingEducationHero } from '@/components/Illustrations/PricingEducationHero';
import EducationPricing from "@/components/ContactTrial/EducationPricingV2";
const Faqs = dynamic(() => import("@/components/ContactTrial/FaqSection"), { ssr: true });

export default function EducationPricingPage() {
  return (
    <>
      <MetaData
        title={"Pricing for Education & Non-Profit: A Google Workspace Manager"}
        description={
          "Patronum provides a better way to manage Google Workspace (G Suite). It fully automates all administrator and user tasks to ensure an efficient, effective, and secure process. For pricing information, please visit our website."
        }
        url={"pricing-for-education"}
        img={"pricing.jpg"}
        date_published={"2023-04-24T12:00"}
        date_modified={"2024-04-04T12:00"}
        keywords={"Google Workspace"}
      />
      <Layout>
        <main>
          <Hero
            pageTitle1="Google Workspace"
            pageTitle2="Management for Education & Non-Profit"
            pagePara="Honest, Transparent and Fair Pricing."
            imgSrc="education-price-hero.svg"
            svgElement={<PricingEducationHero className={"h-full w-full"} />}
          />
          <EducationPricing />
          <ProductFeatures />
          <Faqs featureName="pricing" />
        </main>
      </Layout>
    </>
  );
}
