import FormSection from "@/components/ContactTrial/FormSection";
import Hero from "@/components/ContactTrial/Hero";
import { ContactHero } from "@/components/Illustrations/ContactHero";
import Layout from "@/components/Layout";
import MetaData from "@/components/PageLayout/MetaData";

export default function Contact() {
  return (
    <>
      <MetaData
        title={"Contact Us - Patronum"}
        description={
          "Contact Us - Patronum: Say Hello! We promise good vibes and great coffee."
        }
        url={"contact-us"}
        img={"homepage.jpg"}
        date_published={"2021-02-05T12:00"}
        date_modified={"2024-04-04T12:00"}
        keywords={"Patronum Google Workspace Manager"}
      />
      <Layout>
        <main>
          <Hero
            pageTitle1={"Contact Us"}
            pagePara={"Say Hello! We Promise Good Vibes and Great Coffee! ☕"}
            svgElement={<ContactHero className={"h-full w-full"} />}
            imgSrc={"contact.svg"}
          />
          <FormSection />
        </main>
      </Layout>
    </>
  );
}
