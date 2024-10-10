import Faqs from "@/components/PageComponents/FeaturesPage/Faq";
import FeatureDetailCard from "@/components/PageComponents/FeaturesPage/FeatureDetailCard";
import FeatureDetailInfo from "@/components/PageComponents/FeaturesPage/FeatureDetailInfo";
import FeatureDetailTitle from "@/components/PageComponents/FeaturesPage/FeatureDetailTitle";
import PageLayout from "@/components/PageLayout";
import InstallBlackButton from "@/components/PageLayout/Button/InstallBlackButton";
import SectionBreak from "@/components/PageLayout/SectionBreak";
import SectionTitle from "@/components/PageLayout/SectionTitle";
import VideoPlayer from "@/components/PageLayout/VideoPlayer";
import Head from "next/head";

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
            <Head>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(
                            {
                                "@context": "https://schema.org",
                                "@type": "FAQPage",
                                "mainEntity": [
                                    {
                                        "@type": "Question",
                                        "name": "What is contact sharing in Google Workspace?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "Contact sharing in Google Workspace lets users share their Google Contacts with other team members, streamlining communication within organizations by ensuring everyone has access to necessary contact information."
                                        }
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "What are 'Contact Labels'?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "Contact Labels are tags used in Google Contacts to organize contacts into groups, making it easier to manage and share sets of contacts based on criteria like department, project, or location."
                                        }
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "What is the difference between Google Shared Contacts and Google Contacts?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "Google Contacts is a personal contact management tool, while Google Shared Contacts are those shared with other users within the Google Workspace environment, facilitated by tools like Patronum for broader access."
                                        }
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "Is contact sharing only performed by Google administrators?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "While Google administrators can set up and manage contact sharing on an organizational level, Patronum enables both administrators and end-users to share contacts within defined permissions."
                                        }
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "Can I share contacts with specific groups or teams using Patronum?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "Yes, Patronum allows users to share contacts with specific Google Groups, enabling targeted sharing that ensures the right team members have access to relevant contacts."
                                        }
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "Is it possible to sync contacts with Outlook using Patronum?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "Patronum supports syncing contacts with Outlook, ensuring that users have consistent access to their contacts across Google Workspace and Microsoft Outlook."
                                        }
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "What are user-level permissions in Patronum?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "Patronum allows administrators to set specific permissions for each user, including 'Can Edit,' 'Can Delete,' and 'Read Only,' offering precise control over who can access and modify shared contacts."
                                        }
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "Does Patronum offer unlimited contact sharing?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "Yes, Patronum provides the ability to share an unlimited number of contacts and contact labels, accommodating the needs of growing organizations with expansive networks."
                                        }
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "How do I sync my contacts with my Phone or Tablets?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "To sync your contacts with your phone or tablet, ensure your device is connected to your Google account. Patronum ensures that any changes made in Google Contacts are automatically updated across all connected devices."
                                        }
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "How immediate is the contact sync with Patronum?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "Patronum offers instant synchronization, ensuring that any updates or changes to contacts are immediately reflected across all users’ devices, maintaining up-to-date contact information organization-wide."
                                        }
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "What security features does Patronum have for contact sharing?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "Patronum includes advanced security features and logging capabilities, which protect shared contact information and provide detailed insights into sharing activities and modifications, enhancing data security and compliance."
                                        }
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "Can I manage and share contacts from my mobile device with Patronum?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "Patronum supports synchronization across mobile devices and tablets, allowing users to manage and share contacts on-the-go, ensuring they have access to important contacts from anywhere."
                                        }
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "What happens if my administrator user account is deleted?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "If an administrator account is deleted, contact sharing settings managed by that account may need to be reassigned. Patronum can help ensure continuity in contact management and sharing."
                                        }
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "What happens if a Contact Label owner is deleted?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "If a Contact Label owner is deleted, the label and its sharing permissions may be affected. Reassigning ownership before deletion can prevent disruption."
                                        }
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "How can I delegate access so another user can manage my contacts?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "With Patronum, you can assign user-level permissions, allowing specific users to manage your contacts on your behalf, ensuring efficient and secure delegation."
                                        }
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "Do you backup my contacts just in case I or someone else deletes them accidentally?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "Patronum prioritizes data security, including features for contact backup and recovery, protecting against accidental deletions and ensuring your contacts are safeguarded."
                                        }
                                    }
                                ]
                            }
                        )
                    }}
                />

            </Head>
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
            >

                <VideoPlayer disabled={false} videoId="ibhxOj9-qGQ" videoCover={"/assets/features/contact-sharing/video-cover.webp"} />

                <FeatureDetailTitle
                    sectionTitle1="Contact Sharing"
                    sectionTitle2="For Google Workspace"
                    sectionPara="Patronum is the only enterprise-ready application designed for contact sharing within Google Workspace."
                    sectionParaBig="Patronum facilitates contact sharing in Google Workspace by streamlining contact group creation, ensuring your team always has access to the most current and relevant contact information. Seamless daily syncs with Google Contacts keep your entire organization connected and up-to-date."
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
                    sectionBreakText="With Patronum, users gain access to unlimited contact labels and sharing capabilities, along with effortless synchronization across Outlook and various devices. It stands as a singular solution for navigating the complexities of Google contact sharing, enhancing connectivity within and beyond your organization."
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
                                <InstallBlackButton btnText="Install Patronum" />
                            </div>
                        </div>
                    </div>
                </section>

                <Faqs featureName="contact_sharing" />

            </PageLayout>

        </>
    )
}