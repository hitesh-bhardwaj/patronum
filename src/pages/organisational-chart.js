import Faqs from "@/components/PageComponents/FeaturesPage/Faq";
import FeatureDetailInfo from "@/components/PageComponents/FeaturesPage/FeatureDetailInfo";
import FeatureDetailTitle from "@/components/PageComponents/FeaturesPage/FeatureDetailTitle";
import PageLayout from "@/components/PageLayout";
import SectionBreak from "@/components/PageLayout/SectionBreak";
import VideoPlayer from "@/components/PageLayout/VideoPlayer";

export default function FeatureDetail(){

    const featuresDetail = [
        {
            title: 'Easy to use',
            para: "In addition to sharing contacts across all your users within your company Google Workspace domain and sub-domains, you can also share and interact with customers and partners by sharing your Google Contacts outside of your Google Workspace domain.",
            img: "/assets/features/organisational-chart/main-1.svg",
        },
        {
            title: 'Custom Schema',
            para: "Google contact sharing enables the best features for you and to manage your contacts. Patronum is smoothly integrated into Google Workspace, Gmail and Google Contacts. Our Google Chrome extension gives users the best possible experience when it comes to managing and sharing contacts with co-workers.",
            img: "/assets/features/organisational-chart/main-2.svg",
        },
        {
            title: 'Hierarchical Display',
            para: "Patronum is built on a global scale technical infrastructure designed to provide security throughout. We have invested heavily in securing our infrastructure and we have engineers dedicated to keeping your data and information secure and private.",
            img: "/assets/features/organisational-chart/main-3.svg",
        },
        {
            title: 'Direct Reports',
            para: "In Google contact sharing your Google Contacts are updated automatically across various platforms: Desktop, Mobile, Tablet or Microsoft Outlook. Users get instant access to contacts across different devices automatically.",
            img: "/assets/features/organisational-chart/main-4.svg",
        },
        {
            title: 'Unlock Talent',
            para: "With Patronum you are in control of your Google Addressbook. Share contact labels with other users and assign permissions such as “Can Edit”, “Can Delete” and “Read Only”. Our interface is based on the same permissions model used within Google Docs making it super easy to understand and deploy.",
            img: "/assets/features/organisational-chart/main-5.svg",
        },
        {
            title: 'Improved Collaboration',
            para: "Patronum provides administrators with an extensive logging feature which gives them the power to monitor and keep a track of updates to contact sharing throughout the whole system. See who is sharing what and to whom.",
            img: "/assets/features/organisational-chart/main-6.svg",
        },
    ]

    return (
        <>
            <PageLayout
                pageTitle1={'Organisational'} 
                pageTitle2={'Chart'}
                pagePara={"The only tool you'll ever need to streamline your Google Workspace management."} 
                imgSrc={'organisational-chart.svg'}
                >

                <VideoPlayer videoId="POIX6FiWaN0" videoCover={"/assets/features/organisational-chart/video-cover.png"}/> 

                <FeatureDetailTitle
                    sectionTitle1="Organisational Chart"    
                    sectionTitle2="For Google Workspace"
                    sectionPara="Find, collaborate and better understand the hierarchy within your organisation through the Patronum Organisational Chart and People Finder."
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

            <Faqs featureName="on_boarding"/>

            </PageLayout>

        </>
    )
}