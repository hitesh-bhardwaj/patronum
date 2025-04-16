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
            title: 'Seamless Gmail Integration',
            para: "Patronum's seamless integration with Google Workspace, Gmail, and Google Contacts revolutionizes contact management by embedding directly into your daily tools. With a user-friendly Google Chrome extension, managing and sharing contacts becomes a natural part of your workflow, eliminating the need to switch between applications. This integration not only streamlines operations but also enhances the efficiency of communication within teams, ensuring that everyone has access to the most updated contact information without extra effort. Experience the power of a unified system that keeps your contacts synchronized, whether you're sending emails, scheduling meetings, or collaborating on projects.",
            img: "/assets/features/contact-sharing/main-1.svg",
        },
        {
            title: 'Universal Sync, Effortless Access',
            para: "The hassle of manually updating contact information across different devices and platforms is a thing of the past. Whether you're working from your desktop at the office, checking emails on your mobile device, or scheduling meetings via your tablet or even Microsoft Outlook, Patronum guarantees that your contacts are automatically synced and up to date. This universal synchronization ensures that you and your team have effortless access to essential contacts at any time, fostering seamless communication and collaboration across your organization.",
            img: "/assets/features/contact-sharing/main-2.svg",
        },
        {
            title: 'Unparalleled Control with User-Level Permissions',
            para: "Elevate your contact management with sophisticated user-level permissions for your Google Address Book. This feature allows you to define exactly how contacts are shared and managed within your organization, offering options like 'Can Edit,' 'Can Delete,' and 'Read Only.' Inspired by the intuitive permissions model used in Google Docs, Patronum makes it incredibly easy to customize access according to each team member's needs, ensuring that your contact information is handled securely and efficiently.",
            img: "/assets/features/contact-sharing/main-3.svg",
        },
        {
            title: 'Uncompromised Security',
            para: "Patronum leverages a robust global technical infrastructure designed to protect your data at every level. With a dedicated team of engineers focused on maintaining and advancing security measures, Patronum ensures that your contacts and shared information remain private and secure. This commitment to security means you can trust Patronum to handle your most sensitive contact information, providing you with the confidence to manage and share data without risking privacy breaches or unauthorized access.",
            img: "/assets/features/contact-sharing/main-5.svg",
        },
        {
            title: 'In-Depth Logging for Total Transparency',
            para: "Patronum's advanced logging feature offers unparalleled transparency into the contact sharing activities within your organization. With comprehensive logs, administrators can monitor and track every update and sharing action, gaining valuable insights into how information is circulated. This level of oversight allows for improved governance and compliance, ensuring that contact sharing adheres to organizational policies and standards. ",
            img: "/assets/features/contact-sharing/main-6.svg",
        },
    ]

    const featuresDetailCard = [
        {
            id: '01',
            title: 'Unlimited Shared Contact Labels',
            para: "Create and share endless labels for organizing contacts.",
            img: "/assets/features/contact-sharing/detail-1.svg",
        },
        {
            id: '02',
            title: 'Unlimted Shared Contacts',
            para: "Share an unlimited number of contacts within your organization.",
            img: "/assets/features/contact-sharing/detail-2.svg",
        },
        {
            id: '03',
            title: 'User Level Permissions Management',
            para: "Assign and manage permissions for individual users on contact access.",
            img: "/assets/features/contact-sharing/detail-3.svg",
        },
        {
            id: '04',
            title: 'Mobile/Tablet & Outlook Sync',
            para: "Synchronize contacts across mobile devices, tablets, and Outlook seamlessly.",
            img: "/assets/features/contact-sharing/detail-4.svg",
        },
        {
            id: '05',
            title: 'Share with Google Groups',
            para: "Easily share contacts with specific Google Groups.",
            img: "/assets/features/contact-sharing/detail-5.svg",
        },
        {
            id: '06',
            title: 'Advanced Logging and Security Features',
            para: "Offers detailed activity logs and enhanced security measures for contact sharing.",
            img: "/assets/features/contact-sharing/detail-8.svg",
        },
    ]

    return (
        <>
            <PageLayout
                pageTitle1={'Google Contact'}
                pageTitle2={'Sharing'}
                pagePara={"Unified Contact Sharing for Powerful & efficient collaboration"}
                imgSrc={'contact-sharing.svg'}
                title={"Google Contacts Sharing & Management with Patronum"}
                description={"Patronum's app seamless integration with Google Workspace, Gmail, and Google Contacts revolutionizes contact management by embedding directly into your daily tools. Lets the users use Google / Gmail Contact with Patronum."}
                url={"google-contact-sharing"}
                img={"contact-sharing.jpg"}
                date_published={"2020-12-21T13:41"}
                date_modified={"2024-04-04T12:00"}
                keywords={"google contact sharing,Google Workspace contact sharing"}
                breadcrumbTitle={"Features"}
                breadcrumbLink={"features"}
            >

                <VideoPlayer disabled={false} videoId="ibhxOj9-qGQ" videoCover={"/assets/features/contact-sharing/video-cover.webp"} />

                <FeatureDetailTitle
                    sectionTitle1="Contact Sharing"
                    sectionTitle2="For Google Workspace"
                    sectionPara="Patronum is the only enterprise-ready application designed for contact sharing within Google Workspace."
                    sectionParaBig="Patronum facilitates contact sharing in Google Workspace by streamlining contact group creation, ensuring your team always has access to the most current and relevant contact information. Seamless daily syncs with Google Contacts keep your entire organization connected and up-to-date."
                />

                <FeatureDetailInfo content={featuresDetail} />
                <Transform text={"Connect Seamlessly with Smart Contact Sharing!"} content={"Never lose a lead or contact again. Facilitate efficient communication by sharing contacts with the right people—always synced, always secure."} />

                <SectionBreak
                    sectionBreakText="With Patronum, users gain access to unlimited contact labels and sharing capabilities, along with effortless synchronization across Outlook and various devices. It stands as a singular solution for navigating the complexities of Google contact sharing, enhancing connectivity within and beyond your organization."
                />

                <FeatureDetailCards title1={'Additional Google Contact'} title2={'Sharing Features'} content={featuresDetailCard} />

                <Faqs featureName="contact_sharing" />

            </PageLayout>

        </>
    )
}