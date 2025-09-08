
import Image from 'next/image'
import React from 'react'

const UpcomingWebinars = () => {
    return (
        <section id="second-section">
            <div className="container">
                <div className="content-2 lg:space-y-[5vw]">
                    <h2 className="title-4xl text-anim">
                        <span>
                            Upcoming Webinars
                        </span>
                    </h2>
                    <div className='space-y-[0.5vw]'>
                        <div className='h-full w-full rounded-[0.8vw] overflow-hidden'>
                            <Image src={"/assets/community/webinar-banner.png"} alt='Webinar Banner' height={650} width={1440} className='object-cover' />
                        </div>
                        <div className='h-full w-full rounded-[0.8vw] border border-[#E8E8E8] bg-white flex flex-col items-center justify-center text-center py-[1vw] space-y-[1vw]'>
                            <p className='lg:text-[1.57vw] w-[50%] aeonik font-normal'>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                            <p className='content-p text-[#666666]'>12 August,  20:30</p>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default UpcomingWebinars