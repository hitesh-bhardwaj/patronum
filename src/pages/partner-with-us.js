import PageLayout from "@/components/PageLayout";
import LinkButton from "@/components/PageLayout/Button/LinkButton";
import SectionTitle from "@/components/PageLayout/SectionTitle";

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
                    <div className="cards-num fadeRight">
                        <span>
                            {id}
                        </span>
                    </div>
                    <h3 className="title-3xl fadeLeft">
                        <span>
                            {title}
                        </span>
                    </h3>
                </div>
                <span className="hr-1p lineDraw"/>
                <div className="section-list-body">
                    <div className="section-list-body-right">
                        <p className="content-p fadeUp">
                            {para}
                        </p>
                    </div>
                    <div className="section-list-body-left">
                        <img loading="lazy" className="fadeUp" src={imgSrc} alt={title} title={title}/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default function Partners() {

    return (
        <>
            <PageLayout
                pageTitle1="Partner"
                pageTitle2="With Us"
                pagePara="Join forces with Patronum! Let’s redefine efficiency and productivity together!"
                imgSrc="partner-with-us.svg"
                title={"Partner With Us - Patronum"}
                description={"If you’re currently selling and supporting Google Workspace, partnering with Patronum can help you deliver even more value and service to your clients. While our software is innovative and unique, we understand the importance of expanding our reach through reseller partnerships."}
                url={"partner-with-us"}
                img={"partner-with-us.jpg"}
                date_published={"2023-05-05T12:00"}
                date_modified={"2024-04-04T12:00"}
                keywords={"partner with us"}
            >

                <section id="second-section">
                    <div className="container">
                        <div className="content-2">
                            <div className="lg:flex items-start justify-between">
                                <h2 className="title-4xl text-anim">
                                    <span>
                                        Partner{" "}
                                    </span>
                                    <br />
                                    <span>
                                        With Patronum
                                    </span>
                                </h2>
                                <p className="content-p lg:w-1/3 w-[95%] lg:mt-[1vw] mt-[5vw] text-anim-2">
                                    <span>
                                        Gain exclusive access to comprehensive training, marketing resources, and technical support with Patronum’s Partner Program and open up new opportunities to grow your business.
                                    </span>
                                </p>
                            </div>
                            
                            <div className="partner-card-link">
                                <div className="partner-card fadeUp">
                                    <img className="img" src="/assets/partners/icon-1.svg" alt="become-partner" title="Become Partner" />
                                    <h3 className="title-2xl">
                                        Become a Partner
                                    </h3>
                                    <p className="content-p">
                                        If you're currently selling and supporting Google Workspace, partnering with Patronum can help you deliver even more value and service to your clients.
                                    </p>
                                    <LinkButton link="/become-a-partner" btnText="Become a Partner"/>
                                </div>

                                <div className="partner-card fadeUp">
                                    <img className="img" src="/assets/partners/icon-2.svg" alt="register-an-opportunity" title="Register an opportunity" />
                                    <h3 className="title-2xl">
                                        Register an Opportunity
                                    </h3>
                                    <p className="content-p">
                                        Does your customer need Patronum? As a Patronum reseller partner or a referral source, you can register opportunities for your customers through our website.
                                    </p>
                                    <LinkButton link="/register-an-opportunity" btnText="Register an Opportunity"/>
                                </div>

                                <div className="partner-card fadeUp">
                                    <img className="img" src="/assets/partners/icon-3.svg" alt="refer-customer" title="Refer a Customer" />
                                    <h3 className="title-2xl">
                                        Refer a Customer
                                    </h3>
                                    <p className="content-p">
                                        Even if you're not a Patronum reseller partner, you can still refer a customer and earn commission on a completed sale. We welcome referrals from anyone.                                    </p>
                                    <LinkButton link="/refer-a-customer" btnText="Refer a Customer"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="">
                    <div className="container">
                        <div className="content">
                            <SectionTitle
                                sectionTitle1="Patronum"
                                sectionTitle2="Partner Benefits"
                                sectionPara="Patronum’s Partner Program is designed to empower businesses by offering exclusive benefits and opportunities for growth. Partners gain access to comprehensive training, marketing resources, and technical support, enhancing their ability to deliver optimized Google Workspace solutions to their clients."
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