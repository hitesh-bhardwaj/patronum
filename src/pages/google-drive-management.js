import FeatureDetailInfo from "@/components/PageComponents/FeaturesPage/FeatureDetailInfo";
import FeatureDetailTitle from "@/components/PageComponents/FeaturesPage/FeatureDetailTitle";
import PageLayout from "@/components/PageLayout";
import SectionBreak from "@/components/PageLayout/SectionBreak";
import VideoPlayer from "@/components/PageLayout/VideoPlayer";
import dynamic from "next/dynamic";
import FeatureDetailCards from "@/components/PageComponents/FeaturesPage/FeatureDetailCards";
import Transform from "@/components/PageComponents/FeaturesPage/Transform";
import Head from "next/head";

const Faqs = dynamic(() => import("@/components/PageComponents/FeaturesPage/Faq"), { ssr: true });

export default function FeatureDetail() {

    const featuresDetail = [
        {
            title: 'Browse Users Files & Folders',
            para: "Patronum’s Google Drive Management enables IT administrators to delve into Google Workspace with unparalleled clarity, perusing user files and folders as if strolling through a well-organized library. This feature not only enhances visibility but also streamlines support, reflecting a commitment to operational excellence",
            img: "/assets/features/google-drive-management/main-2.svg",
        },
        {
            title: 'Change Ownership',
            para: "Patronum redefines the flexibility of file management by allowing instantaneous ownership transfers. This seamless transition ensures that the flow of information and collaboration remains uninterrupted, regardless of personnel changes. Empower your team with the capability to pivot swiftly and maintain the continuity of your digital assets.",
            img: "/assets/features/google-drive-management/main-1.svg",
        },
        {
            title: 'Update Sharing Settings',
            para: "Patronum elevates the security and flexibility of file-sharing within your organization. By refining sharing settings, you can ensure that sensitive data remains protected while still promoting a culture of collaboration and transparency. This feature aligns with the meticulous data governance and strategic foresight characteristic of top-tier global enterprises.",
            img: "/assets/features/google-drive-management/main-3.svg",
        },
        {
            title: 'Move Files And Folders',
            para: "With Patronum, managing your Google Drive resembles orchestrating a strategic corporate restructuring. It allows IT administrators to optimize the digital workspace by moving files and folders to more appropriate locations, enhancing operational efficiency and maintaining an organized environment.",
            img: "/assets/features/google-drive-management/main-4.svg",
        },
        {
            title: 'Manage Shared drives',
            para: "Patronum transforms the management of Google Shared Drives, fostering a unified and organized approach to collaboration. This feature allows for more integrated control over shared spaces, ensuring that every resource is aligned with the company’s strategic goals, reflecting the unity and efficiency of your organization's workforce.",
            img: "/assets/features/google-drive-management/main-5.svg",
        },
        {
            title: 'Add Files From Other Users',
            para: "Ensure continuous productivity with Patronum’s capability to grant access to necessary files even when the original owner is unavailable. This feature supports a seamless workflow, ensuring no interruption in daily operations.",
            img: "/assets/features/google-drive-management/main-6.svg",
        },
    ]

    const featuresDetailCard = [
        {
            id: '01',
            title: 'Rename Files',
            para: "Easily update file names to maintain clarity and relevance in your digital archives.",
            img: "/assets/features/google-drive-management/detail-1.svg",
        },
        {
            id: '02',
            title: 'Add Files',
            para: "Seamlessly upload and integrate new files into Google Drive from various sources.",
            img: "/assets/features/google-drive-management/detail-2.svg",
        },
        {
            id: '03',
            title: 'Move Files',
            para: "Effortlessly reorganize files and folders to optimize workspace efficiency.",
            img: "/assets/features/google-drive-management/detail-3.svg",
        },
        {
            id: '04',
            title: 'Change Ownership',
            para: "Quickly transfer file ownership to ensure continuous workflow and responsibility.",
            img: "/assets/features/google-drive-management/detail-4.svg",
        },
        {
            id: '05',
            title: 'Create New Folders',
            para: "Establish new folders to better categorize and manage digital resources.",
            img: "/assets/features/google-drive-management/detail-5.svg",
        },
        {
            id: '06',
            title: 'Share Files',
            para: "Distribute files with internal or external parties, enhancing collaboration and access control.",
            img: "/assets/features/google-drive-management/detail-6.svg",
        },
    ]

    return (
        <>
            <Head>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(
                            {
                                "@context": "https://schema.org",
                                "@type": "SoftwareApplication",
                                "name": "Patronum",
                                "url": "https://www.patronum.io/",
                                "description": "Patronum is a comprehensive Google Workspace management platform that automates user onboarding/offboarding, email signature management, Google Drive governance, contact sharing, backups, and more.",
                                "applicationCategory": "BusinessApplication",
                                "operatingSystem": "Web-based (Google Workspace)",
                                "softwareVersion": "",
                                "offers": {
                                    "@type": "Offer",
                                    "price": "8.00",
                                    "priceCurrency": "USD",
                                    "description": "Per-user, per-year licence; Patronum is $8.00/user/year"
                                },
                                "provider": {
                                    "@type": "Organization",
                                    "name": "Bespin Labs Ltd",
                                    "url": "https://www.patronum.io/"
                                },
                                "featureList": [
                                    "Automated Google Workspace user onboarding/offboarding",
                                    "Email signature management with centralized templates",
                                    "Google Drive file & sharing governance",
                                    "Shared contacts synchronization",
                                    "Backup & restore of Google Workspace data",
                                    "Organisational chart & Google Groups automation"
                                ],
                                "isAccessibleForFree": false,
                                "aggregateRating": {
                                    "@type": "AggregateRating",
                                    "ratingValue": "4.9",
                                    "reviewCount": "24"
                                }
                            }
                        ),
                    }}
                />
            </Head>
            <PageLayout
                pageTitle1={'Google Drive'}
                pageTitle2={'Management'}
                pagePara={"Get Better Control Over Users Google Drive Files & Folders."}
                imgSrc={'google-drive-management.svg'}
                title={"Google Drive File Management with Patronum"}
                description={"Google Drive management empowers IT administrators to view Google Drive in a revolutionary manner. Patronum streamlines file and system management, offering unparalleled control and efficiency."}
                url={"google-drive-management"}
                img={"google-drive-management.jpg"}
                date_published={"2020-12-21T07:03"}
                date_modified={"2024-04-04T12:00"}
                keywords={"Google Drive"}
                // breadcrumbTitle={"Features"}
                // breadcrumbLink={"features"}
            >

                <VideoPlayer disabled={false} videoId="C5_kwNp10Zo" videoCover={"/assets/features/google-drive-management/video-cover.webp"} />

                <FeatureDetailTitle
                    sectionTitle1="Google Drive Management"
                    sectionTitle2="For Google Workspace"
                    sectionPara="Struggling with Google Drive management? Patronum offers a robust solution that transforms how IT administrators interact with Google Drive, offering streamlined, intuitive controls that enhance both productivity and data security. "
                    sectionParaBig="Patronum allows for detailed oversight of user files and folders, enabling administrators to review and adjust sharing permissions effortlessly. Additionally, Patronum provides access to and control over Google Shared Drives and the capability to add files from other users, ensuring seamless productivity and enhanced data management."
                />

                <FeatureDetailInfo content={featuresDetail} />
                <Transform text={"Take Back Control of Your Google Drive!"} content={"Stop letting unmanaged files create compliance risks. Patronum gives IT leaders full visibility and governance across every Drive—without micromanaging."} />

                <SectionBreak
                    sectionBreakText="Patronum's Google Drive management feature streamlines data handling by facilitating efficient file organization, seamless sharing, and secure access control. This enhances collaboration and productivity across organization, by fostering a collaborative environment for all users."
                />

                <FeatureDetailCards title1={'Additional Google Drive'} title2={'Management Features'} content={featuresDetailCard} />

                <Faqs featureName="google_drive_management" />

            </PageLayout>

        </>
    )
}