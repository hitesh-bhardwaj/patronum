
import PrimaryButton from '@/components/PageLayout/Button/PrimaryButton'
import React from 'react'

const JoinCommunity = () => {
  return (
    <section id="second-section">
                        <div className="container">
                            <div className="content-2">
                                <h2 className="title-4xl text-anim">
                                    <span>
                                       Want to join the community?
                                    </span>
                                </h2>
                                <p className='content-p lg:mt-[3vw] lg:w-[50%]'>Once you're a part of the community you will gain access to our exclusive Google Chat Space where you can attend valuable webinars and be a part of the community conversation</p>

<div className='flex items-center justify-center gap-[1.5vw] lg:mt-[6vw] '>
    <div className="flex flex-col items-center justify-center gap-[3vw]  fadeUp bg-white  duration-300 w-[32%] min-h-[28vw] overflow-hidden rounded-[18px]  border border-[#E8E8E8] text-center">
                <div className="image-container h-[6vw] w-[6vw] ">
                    <img src="/assets/community/visit.svg" className="h-full w-full object-cover" alt="Webinar Image" title="Webinar Image"/>
                </div>
                <div className='space-y-[2vw]'>
                 <h3 className="lg:text-[1.57vw] text-[5vw]  leading-[1.3]">
                        Visit the Group Page
                    </h3>
                    <div className="">
                    <PrimaryButton btnText={"Visit"} link={"#"}/>
                    </div>
                    </div>
               
            </div>
            <div className="flex flex-col items-center justify-center gap-[3vw]  fadeUp bg-white  duration-300 w-[32%] min-h-[28vw] overflow-hidden rounded-[18px]  border border-[#E8E8E8] text-center ">
                <div className='flex flex-col items-center justify-center gap-[3vw] mt-[-5vw]'>
                <div className="image-container h-[6vw] w-[6vw] ">
                    <img src="/assets/community/wait.svg" className="h-full w-full object-contain" alt="Webinar Image" title="Webinar Image"/>
                </div>
                <div className='space-y-[2vw]'>
                 <h3 className="lg:text-[1.57vw] text-[5vw]  leading-[1.3]">
                        Wait for Approval
                    </h3>
                    
                    </div>
                    </div>
               
            </div>
            <div className="flex flex-col items-center justify-center gap-[3vw]  fadeUp bg-white  duration-300 w-[32%] min-h-[28vw] overflow-hidden rounded-[18px]  border border-[#E8E8E8] text-center">
                <div className="image-container h-[6vw] w-[6vw] ">
                    <img src="/assets/community/join.svg" className="h-full w-full object-cover" alt="Webinar Image" title="Webinar Image"/>
                </div>
                <div className='space-y-[2vw]'>
                 <h3 className="lg:text-[1.57vw] text-[5vw]  leading-[1.3]">
                        Join the Chat Space
                    </h3>
                    <div className="">
                    <PrimaryButton btnText={"Join"} link={"#"}/>
                    </div>
                    </div>
               
            </div>

</div>
                               
                            </div>
                        </div>
                    </section>
  )
}

export default JoinCommunity