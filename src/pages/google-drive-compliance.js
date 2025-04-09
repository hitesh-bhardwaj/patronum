import FeatureDetailInfo from "@/components/PageComponents/FeaturesPage/FeatureDetailInfo";
import FeatureDetailTitle from "@/components/PageComponents/FeaturesPage/FeatureDetailTitle";
import PageLayout from "@/components/PageLayout";
import SectionBreak from "@/components/PageLayout/SectionBreak";
import VideoPlayer from "@/components/PageLayout/VideoPlayer";
import dynamic from "next/dynamic";
import FeatureDetailCards from "@/components/PageComponents/FeaturesPage/FeatureDetailCards";
import Transform from "@/components/PageComponents/FeaturesPage/Transform";

const Faqs = dynamic(() => import("@/components/PageComponents/FeaturesPage/Faq"), { ssr: false });

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
                breadcrumbTitle={"Features"}
                breadcrumbLink={"features"}
            >

                <VideoPlayer disabled={false} videoId="RIoCiNzNqW0" videoCover={"/assets/features/google-drive-compliance/video-cover.webp"} />

                <FeatureDetailTitle
                    sectionTitle1="Google Drive Compliance"
                    sectionTitle2="For Google Workspace"
                    sectionPara="Patronum is the ultimate solution for taking control of your Google Drive data and staying compliant with data protection & data security laws. Google Drive and Docs revolutionize collaboration, offering simplicity and efficiency at your fingertips. Yet, this simplicity can sometimes transform into complexity, turning vital company data into potential risks. "
                    sectionParaBig="Widespread sharing of docs, presentations, sheets etc. across employees, departments, and even with external entities like suppliers and customers makes data management a formidable challenge. Patronum is your beacon in this chaos, providing unparalleled visibility and control over your Google Drive information, ensuring your data remains secure and compliant."
                />

                <FeatureDetailInfo content={featuresDetail} />
                <Transform/>

                <SectionBreak
                    sectionBreakText="Patronum makes securing your Google Drive data effortless. With its advanced identification and access management capabilities, quickly revoking access becomes simple. Transform how you protect and manage your Google Drive data with Patronum, ensuring your sensitive information remains secure."
                />

                <FeatureDetailCards content={featuresDetailCard} />

                <Faqs featureName="google_drive_compliance" />

            </PageLayout>

        </>
    )
}