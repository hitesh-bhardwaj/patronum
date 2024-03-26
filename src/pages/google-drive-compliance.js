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
            title: 'identify personal access',
            para: "In addition to sharing contacts across all your users within your company Google Workspace domain and sub-domains, you can also share and interact with customers and partners by sharing your Google Contacts outside of your Google Workspace domain.",
            img: "/assets/features/google-drive-compliance/main-1.svg",
        },
        {
            title: 'Shared With Link',
            para: "Google contact sharing enables the best features for you and to manage your contacts. Patronum is smoothly integrated into Google Workspace, Gmail and Google Contacts. Our Google Chrome extension gives users the best possible experience when it comes to managing and sharing contacts with co-workers.",
            img: "/assets/features/google-drive-compliance/main-2.svg",
        },
        {
            title: 'external access control',
            para: "Patronum is built on a global scale technical infrastructure designed to provide security throughout. We have invested heavily in securing our infrastructure and we have engineers dedicated to keeping your data and information secure and private.",
            img: "/assets/features/google-drive-compliance/main-3.svg",
        },
        {
            title: 'Anyone Can Find And Access',
            para: "In Google contact sharing your Google Contacts are updated automatically across various platforms: Desktop, Mobile, Tablet or Microsoft Outlook. Users get instant access to contacts across different devices automatically.",
            img: "/assets/features/google-drive-compliance/main-4.svg",
        },
    ]

    const featuresDetailCard = [
        {
            id: '01',
            title: 'Unshare Files',
            para: "Effortlessly Manage and Automate Google Group Memberships.",
            img: "/assets/features/google-drive-compliance/detail-1.svg",
        },
        {
            id: '02',
            title: 'Advance Filtering',
            para: "Empower Specific Users with Controlled Access to Manage Others' Google.",
            img: "/assets/features/google-drive-compliance/detail-2.svg",
        },
        {
            id: '03',
            title: 'File Search',
            para: "Simplify and Streamline the Sharing of Calendars within your Organisation.",
            img: "/assets/features/google-drive-compliance/detail-3.svg",
        },
        {
            id: '04',
            title: 'External Access',
            para: "Utilise Ready-Made Policy Templates for Quick and Efficient.",
            img: "/assets/features/google-drive-compliance/detail-4.svg",
        },
        {
            id: '05',
            title: 'Shared Drives',
            para: "Securely and Promptly Revoke User Access to Data and Resources.",
            img: "/assets/features/google-drive-compliance/detail-5.svg",
        },
        {
            id: '06',
            title: 'Internal Access',
            para: "Easily Manage and Delete Calendar Events, Ensuring Up-to-Date.",
            img: "/assets/features/google-drive-compliance/detail-6.svg",
        },
    ]

    return (
        <>
            <PageLayout
                pageTitle1={'Google Drive'} 
                pageTitle2={'Compliance'}
                pagePara={"The only tool you'll ever need to streamline your Google Workspace management."} 
                imgSrc={'google-drive-compliance.svg'}
                >


                <VideoPlayer videoId="POIX6FiWaN0" videoCover={"/assets/features/google-drive-compliance/video-cover.png"} /> 

                <FeatureDetailTitle
                    sectionTitle1="Google Drive Compliance"    
                    sectionTitle2="For Google Workspace"
                    sectionPara="With Google Drive and Google Docs collaboration is simply a click away, however with that simplicity company data can quickly become unmanageable and a risk."
                    sectionParaBig="Company information is often shared widely between employees, departments and external organisations, from suppliers to customers."
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