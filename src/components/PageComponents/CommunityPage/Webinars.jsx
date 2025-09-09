import PrimaryButton from '@/components/PageLayout/Button/PrimaryButton'
import Link from 'next/link'
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
        const WebinarCard = ({ imgSrc, title,videoId}) => {
    return (
        <>
        <div onClick={() => openModal(videoId)}  className="fadeUp guide-card  duration-300 w-[30%]   min-h-[20vw] h-full overflow-hidden rounded-[18px]  border-[0.67px] border-[#E8E8E8] bg-white  hover:shadow-xl cursor-pointer ">
            <div className="image-container w-full h-[50%] relative">
                <img src={imgSrc} className="h-full w-full object-cover" alt="Webinar Image" title="Webinar Image" />
                <div className='absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 lg:h-[4vw] lg:w-[4vw] rounded-full bg-white z-[10] flex items-center justify-center h-[15vw] w-[15vw]'>
                    <img src='/assets/community/triangle.png' height={15} width={15} alt='triangle'/>


                </div>
            </div>
            <div className="text-container px-[5%] py-[4%] lg:pb-[8%] pb-[8%] ">
                <h3 className="lg:text-[1.57vw] text-[6vw]  leading-[1.3] lg:w-[88%] lg:h-[7vw] h-[28vw] md:text-[4.5vw] md:h-[15vw]">
                    {title}
                </h3>
                <div className="">
                    <p className='content-p text-[#666666]'>2 days ago</p>
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
            <div className="container-lg">
                <div className="content-2 flex flex-col  justify-center lg:gap-[3vw] gap-[12vw]">
                    <h2 className="title-4xl text-anim w-[80%] lg:w-full">
                        <span>
                            Watch Recent Webinars
                        </span>
                    </h2>

                    <div className=" w-full flex flex-wrap gap-[1.5vw] lg:gap-y-[2vw] gap-y-[3vw] md:gap-y-[1.5vw]">
                        {webinars.map((card,index)=>(
                           
                        <WebinarCard
                        key={index}
                            imgSrc={card.imgSrc}
                            title={card.title}
                            videoId={card.videoId}
                        />
                        ))}
                    
                    </div>
                    <div className='flex flex-col items-center'>
                        <PrimaryButton btnText={"See All Webinars"} link={"/webinars"}/>
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
    imgSrc: "/assets/community/webinar-1.png",
    title: "Patronum+ Introduction Google Workspace File Governance",
    videoId: "8-QdeYK78Dk"
  },
  {
    id: 2,
    imgSrc: "/assets/community/webinar-2.png",
    title: "The Importance of DMARC within a Google Workspace environment",
    videoId: "zhx1Ov9ujPc"

  },
  {
    id: 3,
    imgSrc: "/assets/community/webinar-3.png",
    title: "The 2025 Patronum Roadmap",
    videoId: "NE1hmP6X2I0"

  },
  {
    id: 4,
    imgSrc: "/assets/community/webinar-4.png",
    title: "One Tool To Rule Them All - The Easy Way To Manage Google Workspace",
    videoId: "dPXBVDFe_h8"

  },
  {
    id: 5,
    imgSrc: "/assets/community/webinar-5.png",
    title: "2 Ways To Share Google Contacts",
    videoId: "_oiMzVIhizM"

  },
  {
    id: 6,
    imgSrc: "/assets/community/webinar-6.png",
    title: "3 Ways to Keep Google Drive Content Under Control",
    videoId: "v3Xlz8ExUzI"

  },
];
