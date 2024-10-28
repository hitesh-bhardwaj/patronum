import Faqs from "@/components/PageComponents/FeaturesPage/Faq";
import UseCaseCard from "@/components/PageComponents/UseCasePage/UseCaseCard";
import PageLayout from "@/components/PageLayout";
import SectionTitle from "@/components/PageLayout/SectionTitle";
import Head from "next/head";

const UseCasesInfo = [
    {
        id: "01",
        para: "Navigating Google Workspace administration is a daunting task for businesses, big or small. IT managers often juggle with the laborious task of manually onboarding and offboarding users. Large enterprises struggle with enforcing strategic policies across subsidiaries, while SMEs grapple with managing Google Workspace efficiently without deep Google knowledge.",
        img: "/assets/useCases/business/main1.svg",
    },
    {
        id: "02",
        para: "The challenge intensifies with the need to automate tasks without sacrificing control or compliance. In large organizations, IT teams are under pressure to deploy tailored environments rapidly for each franchise or subsidiary, ensuring data security and policy adherence. For SMEs, executives are in dire need of tools that empower them with easy-to-use interfaces for robust data management and compliance, without being Google experts.",
        img: "/assets/useCases/business/main2.svg",
    },
    {
        id: "03",
        para: "This is where Patronum steps in as a linchpin for business optimization. Patronum is not just a tool but a gateway to uncomplicated Google Workspace management, meticulously designed to automate critical processes like user onboarding and offboarding, drive management, contact sharing, and email signature curation. With Patronum, IT managers can breathe life into policies that ripple effectively organization-wide.",
        img: "/assets/useCases/business/main3.svg",
    }
]

export default function UseCasesDetail() {

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
                                        "name": "What unique features does Patronum offer for large businesses using Google Workspace?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "Patronum provides organization-wide policy automation, allowing for Google Drive management and email signature standardization, enhancing consistency and brand integrity."
                                        }
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "How can Patronum improve onboarding efficiency for enterprises?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "Patronum automates the entire user onboarding process, from account creation to resource allocation, saving time and ensuring new hires are ready to go from day one."
                                        }
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "What solutions does Patronum offer for data compliance and file management?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "With automated file unsharing and compliance, Patronum ensures sensitive information is protected and data governance policies are consistently applied."
                                        }
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "Can Patronum assist with offboarding in Google Workspace?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "Yes, Patronum can automate offboarding tasks such as transferring file ownership and revoking access, ensuring a secure and comprehensive offboarding process."
                                        }
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "How does Patronum handle the complexity of managing multiple subsidiaries or franchises?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "Patronum enables IT professionals to quickly set up a Google Workspace environment with pre-agreed policies, tailored for each subsidiary or franchise’s needs."
                                        }
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "Is Patronum suitable for SMEs with limited IT expertise?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "Absolutely, Patronum's intuitive interface is designed for users who may not be well-versed in Google Workspace, simplifying management without the need for in-depth technical knowledge."
                                        }
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "What benefits does Patronum provide for day-to-day business operations?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "Patronum enhances daily operations by providing contact sharing and intelligent email signature management, facilitating better communication and marketing alignment."
                                        }
                                    }
                                ]
                            }
                        )
                    }}
                />
            </Head>
            <PageLayout
                pageTitle1={'Patronum'}
                pageTitle2={'for Business'}
                pagePara={"Tailored Google Workspace Management for Forward-Thinking Companies"}
                imgSrc={'use-cases_business.svg'}
                title={"Patronum for Business - Patronum"}
                description={"Patronum for Business empowers companies with smart automation and a sophisticated interface, cutting through technical challenges to ensure effective digital workspace governance."}
                url={"patronum-for-business"}
                img={"patronum-for-business.jpg"}
                date_published={"2023-04-20T12:00"}
                date_modified={"2024-04-04T12:00"}
                keywords={"Google Workspace"}
            >

                <section id="second-section">
                    <div className="container">
                        <div className="content-2">
                            <SectionTitle
                                sectionTitle1="Use Cases:"
                                sectionTitle2="Patronum for Business"
                                sectionPara="Patronum’s smart automation and sophisticated interface empower businesses to cut through the technical morass and find a clear path toward effective digital workspace governance."
                            />
                            <div className="useCases-Info">
                                {UseCasesInfo.map((usecase, index) => (
                                    <UseCaseCard
                                        key={index}
                                        para={usecase.para}
                                        imgSrc={usecase.img}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                <Faqs featureName="patronum_for_business" />

            </PageLayout>
        </>
    )
}