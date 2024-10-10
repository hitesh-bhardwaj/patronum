import { useState } from "react";
import PageLayout from "@/components/PageLayout";

export default function Webinars(){
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

    const WebinarCard = ( { imgSrc, title, para, videoId } ) => {
        return (
            <>
            <div className="fadeUp w-[47%] webinar-card rounded-[10px] border border-[#e8e8e8] cursor-pointer">
                <div onClick={() => openModal(videoId)} className="overflow-hidden rounded-[10px] h-full hover:shadow-xl duration-300">
                    <div className="image-container w-full border-b border-[#e8e8e8]">
                        <img src={imgSrc} className="h-full w-full object-cover" alt="Webinar Image" title="Webinar Image"/>
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
                        <span className="w-full h-[1px] block bg-[#C5C5C5]"/>
                        <button className="link-btn">
                            <span className="btn-text">Watch Webinar</span>
                            <span className="btn-images">
                                <div>
                                    <svg className="" viewBox="0 0 38 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0 9.27361C2.25898 9.27361 4.5105 9.26604 6.76947 9.26604C15.4997 9.26604 24.2299 9.26604 32.9602 9.26604C33.1018 9.26604 33.2509 9.26604 33.3777 9.26604C30.8876 6.74513 28.4049 4.22423 25.9521 1.74117C26.5784 1.09769 27.1375 0.537491 27.6669 0C31.0814 3.4672 34.5556 6.98738 37.9925 10.4773C34.5482 13.9672 31.0814 17.4874 27.6296 20.9924C27.1003 20.4549 26.5486 19.9023 25.982 19.327C28.4571 16.8212 30.9472 14.3003 33.4373 11.7794C33.4299 11.7491 33.4224 11.7188 33.415 11.6885C33.2733 11.6885 33.1391 11.6885 32.9975 11.6885C22.1573 11.6885 11.3172 11.6885 0.484599 11.6885C0.320581 11.6885 0.164018 11.6885 0 11.681C0 10.8861 0 10.0761 0 9.27361Z" fill="currentColor"/>
                                    </svg>
                                    <svg className="" viewBox="0 0 38 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0 9.27361C2.25898 9.27361 4.5105 9.26604 6.76947 9.26604C15.4997 9.26604 24.2299 9.26604 32.9602 9.26604C33.1018 9.26604 33.2509 9.26604 33.3777 9.26604C30.8876 6.74513 28.4049 4.22423 25.9521 1.74117C26.5784 1.09769 27.1375 0.537491 27.6669 0C31.0814 3.4672 34.5556 6.98738 37.9925 10.4773C34.5482 13.9672 31.0814 17.4874 27.6296 20.9924C27.1003 20.4549 26.5486 19.9023 25.982 19.327C28.4571 16.8212 30.9472 14.3003 33.4373 11.7794C33.4299 11.7491 33.4224 11.7188 33.415 11.6885C33.2733 11.6885 33.1391 11.6885 32.9975 11.6885C22.1573 11.6885 11.3172 11.6885 0.484599 11.6885C0.320581 11.6885 0.164018 11.6885 0 11.681C0 10.8861 0 10.0761 0 9.27361Z" fill="currentColor"/>
                                    </svg>
                                </div>
                            </span>
                        </button>
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
                            <span className="close-plus modal-btn"/>
                            <span className="close-minus modal-btn"/>
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
                description={"Patronum provides a better way to Google Workspace (GSuite) Management. Patronum fully automates all the administrator and user tasks to ensure an efficient, effective and secure process."}
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
                                    <WebinarCard 
                                        imgSrc="/assets/resources/webinars/paul-discuss-patronum-part-1.png"
                                        title={"Paul Lees founder of Bespin Labs talks about his own Technology and Google Journey"}
                                        para={"Fintan Murphy, CEO Of Damson Cloud interviews Paul Lees where he talks about his own Technology and Google Journey. Both Paul & Fintan have been in the IT industry for several decades and have been part of the Google ecosystem since the early years of the platform."}
                                        videoId="2N97mrIcfq8"
                                    />
                                    <WebinarCard 
                                        imgSrc="/assets/resources/webinars/paul-discuss-third-party-integrations.png"
                                        title={"Paul Lees talks about third-party tools and Patronum's USPs"}
                                        para={"Part 2 of Paul's Discussion with Fintan. This part touches on the evolution of 3rd party tools, how Patronum fits into that consideration, and why you wouldn't want Google to do absolutely everything in the Workspace environment."}
                                        videoId="lWSOVYM68CM"
                                    />
                                    <WebinarCard 
                                        imgSrc="/assets/resources/webinars/future-of-patronum.png"
                                        title={"The Future of Patronum - Paul's Discussions With Fintan"}
                                        para={"In this part of his discussion with Fintan Murphy, CEO of Damson Cloud, Paul describes what's in store for Patronum, and how the business is growing and being shaped as Google Workspace continues to evolve and grow."}
                                        videoId="wexueKZ9TFg"
                                    />
                                    <WebinarCard 
                                        imgSrc="/assets/resources/webinars/full-product-demo.png"
                                        title={"Patronum's Comprehensive Product Demo"}
                                        para={"In this video, we demonstrate the majority of Patronum's features, including daily user management tasks, automated workflows to control user on and offboarding, as well as Google Drive management and compliance."}
                                        videoId="A6rBxfmr8hs"
                                    />
                                    <WebinarCard 
                                        imgSrc="/assets/resources/webinars/patronum-webinar-user-lifecycle-management.png"
                                        title={"Patronum Webinar - User Lifecycle Management"}
                                        para={"Let's talk about the automation of User Lifecycle - automatic creation of Gmail email signature, access to files and folders, shared Google contacts, all the way through to the offboarding process when the user leaves."}
                                        videoId="Fuhiee53vD0"
                                    />
                                    <WebinarCard 
                                        imgSrc="/assets/resources/webinars/solve-tank-episode-006.png"
                                        title={"Patronum's Demo on SOLVETank EP-06"}
                                        para={"Patronum's Demo with SOLVETank (SaaSOps Life Virtual Event), where an expert panel of SaaSOps professionals demo a SaaS platform, do Q&As and give opinions & feedback based on product use cases."}
                                        videoId="ubFssCbb9Y4"
                                    />
                                </div>
                            </div>
                        </div>
                    </section>
                    
            </PageLayout>
        </>
    )
}

