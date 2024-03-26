import Faqs from "@/components/PageComponents/FeaturesPage/Faq";
import FeatureDetailCard from "@/components/PageComponents/FeaturesPage/FeatureDetailCard";
import FeatureDetailInfo from "@/components/PageComponents/FeaturesPage/FeatureDetailInfo";
import FeatureDetailTitle from "@/components/PageComponents/FeaturesPage/FeatureDetailTitle";
import PageLayout from "@/components/PageLayout";
import InstallBlackButton from "@/components/PageLayout/Button/InstallBlackButton";
import SectionBreak from "@/components/PageLayout/SectionBreak";
import SectionTitle from "@/components/PageLayout/SectionTitle";
import VideoPlayer from "@/components/PageLayout/VideoPlayer";

export default function FeatureDetail(){

    const featuresDetail = [
        {
            title: 'Multi-Domain Sharing',
            para: "In addition to sharing contacts across all your users within your company Google Workspace domain and sub-domains, you can also share and interact with customers and partners by sharing your Google Contacts outside of your Google Workspace domain.",
            img: "/assets/features/contact-sharing/main-1.svg",
        },
        {
            title: 'Direct Integration With Google Gmail',
            para: "Google contact sharing enables the best features for you and to manage your contacts. Patronum is smoothly integrated into Google Workspace, Gmail and Google Contacts. Our Google Chrome extension gives users the best possible experience when it comes to managing and sharing contacts with co-workers.",
            img: "/assets/features/contact-sharing/main-2.svg",
        },
        {
            title: 'Enterprise Security',
            para: "Patronum is built on a global scale technical infrastructure designed to provide security throughout. We have invested heavily in securing our infrastructure and we have engineers dedicated to keeping your data and information secure and private.",
            img: "/assets/features/contact-sharing/main-3.svg",
        },
        {
            title: 'Auto Sync Across Mobile/Tablet & Outlook Clients',
            para: "In Google contact sharing your Google Contacts are updated automatically across various platforms: Desktop, Mobile, Tablet or Microsoft Outlook. Users get instant access to contacts across different devices automatically.",
            img: "/assets/features/contact-sharing/main-4.svg",
        },
        {
            title: 'Set User Level Permissions',
            para: "With Patronum you are in control of your Google Addressbook. Share contact labels with other users and assign permissions such as “Can Edit”, “Can Delete” and “Read Only”. Our interface is based on the same permissions model used within Google Docs making it super easy to understand and deploy.",
            img: "/assets/features/contact-sharing/main-5.svg",
        },
        {
            title: 'Advanced Logging',
            para: "Patronum provides administrators with an extensive logging feature which gives them the power to monitor and keep a track of updates to contact sharing throughout the whole system. See who is sharing what and to whom.",
            img: "/assets/features/contact-sharing/main-6.svg",
        },
    ]

    const featuresDetailCard = [
        {
            id: '01',
            title: 'Unlimited Shared Contact Labels',
            para: "Effortlessly manage and automate Google Group memberships.",
            img: "/assets/features/contact-sharing/detail-1.svg",
        },
        {
            id: '02',
            title: 'Unlimted Shared Contacts',
            para: "Empower Specific Users with Controlled Access to Manage Others' Google.",
            img: "/assets/features/contact-sharing/detail-2.svg",
        },
        {
            id: '03',
            title: 'User Level Permission Management',
            para: "Simplify and Streamline the Sharing of Calendars within your Organisation.",
            img: "/assets/features/contact-sharing/detail-3.svg",
        },
        {
            id: '04',
            title: 'Mobile/Tablet & Outlook sync',
            para: "Utilise Ready-Made Policy Templates for Quick and Efficient.",
            img: "/assets/features/contact-sharing/detail-4.svg",
        },
        {
            id: '05',
            title: 'Share with Google Groups',
            para: "Securely and Promptly Revoke User Access to Data and Resources.",
            img: "/assets/features/contact-sharing/detail-5.svg",
        },
        {
            id: '06',
            title: 'Share with external domains',
            para: "Easily Manage and Delete Calendar Events, Ensuring Up-to-Date.",
            img: "/assets/features/contact-sharing/detail-6.svg",
        },
        {
            id: '07',
            title: 'Instant Sync',
            para: "Seamlessly Manage the Entire User Journey within Google Workspace.",
            img: "/assets/features/contact-sharing/detail-7.svg",
        },
        {
            id: '08',
            title: 'Advanced logging and security features',
            para: "Gain Immediate Insights with Live Tracking of all User Activities.",
            img: "/assets/features/contact-sharing/detail-8.svg",
        },
    ]

    return (
        <>
            <PageLayout
                pageTitle1={'Contact Sharing'} 
                pagePara={"The only tool you'll ever need to streamline your Google Workspace management."} 
                imgSrc={'contact-sharing.svg'}
                >

                <VideoPlayer videoId="POIX6FiWaN0" videoCover={"/assets/features/contact-sharing/video-cover.png"} />

                <FeatureDetailTitle
                    sectionTitle1="Contact Sharing"    
                    sectionTitle2="For Google Workspace"
                    sectionPara="Create contact groups, add relevant contacts and share contact book with other Google Workspace users. Now sync all your contacts and labels with Google Contacts every day."
                    sectionParaBig="Google contact sharing gives you the flexibility to fetch all your contacts changes done during the day and modify them at other users’ ends. All the users have the latest and updated contacts."
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
                                sectionTitle1="Additional Contact"
                                sectionTitle2="Sharing Features"
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
                                <InstallBlackButton btnText="Install Patronum"/>
                            </div>
                        </div>
                    </div>    
                </section>

                <Faqs />

            </PageLayout>

        </>
    )
}