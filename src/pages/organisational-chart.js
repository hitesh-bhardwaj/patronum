import FeatureDetailInfo from "@/components/PageComponents/FeaturesPage/FeatureDetailInfo";
import FeatureDetailTitle from "@/components/PageComponents/FeaturesPage/FeatureDetailTitle";
import Transform from "@/components/PageComponents/FeaturesPage/Transform";
import PageLayout from "@/components/PageLayout";
import SectionBreak from "@/components/PageLayout/SectionBreak";
import VideoPlayer from "@/components/PageLayout/VideoPlayer";
import dynamic from "next/dynamic";

const Faqs = dynamic(() => import("@/components/PageComponents/FeaturesPage/Faq"), { ssr: false });

export default function FeatureDetail() {

    const featuresDetail = [
        {
            title: 'Easy to use',
            para: "Patronum's Organizational Chart is designed with the user in mind, utilizing Google Material Design to ensure a seamless and familiar experience across Google Workspace. This intuitive interface makes navigating and understanding your organization's structure straightforward and hassle-free, even for new users. It's all about enhancing usability without the learning curve, integrating smoothly with the tools your team already uses every day.",
            img: "/assets/features/organisational-chart/main-1.svg",
        },
        {
            title: 'Custom Schema',
            para: "The power of Patronum lies in its ability to utilize the native Google Directory's custom schema, enabling users to quickly and effortlessly find and locate colleagues based on specific attributes like skills or languages. This feature not only simplifies the search process but also adds a layer of customization to how you view and interact with your organization's directory, making it a breeze to connect with the right people.",
            img: "/assets/features/organisational-chart/main-2.svg",
        },
        {
            title: 'Hierarchical Display',
            para: "Discover a new perspective on your organization with Patronum's hierarchical display. This feature visually represents the structure of your company, allowing you to see the relationships and hierarchies within your team at a glance. It's an invaluable tool for understanding how departments and individuals fit together within the larger organizational puzzle.",
            img: "/assets/features/organisational-chart/main-3.svg",
        },
        {
            title: 'Direct Reports',
            para: "Understanding the reporting relationships within your organization is crucial. With Patronum, you can easily view direct reports, providing clear insight into who reports to whom. This feature is essential for managers and leaders to manage their teams effectively, offering a straightforward view of organizational reporting lines.",
            img: "/assets/features/organisational-chart/main-4.svg",
        },
        {
            title: 'Unlock Talent',
            para: "Patronum turns the Google Directory into a powerful tool to uncover the hidden talent within your organization. By searching for specific attributes such as skills, language, and qualifications, you can identify and leverage the unique capabilities of your workforce. This feature not only helps in finding the right person for the job but also in recognizing and utilizing the diverse talents within your company.",
            img: "/assets/features/organisational-chart/main-5.svg",
        },
        {
            title: 'Improved Collaboration',
            para: "Enhance collaboration within your organization with Patronum's search functionality. Find a colleague and connect with them via phone, email, or Google Meet directly from within the platform. This feature simplifies communication, making it easier to collaborate on projects, share ideas, and maintain connectivity, regardless of physical location.",
            img: "/assets/features/organisational-chart/main-6.svg",
        },
    ]

    return (
        <>
            <PageLayout
                pageTitle1={'Organizational'}
                pageTitle2={'Chart'}
                pagePara={"Foster a Cohesive Culture by Navigating Organizational Relationships with Ease."}
                imgSrc={'organisational-chart.svg'}
                title={"Google Workspace Organization Hierarchy Chart: Find Your Team Structure With Patronum"}
                description={"Find and manage your organization's hierarchy with the Patronum Org Chart and People Finder. Use Patronum Org Chart and Org Chart Finder to collaborate and understand team structures."}
                url={"organisational-chart"}
                img={"organisational-chart.jpg"}
                date_published={"2020-12-21T12:00"}
                date_modified={"2024-04-04T12:00"}
                keywords={"Organisational Chart"}
                breadcrumbTitle={"Features"}
                breadcrumbLink={"features"}
            >

                <VideoPlayer disabled={true} videoCover={"/assets/features/organisational-chart/video-cover.webp"} />

                <FeatureDetailTitle
                    sectionTitle1="Organizational Chart"
                    sectionTitle2="For Google Workspace"
                    sectionPara="Find, collaborate and better understand the hierarchy within your organization through the Patronum Organizational Chart and People Finder."
                    sectionParaBig="Patronum's 'Organizational Chart' feature simplifies navigation throughout the organization, making it easier for employees to understand their place within the company hierarchy and how they connect with their colleagues."
                />

                <FeatureDetailInfo content={featuresDetail} />
                <Transform text={"Visualise Your Team. Empower Your People!"} content={"Bring clarity to your workforce. Patronum's live org chart helps teams understand roles, relationships, and reporting lines to improve collaboration."}/>

                <SectionBreak
                    sectionBreakText="Patronum's 'Organizational Chart' feature is designed to support seamless onboarding, promote transparency, and facilitate collaboration, thereby improving decision-making and fostering a more cohesive organizational culture."
                />

                <Faqs featureName="organizational_chart" />

            </PageLayout>

        </>
    )
}