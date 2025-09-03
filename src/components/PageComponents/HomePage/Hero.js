import gsap from "gsap";
import { useEffect, useRef } from "react"
import useWindowSize from "@/components/Header/useWindowSize";
import Image from "next/image";
import DemoButton from "@/components/Buttons/DemoButton";
import CallButton from "@/components/Buttons/CallButton";
import ScrollButton from "@/components/Buttons/ScrollButton";

function supportsHEVCAlpha() {
    const navigator = window.navigator;
    const ua = navigator.userAgent.toLowerCase()
    const hasMediaCapabilities = !!(navigator.mediaCapabilities && navigator.mediaCapabilities.decodingInfo)
    const isSafari = ((ua.indexOf('safari') != -1) && (!(ua.indexOf('chrome') != -1) && (ua.indexOf('version/') != -1)))
    return isSafari && hasMediaCapabilities
}

export default function Hero() {
    const { width } = useWindowSize();

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

    useEffect(() => {
        const player = document.getElementById('player');
        player.src = supportsHEVCAlpha() ? '/assets/home/Dashboard-Hero.mov' : '/assets/home/Dashboard-Hero.webm';
    }, [supportsHEVCAlpha]);

    return (
        <>
            <section ref={section} id="hero" className="lg:h-screen w-screen h-fit">
                <div className="container-lg relative lg:mb-0 mb-[10vw]">
                    <div className="lg:px-[4vw] lg:flex lg:items-center lg:justify-between h-full w-full lg:mb-0 mb-[10vw] md:mb-[15vw]">
                        <div className="pt-[25vw] gap-y-[7vw] flex-col w-full flex md:pt-[20vw] lg:pt-0 lg:gap-y-10 lg:w-[55%]">
                            <h1 className='title-5xl hero-anim flex flex-wrap justify-start items-end space-y-[2vw] lg:space-y-0 !text-[13vw] lg:!text-[5vw]'>
                                <div className='overflow-hidden lg:w-full mb-[1vw] w-fit'>
                                    <span className="span block">Your <span className="text-primary">Complete</span>{" "}</span>
                                </div>
                                <div className="overflow-hidden w-fit mr-2 lg:mr-0">
                                    <Image className="span lg:w-[15.5vw] md:w-[32vw] w-[35vw]" src="/assets/home/google.svg" priority={false} width={250} height={100} alt="google logo image" />
                                </div>
                                <div className="overflow-hidden w-fit lg:ml-[1.4vw] tablet:ml-0">
                                    <Image className="span lg:mt-[0.2vw] md:mt-[3vw] mt-[2.5vw] lg:w-[23vw] md:w-[50vw] w-[50vw]" src="/assets/home/workspace.svg" priority={false} width={400} height={100} alt="google workspace image" />
                                </div>
                                <span className="hidden">Google Workspace{" "}</span>
                                <div className='overflow-hidden w-full'>
                                    <span className="span block leading-[115%]">Manager</span>
                                </div>
                            </h1>

                            <p ref={para} className="lg:text-[1.25vw] lg:w-[30vw] md:mb-0 font-medium md:text-[4vw] md:w-full text-[5vw] mb-[5vw]">
                                The only tool you'll ever need to streamline your Google Workspace management and data security.
                            </p>

                            <div className="flex md:gap-[2vw] flex-col md:flex-row gap-[5vw]">
                                <DemoButton className="hero-button-anim" />
                                <CallButton />
                            </div>
                        </div>

                        <div className="lg:w-[40%] lg:block text-end relative hidden">
                            <video
                                width={600}
                                height={530}
                                id="player"
                                loading="lazy"
                                alt='patronum dashboard showcase'
                                className='hero-img w-full'
                                muted
                                autoPlay
                                loop
                                playsInline>
                            </video>
                        </div>
                    </div>
                    <ScrollButton />
                </div>
            </section>
        </>
    )
}