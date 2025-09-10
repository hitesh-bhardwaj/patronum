import PrimaryButton from '@/components/PageLayout/Button/PrimaryButton'
import React, { useEffect, useState } from 'react'
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Webinars = () => {

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
    const WebinarCard = ({ imgSrc, title, videoId, date }) => {
        return (
            <>
                <div className='fadeUp group lg:w-[31.5%] lg:min-h-[20vw] h-full rounded-[10px] cursor-pointer'>
                    <div onClick={() => openModal(videoId)} className="guide-card hover:shadow-xl duration-300 w-full h-full overflow-hidden rounded-[10px] border cursor-pointer border-[#e8e8e8] bg-white hover:border-2 hover:border-primary">
                        <div className='hover:shadow-xl duration-300'>
                            <div className="image-container w-full h-[50%] relative">
                                <img src={imgSrc} className="h-full w-full object-cover brightness-95 group-hover:scale-[1.03] scale-[1] duration-300" alt="Webinar Image" title="Webinar Image" />
                                <div className='absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 lg:h-[4vw] lg:w-[4vw] rounded-full bg-primary z-[10] flex items-center justify-center h-[15vw] w-[15vw]'>
                                    <img src='/assets/community/triangle.png' height={15} width={15} alt='play icon' />
                                </div>
                            </div>
                            <div className="text-container px-[5%] py-[4%] lg:pb-[8%] pb-[8%] ">
                                <h3 className="lg:text-[1.57vw] text-[6vw] group-hover:text-primary duration-300  leading-[1.3] lg:w-[88%] w-[95%] lg:h-[7vw] h-[28vw] md:text-[4.5vw] md:h-[15vw]">
                                    {title}
                                </h3>
                                <div className="">
                                    <p className='content-p text-[#666666]'>{date}</p>
                                </div>
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
        <section id="second-section">
            <div className="container">
                <div className="content-2 flex flex-col  justify-center lg:gap-[5vw] gap-[12vw]">
                    <h2 className="title-4xl text-anim w-[80%] lg:w-full">
                        <span>
                            Watch Recent Webinars
                        </span>
                    </h2>

                    <div className=" w-full flex flex-wrap gap-[1.5vw] lg:gap-y-[2vw] gap-y-[0vw] md:gap-y-[1.5vw]">
                        {webinars.map((card, index) => (
                            <WebinarCard
                                key={index}
                                imgSrc={card.imgSrc}
                                title={card.title}
                                videoId={card.videoId}
                                date={card.date}
                            />
                        ))}

                    </div>
                    <div className='flex flex-col items-center'>
                        <PrimaryButton btnText={"See All Webinars"} link={"https://www.youtube.com/@wearepatronum/videos"} target="_blank" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Webinars

const webinars = [
    {
        id: 1,
        imgSrc: "/assets/community/using-app-script-with-appsheet.png",
        title: " Using App Script with AppSheet- Going Beyond No Code",
        videoId: "hLdzMmhQlLc",
        date: "September 5, 2025"
    },
    {
        id: 2,
        imgSrc: "/assets/community/automate-your-blog.png",
        title: "Automate Your Blog with AI Agents",
        videoId: "xQ8T79DgmA4",
        date: "August 29, 2025"

    },
    {
        id: 3,
        imgSrc: "/assets/community/start-ups-and-downs.png",
        title: "Start Ups and Downs: Parachutes that Worked/Failed",
        videoId: "ai2uaL3fIVE",
        date: "July 28, 2025"

    },
    {
        id: 4,
        imgSrc: "/assets/community/spotlight-with-paul.png",
        title: " Spotlight with Paul Barnes from MAP",
        videoId: "b08GZk8fZ30",
        date: "May 31, 2025"

    },
    {
        id: 5,
        imgSrc: "/assets/community/appsheet.png",
        title: " AppSheet with Steegle.com",
        videoId: "rNwUo-g2TgI",
        date: "May 27, 2025"

    },
    {
        id: 6,
        imgSrc: "/assets/community/gemini-for-google-workspace.png",
        title: " Gemini for Google Workspace",
        videoId: "8sivbRpPeyM",
        date: "April 3, 2025"

    },
];
