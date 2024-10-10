import PageLayout from "@/components/PageLayout";
import LinkButton from "@/components/PageLayout/Button/LinkButton";

const LegalCard = ({link, img, title, id}) => {
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
                <LinkButton link={link} btnText="Read More" target="_blank"/>
            </div>
        </div>
    )
}

export default function Legal() {

    return (
        <>
            <PageLayout
                pageTitle1="Legal"
                pagePara="Navigate & Understand Your Rights with Patronum"
                imgSrc="legal.svg"
                title={"Legal - Patronum"}
                description={"Patronum provides a better way to Google Workspace (GSuite) Management. Patronum fully automates all the administrator and user tasks to ensure an efficient, effective and secure process."}
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
                                <LegalCard
                                    id={"01"}
                                    title={"Master Subscription Agreement"}
                                    img={"master-subscription-agreement"}
                                    link="https://docs.google.com/document/d/1w_SjHlAx6H31A0AYARI_lVhHxDh-CZKWertRKANQT-U/edit?pli=1"
                                />
                                <LegalCard 
                                    id={"02"}
                                    title={"Standard Contractual Clauses"}
                                    img={"standard-contractual-clauses"}
                                    link="https://docs.google.com/document/d/1C3PqmGvh1jItmMvN2FrL13V8V-rOestnw0QkWkNFIvc/edit?pli=1#heading=h.l01ylpj06ssx"
                                />
                                <LegalCard 
                                    id={"03"}
                                    title={"Data Processing Agreement"}
                                    img={"data-processing-agreement"}
                                    link="https://docs.google.com/document/d/1v197Nm8LzqHIRTx4pQEVAGlENpr0t8yFIyVAg48mNH4/edit#heading=h.gjdgxs"
                                />
                                <LegalCard 
                                    id={"04"}
                                    title={"Standard Terms and Conditions"}
                                    img={"standard-terms-and-conditions"}
                                    link="https://docs.google.com/document/d/19ie2gkbs2fv2kQ6gwyPwaEYpU2mg4t0eyvSKNgDF-bE/edit"
                                />
                                <LegalCard 
                                    id={"05"}
                                    title={"Partner Agreement"}
                                    img={"partner-agreement"}
                                    link="https://docs.google.com/document/d/1UfaCFOtQfOLWkHHmR0p0iAHWqG7xEuh4ESWj5cCvy2c/edit#heading=h.30j0zll"
                                />
                                <div className="legal-card fadeUp group">
                                    <div className="cards-num">
                                        <span className="aeonik">
                                            06
                                        </span>
                                    </div>
                                    <div className="img group-hover:scale-[1.05] duration-300">
                                        <img 
                                            src="/assets/legal/cookie-policy.svg" 
                                            alt="Cookie Policy"
                                            title="Cookie Policy"
                                        />
                                    </div>
                                    <div className="info">
                                        <span className="hr-1p" />
                                        <h3 className="title-2xl aeonik">
                                            Cookie Policy
                                        </h3>
                                        <span className="hr-1p" />
                                        <LinkButton link="/cookie-policy" btnText="Read More"/>
                                    </div>
                                </div>
                                <div className="legal-card fadeUp group">
                                    <div className="cards-num">
                                        <span className="aeonik">
                                            07
                                        </span>
                                    </div>
                                    <div className="img group-hover:scale-[1.05] duration-300">
                                        <img 
                                            src="/assets/legal/privacy-policy.svg" 
                                            alt="Privacy Policy"
                                            title="Privacy Policy"
                                        />
                                    </div>
                                    <div className="info">
                                        <span className="hr-1p" />
                                        <h3 className="title-2xl aeonik">
                                            Privacy Policy
                                        </h3>
                                        <span className="hr-1p" />
                                        <LinkButton link="/privacy-policy" btnText="Read More"/>
                                    </div>
                                </div>
                                <div className="legal-card fadeUp group">
                                    <div className="cards-num">
                                        <span className="aeonik">
                                            08
                                        </span>
                                    </div>
                                    <div className="img group-hover:scale-[1.05] duration-300">
                                        <img 
                                            src="/assets/legal/environmental-policy.svg" 
                                            alt="Environmental Policy Image"
                                            title="Environmental Policy"
                                        />
                                    </div>
                                    <div className="info">
                                        <span className="hr-1p" />
                                        <h3 className="title-2xl aeonik">
                                            Environmental Policy
                                        </h3>
                                        <span className="hr-1p" />
                                        <LinkButton link="/environmental-policy" btnText="Read More"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </PageLayout>
        </>
    )
}