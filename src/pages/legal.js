import PageLayout from "@/components/PageLayout";
import LinkButton from "@/components/Buttons/LinkButton";

export default function Legal() {

    const legalContent = [
        {
            id: '01',
            title: "Master Subscription Agreement",
            img: "master-subscription-agreement",
            link: "https://docs.google.com/document/d/1w_SjHlAx6H31A0AYARI_lVhHxDh-CZKWertRKANQT-U/edit?pli=1",
            taregt: "_blank"
        },
        {
            id: "02",
            title: "Standard Contractual Clauses", 
            img: "standard-contractual-clauses",
            link: "https://docs.google.com/document/d/1C3PqmGvh1jItmMvN2FrL13V8V-rOestnw0QkWkNFIvc/edit?pli=1#heading=h.l01ylpj06ssx",
            taregt: "_blank"
        },
        {
            id: "03",
            title: "Data Processing Agreement",
            img: "data-processing-agreement",
            link: "https://docs.google.com/document/d/1v197Nm8LzqHIRTx4pQEVAGlENpr0t8yFIyVAg48mNH4/edit#heading=h.gjdgxs",
            taregt: "_blank"
        },
        {
            id: "04",
            title: "Standard Terms and Conditions",
            img: "standard-terms-and-conditions",
            link: "https://docs.google.com/document/d/19ie2gkbs2fv2kQ6gwyPwaEYpU2mg4t0eyvSKNgDF-bE/edit",
            taregt: "_blank"
        },
        {
            id: "05",
            title: "Partner Agreement",
            img: "partner-agreement",
            link: "https://docs.google.com/document/d/1UfaCFOtQfOLWkHHmR0p0iAHWqG7xEuh4ESWj5cCvy2c/edit#heading=h.30j0zll",
            taregt: "_blank"
        },
        {
            id: "06",
            title: "Responsible Purchasing Charter",
            img: "responsible-purchasing-charter",
            link: "https://docs.google.com/document/d/1CiuKk2u9WV7z8G7Puiejs2tRVhsIZWp2OSm3L3AUVnQ/edit?tab=t.0",
            taregt: "_blank",
        },
        {
            id: "07",
            title: "Anti-slavery and Human Trafficking Statement",
            img: "anti-slavery-and-human-trafficking",
            link: "https://docs.google.com/document/d/1mb7Rh5glrBbqTv_zYSQs9eniASpQp9OLq4vAojohGY4/edit?tab=t.0",
            taregt: "_blank",
        },
        {
            id: "08",
            title: "Cookie Policy",
            img: "cookie-policy",
            link: "/cookie-policy",
            taregt: "_self"
        },
        {
            id: "09",
            title: "Privacy Policy",
            img: "privacy-policy",
            link: "/privacy-policy",
            taregt: "_self",
        },
        {
            id: "10",
            title: "Environmental Policy",
            img: "environmental-policy",
            link: "/environmental-policy",
            taregt: "_self",
        }
    ]

    return (
        <>
            <PageLayout
                pageTitle1="Legal"
                pagePara="Navigate & Understand Your Rights with Patronum"
                imgSrc="legal.svg"
                title={"Legal- Patronum"}
                description={"Legal - Patronum: Stay informed about your rights and responsibilities as a Patronum user with comprehensive access to our terms of use, privacy policies, compliance documentation, and legal disclaimers."}
                url={"legal"}
                img={"homepage.jpg"}
                date_published={"2020-12-21T12:00"}
                date_modified={"2024-04-04T12:00"}
                keywords={"Patronum Google Workspace Manager"}
            >

                <section id="second-section">
                    <div className="container">
                        <div className="content-2">
                            <div className="lg:flex items-start justify-between">
                                <h2 className="title-4xl text-anim">
                                    <span>
                                        Patronum{" "}
                                    </span>
                                    <br />
                                    <span>
                                        Legal Hub
                                    </span>
                                </h2>
                                <p className="content-p lg:w-1/3 w-[95%] lg:mt-[1vw] mt-[5vw] text-anim-2">
                                    <span>
                                        Stay informed about your rights and responsibilities as a Patronum user with comprehensive access to our terms of use, privacy policies, compliance documentation, and legal disclaimers.
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="legal">
                    <div className="container">
                        <div className="content">
                            <div className="legal-cards-wrapper">
                            {legalContent.map((item, index) => (
                                <LegalCard
                                    key={index}
                                    id={item.id}
                                    title={item.title}
                                    link={item.link}
                                    img={item.img}
                                    target={item.taregt}
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

const LegalCard = ({ link, img, title, id, target }) => {
    return (
        <div className="legal-card fadeUp group">
            <div className="cards-num">
                <span className="aeonik">
                    {id}
                </span>
            </div>
            <div className="img group-hover:scale-[1.05] duration-300">
                <img
                    src={`/assets/legal/${img}.svg`}
                    alt={title}
                    title={title}
                />
            </div>
            <div className="info">
                <span className="hr-1p" />
                <h3 className="title-2xl aeonik">
                    {title}
                </h3>
                <span className="hr-1p" />
                <LinkButton
                    href={link} btnText="Read More" target={target} className="link-btn"
                />
            </div>
        </div>
    )
}