import React from "react";
import Layout from "@/components/Layout";
import Faqs from "@/components/ContactTrial/FaqSection";
import MetaData from "@/components/PageLayout/MetaData";
import Head from "next/head";
import FeatureDetailInfo from "@/components/ContactTrial/OnBoarding/FeaturesDetailInfo";
import { ArchiveIcon } from "@/components/Illustrations/Archive";
import Hero from "@/components/Migration/Hero";
import About from "@/components/Migration/About";
import Properties from "@/components/Migration/Properties";
import DownloadReport from "@/components/Migration/DownloadReport";
import Steps from "@/components/Migration/Steps";
import { MigrateHero } from "@/components/Illustrations/MigrationHero";


const Migrate = () => {
  return (
    <>
      <MetaData
        title={
          "Patronum Migrate - Your Google Workspace Migration Companion"
        }
        description={
          "Migrate to Google Workspace with ease using Patronum Migrate. AI-powered, secure, and scalable migration from Microsoft 365 or Google environments with full control and accuracy."
        }
        url={"patronum-migrate"}
        img={"patronum-migrate.webp"}
        date_published={"2026-04-28T06:37"}
        date_modified={"2026-04-28T00:00"}
        keywords={"Google Workspace Migration"}
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
            pageTitle1={"Every Workload, Fully Under Control "}
            pageTitle2={""}
            pagePara={
              "Patronum Migrate runs every workload from your own machine, keeps jobs on track through interruptions, and gives you a clear view from start to finish."
            }
            boldpara=""
            imgSrc={"feature-onboarding.svg"}
            svgElement={<MigrateHero className={"h-full w-full"} />}
          />
          <About/>
          <FeatureDetailInfo content={featuresDetail} archive={true} />
          <DownloadReport/>
          <Steps/>
          <Properties/>
          <Faqs featureName="migrate" />
        </main>
      </Layout>
    </>
  );
};

export default Migrate;

const featuresDetail = [
  {
    title: "Al Agent - Know Before You Move",
    para: "Know your risks before you migrate. Al-generated report covering data volumes, timelines, findings, and recommendations - one click to PDF.",
    img: "/assets/features/migration/ai-agent.svg",
  },
  {
    title: "Jobs That Survive Restarts",
    para: "Every job's progress is saved as it runs. If the app closes unexpectedly, open it again and it picks up automatically - no starting over.",
    img: "/assets/features/migration/jobs.svg",
  },
  {
    title: "Configure First, Run When Ready ",
    para: "Set up all your site mappings, batches, and options in the Config views. Nothing runs until you switch to Migrate and say so. Intent and execution are always separate.",
    img: "/assets/features/migration/configure.svg",
  },
  {
    title: "One File to Download and Run",
    para: "Patronum Migrate is a single executable with everything built in - the web Ul, the job engine, the database. No Node, no Python, no Docker required.",
    img: "/assets/features/migration/one-file.svg",
  },
  {
    title: "Enter Credentials Once",
    para: "Set up your Microsoft 365 and Google Workspace connections once. They're saved and reused across every project, and stored encrypted on your machine.",
    img: "/assets/features/migration/enter-credentials.svg",
  },
  {
    title: "All Workloads in One Tool",
    para: "SharePoint sites, shared drives, email, calendar, contacts, and OneDrive - migrate all of them from the same app, managed from the same Migrate view.",
    img: "/assets/features/migration/workloads.svg",
  },
  {
    title: "See What's There Before You Move It",
    para: "Run Discovery to get a real list of SharePoint sites, drives, and mailboxes from the source. Map against verified data, not assumptions.",
    img: "/assets/features/migration/move-it.svg",
  },
  {
    title: "Your Data Stays on Your Machine",
    para: "The web interface is only accessible from the machine running the migration. Patronum Migrate is never exposed to the internet. Credentials are encrypted and never sent to a third party.",
    img: "/assets/features/migration/data.svg",
  },
  {
    title: "Full Logs, On Disk",
    para: "Every job writes a full log to your machine as it runs. View a live tail in the app, or open the log file in Explorer for the complete history.",
    img: "/assets/features/migration/logs.svg",
  },
  {
    title: "Live Progress for Every Job",
    para: "Watch file counts, transfer rates, and errors update in real time.",
    img: "/assets/features/migration/live-progress.svg",
  },
];


