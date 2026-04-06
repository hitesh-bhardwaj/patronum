import React from "react";
import Hero from "@/components/ContactTrial/Hero";
import Layout from "@/components/Layout";
import VideoPlayer from "@/components/ContactTrial/OnBoarding/OnBoardingVideoV2";
import SectionBreak from "@/components/PageLayout/SectionBreak";
import Faqs from "@/components/ContactTrial/FaqSection";
import MetaData from "@/components/PageLayout/MetaData";
import Head from "next/head";
import FeatureDetailCards from "@/components/ContactTrial/OnBoarding/FeatureDetailCard";
import FeatureDetailTitle from "@/components/ContactTrial/OnBoarding/FeatureDetailTitle";
import FeatureDetailInfo from "@/components/ContactTrial/OnBoarding/FeaturesDetailInfo";
import { ArchiveIcon } from "@/components/Illustrations/Archive";


const Archive = () => {
  return (
    <>
      <MetaData
        title={
          "Reduce Google Archive Costs with Patronum Archive"
        }
        description={
          "Cut Google Archive license costs with Patronum. Archive emails to your own storage, automate offboarding, and keep data searchable and secure."
        }
        url={"archive"}
        img={"archive.webp"}
        date_published={"2026-04-01T06:37"}
        date_modified={"2026-04-01T00:00"}
        keywords={"Google Workspace"}
      />
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "Patronum",
              url: "https://www.patronum.io/",
              description:
                "Patronum is a comprehensive Google Workspace management platform that automates user onboarding/offboarding, email signature management, Google Drive governance, contact sharing, backups, and more.",
              applicationCategory: "BusinessApplication",
              operatingSystem: "Web-based (Google Workspace)",
              softwareVersion: "",
              offers: {
                "@type": "Offer",
                price: "8.00",
                priceCurrency: "USD",
                description:
                  "Per-user, per-year licence; Patronum is $8.00/user/year",
              },
              provider: {
                "@type": "Organization",
                name: "Bespin Labs Ltd",
                url: "https://www.patronum.io/",
              },
              featureList: [
                "Automated Google Workspace user onboarding/offboarding",
                "Email signature management with centralized templates",
                "Google Drive file & sharing governance",
                "Shared contacts synchronization",
                "Backup & restore of Google Workspace data",
                "Organisational chart & Google Groups automation",
              ],
              isAccessibleForFree: false,
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "5.0",
                reviewCount: "30",
              },
            }),
          }}
        />
      </Head>
      <Layout>
        <main>
          <Hero
            pageTitle1={"Patronum Archive"}
            pageTitle2={""}
            pagePara={
              "Patronum Archive offers a cost-effective way to manage Google Workspace data by removing the need for Archive User licenses."
            }
            boldpara=""
            imgSrc={"feature-onboarding.svg"}
            svgElement={<ArchiveIcon className={"h-full w-full"} />}
          />
          <VideoPlayer
            disabled={false}
            videoId=""
            videoCover={"/assets/features/archive/video-cover.webp"}
          />
          <FeatureDetailTitle
            sectionTitle1="Google Archive User license"
            sectionTitle2="costs spiralling out of control?"
            sectionPara="Save on your monthly licensing with Patronum Archive"
            sectionParaBig="Eliminate Google archive user license costs with our built-in email archiving feature. Use your own storage and our automation features to meet your organization's data retention requirements."
            sectionParaWidth="22vw"
          />
          <FeatureDetailInfo content={featuresDetail} archive={true} />
          <SectionBreak sectionBreakText="Archive features are accessed from the standard Patronum dashboard and are typically triggered by offboarding policies." />
          <FeatureDetailCards content={featuresDetailCard} title1={"Additional Patronum "} title2={"Archive Features"} archive={true} />
          <Faqs featureName="archive" />
        </main>
      </Layout>
    </>
  );
};

export default Archive;

const featuresDetail = [
  {
    title: "Reduce your monthly Google Workspace costs with Patronum’s email archive feature",
    para: "Google Archive User (AU) licences create a significant ongoing cost when retaining data for former employees. Patronum’s data archive feature maintains data accessibility while removing the need for Google licensing.",
    img: "/assets/features/archive/reduce-costs.svg",
  },
  {
    title: "Immediately reduce license costs",
    para: "With Patronum, Google Workspace Archive Users and Google Vault data can be moved to your organisation’s Google Cloud Storage bucket, eliminating the need to maintain Google Archive licences. The archived data remains searchable, and individual emails can be restored to a Google Workspace account whenever needed.",
    img: "/assets/features/archive/license-costs.svg",
  },
  {
    title: "Control your future spend with automated offboarding workflows",
    para: "Use Patronum archiving to automatically archive leavers’ data as part of your offboarding workflow. This allows for unnecessary Google licences to be removed automatically as part of the same process.",
    img: "/assets/features/archive/future-control.svg",
  },
  {
    title: "Your data, your infrastructure",
    para: "Reduce costs and avoid vendor lock-in by archiving your Google Workspace data to your organisation’s Google Cloud Storage bucket. Our open data file format means you’ve never locked into our solution.",
    img: "/assets/features/archive/data-infrastructure.svg",
  },
];

const featuresDetailCard = [
  {
    id: "01",
    title: "Automated Offboarding to Archive",
    para: "Remove manual effort, free up paid Google Workspace licences, and keep records accessible for audits, investigations, or future reference - without leaving inactive accounts in Google Workspace.",
    img: "/assets/features/archive/automated-offboarding.svg",
  },
  {
    id: "02",
    title: "Retention Policies",
    para: "Custom retention policies can be created in Patronum to ensure the correct data is archived, retained, or purged according to a predetermined schedule.",
    img: "/assets/features/archive/retention-policies.svg",
  },
  {
    id: "03",
    title: "Granular Search",
    para: "Flexible search capabilities are supported, including former employee name, date ranges, keywords, or other metadata.",
    img: "/assets/features/archive/granular-search.svg",
  },
  {
    id: "04",
    title: "Archive Storage Under Your Control",
    para: "All archived data is stored in your organisation’s Google Cloud Storage bucket, including email in Mbox RFC 4155 standard format.",
    img: "/assets/features/archive/archive-storage.svg",
  },
  {
    id: "05",
    title: "Archive Vault for Google Vault Data",
    para: "Extract all data retained in Google Vault, including deleted emails held under a retention or hold policy.",
    img: "/assets/features/archive/archive-vault.svg",
  },
  {
    id: "06",
    title: "Email Restoration",
    para: "Restore entire mailbox or individual items.",
    img: "/assets/features/archive/email-restoration.svg",
  }
];
