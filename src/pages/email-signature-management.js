import FeatureDetailInfo from "@/components/PageComponents/FeaturesPage/FeatureDetailInfo";
import FeatureDetailTitle from "@/components/PageComponents/FeaturesPage/FeatureDetailTitle";
import PageLayout from "@/components/PageLayout";
import SectionBreak from "@/components/PageLayout/SectionBreak";
import VideoPlayer from "@/components/PageLayout/VideoPlayer";
import dynamic from "next/dynamic";
import FeatureDetailCards from "@/components/PageComponents/FeaturesPage/FeatureDetailCards";

const Faqs = dynamic(() => import("@/components/PageComponents/FeaturesPage/Faq"), { ssr: false });

export default function FeatureDetail() {

    const featuresDetail = [
        {
            title: 'Redefine Your Email Communication',
            para: "Unlock the power of professional Google Workspace email signatures with Patronum. Dive into the world of effortless email signature management that not only streamlines your professional communication but also solidifies your brand identity across every email sent from your organization. With Patronum, accessing managed Google Workspace email signatures becomes as simple as a click, transforming every email into a brand-building opportunity.",
            img: "/assets/features/email-signature-management/main-1.svg",
        },
        {
            title: 'Be Creative with pre-built Signature Templates',
            para: "Imagine having access to over 20 exquisite, professionally designed email signature templates that you can customize and deploy within seconds. Patronum brings this vision to life, offering a diverse range of templates that cater to your unique brand standards, ensuring consistency and elegance in your email communication.",
            img: "/assets/features/email-signature-management/main-2.svg",
        },
        {
            title: 'User-Friendly Design for Everyone',
            para: "Patronum is ingeniously designed for simplicity, making professional email signature management accessible to everyone, regardless of technical expertise. Choose your ideal template, personalize it with your brand's fonts and colors, and publish it effortlessly. It's email signature management made easy, ensuring that anyone in your organization can create stunning, professional email signatures without needing to code.",
            img: "/assets/features/email-signature-management/main-3.svg",
        },
        {
            title: 'See the Magic Before You Send',
            para: "With Patronum's innovative real-time preview feature, you can see exactly how your email signature will appear on both desktop and mobile devices. This intuitive interface allows for adjustments and customizations, ensuring that your email signature perfectly represents your brand across all user platforms within your Google Workspace domain.",
            img: "/assets/features/email-signature-management/main-4.svg",
        },
        {
            title: 'Constantly Current Signatures',
            para: "Patronum ensures that your Google Workspace users' email signatures are always current, reflecting the most up-to-date information. Should users personalize their signatures, Patronum's smart management system ensures that all signatures remain uniform and on-brand, maintaining your organization's professional image in every correspondence.",
            img: "/assets/features/email-signature-management/main-5.svg",
        },
        {
            title: 'Empower Your Marketing Team',
            para: "Grant your marketing team the autonomy they need to manage email signatures across the board. With Patronum, delegating control of email signatures is seamless, allowing your marketing experts to ensure brand consistency and leverage email signatures as a powerful marketing tool.",
            img: "/assets/features/email-signature-management/main-6.svg",
        },
        {
            title: 'Dive Deep with Advanced Customization',
            para: "For those who wish to explore beyond the templates, Patronum's advanced HTML editor offers the perfect playground. This expert mode allows administrators to craft bespoke email signatures, providing the flexibility to truly personalize and innovate your organization's email signatures.",
            img: "/assets/features/email-signature-management/main-7.svg",
        },
        {
            title: 'Simplified Integration, No IT Expertise Required',
            para: "Patronum is seamlessly integrated into your Google Workspace environment, eliminating the need for complex IT knowledge or adjustments to SMTP or SPF settings. Its plug-and-play nature means you can quickly install Patronum and start creating perfect email signatures right away, ensuring your communications are always professional and branded.",
            img: "/assets/features/email-signature-management/main-8.svg",
        },
    ]

    const featuresDetailCard = [
        {
            id: '01',
            title: 'Multiple Google Workspace email signatures',
            para: "Manage versatile email signatures tailored to various roles or departments, enhancing your organization's communication flexibility.",
            img: "/assets/features/email-signature-management/detail-1.svg",
        },
        {
            id: '02',
            title: 'Real-time update',
            para: "Instantaneously refresh email signatures across your organization to keep information up-to-date and consistent.",
            img: "/assets/features/email-signature-management/detail-2.svg",
        },
        {
            id: '03',
            title: 'Choose from pre-built signature templates',
            para: "Quickly create elegant email signatures with our selection of professionally designed templates.",
            img: "/assets/features/email-signature-management/detail-7.svg",
        },
        {
            id: '04',
            title: 'No need for IT experience or complex SMTP settings',
            para: "Quickly create elegant email signatures with our selection of professionally designed templates.",
            img: "/assets/features/email-signature-management/detail-3.svg",
        },
        {
            id: '05',
            title: 'Standardise Branding & Marketing Campaigns',
            para: "Ensure uniformity in branding and marketing efforts with consistent email signatures across your team.",
            img: "/assets/features/email-signature-management/detail-4.svg",
        },
        {
            id: '06',
            title: 'Supports “Send As” addresses',
            para: "Seamlessly manage and assign signatures for various 'Send As' addresses, accommodating different roles or aliases.",
            img: "/assets/features/email-signature-management/detail-5.svg",
        },
        {
            id: '07',
            title: 'Include Google Workspace users photo',
            para: "Add a personal touch to your email communications by incorporating Google Workspace user photos in signatures.",
            img: "/assets/features/email-signature-management/detail-6.svg",
        },

        {
            id: '08',
            title: 'Delegated Access',
            para: "Empower designated team members with the ability to update and manage email signatures, offering flexibility while retaining control.",
            img: "/assets/features/email-signature-management/detail-8.svg",
        },
    ]

    return (
        <>
            <PageLayout
                pageTitle1={'Email Signature'}
                pageTitle2={'Management'}
                pagePara={"Centrally managed Google Workspace Email Signatures for Your Brand's Professional Image"}
                imgSrc={'email-signature-management.svg'}
                title={"Gmail Email Signature Management for Google Workspace with Patronum"}
                description={"Patronum is one of the best solutions on the marketplace for email signature management as you can give your users consistent, dynamic, and centrally managed Google Workspace and Gmail signatures."}
                url={"email-signature-management"}
                img={"email-signature-management.jpg"}
                date_published={"2020-12-21T12:27"}
                date_modified={"2024-04-04T12:00"}
                keywords={"Google Workspace"}
                breadcrumbTitle={"Features"}
                breadcrumbLink={"features"}
            >

                <VideoPlayer disabled={false} videoId="HnoMlb97PjE" videoCover={"/assets/features/email-signature-management/video-cover.webp"} />

                <FeatureDetailTitle
                    sectionTitle1="Email Signature Management"
                    sectionTitle2="For Google Workspace"
                    sectionPara="Transform your email communication with Patronum’s sophisticated email signature management. This powerful feature of Patronum allows for the creation of centrally managed, dynamic, brand-aligned signatures effortlessly, even without HTML knowledge."
                    sectionParaBig="Patronum simplifies email signature management, offering features like marketing team control and an advanced HTML editor for custom designs. Integrate seamlessly into your Google Workspace without the hassle of complex settings, ensuring your team always presents a unified brand image."
                />

                <FeatureDetailInfo content={featuresDetail} />

                <SectionBreak
                    sectionBreakText="Transform how your organization presents itself with Patronum&#39;s cutting-edge email signature management. It isn’t just about how you create email signatures; it&#39;s about embodying your brand&#39;s professionalism, presenting a unified brand image and transforming every email into a brand-building opportunity."
                />

                <FeatureDetailCards content={featuresDetailCard} />

                <Faqs featureName="email_signature_management" />

            </PageLayout>

        </>
    )
}