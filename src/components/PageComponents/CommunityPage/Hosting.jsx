import { useEffect, useRef } from "react"
import Image from "next/image";
import PrimaryButton from "@/components/PageLayout/Button/PrimaryButton";


export default function Hosting() {
    const section = useRef(null);


    return (
        <>
            <section ref={section} id="hosting" className="lg:h-full pb-[7vw] pt-[4vw] w-screen h-fit">
                <div className="container-lg relative lg:mb-0 mb-[10vw]">
                    <div className="lg:px-[4vw] lg:flex lg:items-center lg:justify-between h-full w-full lg:mb-0 mb-[10vw] md:!mb-[0vw]">
                        <div className="pt-[10vw] gap-y-[7vw] flex-col w-full flex md:pt-[10vw] lg:pt-0 lg:gap-y-7 lg:w-[53%]">
                           
                            <h2 className='title-4xl lg:mb-8 mb-6 text-anim  leading-[1.2] flex flex-wrap justify-start items-end space-y-[2vw] lg:space-y-0 '>
                                <span className='overflow-hidden lg:w-full w-fit span block'>
                                Fancy Hosting your own Webinar Session?
                                </span>
                               
                            </h2>

                            <div className="lg:space-y-[1.5vw]">
                                <p className="lg:text-[1.25vw] lg:w-[35vw] md:mb-0 font-medium md:text-[4vw] md:w-full text-[5vw] mb-[5vw] fadeUp">
                                    The Google Workspace Community is about bringing like-minded people together to share ideas and offer advice where needed.
                                </p>
                                <p className="lg:text-[1.25vw] lg:w-[35vw] md:mb-0 font-medium md:text-[4vw] md:w-full text-[5vw] mb-[5vw] fadeUp">
                                    If you&apos;re in the community and want to host a session or know someone perfect to host, feel free to reach out.
                                </p>
                                <p className="lg:text-[1.25vw] lg:w-[35vw] md:mb-0 font-medium md:text-[4vw] md:w-full text-[5vw] mb-[5vw] fadeUp">
                                    And if you&apos;re not part of the community but want to be part of exclusive conversations and a growing network of IT leaders, now&apos;s the time to join!
                                </p>
                            </div>
                            <div className="mt-[3vw]">
                                <PrimaryButton btnText={"Contact Us"} link={"/contact-us"} />

                            </div>

                        </div>

                        <div className="lg:w-[35%] lg:block text-end relative w-[80%] mx-auto mt-[10vw]">
                            <Image src={"/assets/community/community-hosting.svg"} height={480} width={472} alt="Network" />

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}