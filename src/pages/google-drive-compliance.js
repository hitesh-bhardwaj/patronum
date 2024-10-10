import Faqs from "@/components/PageComponents/FeaturesPage/Faq";
import FeatureDetailCard from "@/components/PageComponents/FeaturesPage/FeatureDetailCard";
import FeatureDetailInfo from "@/components/PageComponents/FeaturesPage/FeatureDetailInfo";
import FeatureDetailTitle from "@/components/PageComponents/FeaturesPage/FeatureDetailTitle";
import PageLayout from "@/components/PageLayout";
import InstallBlackButton from "@/components/PageLayout/Button/InstallBlackButton";
import SectionBreak from "@/components/PageLayout/SectionBreak";
import SectionTitle from "@/components/PageLayout/SectionTitle";
import VideoPlayer from "@/components/PageLayout/VideoPlayer";
import Head from "next/head";

export default function FeatureDetail() {

    const featuresDetail = [
        {
            title: 'Identify & Limit Personal Access ',
            para: "The convenience of Google Drive often leads to users sharing critical files with personal accounts. Such practices, while seemingly harmless, can create lingering access issues long after an employee's departure. Traditional offboarding processes fall short, merely transferring file ownership while ignoring external access. Patronum elegantly addresses this gap, ensuring personal accesses are identified and revoked, safeguarding your data's integrity.",
            img: "/assets/features/google-drive-compliance/main-1.svg",
        },
        {
            title: 'Link Sharing, Refined with security',
            para: "Link-based sharing in Google Drive, though convenient, is a double-edged sword—it exposes your data to risks by making files accessible to anyone with the link. Patronum offers a sophisticated solution to refine or remove link-based sharing, allowing you to maintain the privacy of your internal information without sacrificing collaboration ease.",
            img: "/assets/features/google-drive-compliance/main-2.svg",
        },
        {
            title: 'Mastering External Access',
            para: "Patronum empowers you with complete oversight and command over external access to your files, folders, and shared drives. Whether it's filtering access by individual contractors or managing domain-wide permissions, Patronum enables swift, decisive action to protect your data ecosystem.",
            img: "/assets/features/google-drive-compliance/main-3.svg",
        },
        {
            title: 'Visibility and Control Over Internal Sharing',
            para: "In many organizations, files become unintentionally searchable and accessible within the company, often without awareness. Patronum shines a light on these hidden corners, providing instant visibility and the ability to modify access permissions, ensuring that only the right eyes view sensitive information.",
            img: "/assets/features/google-drive-compliance/main-4.svg",
        },
    ]

    const featuresDetailCard = [
        {
            id: '01',
            title: 'Unshare Files',
            para: "Instantly revoke access to previously shared Google Drive files.",
            img: "/assets/features/google-drive-compliance/detail-1.svg",
        },
        {
            id: '02',
            title: 'Advance Filtering',
            para: "Utilize detailed criteria to sort and manage Google Drive content.",
            img: "/assets/features/google-drive-compliance/detail-2.svg",
        },
        {
            id: '03',
            title: 'File Search',
            para: "Quickly locate specific files within Google Drive using keywords.",
            img: "/assets/features/google-drive-compliance/detail-3.svg",
        },
        {
            id: '04',
            title: 'External Access',
            para: "Monitor and control who outside your organization can view files.",
            img: "/assets/features/google-drive-compliance/detail-4.svg",
        },
        {
            id: '05',
            title: 'Shared Drives',
            para: "Collaborate efficiently with team-specific drives for shared file access.",
            img: "/assets/features/google-drive-compliance/detail-5.svg",
        },
        {
            id: '06',
            title: 'Internal Access',
            para: "Manage and restrict file accessibility within your organization.",
            img: "/assets/features/google-drive-compliance/detail-6.svg",
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
                                        "name": "What is file unsharing in Google Drive?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "File unsharing is the process of revoking previously granted access to files and folders in Google Drive, ensuring that only authorized users can view or edit content."
                                        }
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "How does Patronum enhance Google Drive compliance?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "Patronum provides advanced tools for monitoring, controlling, and automating access to Google Drive files, ensuring adherence to data sharing policies and compliance standards."
                                        }
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "Can Patronum identify external access to my Google Drive files?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "Yes, Patronum can identify and display which external organizations or individuals have access to your files, allowing for informed management of shared data."
                                        }
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "How do I revoke access to a shared file using Patronum?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "With Patronum, you can easily revoke access by using the intuitive dashboard to select the file and choosing the option to unshare it from unauthorized users."
                                        }
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "Is it possible to automate the unsharing process for multiple files?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "Absolutely, Patronum allows for the automation of unsharing processes, enabling bulk revocation of access to ensure data security efficiently."
                                        }
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "What advanced filtering options does Patronum offer for Google Drive management?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "Patronum offers filtering options based on user access level, file type, sharing status, and more, to effectively manage and secure your Google Drive content."
                                        }
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "Can I use Patronum to manage shared drives and their permissions?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "Yes, Patronum provides comprehensive management tools for shared drives, including setting up permissions and monitoring access to safeguard collaborative spaces."
                                        }
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "How does Patronum help with internal access management within Google Drive?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "Patronum enables precise control over internal access, allowing administrators to specify who within the organization can view, edit, or share files and folders."
                                        }
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "What steps should be taken to secure Google Drive data with Patronum?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "To secure your data, use Patronum to regularly audit file access, set up compliant sharing policies, automate unsharing for sensitive data, and monitor for unauthorized external access."
                                        }
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "Can Patronum detect and notify me of unauthorized external access to files?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "Yes, Patronum can alert administrators to unauthorized external access attempts, enabling prompt action to protect sensitive information."
                                        }
                                    }
                                ]
                            }
                        )
                    }}
                />

            </Head>
            <PageLayout
                pageTitle1={'File Unsharing &'}
                pageTitle2={'Google Drive Compliance'}
                pagePara={"Transform Collaboration into Controlled Innovation"}
                imgSrc={'google-drive-compliance.svg'}
                title={"Manage and Unshare Google Drive Files, Folders and Docs with Patronum"}
                description={"Patronum simplifies Google Workspace by unifying user lifecycle management and reducing IT costs. Easily unshare Google Drive and Docs, manage compliance, and streamline user access."}
                url={"google-drive-compliance"}
                img={"google-drive-compliance.jpg"}
                date_published={"2022-11-29T18:00"}
                date_modified={"2024-04-04T00:00"}
                keywords={"Google Workspace"}
            >

                <VideoPlayer disabled={false} videoId="RIoCiNzNqW0" videoCover={"/assets/features/google-drive-compliance/video-cover.webp"} />

                <FeatureDetailTitle
                    sectionTitle1="Google Drive Compliance"
                    sectionTitle2="For Google Workspace"
                    sectionPara="Patronum is the ultimate solution for taking control of your Google Drive data and staying compliant with data protection & data security laws. Google Drive and Docs revolutionize collaboration, offering simplicity and efficiency at your fingertips. Yet, this simplicity can sometimes transform into complexity, turning vital company data into potential risks. "
                    sectionParaBig="Widespread sharing of docs, presentations, sheets etc. across employees, departments, and even with external entities like suppliers and customers makes data management a formidable challenge. Patronum is your beacon in this chaos, providing unparalleled visibility and control over your Google Drive information, ensuring your data remains secure and compliant."
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
                    sectionBreakText="Patronum makes securing your Google Drive data effortless. With its advanced identification and access management capabilities, quickly revoking access becomes simple. Transform how you protect and manage your Google Drive data with Patronum, ensuring your sensitive information remains secure."
                />

                <section id="feature-detail-card">
                    <div className="container">
                        <div className="content">
                            <SectionTitle
                                sectionTitle1="Additional Google Drive"
                                sectionTitle2="Compliance Features"
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
                                <InstallBlackButton btnText="Install Patronum" />
                            </div>
                        </div>
                    </div>
                </section>

                <Faqs featureName="google_drive_compliance" />

            </PageLayout>

        </>
    )
}