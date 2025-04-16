import FeatureDetailInfo from "@/components/PageComponents/FeaturesPage/FeatureDetailInfo";
import FeatureDetailTitle from "@/components/PageComponents/FeaturesPage/FeatureDetailTitle";
import PageLayout from "@/components/PageLayout";
import SectionBreak from "@/components/PageLayout/SectionBreak";
import VideoPlayer from "@/components/PageLayout/VideoPlayer";
import dynamic from "next/dynamic";
import FeatureDetailCards from "@/components/PageComponents/FeaturesPage/FeatureDetailCards";
import BackupCard from "@/components/PageComponents/FeaturesPage/BackupCard";
import Transform from "@/components/PageComponents/FeaturesPage/Transform";

const Faqs = dynamic(() => import("@/components/PageComponents/FeaturesPage/Faq"), { ssr: false });

export default function FeatureDetail() {
    const featuresDetail = [
        {
            title: 'Advanced Intelligent Ransomware Protection',
            para: "In an era where ransomware attacks are increasingly prevalent, Patronum Backup offers a sophisticated layer of defense. By employing advanced automation and preemptive backup strategies, Patronum ensures your Google Workspace data remains intact and recoverable even in the face of sophisticated ransomware threats. The feature of auto-labeling recovery points is particularly noteworthy, as it precisely identifies the last uncorrupted data snapshot, ensuring a clean and efficient restoration process without compromising your data integrity.",
            img: "/assets/features/google-workspace-backup/main-1.svg",
        },
        {
            title: 'Guaranteed Backup Success with No Failures',
            para: "Patronum Backup eliminates the anxiety surrounding potential backup failures. Through its intelligent management system, which includes parallel processing and automatic rescheduling, Patronum guarantees a seamless backup experience free from common Google errors or failures. This state-of-the-art approach ensures your data protection mechanisms are foolproof and consistently reliable, offering peace of mind that your organization’s data is safe, secure, and always available.",
            img: "/assets/features/google-workspace-backup/main-2.svg",
        },
        {
            title: 'Empowering Simple Self-Service',
            para: "Patronum Backup goes beyond just safeguarding your data—it also simplifies the restoration process. With its user-friendly self-service feature, end users gain the autonomy to restore their own data, including files and emails, swiftly and efficiently. This empowerment significantly reduces the workload on IT staff, streamlining the recovery process and allowing for immediate access to lost or deleted data without the typical delays. By democratizing data restoration, Patronum Backup not only enhances data security but also fosters a more efficient and resilient organizational workflow.",
            img: "/assets/features/google-workspace-backup/main-3.svg",
        },
    ]
    const featuresDetailCard = [
        {
            id: '01',
            title: 'Automated Backups',
            para: "Regular fully automed backups runs, resillient to google API errors.",
            img: "/assets/features/google-workspace-backup/detail-1.svg",
        },
        {
            id: '02',
            title: 'Flexible Restore',
            para: "Restore data to the same/other accounts, in-place or to a new folder.",
            img: "/assets/features/google-workspace-backup/detail-2.svg",
        },
        {
            id: '03',
            title: 'Instant Offline Export',
            para: "Google Workspace backup data instant export in pst, docx & other native formats.",
            img: "/assets/features/google-workspace-backup/detail-3.svg",
        },
        {
            id: '04',
            title: '2FA Authentication',
            para: "Native support of Google 2FA for Google Workspace administrators and users.",
            img: "/assets/features/google-workspace-backup/detail-4.svg",
        },
        {
            id: '05',
            title: 'Storage Locations',
            para: "Select a backup storage region, or use multiple storage locations.",
            img: "/assets/features/google-workspace-backup/detail-5.svg",
        },
        {
            id: '06',
            title: 'AI-Based Automation',
            para: "Backup uses AI to automate backup & reduce time needed to manage it.",
            img: "/assets/features/google-workspace-backup/detail-6.svg",
        },
        {
            id: '07',
            title: 'Versioning',
            para: "Browse & restore any prior versions of Google Workspace data without time limit.",
            img: "/assets/features/google-workspace-backup/detail-7.svg",
        },
        {
            id: '08',
            title: 'Self-Service',
            para: "Configure end-user access to let them restore lost items.",
            img: "/assets/features/google-workspace-backup/detail-8.svg",
        },
        {
            id: '09',
            title: 'Encryption',
            para: "Data at rest is encrypted with AES256 & TLS 1.2 for data in transit.",
            img: "/assets/features/google-workspace-backup/detail-9.svg",
        },
    ]
    return (
        <>
            <PageLayout
                pageTitle1={'Google Workspace'}
                pageTitle2={'Backup'}
                pagePara={"Best-in-Class Full Fidelity Backups"}
                imgSrc={'google-workspace-backup.svg'}
                title={"Google Workspace Backup: Contacts, Drive Files, Emails and More"}
                description={"Google Workspace contact sharing and Google Backup and Sync allow users to backup contacts and files to Google Drive, manage external contacts, and perform automatic backups."}
                url={"google-workspace-backup"}
                img={"homepage.jpg"}
                date_published={"2023-10-16T10:45"}
                date_modified={"2024-04-04T12:00"}
                keywords={"Google Workspace"}
                breadcrumbTitle={"Features"}
                breadcrumbLink={"features"}
            >
                <VideoPlayer disabled={true} videoCover={"/assets/features/google-workspace-backup/video-cover.webp"} />
                <FeatureDetailTitle
                    sectionTitle1="Google Workspace"
                    sectionTitle2="Backup"
                    sectionPara="Patronum Backup stands at the forefront of data protection, offering the fastest and most reliable backup solution specifically designed for Google Workspace. With Patronum Backup, you get the world’s faster backup solution for Google Workspace providing high-frequency backups of your Google data."
                    sectionParaBig="Protect your Google Workspace environment from accidental and malicious deletion. From crucial Files and Shared Drives to essential Emails, every piece of data is securely backed up, guaranteeing comprehensive point-in-time restores or the option for instant offline exports whenever the need arises. This means no piece of information is ever out of reach, providing a fail-safe against data loss incidents."
                />
                <FeatureDetailInfo content={featuresDetail} />
                <Transform text={"Sleep Easy. Your Data’s Always Protected."} content={"Human error? Malicious deletion? No problem. Patronum gives you ironclad full-fidelity Google Workspace backups—because second chances shouldn’t be optional."}/>
                <SectionBreak
                    sectionBreakText="Patronum Backup transforms how your organization approaches Google Workspace data protection, marrying speed, reliability, and user empowerment in a single, powerful solution. Secure your digital workspace with Patronum, and navigate the digital landscape with confidence, knowing that your data is protected by the pinnacle of backup innovation."
                />
                <FeatureDetailCards title1={'Additional Google Workspace'} title2={'Backup Features'} content={featuresDetailCard} />
                <BackupCard />
                <Faqs featureName="google_workspace_backup" />
            </PageLayout>
        </>
    )
}