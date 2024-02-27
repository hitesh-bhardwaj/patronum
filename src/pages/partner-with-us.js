import PageLayout from "@/components/PageLayout";
import LinkButton from "@/components/PageLayout/Button/LinkButton";
import SectionTitle from "@/components/PageLayout/SectionTitle";

export default function Partners() {

    const partnerDetails = [
        {
            id: "01",
            title: "Sales Support",
            para: "At Patronum, we’re committed to providing personalised support to our clients and partners. As a partner you will be given access to exclusive pricing and annual repeating revenue. Whether you need assistance with sales or presales technical issues, or simply want a team member to join your meeting, we’re here to help in any way possible.",
            img: "/assets/partners/sales-support.svg"
        },
        {
            id: "02",
            title: "Leads",
            para: "If we find we are speaking with one of your customers or require a local point of contact, we’ll be sure to reach out to you to get you engaged. At Patronum, we value our partnerships and believe in working closely with our resellers to ensure our clients receive the best service possible.",
            img: "/assets/partners/leads.svg"
        },
        {
            id: "03",
            title: "Training And Technical Support",
            para: "Patronum is designed to be intuitive and user-friendly, with a number of instructional videos available to help you get started. However, we understand that everybody has unique needs, and we’re here to provide support wherever it’s needed to ensure that your entire team is up to speed with Patronum.",
            img: "/assets/partners/training-and-technical-support.svg"
        },
        {
            id: "04",
            title: "Avoid Google Apps Manager (GAM)",
            para: "If your organization has a technical expert who uses GAM, partnering with Patronum can save you time and effort by avoiding the need to set up a GAM client, create and test command scripts, and mitigate any risks of potential damage to your client’s Workspace environment.",
            img: "/assets/partners/avoid-gam.svg"
        },
        {
            id: "05",
            title: "Patronum Community",
            para: "At Patronum, we believe that feedback is crucial to improving our solutions and providing the best possible service to our partners and clients. Whether you have ideas for improving our software or simply want to share your thoughts on your experience working with us, we’re always eager to hear from you.",
            img: "/assets/partners/patronum-community.svg"
        },
    ]

    const PartnerCard = ( { title, id, imgSrc, para } ) => {
        return (
            <>
                <div className="section-list-item">
                    <div className="section-list-head">
                        <div className="cards-num">
                            <span>
                                {id}
                            </span>
                        </div>
                        <h3 className="title-3xl">
                            <span>
                                {title}
                            </span>
                        </h3>
                    </div>
                    <span className="hr-1p"/>
                    <div className="section-list-body">
                        <div className="section-list-body-right">
                            <p className="content-p">
                                {para}
                            </p>
                        </div>
                        <div className="section-list-body-left">
                            <img loading="lazy" src={imgSrc} alt={title} title={title}/>
                        </div>
                    </div>
                </div>
            </>
        )
    }

    return (
        <>
            <PageLayout
                pageTitle1="Partner"
                pageTitle2="With Us"
                pagePara="Join forces with Patronum! Let’s redefine efficiency and productivity together!"
                imgSrc="partner-with-us.svg"
            >

                <section id="second-section">
                    <div className="container">
                        <div className="content-2">
                            <div className="flex items-start justify-between">
                                <SectionTitle
                                    sectionTitle1="Partner"
                                    sectionTitle2="With Patronum"
                                />
                                <p className="content-p w-1/3 mt-[1vw]">
                                    Transform your Google Workspace experience with Patronum, the ultimate solution to your onboarding nightmares, permission hassles, and data compliance woes. Patronum is designed to streamline the management of Google Workspace.
                                </p>
                            </div>
                            <div className="partner-card-link">
                                <div className="partner-card">
                                    <img className="img" src="/assets/partners/icon-1.svg" alt="become-partner" title="Become Partner" />
                                    <h3 className="title-2xl">
                                        Become a Partner
                                    </h3>
                                    <p className="content-p">
                                        If you're currently selling and supporting Google Workspace, partnering with Patronum can help you deliver even more value and service to your clients.
                                    </p>
                                    <LinkButton link="#" btnText="Become a Partner"/>
                                </div>

                                <div className="partner-card">
                                    <img className="img" src="/assets/partners/icon-2.svg" alt="register-an-opportunity" title="Register an opportunity" />
                                    <h3 className="title-2xl">
                                        Register an Opportunity
                                    </h3>
                                    <p className="content-p">
                                        Does your customer need Patronum? As a Patronum reseller partner or a referral source, you can register opportunities for your customers through our website.
                                    </p>
                                    <LinkButton link="#" btnText="Register an Opportunity"/>
                                </div>

                                <div className="partner-card">
                                    <img className="img" src="/assets/partners/icon-3.svg" alt="refer-customer" title="Refer a Customer" />
                                    <h3 className="title-2xl">
                                        Refer a Customer
                                    </h3>
                                    <p className="content-p">
                                        Even if you're not a Patronum reseller partner, you can still refer a customer and earn commission on a completed sale. We welcome referrals from anyone.                                    </p>
                                    <LinkButton link="#" btnText="Refer a Customer"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="second-section">
                    <div className="container">
                        <div className="content">
                            <SectionTitle
                                sectionTitle1="Patronum"
                                sectionTitle2="Partner Benefits"
                                sectionPara="Patronum redefines user lifecycle management by providing a consistent and unified experience within Google Workspace while significantly reducing IT expenditure in managing users and resources."
                            />

                            <div className="partner-info-wrapper">
                                {partnerDetails.map((item, index) => (
                                    <PartnerCard 
                                        key={index}
                                        title={item.title}
                                        para={item.para}
                                        imgSrc={item.img}
                                        id={item.id}
                                    />
                                ))}
                            </div>
                        
                        </div>
                    </div>
                </section>

            </PageLayout>
        </>
    )
}