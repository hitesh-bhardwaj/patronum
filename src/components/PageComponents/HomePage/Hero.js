import gsap from "gsap";
import { useEffect, useRef } from "react"
import ScrollToPlugin from "gsap/dist/ScrollToPlugin";
import Image from "next/image";
import DemoButton from "@/components/PageLayout/Button/DemoButton";
import CallButton from "@/components/PageLayout/Button/CallButton";
import { SplitInLine } from "@/components/Utils/SplitText";

gsap.registerPlugin(ScrollToPlugin);

function supportsHEVCAlpha() {
    const navigator = window.navigator;
    const ua = navigator.userAgent.toLowerCase()
    const hasMediaCapabilities = !!(navigator.mediaCapabilities && navigator.mediaCapabilities.decodingInfo)
    const isSafari = ((ua.indexOf('safari') != -1) && (!(ua.indexOf('chrome') != -1) && (ua.indexOf('version/') != -1)))
    return isSafari && hasMediaCapabilities
}

export default function Hero() {

    const section = useRef(null);
    const para = useRef(null);

    const handleSmoothScroll = () => {
        gsap.to(window, {
            duration: 1.5,
            scrollTo: { y: "#features", offsetY: 50 },
            ease: "power3.inOut",
        });
    };

    useEffect(() => {
        const isFirstTimeLoading = sessionStorage.getItem('hasVisited') === null;
        let delayTime = isFirstTimeLoading ? 3.4 : 0.6;
        let ctx = gsap.context(() => {
            SplitInLine(para.current);
            const heroPara = para.current.querySelectorAll('.line .line-internal');
            const heroAnim = section.current.querySelectorAll(".hero-anim .span");

            const tl = gsap.timeline();
            tl.fromTo(heroAnim, 0.8, {
                yPercent: 100,
            }, {
                yPercent: 0,
                stagger: 0.1,
                ease: 'power2.out',
            }, `+=${delayTime}`)
                .fromTo(heroPara, 0.4, {
                    yPercent: 100,
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
            <section ref={section} id="hero" className="xl:h-screen w-screen md:h-screen h-[95vh]">
                <div className="container-lg relative">
                    <div className="lg:px-[4vw] flex-all">
                        <div className="lg:w-1/2 w-full flex flex-col lg:gap-y-10 gap-y-[7vw] lg:pt-0 md:pt-[20vw] pt-[25vw]">
                            <h1 className='title-5xl hero-anim'>
                                <div className='overflow-hidden'>
                                    <span className="span block">Your{" "}</span>
                                </div>
                                <div className="overflow-hidden">
                                    <div className="xl:flex items-center gap-[1vw] mt-[1vw] span">
                                        <Image className="xl:w-[35%] md:w-[45%] w-[50%]" src="/assets/home/google.svg" priority={false} width={250} height={100} alt="google logo image" />
                                        <Image className="xl:w-[55%] md:w-[70%] w-[80%] xl:mt-0 md:mt-[1.5vw] mt-[2.5vw]" src="/assets/home/workspace.svg" priority={false} width={400} height={100} alt="google workspace image" />
                                    </div>
                                </div>
                                <span className="hidden">Google Workspace{" "}</span>
                                <div className='overflow-hidden'>
                                    <span className="span block leading-[120%]">Manager</span>
                                </div>
                            </h1>
                            <p ref={para} className="hero-para">
                                The only tool you'll ever need to streamline your Google Workspace management.
                            </p>

                            <div className="flex md:gap-[2vw] flex-col md:flex-row gap-[5vw]">
                                <DemoButton className="hero-button-anim" />
                                <CallButton />
                            </div>
                        </div>

                        <div className="hero-right">
                            <video
                                width={600}
                                height={530}
                                id="player"
                                loading="lazy"
                                alt='patronum dashboard showcase'
                                className='hero-img'
                                muted
                                autoPlay
                                loop
                                playsInline>
                            </video>
                        </div>
                    </div>

                    <div className="scroll-down-btn">
                        <button className="scroll-down-a" onClick={handleSmoothScroll} aria-label="Scroll Down">
                            <svg width="86" height="86" viewBox="0 0 86 86" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle className="hero-svg-circle" cx="43" cy="43" r="42" stroke="currentColor" strokeWidth="2" />
                            </svg>
                            <span className="scroll-img-container">
                                <img data="first" src="/assets/icons/arrow-down-big.svg" alt="arrow-image" />
                                <img data="second" src="/assets/icons/arrow-down-big.svg" alt="arrow-image" />
                            </span>
                        </button>
                    </div>
                </div>
            </section>
        </>
    )
}