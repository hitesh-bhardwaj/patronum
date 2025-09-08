import SectionTitle from '@/components/PageLayout/SectionTitle';
import React from 'react';

const Features = () => {
    const features = [
        {
            title: "Share insights and real-world solutions",
            img: '/assets/community/features-1.svg',

        },
        {
            title: "Stay current with Google Workspace updates",
            img: '/assets/community/features-2.svg',

        },
        {
            title: "Access exclusive webinars and expert discussions",
            img: '/assets/community/features-3.svg',

        },
        {
            title: "Collaborate live in our Google Chat Space",
            img: '/assets/community/features-4.svg',

        },
        {
            title: "Grow your network and skills",
            img: '/assets/community/features-5.svg',

        }
    ]

    return (
        <>
            <section id="features">
                <div className="container">
                    <div className="content">
                        <div className="section-head">
                            <SectionTitle
                                sectionTitle1={"A free, global hub for IT leaders,"}
                                sectionTitle2={" admins, and partners to:"}
                                sectionPara={""}
                            />
                        </div>
 <span className="h-[1px] bg-[#1a1a1a] w-full block mt-4" />
                        <div className="w-full">
                            <div >
                                {features.map((item, index) => (
                                    <div key={index} className="w-full ">
                                        <div className="flex items-center justify-between w-full  px-[1vw] py-[2vw]">

                                            <h5 className="text-[1.9vw]  capitalize aeonik">
                                                {item.title}
                                            </h5>


                                            <div className="h-[4.5vw] w-auto">
                                                <img
                                                    src={item.img}
                                                    loading="lazy"
                                                    alt={`${item.title} Image`}
                                                    className="h-full w-auto object-contain"
                                                />
                                            </div>
                                        </div>


                                        <span className="h-[1px] bg-[#1a1a1a] w-full block " />
                                    </div>
                                ))}

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Features;
