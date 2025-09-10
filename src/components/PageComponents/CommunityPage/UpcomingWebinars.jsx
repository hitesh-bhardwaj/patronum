
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
                        sectionPara={""} />
                    <div className='lg:space-y-[0.5vw] space-y-[3vw]'>
                        <div className='h-full w-full rounded-[0.8vw] duration-200 overflow-hidden fadeUp hover:shadow-xl border hover:border-2 border-[#e8e8e8] hover:border-primary'>
                            <a className='block w-full h-full' href='https://www.linkedin.com/events/7369321724376522752/' target='_blank' rel='noreferrer'>
                                <Image quality={100} src={"/assets/community/upcoming-webinar.png"} alt='Upcoming Webinar Banner' height={650} width={1440} className='object-cover' />
                            </a>
                        </div>

                        <a className='block' href='https://www.linkedin.com/events/7369321724376522752/' target='_blank' rel='noreferrer'>
                            <div className='h-full w-full rounded-[0.8vw] border border-[#E8E8E8] bg-white hover:border-primary hover:border-2 flex flex-col lg:items-center lg:justify-center lg:text-center lg:py-[1vw] lg:space-y-[1vw] fadeUp lg:px-0 py-[5vw] px-[5vw] space-y-[5vw] duration-200 hover:shadow-xl'>
                                <p className='lg:text-[1.8vw] lg:w-[50%] aeonik font-normal text-[6.5vw] md:text-[4.5vw]'>‘How to’ Webinar Series Email Signature Management</p>
                                <p className='content-p text-[#666666]'>September 11,  4:00 pm</p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default UpcomingWebinars