import { useState } from "react";
import PageLayout from "@/components/PageLayout";
import Image from "next/image";
import LinkButton from "@/components/Buttons/LinkButton";

export default function Webinars() {
    const [modalOpen, setModalOpen] = useState({});

    const openModal = (videoId) => {
        setModalOpen(prevState => ({
            ...prevState,
            [videoId]: true
        }));
    };

    const closeModal = (videoId) => {
        setModalOpen(prevState => ({
            ...prevState,
            [videoId]: false
        }));
    };

    const handleModalClick = (e, videoId) => {
        if (e.target.classList.contains("video-modal-overlay")) {
            closeModal(videoId);
        }
    };

    const WebinarCard = ({ imgSrc, title, para, videoId }) => {
        return (
            <>
                <div className="fadeUp w-[47%] webinar-card rounded-[10px] border border-[#e8e8e8] cursor-pointer">
                    <div onClick={() => openModal(videoId)} className="overflow-hidden rounded-[10px] h-full hover:shadow-xl duration-300">
                        <div className="image-container xl:h-[23.5vw] h-[55vw] relative w-full border-b border-[#e8e8e8]">
                            <Image src={imgSrc} fill className="h-full w-full object-cover" alt="Webinar Image" title="Webinar Image" />
                        </div>
                        <div className="text-container px-[8%] lg:py-[4%] lg:pb-[6%] py-[8%] lg:space-y-[2vw] space-y-[5%] flex justify-between flex-col">
                            <div className="space-y-[2vw]">
                                <h3 className="lg:text-[1.57vw] text-[6vw] leading-[1.4]">
                                    {title}
                                </h3>
                                <p className="content-p text-[#444444]">
                                    {para}
                                </p>
                            </div>
                            <div className="lg:space-y-[2vw] space-y-[5%]">
                                <span className="w-full h-[1px] block bg-[#C5C5C5]" />
                                <LinkButton 
                                    href="javascript:void(0)"
                                    btnText="Watch Webinar"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                {modalOpen[videoId] && (
                    <div className={`video-modal-overlay ${modalOpen[videoId] ? 'show' : 'hide'}`} onClick={(e) => handleModalClick(e, videoId)}>
                        <div className="modal">
                            <iframe
                                width="640"
                                height="390"
                                src={`https://www.youtube.com/embed/${videoId}`}
                                title="YouTube video player"
                                allowFullScreen>
                            </iframe>
                            <button className="modal-close" onClick={() => closeModal(videoId)} aria-label="Close Video Modal">
                                <span className="close-plus modal-btn" />
                                <span className="close-minus modal-btn" />
                            </button>
                        </div>
                    </div>
                )}
            </>
        )
    }

    return (
        <>
            <PageLayout
                pageTitle1={'Webinars'}
                pagePara={"View our latest webinars and videos, or register for upcoming content to hear from industry experts."}
                imgSrc={'webinars.svg'}
                title={"Webinars - Patronum"}
                description={"Check out our latest webinars and videos, or register for upcoming sessions to hear insights from industry experts."}
                url={"webinars"}
                img={"homepage.jpg"}
                date_published={"2024-04-04T12:00"}
                date_modified={"2024-04-04T12:00"}
                keywords={"Patronum, Google Workspace Manager, G-Suite Manager"}
            >

                <section id="second-section">
                    <div className="container">
                        <div className="content-2">
                            <h2 className="title-4xl text-anim">
                                <span>
                                    Explore Our{" "}
                                </span>
                                <br />
                                <span>
                                    Latest Webinars
                                </span>
                            </h2>

                            <div className="cards-wrapper webinar items-stretch">
                                {Details.map((detail, index) => (
                                    <WebinarCard
                                        key={index}
                                        imgSrc={detail.img}
                                        title={detail.title}
                                        para={detail.content}
                                        videoId={detail.videoId}
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

const Details = [
    {
        title: "2 Ways To Share Google Contacts",
        img: "https://wordpress-213572-4463644.cloudwaysapps.com/wp-content/uploads/2024/10/2-Ways-To-Share-Google-Contacts.png",
        content: "In this webinar we explain the difference between Google Profiles, Google Domain Contacts (Domain Shared Domains) and Google Contacts. We go into depth about how, using Patronum, workflows can be configured to automatically share Google Contacts with other users.",
        videoId: "_oiMzVIhizM"
    },
    {
        title: "4 Essential Google Workspace Offboarding Steps",
        img: "https://wordpress-213572-4463644.cloudwaysapps.com/wp-content/uploads/2024/10/4-Essential-Google-Workspace-Offboarding-Steps.png",
        content: "This webinar explores how Patronum can help simplify and secure user offboarding within Google Workspace. By watching, you'll learn new approaches to: Declutter calendar events, Keep your contact database up to date, Manage Google Drive file access.",
        videoId: "cLMtzYrI6as"
    },
    // {
    //     title: "3 Ways to Keep Google Drive Content Under Control",
    //     img: "https://wordpress-213572-4463644.cloudwaysapps.com/wp-content/uploads/2024/10/3-Ways-to-Keep-Google-Drive-Content-Under-Control.png",
    //     content: "In this webinar we explore how Patronum can help Google Workspace administrators keep their Google Drive data under control. We explore who to set alerts around storage limits and item restrictions.",
    //     videoId: "v3Xlz8ExUzI"
    // },
    {
        title: "5 Ways to Simplify Onboarding within Google Workspace",
        img: "https://wordpress-213572-4463644.cloudwaysapps.com/wp-content/uploads/2024/10/onboarding.png",
        content: "In this webinar, we explore how Patronum can help simplify user onboarding within Google Workspace. By Quickly set up and deploy Patronum new user templates and many other things.",
        videoId: "tln9zjC8Cik"
    },
    {
        title: "Who has access to your company Google Workspace Drive files?",
        img: "https://wordpress-213572-4463644.cloudwaysapps.com/wp-content/uploads/2024/10/access-to-company-files.png",
        content: "In this webinar we explore how Patronum can help identify and mitigate against the common challenge of Google Workspace users oversharing files from Google Drive.",
        videoId: "gutE4jdoRgs"
    },
    {
        title: "Google Workspace Email Signature Management Tutorial",
        img: "https://wordpress-213572-4463644.cloudwaysapps.com/wp-content/uploads/2024/10/email-signature-management.png",
        content: "In this video, we explore how to create professional email signatures for all your Google Workspace Gmail users using the Patronum policy manager.",
        videoId: "wclSm5PfbOo"
    },
    {
        title: "How has the role of the IT Admin evolved?",
        img: "https://wordpress-213572-4463644.cloudwaysapps.com/wp-content/uploads/2024/10/the-role-of-the-IT-Admin-evolved.png",
        content: "In this video, Fintan and Paul discuss the role of the IT Admin, how it's changed over the years and some of the unique challenges now facing individuals in the role.",
        videoId: "uRql8BR8XBE"
    },
    {
        title: "Paul Lees founder of Bespin Labs talks about his own Technology and Google Journey",
        img: "/assets/resources/webinars/paul-discuss-patronum-part-1.png",
        content: "Fintan Murphy, CEO Of Damson Cloud interviews Paul Lees where he talks about his own Technology and Google Journey. Both Paul & Fintan have been in the IT industry for several decades and have been part of the Google ecosystem since the early years of the platform.",
        videoId: "2N97mrIcfq8"
    },
    {
        title: "Paul Lees talks about third-party tools and Patronum's USPs",
        img: "/assets/resources/webinars/paul-discuss-third-party-integrations.png",
        content: "Part 2 of Paul's Discussion with Fintan. This part touches on the evolution of 3rd party tools, how Patronum fits into that consideration, and why you wouldn't want Google to do absolutely everything in the Workspace environment.",
        videoId: "lWSOVYM68CM"
    },
    {
        title: "The Future of Patronum - Paul's Discussions With Fintan",
        img: "/assets/resources/webinars/future-of-patronum.png",
        content: "In this part of his discussion with Fintan Murphy, CEO of Damson Cloud, Paul describes what's in store for Patronum, and how the business is growing and being shaped as Google Workspace continues to evolve and grow.",
        videoId: "wexueKZ9TFg"
    },
    {
        img: "/assets/resources/webinars/full-product-demo.png",
        title: "Patronum's Comprehensive Product Demo",
        content: "In this video, we demonstrate the majority of Patronum's features, including daily user management tasks, automated workflows to control user on and offboarding, as well as Google Drive management and compliance.",
        videoId: "A6rBxfmr8hs"
    },
    {
        title: "Patronum Webinar - User Lifecycle Management",
        img: "/assets/resources/webinars/patronum-webinar-user-lifecycle-management.png",
        content: "Let's talk about the automation of User Lifecycle - automatic creation of Gmail email signature, access to files and folders, shared Google contacts, all the way through to the offboarding process when the user leaves.",
        videoId: "Fuhiee53vD0"
    },
    {
        title: "Patronum's Demo on SOLVETank EP-06",
        img: "/assets/resources/webinars/solve-tank-episode-006.png",
        content: "Patronum's Demo with SOLVETank (SaaSOps Life Virtual Event), where an expert panel of SaaSOps professionals demo a SaaS platform, do Q&As and give opinions & feedback based on product use cases.",
        videoId: "ubFssCbb9Y4"
    },
]