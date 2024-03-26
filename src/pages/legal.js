import PageLayout from "@/components/PageLayout";
import LinkButton from "@/components/PageLayout/Button/LinkButton";

const LegalCard = ({link, img, title, id}) => {
    return (
        <div className="legal-card fadeUp">
            <div className="cards-num">
                <span className="aeonik">
                    {id}
                </span>
            </div>
            <div className="img">
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
                pagePara="The only tool you'll ever need to streamline your Google Workspace management."
                imgSrc="legal.svg"
                > 

                <section id="second-section">
                    <div className="container">
                        <div className="content-2">
                            <div className="lg:flex items-start justify-between">
                                <h2 className="title-4xl text-anim">
                                    <span>
                                        Lorem
                                    </span>
                                    <br />
                                    <span>
                                        Lorem Ipsum
                                    </span>
                                </h2>
                                <p className="content-p lg:w-1/3 w-[95%] lg:mt-[1vw] mt-[5vw] text-anim-2">
                                    <span>
                                        Transform your Google Workspace experience with Patronum, the ultimate solution to your onboarding nightmares, permission hassles, and data compliance woes. Patronum is designed to streamline the management of Google Workspace.
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
                                <LegalCard 
                                    id={"06"}
                                    title={"Cookie Policy"}
                                    img={"cookie-policy"}
                                    link="#"
                                />
                                <LegalCard 
                                    id={"07"}
                                    title={"Anti-slavery and Human Trafficking Statement"}
                                    img={"/anti-slavery-and-human-trafficking"}
                                    link="#"
                                />
                            </div>
                        </div>
                    </div>
                </section>

            </PageLayout>
        </>
    )
}