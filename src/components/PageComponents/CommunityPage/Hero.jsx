import gsap from "gsap";
import { useEffect, useRef } from "react"
import Image from "next/image";
import PrimaryButton from "@/components/PageLayout/Button/PrimaryButton";
import ScrollButton from "@/components/Buttons/ScrollButton";
import { Scroll } from "lucide-react";


export default function Hero() {
    const section = useRef(null);
    const para = useRef(null);

    useEffect(() => {
        const isFirstTimeLoading = sessionStorage.getItem('hasVisited') === null;
        let delayTime = isFirstTimeLoading ? 3.4 : 0.6;

        let ctx = gsap.context(() => {
            const heroPara = para.current;
            const heroAnim = section.current.querySelectorAll(".hero-anim .span");

            const tl = gsap.timeline();

            tl.fromTo(heroAnim, 0.8, {
                yPercent: 105,
            }, {
                yPercent: 0,
                stagger: 0.1,
                ease: 'power2.out',
            }, `+=${delayTime}`)
                .fromTo(heroPara, 0.4, {
                    yPercent: 100,
                    opacity: 0
                }, {
                    yPercent: 0,
                    opacity: 1,
                    ease: "Power2.out",
                    stagger: 0.1,
                }, '-=0.8')
                .from('.hero-button-anim', 0.8, {
                    y: 30,
                    opacity: 0,
                    ease: "power2.out",
                }, '-=0.8')
                .fromTo(".hero-svg-circle", {
                    strokeDasharray: "0% 300%",
                }, {
                    strokeDasharray: "310% 300%",
                    duration: 1.5,
                    ease: "power2.out",
                }, '-=0.8')
                .from(".scroll-img-container", {
                    y: -10,
                    opacity: 0,
                    duration: 0.8
                }, '-=0.5')
                .fromTo('.hero-img', 2, {
                    x: 100,
                    opacity: 0
                }, {
                    x: 0,
                    opacity: 1,
                    ease: "expo.out",
                }, '-=2');
        });
        return () => ctx.revert();
    }, []);

   
    return (
        <>
            <section ref={section} id="hero" className="lg:h-screen w-screen h-fit">
                <div className="container-lg relative lg:mb-0 mb-[10vw]">
                    <div className="lg:px-[4vw] lg:flex lg:items-center lg:justify-between h-full w-full lg:mb-0 mb-[10vw] md:mb-[15vw]">
                        <div className="pt-[25vw] gap-y-[7vw] flex-col w-full flex md:pt-[20vw] lg:pt-0 lg:gap-y-10 lg:w-[55%]">
                            <h1 className='title-5xl hero-anim flex flex-wrap justify-start items-end space-y-[2vw] lg:space-y-0 !text-[13vw] lg:!text-[5vw]'>
                                <div className='overflow-hidden lg:w-full mb-[1vw] w-fit leading-[1.2]'>
                                   <span className="span block">
                                  Google Workspace Community
                                  </span>
                                  
                                </div>
                               
                            </h1>

                            <p ref={para} className="lg:text-[1.25vw] lg:w-[30vw] md:mb-0 font-medium md:text-[4vw] md:w-full text-[5vw] mb-[5vw]">
                               View our latest webinars and videos, or register for upcoming content to hear from industry experts.
                            </p>

                            <div className="flex md:gap-[2vw] flex-col md:flex-row gap-[5vw]">
                                <PrimaryButton btnText={"Join Community"} link={"#"} className="hero-button-anim"/>
                               
                            </div>
                        </div>

                        <div className="lg:w-[40%] lg:block text-end relative hidden">
                            <Image src={"/assets/community/community-hero.png"} height={480} width={472} alt="community-hero"/>
                           
                        </div>
                    </div>
                    <ScrollButton/>
                    
                </div>
            </section>
        </>
    )
}