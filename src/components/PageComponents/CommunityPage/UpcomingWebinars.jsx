
import SectionTitle from '@/components/PageLayout/SectionTitle'
import Image from 'next/image'
import React from 'react'

const UpcomingWebinars = () => {
    return (
        <section id="second-section">
            <div className="container">
                <div className="content-2 ">
                    <SectionTitle
                        sectionTitle1={"Upcoming Webinars"}
                                sectionTitle2={" "}
                                sectionPara={""}/>
                    <div className='lg:space-y-[0.5vw] space-y-[3vw]'>
                        <div className='h-full w-full rounded-[0.8vw]  overflow-hidden fadeUp '>
                            <Image src={"/assets/community/upcoming-webinar.png"} alt='Upcoming Webinar Banner' height={650} width={1440} className='object-cover' />
                        </div>
                      
                        <div className='h-full w-full rounded-[0.8vw] border border-[#E8E8E8] bg-white flex flex-col lg:items-center lg:justify-center lg:text-center lg:py-[1vw] lg:space-y-[1vw] fadeUp lg:px-0 py-[5vw] px-[5vw] space-y-[5vw]'>
                            <p className='lg:text-[1.8vw] lg:w-[50%] aeonik font-normal text-[6.5vw] md:text-[4.5vw]'>‘How to’ Webinar Series Email Signature Management</p>
                            <p className='content-p text-[#666666]'>September 11,  4:00 pm</p>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default UpcomingWebinars