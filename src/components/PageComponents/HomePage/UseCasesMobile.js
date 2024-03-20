import LinkButton from "@/components/PageLayout/Button/LinkButton"
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation } from 'swiper/modules';

export default function UseCasesMobile() {

    const useCaseData = [
        {
            id: 0,
            title: "For Business",
            img: "patronum-for-business.svg",
            description1: "Patronum gets more out of Google Workspace by expanding access to administration tasks across your business including some for users. By setting up policies with the help of IT professionals.",
            description2: "You can delegate and automate a subset of administrative capabilities to non-IT managers, secure in the knowledge they are not going to break anything.",
            link: "/patronum-for-business",
        },
        {
            id: 1,
            title: "For HR",
            img: "patronum-for-hr.svg",
            description1: "With Patronum you can automatically unshare Google Files reducing your organisations exposure. Quickly and easily set up policies that automate the clean up of file sharing with external organisations.",
            description2: "With Patronum you can automatically unshare Google Files reducing your organisations exposure. Quickly and easily set up policies that automate.",
            link: "/patronum-for-hr",
        },
        {
            id: 3,
            title: "For Sales & Marketing",
            img: "patronum-for-sales-marketing.svg",
            description1: "Patronum is the only enterprise-ready contact sharing application for Google Workspace. Allow your users to share their specific contacts via labels, while giving administrators enhanced visibility and management of the whole process.",
            description2: "Patronum is the only enterprise-ready contact sharing application for Google Workspace. Allow your users to share their specific contacts.",
            link: "/patronum-for-sales-marketing",
        },
        {
            id: 4,
            title: "For Education",
            img: "patronum-for-education.svg",
            description1: "With Patronum you can automatically unshare Google Files reducing your organisations exposure. Quickly and easily set up policies that automate the clean up of file sharing with external organisations.",
            description2: "With Patronum you can automatically unshare Google Files reducing your organisations exposure. Quickly and easily set up policies that automate.",
            link: "/patronum-for-hr",
        },
        {
            id: 5,
            title: "For Users",
            img: "patronum-for-users.svg",
            description1: "With Patronum your staff will be up and running from day one with Google Drive Management, contact and calendar sharing. No more hunting for documents, or requesting access to schedules, or data they need.",
            description2: "Even in small organizations, it’s often difficult to connect with the right people. Patronum gives your organization instant access to your internal staff list via contact sharing.",
            link: "/patronum-for-users",
        }
    ]

    const UseCasesMobileCard = ({ title, img, description1, description2, link }) => {
        return (
            <div className="text-center w-full h-full md:px-12 px-8 space-y-[8vw]">
                <h4 className="md:text-4xl text-[6vw]">
                    <span>
                        {title}
                    </span>
                </h4>
                <div className="md:w-1/2 w-2/3 mx-auto">
                    <img className="w-full h-full" src={`assets/home/${img}`} alt={`${title} image`}/>
                </div>
                <div className="md:text-2xl text-lg space-y-[4vw]">
                    <p>
                        {description1}
                    </p>
                    <p>
                        {description2}
                    </p>
                </div>
                <div className="section-button-container">
                    <LinkButton 
                        btnText={"Learn More"}
                        link={link}
                    />
                </div>
            </div>
        )
      }

    return (
        <>
            <section id="use-cases-mobile" className="lg:hidden">
                <div className="content">
                    <div className="container overflow-hidden">
                        <div className="section-head">
                            <h2 className="title-4xl text-anim">
                                <span>Master Challenges</span> 
                                <br />
                                <span>Across Your Organisation</span>
                            </h2>
                        </div>
                    </div>

                    <div>
                        <Swiper
                            slidesPerView={1}
                            navigation={true} 
                            modules={[Navigation]}
                            className="UseCaseSwiper fadeUp"
                        >
                            {useCaseData.map((data, index) => (
                                <SwiperSlide key={index} className=''>
                                    <UseCasesMobileCard 
                                        title={data.title}
                                        img={data.img}
                                        description1={data.description1}
                                        description2={data.description2}
                                        link={data.link}
                                    />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </section>
        </>
    )
}