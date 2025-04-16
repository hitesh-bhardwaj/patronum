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
            title: 'Productive from Day One',
            para: "Setting up standard folders, calendars, email signatures, and even Gmail Filters and Labels is effortless with Patronum. This ensures that new users have everything they need to be productive immediately, providing a best-in-class start within Google Workspace.",
            img: "/assets/features/onboarding/main-1.svg",
        },
        {
            title: 'Integration With IDaaS Providers',
            para: "Understanding that IDaaS providers may not cover all business needs, Patronum complements these services by supporting major IDaaS providers like OneLogin, Namely, Okta, and PingIdentity. Patronum seamlessly integrates with these platforms, picking up where they leave off to provide a comprehensive user management experience.",
            img: "/assets/features/onboarding/main-2.svg",
        },
        {
            title: 'Security-First Approach',
            para: "Security is a top priority in user management. Patronum adopts a security-first approach, ensuring that user access privileges are appropriately revoked upon their departure from the organization. This includes automatic password changes, updating recovery email addresses, and deleting all app-specific passwords, thereby maintaining the integrity and security of your Google Workspace.",
            img: "/assets/features/onboarding/main-3.svg",
        },
        {
            title: 'Mobile Management',
            para: "In a mobile-centric world, Patronum also extends its management capabilities to mobile devices. It automatically wipes mobile devices when users leave the organization, ensuring that sensitive data remains securely within the organization and does not leave with the departing employee.",
            img: "/assets/features/onboarding/main-4.svg",
        },
        {
            title: 'Email Signature',
            para: "Patronum provides complete email signature management within Google Workspace, ensuring that all communications are consistent and aligned with your organization's branding and standards.",
            img: "/assets/features/onboarding/main-5.svg",
        },
        {
            title: 'Reduce Complexity',
            para: "Patronum excels in simplifying complex tasks. Its automated workflows allow administrators to apply dynamic automation centrally, saving time and reducing the likelihood of errors and security issues.",
            img: "/assets/features/onboarding/main-6.svg",
        },
        {
            title: 'Shared Contacts Management',
            para: "For organizations that rely heavily on Google contacts, Patronum offers a centralised management system to keep all Google Contacts in sync and well-managed, enhancing communication efficiency across the organization.",
            img: "/assets/features/onboarding/main-8.svg",
        },
        {
            title: 'Control Licensing Costs',
            para: "Patronum intelligently manages Google Workspace licensing, reducing costs by dynamically removing accounts during the de-provisioning process. This ensures that all resources are safely archived without the need for additional software, optimising your investment in Google Workspace.",
            img: "/assets/features/onboarding/main-7.svg",
        },
    ]

    const featuresDetailCard = [
        {
            id: '01',
            title: 'Dynamic Google Groups',
            para: "Effortlessly manage and automate Google Group memberships based on user roles and attributes.",
            img: "/assets/features/onboarding/detail-1.svg",
        },
        {
            id: '02',
            title: 'Delegated Access',
            para: "Empower specific users with controlled access to manage others' Google Workspace resources without full administrative privileges.",
            img: "/assets/features/onboarding/detail-2.svg",
        },
        {
            id: '03',
            title: 'Real-time Activity Login',
            para: "Gain immediate insights with live tracking of all user activities and changes within Google Workspace.",
            img: "/assets/features/onboarding/detail-8.svg",
        },
        {
            id: '04',
            title: 'Calendar Sharing',
            para: "Simplify and streamline the sharing of calendars within your organization, enhancing collaboration and scheduling.",
            img: "/assets/features/onboarding/detail-3.svg",
        },
        {
            id: '05',
            title: 'Data Access Revocation',
            para: "Securely and promptly revoke user access to data and resources upon role change or departure.",
            img: "/assets/features/onboarding/detail-5.svg",
        },
        {
            id: '06',
            title: 'Pre-built Policies',
            para: "Utilise ready-made policy templates for quick and efficient implementation of standard Google Workspace practices.",
            img: "/assets/features/onboarding/detail-4.svg",
        },

        {
            id: '07',
            title: 'Calendar Event Deletion',
            para: "Easily manage and delete calendar events, ensuring up-to-date scheduling and resource allocation.",
            img: "/assets/features/onboarding/detail-6.svg",
        },
        {
            id: '08',
            title: 'User Lifecycle Management',
            para: "Seamlessly manage the entire user journey within Google Workspace, from onboarding to offboarding, with automated processes and enhanced control.",
            img: "/assets/features/onboarding/detail-7.svg",
        },
    ]

    return (
        <>
            <PageLayout
                pageTitle1={'User Lifecycle'}
                pageTitle2={'Management'}
                pagePara={"Seamless & Automated User Lifecycle Management for Google Workspace."}
                imgSrc={'feature-onboarding.svg'}
                title={"Automate User Onboarding and Offboarding in Google Workspace with Patronum"}
                description={"Achieve a unified experience with Google Workspace by using automated onboarding and offboarding platform. Manage users in bulk, cut costs, and streamline operations with **Google Workspace automation."}
                url={"on-boarding"}
                img={"onboarding.jpg"}
                date_published={"2020-12-21T06:37"}
                date_modified={"2024-04-01T00:00"}
                keywords={"Google Workspace"}
                breadcrumbTitle={"Features"}
                breadcrumbLink={"features"}
            >

                <VideoPlayer disabled={false} videoId="POIX6FiWaN0" videoCover={"/assets/features/onboarding/video-cover.webp"} />

                <FeatureDetailTitle
                    sectionTitle1="Onboarding & Offboarding"
                    sectionTitle2="For Google Workspace"
                    sectionPara="Patronum redefines user lifecycle management by providing a consistent and unified experience within Google Workspace while significantly reducing IT expenditure in managing users and resources."
                    sectionParaBig="From the moment users join, they are granted access to files, folders, calendars, and Google groups, enabling productivity from day one. This streamlined approach ensures that every new team member is equipped with the necessary tools and information, fostering a welcoming and efficient start."
                />

                <FeatureDetailInfo content={featuresDetail}/>
                <Transform text={"Automate Onboarding. Eliminate Chaos."} content={"Say goodbye to manual setups and delayed provisioning. Patronum ensures every user starts with the right tools, policies, and data—right from day one."}/>
 
                <SectionBreak
                    sectionBreakText="Patronum redefines User Lifecycle Management in Google Workspace by using automation, delivering unparalleled security and productivity, freeing you to focus on innovation and strategic growth."
                />

                <FeatureDetailCards content={featuresDetailCard}/>

                <Faqs featureName="on_boarding" />

            </PageLayout>
        </>
    )
}