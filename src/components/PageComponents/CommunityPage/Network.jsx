import gsap from "gsap";
import { useEffect, useRef } from "react"
import Image from "next/image";



export default function Network() {
    const section = useRef(null);
    const para = useRef(null);

   
    return (
        <>
            <section ref={section} id="network" className="lg:h-full lg:py-[7vw] w-screen h-fit">
                <div className="container-lg relative lg:mb-0 mb-[10vw]">
                    <div className="lg:px-[4vw] lg:flex lg:items-center lg:justify-between h-full w-full lg:mb-0 mb-[10vw] md:mb-[15vw]">
                        <div className="pt-[25vw] gap-y-[7vw] flex-col w-full flex md:pt-[20vw] lg:pt-0 lg:gap-y-10 lg:w-[55%]">
                            <h2 className='title-4xl text-anim aeonik overflow-hidden flex flex-wrap justify-start items-end space-y-[2vw] lg:space-y-0 !text-[8.5vw] lg:!text-[4vw]'>
                                <div className='overflow-hidden lg:w-full w-fit'>
                                 <span className="span block overflow-hidden">Your Exclusive Network</span>
                                    <span className="span block overflow-hidden"> of Google Workspace</span> <span className="span block overflow-hidden"> Innovators</span>
                                </div>
                               
                            </h2>

                            <p  className="lg:text-[1.25vw] fadeUp lg:w-[36vw] md:mb-0 font-medium md:text-[4vw] md:w-full text-[5vw] mb-[5vw]">
                             Looking for a place where IT admins, Google Workspace partners, and industry professionals <span className="lg:!font-semibold">connect, share, and grow </span>? Welcome to the <span className="lg:!font-semibold"> Google Workspace Community </span>.
                            </p>

                            
                        </div>

                        <div className="lg:w-[35%] lg:block text-end relative lg:mt-0  fadeUp w-[80%] mx-auto mt-[7vw]">
                            <Image src={"/assets/community/community-network.svg"} height={480} width={472} alt="Network"/>
                           
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}