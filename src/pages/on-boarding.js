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
                                        "name": "What is automated user onboarding and offboarding in Google Workspace?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "Automated user onboarding and offboarding in Google Workspace, as facilitated by Patronum, involves streamlining the addition and removal of users. This process includes setting up user accounts, email configurations, access permissions, revoking these accesses and archiving data when users leave, all done automatically to enhance efficiency and security."
                                        }
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "Can Patronum handle role-based access control during onboarding?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "Yes, Patronum can manage role-based access control during onboarding. It assigns Google Workspace access and permissions based on specific job roles or departments, ensuring that each user has the appropriate level of access from day one."
                                        }
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "How does Patronum ensure security during the offboarding process?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "During offboarding, Patronum secures company data by revoking the departing employee's access to Google Workspace tools and services. It also ensures that all sensitive data is either transferred to a designated person or securely archived, preventing unauthorised access."
                                        }
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "Is it possible to customise onboarding workflows with Patronum?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "Yes, Patronum offers customisable onboarding workflows. Organizations can tailor these processes to meet their specific requirements, ensuring that every new employee's onboarding experience aligns with organizational protocols and needs."
                                        }
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "How does Patronum integrate with existing IDaaS providers for user management?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "Patronum seamlessly integrates with major IDaaS providers like Okta and OneLogin. It complements these services by picking up where they left off, providing additional user management functionalities specific to Google Workspace."
                                        }
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "Can Patronum automate email setup and signature configuration for new users?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "Absolutely, Patronum automates the email setup process for new users, including configuring email accounts and standardising email signatures according to the organization's branding guidelines."
                                        }
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "Does Patronum support bulk user onboarding and offboarding?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "Yes, Patronum supports bulk user onboarding and offboarding, allowing organizations to efficiently manage large-scale additions or removals of users in Google Workspace."
                                        }
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "How does Patronum manage mobile device access during offboarding?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "Patronum manages mobile device access during offboarding by wiping company data from the employee's mobile devices or revoking access to ensure that sensitive information remains secure."
                                        }
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "Can Patronum automate the transfer of files and documents to new users?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "Yes, Patronum can automate the transferring of necessary files and documents to new users. It ensures that new employees have immediate access to all the required resources, streamlining their integration into the organization."
                                        }
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "What reporting features does Patronum offer for onboarding and offboarding activities?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "Patronum provides comprehensive reporting features for onboarding and offboarding activities. These include detailed logs and audits of all user management actions, offering transparency and aiding in compliance and security monitoring."
                                        }
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "How does Patronum handle user data backup during offboarding?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "Patronum ensures that all user data, including emails, documents, and calendar information, is securely backed up during offboarding. This process allows for the safe archiving of important data, which can be accessed or transferred as needed, ensuring that no critical information is lost when a user leaves the organization."
                                        }
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "Can Patronum manage automatic group memberships for new users?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "Yes, Patronum can automatically manage group memberships for new users. Based on predefined criteria such as department, role, or location, Patronum can add new users to relevant Google Groups, ensuring they have immediate access to necessary communication channels and resources."
                                        }
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "Is it possible to schedule future onboarding or offboarding actions with Patronum?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "Patronum allows for the scheduling of future onboarding or offboarding actions. This feature enables IT administrators to plan and execute user management tasks in advance, aligning with the employee's start or end date, thereby streamlining the workflow."
                                        }
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "How does Patronum assist in maintaining compliance during user management?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "Patronum assists in maintaining compliance by automating the management of user permissions and access, ensuring adherence to data protection and privacy regulations. It provides detailed logs and reports of user activities, which are crucial for audit trails and compliance checks."
                                        }
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "Can Patronum facilitate the transfer of responsibilities during offboarding?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "Yes, during offboarding, Patronum can facilitate the transfer of responsibilities and ownership of files, documents, and tasks from the departing employee to other team members. This ensures a smooth transition and continuity of work without disrupting ongoing projects or operations."
                                        }
                                    }
                                ]
                            }
                        )
                    }}
                />

            </Head>
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
            >

                <VideoPlayer disabled={false} videoId="POIX6FiWaN0" videoCover={"/assets/features/onboarding/video-cover.webp"} />

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

                            <div className="section-btn-container">
                                <InstallBlackButton btnText="Install Patronum" />
                            </div>
                        </div>
                    </div>
                </section>

                <Faqs featureName="on_boarding" />

            </PageLayout>
        </>
    )
}