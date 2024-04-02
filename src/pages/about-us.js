import react, { useEffect, useState } from "react"
import PageLayout from "@/components/PageLayout";
import SectionBreak from "@/components/PageLayout/SectionBreak";
import SectionTitle from "@/components/PageLayout/SectionTitle";
import SideMenu from "@/components/SideMenu";

export default function About(){
    const [showSideMenu, setShowSideMenu] = useState(false);

    useEffect(() => {
        const checkScreenSize = () => {
          setShowSideMenu(window.innerWidth > 1024);
        };
    
        // Check on mount
        checkScreenSize();
    
        // Add event listener
        window.addEventListener('resize', checkScreenSize);
    
        // Cleanup event listener
        return () => window.removeEventListener('resize', checkScreenSize);
      }, []);

      const sections = [
        { id: '#pageHero', name: 'Introduction' },
        { id: '#second-section', name: 'About' },
        { id: '#section-3', name: 'Features' },
        { id: '#mission', name: 'Mission' },
        { id: '#press', name: 'Publication' },
        { id: '#advantage-patronum', name: 'Advantage' },
        { id: "#future", name: "Future" },
      ];
    
    const MissionCard = ( {missionImg, missionPara, missionTitle} ) => {
        return ( 
            <>
                <div className="mission-card">
                    <img className="fadeIn" src={`/assets/about/${missionImg}`} alt="mission icon"/>
                    <h4 className="title text-anim-2">{missionTitle}</h4>
                    <p className="content-p fadeUp">{missionPara}</p>
                </div>
            </>
        )
    }

    const AdvantageCard = ( {advantageImg, advantagePara, advantageTitle} ) => {
        return ( 
            <>
                <div className="advantage-card">
                    <img className="fadeIn" src={`/assets/about/${advantageImg}`} alt="advantage image"/>
                    <h5 className="title text-anim-2">{advantageTitle}</h5>
                    <p className="content-p fadeUp">{advantagePara}</p>
                </div>
            </>
        )
    }

    const FutureCard = ( {futureImg, futurePara, futureTitle} ) => {
        return ( 
            <>
                <div className="future-card">
                    <div className="img fadeUp">
                        <img src={`/assets/about/${futureImg}`} alt="Patronum Future Image"/>
                    </div>
                    <h5 className="title text-anim-2">{futureTitle}</h5>
                    <p className="content-p fadeUp">{futurePara}</p>
                </div>
            </>
        )
    }

    return (
        <>
            <PageLayout 
                pageTitle1={'About Patronum'} 
                pagePara={"Meet the innovators transforming your Google Workspace experience with heart and hustle."} 
                imgSrc={'about.svg'}
                title={"About Patronum - Google Workspace Manager"}
                description="Patronum removes the hassle of Google Workspace (GSuite) administration by fully automating all administrator and user tasks to ensure an efficient, effective and secure process"
                url="about-us"
                img="Google-Workspace.png"
                date_published="2020-12-21T06:17"
                date_modified="2024-04-04T12:32"
                keywords="Google Workspace"
                >
                {showSideMenu && <SideMenu sections={sections}/>}

                <section id="second-section">
                    <div className="container">
                        <div className="content">
                            <div className="about-top">
                                <div className="section-head-sm">
                                    <h2 className="title-4xl text-anim">
                                        <span>
                                            Patronum
                                        </span>
                                    </h2>
                                    <p className="para-lg fadeUp">
                                        (Noun - Latin)
                                    </p>
                                </div>
                                <div className="fadeUp">
                                    <ul className="about-lists">
                                        <li>Accusative singular of patrōnus.</li>
                                        <li>A protector, guardian, defender, patron – a person who protects or defends something.</li>
                                        <li>A platform designed to automate and simplify the adoption and management of Cloud-based software services, such as Google Workspace (G Suite).</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="about-bottom">
                                <div className="flex lg:justify-end justify-start w-full">
                                    <h2 className="title-4xl text-anim lg:mb-[2.5vw] mb-[10vw] lg:w-[38%]">
                                        <span>
                                            The Genesis 
                                        </span>
                                        <br />
                                        <span>
                                            of Patronum
                                        </span>
                                    </h2>
                                </div>
                                <div className="flex lg:justify-between items-center lg:items-end lg:flex-row flex-col lg:gap-0 gap-[10vw]">
                                    <div className="genesis-left lg:w-[34%] w-[80%] fadeUp">
                                        <img src="/assets/about/genesis.svg" className="w-full h-full" loading="lazy" alt="about-patronum" title="about patronum"/>
                                    </div>
                                    <div className="lg:w-[38%] w-[95%]">
                                        <p className="content-p fadeUp">
                                            In 2008, Paul Lees, CEO of Bespin Labs, set out on a mission to revolutionize the management of cloud-based software solutions. With a deep understanding of the complexities organizations face in managing IT systems and cloud-based software, he envisioned a platform that would simplify these processes and enhance efficiency and security. This vision materialized into Patronum, a platform meticulously engineered to automate and refine the management of Google Workspace (formerly G Suite). Patronum was not just a product; it was a paradigm shift designed to enhance operational efficiency and fortify the security of Google Workspace environments globally.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </section>

                <section id="section-3">
                    <div className="container">
                        <div className="content">
                            <div className="section-list-container">

                                <div className="section-list-item">
                                    <div className="section-list-head">
                                        <span className="section-list-hr lineDraw"/>
                                        <h3 className="title-3xl fadeRight">
                                            <span>
                                                Patronum: A Guardian in the Cloud
                                            </span>
                                        </h3>
                                        <span className="section-list-hr lineDraw"/>
                                    </div>
                                    <div className="section-list-body">
                                        <div className="section-list-body-left fadeUp">
                                            <img loading="lazy" src="/assets/about/about-1.svg" alt="about-patronum" title="Patronum: A Guardian in the Cloud"/>
                                        </div>
                                        <div className="section-list-body-right">
                                            <p className="content-p fadeUp">
                                                The name 'Patronum', rooted in Latin, translates to a protector, guardian, or defender. This nomenclature is a testament to the platform's fundamental purpose: to serve as a steadfast guardian for organizations' Google Workspace environments. Patronum is an indispensable ally for IT administrators, ensuring the fluid and secure management of Google Workspace users. Patronum's role is particularly crucial during the critical phases of onboarding, transitioning, and offboarding, where Patronum guarantees that these processes are executed with seamless precision and utmost security.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="section-list-item">
                                    <div className="section-list-head">
                                        <span className="section-list-hr lineDraw"/>
                                        <h3 className="title-3xl fadeRight">
                                            <span>
                                                Revolutionizing Google Workspace Management
                                            </span>
                                        </h3>
                                        <span className="section-list-hr lineDraw"/>
                                    </div>
                                    <div className="section-list-body">
                                        <div className="section-list-body-left fadeUp">
                                            <img loading="lazy" src="/assets/about/about-2.svg" alt="about-patronum" title="Patronum: A Guardian in the Cloud"/>
                                        </div>
                                        <div className="section-list-body-right fadeUp">
                                            <p className="content-p">
                                                Patronum's journey began with a clear goal: to transform the way organizations manage their Google Workspace environments. Recognizing the complexities and time-consuming nature of manual administration, Patronum introduced a suite of tools designed to automate these tasks. This automation not only saves time but also significantly reduces the margin for error, ensuring a more secure and reliable management process.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>    
                </section>

                <SectionBreak sectionBreakText={"Today, Patronum stands as a beacon of innovation and efficiency, utilized by thousands of businesses worldwide, including an impressive roster of Fortune 500 companies, burgeoning startups, and dynamic scaleups."}/>

                <section className="patronum-mission" id="mission">
                    <div className="container">
                        <div className="content">
                            <div className="mission-top">
                                <SectionTitle sectionTitle1='Our Mission' sectionTitle2= "And Values" sectionPara="Give your users a consistent, and unified experience within their Google Workspace while at the same time reduce IT spend managing users and resources." />
                                <MissionCard 
                                    missionImg="icon-1.png"
                                    missionTitle="A Platform Built on Innovation and Excellence"
                                    missionPara="Patronum has been at the forefront of innovation in cloud management since its inception. The platform is continuously updated with new features and capabilities, ensuring that it remains aligned with the evolving needs of modern IT organizations. This commitment to excellence has positioned Patronum as a leader in the field, trusted by businesses worldwide for their Google Workspace management needs."
                                />
                            </div>
                            <div className="mission-bottom">
                                <MissionCard 
                                    missionImg="icon-2.png"
                                    missionTitle="Customer-Centric Approach"
                                    missionPara="At the core of Patronum's ethos is a customer-first philosophy. Every aspect of our service, from feature development to pricing strategies, is guided by the needs and feedback of our customers. We believe in fostering a transparent, collaborative, and engaging community, not just within our team but also among our partners and customers."
                                />
                                <MissionCard 
                                    missionImg="icon-3.png"
                                    missionTitle="Empowering IT Organizations"
                                    missionPara="Our platform is more than just a tool; it's a solution that empowers IT organizations to manage their Google Workspace environments efficiently. By automating administrative tasks, we enable IT teams to focus on more strategic initiatives, enhancing overall productivity and security."
                                />
                            </div>
                        </div>
                    </div>
                </section>

                <section className="press-release" id="press">
                    <div className="container">
                        <div className="content">
                            <div className="section-head">
                                <SectionTitle 
                                    sectionTitle1='Featured By Top' 
                                    sectionTitle2= "Media Publications" 
                                    sectionPara="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text." 
                                />
                            </div>
                            <div className="media-logos fadeUp">
                                <div className="media-logo">
                                    <img src="/assets/about/associated-press.png" alt="associated-press-logo" title="Featured in Associated Press."/>
                                </div>
                                <div className="media-logo">
                                    <img src="/assets/about/cbs.png" alt="cbs-logo" title="Featured in CBS."/>
                                </div>
                                <div className="media-logo">
                                    <img src="/assets/about/tech-bullion.png" alt="tech-bullion-logo" title="Featured in Tech Bullion."/>
                                </div>
                                <div className="media-logo">
                                    <img src="/assets/about/digital-journal.png" alt="digital-journal-logo" title="Featured in Digital Journal."/>
                                </div>
                                <div className="media-logo">
                                    <img src="/assets/about/abc.png" alt="abc-news-logo" title="Featured in ABC News."/>
                                </div>
                                <div className="media-logo">
                                    <img src="/assets/about/fox-news.png" alt="fox-news-logo" title="Featured in Fox News."/>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="patronum-advantage" id="advantage-patronum">
                    <div className="container">
                        <div className="content">
                            <div className="section-head">
                                <SectionTitle 
                                    sectionTitle1='The Patronum' 
                                    sectionTitle2= "Advantage" 
                                    sectionPara="Give your users a consistent, and unified experience within their Google Workspace while at the same time reduce IT spend managing users and resources." 
                                />
                            </div>
                            <div className="advantage-cards">
                                <AdvantageCard 
                                    advantageImg="/advantage-1.svg"
                                    advantageTitle="Simplifying Google Workspace Management"
                                    advantagePara="Patronum's platform is specifically tailored to enhance the Google Workspace experience. Automating administrative and user tasks ensures a more efficient, effective, and secure management process. This automation extends across the entire lifecycle of Google Workspace users, from onboarding to offboarding."
                                />
                                <AdvantageCard 
                                    advantageImg="/advantage-2.svg"
                                    advantageTitle="A Testament to Global Excellence"
                                    advantagePara="Patronum's global footprint is a reflection of our unwavering commitment to excellence and innovation. Our clientele, spanning across continents, is a diverse tapestry of industry leaders, visionary startups, and fast-growing scaleups. Each client's journey with Patronum is a story of transformation marked by enhanced efficiency, robust security, and streamlined cloud management."
                                />
                                <AdvantageCard 
                                    advantageImg="/advantage-3.svg"
                                    advantageTitle="Community & Collaboration"
                                    advantagePara="We believe in the power of collaboration. We have created an ecosystem that thrives on shared knowledge and collective innovation by actively engaging with our users and partners. This collaborative environment drives innovation and continuous improvement that not only enhances the platform but also fosters a sense of community among our users."
                                />
                                <AdvantageCard 
                                    advantageImg="/advantage-4.svg"
                                    advantageTitle="A Platform for All"
                                    advantagePara="Whether you're a small business or a large enterprise, Patronum is designed to cater to your specific needs. Our platform scales with your organization, ensuring that your Google Workspace management remains seamless and hassle-free, regardless of your company's size."
                                />
                            </div>
                        </div>
                    </div>
                </section>

                <section className="patronum-future" id="future">
                    <div className="container-lg">
                        <div className="content">
                            <div className="section-head">
                                <SectionTitle 
                                    sectionTitle1='Looking Ahead:' 
                                    sectionTitle2= "The Future of Patronum" 
                                    sectionPara="Give your users a consistent, and unified experience within their Google Workspace while at the same time reduce IT spend managing users and resources." 
                                />
                            </div>
                            <div className="patronum-future-bottom fadeUp">
                                <span className="line-verticle"/>
                                <FutureCard 
                                    futureImg="future-1.png"
                                    futureTitle="Continuous Innovation"
                                    futurePara="Our journey doesn't stop here. We are committed to continuous innovation, constantly enhancing our platform to meet the ever-changing landscape of cloud computing. We aim to remain at the forefront of cloud software services, providing our customers with cutting-edge solutions."
                                />
                                <span className="line-verticle"/>
                                <FutureCard 
                                    futureImg="future-2.png"
                                    futureTitle="Expanding Our Reach"
                                    futurePara="As we look to the future, we aim to expand our reach, bringing Patronum to more organizations worldwide. We are dedicated to making cloud management more accessible, efficient, and secure for businesses of all sizes."
                                />
                                <span className="line-verticle"/>
                                <FutureCard 
                                    futureImg="future-3.png"
                                    futureTitle="Stronger Partnerships"
                                    futurePara="We recognize the importance of strong partnerships in our growth and success. Moving forward, we will continue to forge and nurture partnerships that align with our mission and values, creating a robust network that benefits our customers and the broader community."
                                />
                                <span className="line-verticle"/>
                            </div>
                        </div>
                    </div>
                </section>
            </PageLayout>
        </>
    )
}
