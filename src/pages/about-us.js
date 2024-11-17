import React, { useEffect, useState } from "react"
import PageLayout from "@/components/PageLayout";
import SectionBreak from "@/components/PageLayout/SectionBreak";
import dynamic from "next/dynamic";
import { useDevice } from "@/utils/useDevice";
import MediaLogos from "@/components/PageComponents/AboutPage/MediaLogos";
import Mission from "@/components/PageComponents/AboutPage/Mission";
import Advantage from "@/components/PageComponents/AboutPage/Advantage";
import Future from "@/components/PageComponents/AboutPage/Future";

const SideMenu = dynamic(() => import("@/components/SideMenu"), { ssr: false });

export default function About() {
    const { isDesktop } = useDevice();
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, [])

    const sections = [
        { id: '#pageHero', name: 'Introduction' },
        { id: '#second-section', name: 'About' },
        { id: '#section-3', name: 'Features' },
        { id: '#mission', name: 'Mission' },
        { id: '#press', name: 'Publication' },
        { id: '#advantage-patronum', name: 'Advantage' },
        { id: "#future", name: "Future" },
    ];

    return (
        <>
            <PageLayout
                pageTitle1={'About Patronum'}
                pagePara={"Meet the innovators transforming your Google Workspace experience with heart and hustle."}
                imgSrc={'about.svg'}
                title={"About Patronum: The Evolution of Patronum"}
                description="Patronum is a Swiss army knife for Google Workspace management. It automates repetitive admin tasks like onboarding & offboarding users, managing email signatures, automated file unsharing, and much more."
                url="about-us"
                img="homepage.jpg"
                date_published="2020-12-21T06:17"
                date_modified="2024-04-04T12:32"
                keywords="Google Workspace"
            >

                {isClient && isDesktop && <SideMenu sections={sections} />}

                <section id="second-section">
                    <div className="container">
                        <div className="content">
                            <div className="block">
                                <div className="lg:mb-[2.5vw] mb-[4vw]">
                                    <h2 className="title-4xl text-anim">
                                        <span>
                                            Patronum
                                        </span>
                                    </h2>
                                    <p className="fadeUp aeonik lg:text-[2.2vw] font-normal text-head text-[5.5vw]">
                                        (Noun - Latin)
                                    </p>
                                </div>
                                <div className="fadeUp">
                                    <ul className="lg:w-[85%] w-full text-[4vw] leading-[1.8] space-y-[5vw] list-decimal font-body font-medium lg:text-[1.5vw] lg:leading-[1.7] lg:ml-[2vw] lg:space-y-0">
                                        <li className="">Accusative singular of patrōnus.</li>
                                        <li>A protector, guardian, defender, patron – a person who protects or defends something.</li>
                                        <li>A platform designed to automate and simplify the adoption and management of Cloud-based software services, such as Google Workspace (G Suite).</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="    lg:pt-[10vw] lg:pb-[5vw] pt-[15vw] pb-0">
                                <div className="flex lg:justify-end justify-start w-full">
                                    <h2 className="title-4xl text-anim lg:mb-[2.5vw] mb-[10vw] lg:w-[38%]">
                                        <span>
                                            The Genesis{" "}
                                        </span>
                                        <br />
                                        <span>
                                            of Patronum
                                        </span>
                                    </h2>
                                </div>
                                <div className="flex lg:justify-between items-center lg:items-end lg:flex-row flex-col lg:gap-0 gap-[10vw]">
                                    <div className="genesis-left lg:w-[34%] w-[80%] fadeUp">
                                        <img src="/assets/about/genesis.svg" className="w-full h-full" loading="lazy" alt="about-patronum" title="about patronum" />
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
                                        <span className="section-list-hr lineDraw" />
                                        <h3 className="title-3xl fadeRight">
                                            <span>
                                                Patronum: A Guardian in the Cloud
                                            </span>
                                        </h3>
                                        <span className="section-list-hr lineDraw" />
                                    </div>
                                    <div className="section-list-body">
                                        <div className="section-list-body-left fadeUp">
                                            <img loading="lazy" src="/assets/about/about-1.svg" alt="about-patronum" title="Patronum: A Guardian in the Cloud" />
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
                                        <span className="section-list-hr lineDraw" />
                                        <h3 className="title-3xl fadeRight">
                                            <span>
                                                Revolutionizing Google Workspace Management
                                            </span>
                                        </h3>
                                        <span className="section-list-hr lineDraw" />
                                    </div>
                                    <div className="section-list-body">
                                        <div className="section-list-body-left fadeUp">
                                            <img loading="lazy" src="/assets/about/about-2.svg" alt="about-patronum" title="Patronum: A Guardian in the Cloud" />
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

                <SectionBreak sectionBreakText={"Today, Patronum stands as a beacon of innovation and efficiency, utilized by thousands of businesses worldwide, including an impressive roster of Fortune 500 companies, burgeoning startups, and dynamic scaleups."} />
                <Mission />
                <MediaLogos />
                <Advantage />
                <Future />
            </PageLayout>
        </>
    )
}