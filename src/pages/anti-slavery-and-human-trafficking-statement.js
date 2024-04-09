import Hero from "@/components/PageLayout/Hero";
import MetaData from "@/components/PageLayout/MetaData";
import Layout from "@/components/Stairs";
import styles from '@/styles/cookie-policy.module.css'

export default function Page() {

    return (
        <>  
            <MetaData 
                title={"Anti Slavery and Human Trafficking Statement - Patronum"}
                description={"This statement provides the steps Bespin Labs Limited have taken and continue to take to minimise the risk of modern slavery and human trafficking in its business and supply chain and is published in line with section 54(1) of the Modern Slavery Act 2015."}
                date_published={"2024-04-04T07:07"}
                date_modified={"2024-04-04T07:08"}
                url={"anti-slavery-and-human-trafficking-statement"}
                img={"Google-Workspace.png"}
            />
            <Layout>
                <Hero
                    pageTitle1={"Anti-Slavery and Human"}
                    pageTitle2={"Trafficking Statement"}
                    pagePara={"This policy explains the way in which cookies are used on our website."}
                    imgSrc={"anti-slavery-and-human-trafficking.svg"}
                />
                <section className="" id="second-section">
                    <div className="container">
                        <div className="content-2">
                            <div className="lg:mb-[2vw] md:mb-[5vw] mb-[6vw]">
                                <h2 className="title-4xl text-anim">
                                    <span>
                                        Human Trafficking Statement
                                    </span>
                                </h2>
                            </div>
                            <div className={styles.policy}>
                                <p>At Bespin Labs Limited we are proud of our ethical approach and are committed to complying with all laws and regulations applicable to our business, including taking steps to ensure that there is no human trafficking or slavery in our supply chain or within any part of our business.</p>
                                <p>This statement provides the steps Bespin Labs Limited have taken and continue to 
                                take to minimise the risk of modern slavery and human trafficking in its business 
                                and supply chain and is published in line with section 54(1) of the Modern Slavery 
                                Act 2015. </p>
                                <h3 className="wp-block-heading">The Company and the Supply Chain</h3>
                                <p>Forced labour and human trafficking are global issues in society that can appear 
                                in all types of industries and sectors. We believe the nature of what we do at 
                                Bespin Labs means that the risk of human trafficking and slavery occurring in our 
                                business or in our supply chains is low. However, our continuing commitment to 
                                combatting human trafficking and slavery is reflected in our policies and 
                                operating procedures which require all Bespin Labs Limited employees to act 
                                ethically and with integrity in all our business relationships. </p>
                                <h3 className="wp-block-heading">Policies</h3>
                                <p>We are committed to ensuring that there is no modern slavery or human 
                                trafficking in our supply chains or in any part of our business. Our Modern Slavery 
                                Policy reflects our commitment to acting ethically and with integrity in all our 
                                business relationships and to implementing and enforcing effective systems and 
                                controls to ensure that modern slavery and human trafficking is not taking place 
                                anywhere in our supply chains. In addition to this, we have a number of 
                                appropriate policies such as: </p>
                                <ul>
                                    <li>Slavery&nbsp;and&nbsp;human&nbsp;trafficking&nbsp;statement</li>
                                    <li><span className="zw-portion" data-text-len="36">Anti-bribery&nbsp;and&nbsp;corruption&nbsp;policy</span><span className="EOP EOP-readonly">&nbsp;</span></li>
                                    <li>Whistleblowing&nbsp;policy</li>
                                </ul>
                                <h3 className="wp-block-heading">Due&nbsp;Diligence&nbsp;Process</h3>
                                <p>Within our organisation, we have robust recruitment processes, which include undertaking document checks on candidates prior to employment to evidence they are allowed to work in the UK, performing appropriate reference checks and ensuring that staff are paid directly into a suitable personal bank account. In relation to our supply chains, we have reviewed our contractual arrangements with current and prospective suppliers to ensure they comply with the Act. This involves placing obligations upon suppliers to conduct regular modern slavery risk assessments within their own supply chains, implement appropriate controls to prevent modern slavery, and notify our organisation immediately if any supplier becomes aware of any modern slavery within their supply chains.</p>
                                <h3 className="wp-block-heading"><span className="zw-portion" data-text-len="18">Awareness&nbsp;Training</span><span className="EOP EOP-readonly">&nbsp;</span></h3>
                                <p>To ensure a high level of understanding of the risks of modern slavery and human trafficking in our supply chains and our business, we have appropriate staff training. This provides our employees with knowledge on how to identify exploitation and modern slavery as well as the process for reporting suspected cases. During the induction process and throughout employment, training is provided to staff on topics relating to business ethics. In addition to this, we have specific modern slavery training available for our staff. We also encourage our business partners to arrange training for their staff, suppliers and providers.</p>
                                <h3 className="wp-block-heading"><span className="zw-portion" data-text-len="26">Approval&nbsp;of&nbsp;this&nbsp;Statement</span><span className="EOP EOP-readonly">&nbsp;</span></h3>
                                <p>This statement is made in accordance with section 54(1) of the Modern Slavery Act 2015.</p>
                                <p>This statement was approved by Bespin Labs Limited Board of Directors;<br />On behalf of Bespin Labs Limited.</p>
                                <p>Last updated: April 2021</p>
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    )
}