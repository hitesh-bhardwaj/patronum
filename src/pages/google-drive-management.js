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
            title: 'Change Ownership',
            para: "In addition to sharing contacts across all your users within your company Google Workspace domain and sub-domains, you can also share and interact with customers and partners by sharing your Google Contacts outside of your Google Workspace domain.",
            img: "/assets/features/google-drive-management/main-1.svg",
        },
        {
            title: 'Browse Users Files & Folders',
            para: "Google contact sharing enables the best features for you and to manage your contacts. Patronum is smoothly integrated into Google Workspace, Gmail and Google Contacts. Our Google Chrome extension gives users the best possible experience when it comes to managing and sharing contacts with co-workers.",
            img: "/assets/features/google-drive-management/main-2.svg",
        },
        {
            title: 'Update Sharing Settings',
            para: "Patronum is built on a global scale technical infrastructure designed to provide security throughout. We have invested heavily in securing our infrastructure and we have engineers dedicated to keeping your data and information secure and private.",
            img: "/assets/features/google-drive-management/main-3.svg",
        },
        {
            title: 'Move Files And Folders',
            para: "In Google contact sharing your Google Contacts are updated automatically across various platforms: Desktop, Mobile, Tablet or Microsoft Outlook. Users get instant access to contacts across different devices automatically.",
            img: "/assets/features/google-drive-management/main-4.svg",
        },
        {
            title: 'Manage Shared drives',
            para: "With Patronum you are in control of your Google Addressbook. Share contact labels with other users and assign permissions such as “Can Edit”, “Can Delete” and “Read Only”. Our interface is based on the same permissions model used within Google Docs making it super easy to understand and deploy.",
            img: "/assets/features/google-drive-management/main-5.svg",
        },
        {
            title: 'Add Files From Other Users',
            para: "Patronum provides administrators with an extensive logging feature which gives them the power to monitor and keep a track of updates to contact sharing throughout the whole system. See who is sharing what and to whom.",
            img: "/assets/features/google-drive-management/main-6.svg",
        },
    ]

    const featuresDetailCard = [
        {
            id: '01',
            title: 'Rename Files',
            para: "Effortlessly Manage and Automate Google Group Memberships.",
            img: "/assets/features/google-drive-management/detail-1.svg",
        },
        {
            id: '02',
            title: 'Add Files',
            para: "Empower Specific Users with Controlled Access to Manage Others' Google.",
            img: "/assets/features/google-drive-management/detail-2.svg",
        },
        {
            id: '03',
            title: 'Move Files',
            para: "Simplify and Streamline the Sharing of Calendars within your Organisation.",
            img: "/assets/features/google-drive-management/detail-3.svg",
        },
        {
            id: '04',
            title: 'Change Ownership',
            para: "Utilise Ready-Made Policy Templates for Quick and Efficient.",
            img: "/assets/features/google-drive-management/detail-4.svg",
        },
        {
            id: '05',
            title: 'Create New Folders',
            para: "Securely and Promptly Revoke User Access to Data and Resources.",
            img: "/assets/features/google-drive-management/detail-5.svg",
        },
        {
            id: '06',
            title: 'Share Files',
            para: "Easily Manage and Delete Calendar Events, Ensuring Up-to-Date.",
            img: "/assets/features/google-drive-management/detail-6.svg",
        },
    ]

    return (
        <>
            <PageLayout
                pageTitle1={'Google Drive'} 
                pageTitle2={'Management'}
                pagePara={"The only tool you'll ever need to streamline your Google Workspace management."} 
                imgSrc={'google-drive-management.svg'}
                >

                <VideoPlayer videoId="POIX6FiWaN0" videoCover={"/assets/features/google-drive-management/video-cover.png"}/> 

                <FeatureDetailTitle
                    sectionTitle1="Google Drive Management"    
                    sectionTitle2="For Google Workspace"
                    sectionPara="Are you struggling to manage your data in Google drive and looking for an optimum solution for Google drive management? Then Patronum is the right solution for you."
                    sectionParaBig="Google drive management solutions from Patronum allows IT administration to see Google drive in a whole different way. Allows IT administrators to see Google Drive in a whole different way."
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
                                <InstallBlackButton btnText="Install Patronum"/>
                            </div>
                        </div>
                    </div>    
                </section>

                <Faqs featureName="on_boarding"/>

            </PageLayout>

        </>
    )
}