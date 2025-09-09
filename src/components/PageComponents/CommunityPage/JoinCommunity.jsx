
import PrimaryButton from '@/components/PageLayout/Button/PrimaryButton'
import SectionTitle from '@/components/PageLayout/SectionTitle'
import React from 'react'

const JoinCommunity = () => {
    return (
        <section id="second-section">
            <div className="container">
                <div className="content-2">
                    <SectionTitle
                        sectionTitle1={"Want to join the community?"}
                        sectionTitle2={" "}
                        sectionPara={"Once you're a part of the community you will gain access to our exclusive Google Chat Space where you can attend valuable webinars and be a part of the community conversation"} />

                    {/* <p className='content-p lg:mt-[0vw] lg:w-[50%] fadeUp mt-[-5vw] w-full'></p> */}

                    <div className='flex lg:flex-row items-center justify-center lg:gap-[1.5vw] lg:mt-[6vw] mt-[7vw] flex-col gap-[5vw]'>
                        <div className="flex flex-col items-center justify-center gap-[3vw]  fadeUp bg-white  duration-300 lg:w-[32%] lg:min-h-[28vw] overflow-hidden rounded-[18px]  border border-[#E8E8E8] text-center hover:shadow-xl w-full min-h-[80vw]">
                            <div className="image-container lg:h-[6vw] lg:w-[6vw] h-[20vw] w-[20vw]">
                                <img src="/assets/community/visit.svg" className="h-full w-full object-cover" alt="Webinar Image" title="Webinar Image" />
                            </div>
                            <div className='lg:space-y-[2vw] space-y-[5vw]'>
                                <h3 className="lg:text-[1.57vw] text-[5vw]  leading-[1.3]">
                                    Visit the Group Page
                                </h3>
                                <div className="">
                                    <PrimaryButton btnText={"Visit"} link={"#"} />
                                </div>
                            </div>

                        </div>
                        <div className="flex flex-col items-center justify-center gap-[3vw]  fadeUp bg-white  duration-300 lg:w-[32%] lg:min-h-[28vw] overflow-hidden rounded-[18px]  border border-[#E8E8E8] text-center hover:shadow-xl w-full min-h-[80vw] ">
                            <div className='flex flex-col items-center justify-center gap-[3vw] mt-[-5vw]'>
                                <div className="image-container lg:h-[6vw] lg:w-[6vw] h-[20vw] w-[20vw]">
                                    <img src="/assets/community/wait.svg" className="h-full w-full object-contain" alt="Webinar Image" title="Webinar Image" />
                                </div>
                                <div className='lg:space-y-[2vw] space-y-[5vw]'>
                                    <h3 className="lg:text-[1.57vw] text-[5vw]  leading-[1.3]">
                                        Wait for Approval
                                    </h3>

                                </div>
                            </div>

                        </div>
                        <div className="flex flex-col items-center justify-center gap-[3vw]  fadeUp bg-white  duration-300 lg:w-[32%] lg:min-h-[28vw] overflow-hidden rounded-[18px]  border border-[#E8E8E8] text-center hover:shadow-xl w-full min-h-[80vw]">
                            <div className="image-container lg:h-[6vw] lg:w-[6vw] h-[20vw] w-[20vw]">
                                <img src="/assets/community/join.svg" className="h-full w-full object-cover" alt="Webinar Image" title="Webinar Image" />
                            </div>
                            <div className='lg:space-y-[2vw] space-y-[5vw]'>
                                <h3 className="lg:text-[1.57vw] text-[5vw]  leading-[1.3]">
                                    Join the Chat Space
                                </h3>
                                <div className="">
                                    <PrimaryButton btnText={"Join"} link={"#"} />
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