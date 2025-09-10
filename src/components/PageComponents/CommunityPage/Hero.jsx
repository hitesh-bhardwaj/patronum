import gsap from "gsap";
import { useEffect, useRef } from "react"
import Image from "next/image";
import PrimaryButton from "@/components/PageLayout/Button/PrimaryButton";
import ScrollButton from "@/components/Buttons/ScrollButton";
import SplitType from "split-type";


const scrollToId = (id) => {
  const target = document.querySelector(id);
  if (target) {
    target.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
};

export default function Hero() {
    const section = useRef(null);
    const para = useRef(null);

    useEffect(() => {
        const isFirstTimeLoading = sessionStorage.getItem('hasVisited') === null;
        let delayTime = isFirstTimeLoading ? 3.4 : 0.6;

        let ctx = gsap.context(() => {
            const heroPara = para.current;
            // const heroAnim = section.current.querySelectorAll(".hero-anim .span");
                        const title = new SplitType('.page-hero-anim', { types: 'words' });
                        const titleAnim = document.querySelectorAll('.page-hero-anim span .word');

            const tl = gsap.timeline();

             tl.from(titleAnim, 0.8, {
                yPercent: 280,
                stagger: 0.02,
                ease: "Power2.out",
            }, `+=${delayTime}`)
                .fromTo(heroPara, 0.4, {
                    yPercent: 100,
                    opacity: 0
                }, {
                    yPercent: 0,
                    opacity: 1,
                    ease: "Power2.out",
                    stagger: 0.1,
                }, '-=0.5')
                .from('.hero-button-anim', 0.8, {
                    y: 30,
                    opacity: 0,
                    ease: "power2.out",
                }, '-=0.3')
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
                        <div className="pt-[25vw] gap-y-[7vw] flex-col w-full flex md:pt-[20vw] lg:pt-0 lg:gap-y-7 lg:w-[55%]">
                            <h1 className="title-5xl page-hero-anim lg:!mb-0 !mb-[4vw] ">
                                <span className="overflow-hidden span leading-[1.2]">
                                Google Workspace Community
                                </span>
                               
                            </h1>
                            {/* <h1 className='title-5xl page-hero-anim overflow-hidden flex flex-wrap justify-start items-end space-y-[2vw] lg:space-y-0 !text-[13vw] lg:!text-[5vw] !leading-[0.5]'>
                                
                                   <span className="span block overflow-hidden leading-[1.2]">
                                  Google Workspace Community
                                  </span>
                                
                               
                            </h1> */}

                            <p ref={para} className="lg:text-[1.25vw] lg:w-[30vw] md:mb-0 font-medium md:text-[4vw] md:w-full text-[5vw] mb-[5vw]">
                               View our latest webinars and videos, or register for upcoming content to hear from industry experts.
                            </p>

                            <div className="flex md:gap-[2vw] flex-col md:flex-row gap-[5vw] hero-button-anim">
                                <PrimaryButton  onClick={(e) => {
        e.preventDefault();
        scrollToId("#join-community");
      }} btnText={"Join Community"} link={"#join-community"}/>
                               
                            </div>
                        </div>

                        <div className="lg:w-[40%] lg:block lg:mt-0 text-end relative w-[80%] mx-auto mt-[7vw]">
                            <Image src={"/assets/community/community-hero.svg"} height={480} width={472} alt="community-hero" className="hero-img"/>
                           
                        </div>
                    </div>
                    <ScrollButton/>
                    
                </div>
            </section>
        </>
    )
}