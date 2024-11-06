import Faqs from "@/components/PageComponents/FeaturesPage/Faq";
import FeatureDetailCard from "@/components/PageComponents/FeaturesPage/FeatureDetailCard";
import FeatureDetailInfo from "@/components/PageComponents/FeaturesPage/FeatureDetailInfo";
import FeatureDetailTitle from "@/components/PageComponents/FeaturesPage/FeatureDetailTitle";
import PageLayout from "@/components/PageLayout";
import InstallButton from "@/components/Buttons/InstallButton";
import SectionBreak from "@/components/PageLayout/SectionBreak";
import SectionTitle from "@/components/PageLayout/SectionTitle";
import VideoPlayer from "@/components/PageLayout/VideoPlayer";
import Head from "next/head";

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
                                "@type": "FAQPage",
                                "mainEntity": [
                                    {
                                        "@type": "Question",
                                        "name": "How does Patronum's Google Drive Management benefit my organization?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "Patronum’s Google Drive Management is designed to enhance the efficiency of managing Google Workspace files and folders. It benefits organizations by providing IT administrators with advanced capabilities to oversee user permissions, transfer file ownership, organize digital assets, and ensure that file sharing aligns with company policies, all from a central interface."
                                        }
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "Can I use Patronum to manage file permissions across my entire organization's Google Drive?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "Yes, with Patronum, you can manage file permissions across your entire organization. It allows you to review, update, and set file-sharing settings to ensure sensitive information is protected while fostering a collaborative environment."
                                        }
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "How does the ‘Change Ownership’ feature work in cases of employee turnover?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "The ‘Change Ownership’ feature allows IT administrators to quickly transfer ownership of files and folders when an employee leaves or moves within the company. This ensures that essential documents remain accessible and that there's no interruption in workflow."
                                        }
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "Is it possible to move files and folders in bulk with Patronum, or do they have to be moved individually?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "Patronum supports both individual and bulk movements of files and folders. This flexibility is crucial for restructuring your digital workspace or during large-scale organizational changes, allowing for efficient transitions and organization."
                                        }
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "Can Patronum's Google Drive Management handle the organization of Google Shared Drives?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "Absolutely. Patronum is equipped to streamline the management of Google Shared Drives. It provides functionalities to add new users, assign managers, and reorganize content, ensuring that your shared drives reflect the structured and secure access hierarchy of your organization."
                                        }
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "What security measures does Patronum have in place to protect our data during the management of Google Drive?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "Patronum prioritizes security by adhering to Google's stringent API use policies and providing role-based access within the tool. Actions are logged and can be audited to ensure compliance with your organization's data protection policies."
                                        }
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "How does Patronum facilitate the addition of files from other users, especially when the owner is unavailable?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "Patronum allows IT administrators to grant access to necessary files when the owner is unavailable. This ensures that teams can continue their work without delays, maintaining productivity and adherence to deadlines."
                                        }
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "In what ways can Patronum's Google Drive Management feature streamline content creation and sharing within a company?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "Patronum can streamline content creation and sharing by automating the organization of new files and folders, setting default sharing permissions, and ensuring that newly created content adheres to predefined organizational structures and security standards."
                                        }
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "Is there a trial version available for Patronum's Google Drive Management, and how can we sign up?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "Patronum does offer a no-obligation 30-day trial for prospective clients. To sign up for a trial, click on the 'Install Patronum' button and fill up your details, no credit card is required. To discuss how Patronum can be tailored to meet your organization’s specific needs, you can schedule a demo by contacting us."
                                        }
                                    }
                                ]
                            }
                        )
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
                breadcrumbTitle={"Features"}
                breadcrumbLink={"features"}
            >

                <VideoPlayer disabled={false} videoId="C5_kwNp10Zo" videoCover={"/assets/features/google-drive-management/video-cover.webp"} />

                <FeatureDetailTitle
                    sectionTitle1="Google Drive Management"
                    sectionTitle2="For Google Workspace"
                    sectionPara="Struggling with Google Drive management? Patronum offers a robust solution that transforms how IT administrators interact with Google Drive, offering streamlined, intuitive controls that enhance both productivity and data security. "
                    sectionParaBig="Patronum allows for detailed oversight of user files and folders, enabling administrators to review and adjust sharing permissions effortlessly. Additionally, Patronum provides access to and control over Google Shared Drives and the capability to add files from other users, ensuring seamless productivity and enhanced data management."
                />

                <section id="feature-detail-info">
                    <div className="container">
                        <div className="content">
                            <div className="section-list-container">
                                {featuresDetail.map((feature, index) => (
                                    <FeatureDetailInfo
                                        key={index}
                                        featureDetailInfoTitle={feature.title}
                                        featureDetailInfoPara={feature.para}
                                        imgSrc={feature.img}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                <SectionBreak
                    sectionBreakText="Patronum's Google Drive management feature streamlines data handling by facilitating efficient file organization, seamless sharing, and secure access control. This enhances collaboration and productivity across organization, by fostering a collaborative environment for all users."
                />

                <section id="feature-detail-card">
                    <div className="container">
                        <div className="content">
                            <SectionTitle
                                sectionTitle1="Additional Google Drive"
                                sectionTitle2="Management Features"
                            />

                            <div className="feature-detail-card-wrapper">
                                {featuresDetailCard.map((featureDetail, index) => (
                                    <FeatureDetailCard
                                        key={index}
                                        id={featureDetail.id}
                                        title={featureDetail.title}
                                        content={featureDetail.para}
                                        img={featureDetail.img}
                                    />
                                ))}
                            </div>

                            <div className="section-btn-container">
                                <InstallButton />
                            </div>
                        </div>
                    </div>
                </section>

                <Faqs featureName="google_drive_management" />

            </PageLayout>

        </>
    )
}