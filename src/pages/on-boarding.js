import Faqs from "@/components/PageComponents/FeaturesPage/Faq";
import FeatureDetailCard from "@/components/PageComponents/FeaturesPage/FeatureDetailCard";
import FeatureDetailInfo from "@/components/PageComponents/FeaturesPage/FeatureDetailInfo";
import FeatureDetailTitle from "@/components/PageComponents/FeaturesPage/FeatureDetailTitle";
import PageLayout from "@/components/PageLayout";
import SectionBreak from "@/components/PageLayout/SectionBreak";
import SectionTitle from "@/components/PageLayout/SectionTitle";
import VideoPlayer from "@/components/PageLayout/VideoPlayer";

export default function FeatureDetail(){

    const featuresDetail = [
        {
            title: 'Productive from day One',
            para: "Setting up standard folders, calendars, email signatures, and even Gmail Filters and Labels is effortless with Patronum. This ensures that new users have everything they need to be productive immediately, providing a best-in-class start within Google Workspace.",
            img: "/assets/features/onboarding/main-1.svg",
        },
        {
            title: 'Integration With IDaaS Providers',
            para: "Understanding that IDaaS providers may not cover all business needs, Patronum complements these services by supporting major IDaaS providers like OneLogin, Namely, Okta, and PingIdentity. Patronum seamlessly integrates with these platforms, picking up where they leave off to provide a comprehensive user management experience.",
            img: "/assets/features/onboarding/main-2.svg",
        },
        {
            title: 'Security First Approach',
            para: "Security is a top priority in user management. Patronum adopts a security-first approach, ensuring that user access privileges are appropriately revoked upon their departure from the organisation. This includes automatic password changes, updating recovery email addresses, and deleting all app-specific passwords, thereby maintaining the integrity and security of your Google Workspace.",
            img: "/assets/features/onboarding/main-3.svg",
        },
        {
            title: 'Mobile Management',
            para: "Patronum provides complete email signature management within Google Workspace, ensuring that all communications are consistent and aligned with your organisation's branding and standards.",
            img: "/assets/features/onboarding/main-4.svg",
        },
        {
            title: 'Email Signature',
            para: "Patronum provides complete email signature management within Google Workspace, ensuring that all communications are consistent and aligned with your organisation's branding and standards.",
            img: "/assets/features/onboarding/main-5.svg",
        },
        {
            title: 'Reduce Complexity',
            para: "Patronum excels in simplifying complex tasks. Its automated workflows allow administrators to apply dynamic automation centrally, saving time and reducing the likelihood of errors and security issues.",
            img: "/assets/features/onboarding/main-6.svg",
        },
        {
            title: 'Control Licensing Costs',
            para: "Patronum intelligently manages Google Workspace licensing, reducing costs by dynamically removing accounts during the de-provisioning process. This ensures that all resources are safely archived without the need for additional software, optimising your investment in Google Workspace.",
            img: "/assets/features/onboarding/main-7.svg",
        },
        {
            title: 'Shared Contacts Management',
            para: "For organisations that rely heavily on Google contacts, Patronum offers a centralised management system to keep all Google Contacts in sync and well-managed, enhancing communication efficiency across the organisation.",
            img: "/assets/features/onboarding/main-8.svg",
        },
    ]

    const featuresDetailCard = [
        {
            id: '01',
            title: 'Dynamic Google Groups',
            para: "Effortlessly Manage and Automate Google Group Memberships.",
            img: "/assets/features/onboarding/detail-1.svg",
        },
        {
            id: '02',
            title: 'Delegated Access',
            para: "Empower Specific Users with Controlled Access to Manage Others' Google.",
            img: "/assets/features/onboarding/detail-2.svg",
        },
        {
            id: '03',
            title: 'Calendar Sharing',
            para: "Simplify and Streamline the Sharing of Calendars within your Organisation.",
            img: "/assets/features/onboarding/detail-3.svg",
        },
        {
            id: '04',
            title: 'Pre-Build Policies',
            para: "Utilise Ready-Made Policy Templates for Quick and Efficient.",
            img: "/assets/features/onboarding/detail-4.svg",
        },
        {
            id: '05',
            title: 'Data Access revocation',
            para: "Securely and Promptly Revoke User Access to Data and Resources.",
            img: "/assets/features/onboarding/detail-5.svg",
        },
        {
            id: '06',
            title: 'Calendar Event Deletion',
            para: "Easily Manage and Delete Calendar Events, Ensuring Up-to-Date.",
            img: "/assets/features/onboarding/detail-6.svg",
        },
        {
            id: '07',
            title: 'User Lifecycle Management',
            para: "Seamlessly Manage the Entire User Journey within Google Workspace.",
            img: "/assets/features/onboarding/detail-7.svg",
        },
        {
            id: '08',
            title: 'Real-time Activity Login',
            para: "Gain Immediate Insights with Live Tracking of all User Activities.",
            img: "/assets/features/onboarding/detail-8.svg",
        },
    ]

    return (
        <>
            <PageLayout
                pageTitle1={'User Lifecycle'} 
                pageTitle2={'Management'}
                pagePara={"The only tool you'll ever need to streamline your Google Workspace management."} 
                imgSrc={'feature-onboarding.svg'}
                >

                <VideoPlayer videoId="POIX6FiWaN0" />

                <FeatureDetailTitle
                    sectionTitle1="Onboarding & Offboarding"    
                    sectionTitle2="For Google Workspace"
                    sectionPara="Patronum redefines user lifecycle management by providing a consistent and unified experience within Google Workspace while significantly reducing IT expenditure in managing users and resources."
                    sectionParaBig="From the moment users join, they are granted access to files, folders, calendars, and Google groups, enabling productivity from day one. This streamlined approach ensures that every new team member is equipped with the necessary tools and information, fostering a welcoming and efficient start."
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
                    sectionBreakText="Patronum redefines User Lifecycle Management in Google Workspace by using automation, delivering unparalleled security and productivity, freeing you to focus on innovation and strategic growth."
                />

                <section id="feature-detail-card">
                    <div className="container">
                        <div className="content">
                            <SectionTitle 
                                sectionTitle1="Additional User Lifecycle"
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
                        </div>
                    </div>    
                </section>

                <Faqs />

            </PageLayout>

        </>
    )
}