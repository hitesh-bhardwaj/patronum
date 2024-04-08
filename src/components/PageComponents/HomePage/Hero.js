import { useModal } from "@/components/InstallModal/ModelContext";
import gsap from "gsap";
import react, { useEffect } from "react"
import SplitType from "split-type";
import ScrollToPlugin from "gsap/dist/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

export default function Hero(){

    const { openModal } = useModal();

    const openVideoModal = () => {
        openModal('video');
    }

    const handleSmoothScroll = () => {
        gsap.to(window, {
            duration: 1.5,
            scrollTo: {y: "#features", offsetY: 50},
            ease: "power3.inOut",
        });
    };

    useEffect(() => {
        const isFirstTimeLoading = sessionStorage.getItem('hasVisited') === null;
        let delayTime = isFirstTimeLoading ? 3.4 : 0.6;

        let ctx = gsap.context(() => {

            const text = new SplitType('.hero-para', {types: 'words'});
            const heroPara = document.querySelectorAll('.hero-para span .word');
            const heroAnim = document.querySelectorAll(".hero-anim .span");
            const headerAnim = document.querySelectorAll(".header-anim");

            const tl = gsap.timeline();
            tl.from(headerAnim, 1,{
                opacity: 0,
                stagger: 0.05,
                ease: 'power2.out',
            }, `+=${delayTime}`)
            .to(heroAnim, 0.8,{
                y: 0,
                stagger: 0.1,
                ease: 'power2.out',
            }, '-=1')
            .to(heroPara, 0.4,{
                y: 0,
                opacity: 1,
                ease: "Power2.out",
                stagger: 0.01,
            }, '-=0.8')
            .from('.hero-button-anim', 0.8, {
                y: 30,
                opacity: 0,
                ease: "power2.out",
            }, '-=0.8')
            .to(".hero-svg-circle",{
                strokeDasharray: "310% 300%",
                duration: 1.5,
                ease: "power2.out",
            }, '-=0.8')
            .from(".scroll-img-container",{
                y: -10, 
                opacity: 0,
                duration: 0.8
            }, '-=0.5')
            .to('.hero-img', 2,{
                x: 0,
                opacity: 1,
                ease: "expo.out",
            }, '-=2');
        });
        return () => ctx.revert();
    }, []);

    return(
        <>
            <section id="hero">
                <div className="container-lg relative">
                    <div className="lg:px-[4vw] flex-all">
                        <div className="lg:w-1/2 w-full flex flex-col lg:gap-y-10 gap-y-[7vw] lg:pt-0 md:pt-[20vw] pt-[25vw]">
                            
                            <h1 className='title-5xl lg:block hidden'>
                                <div className='hero-anim Your'>
                                    <span className="span">Your </span>
                                </div>
                                <div className="hero-anim">
                                    <img
                                        src="/assets/home/google-workspace.svg"
                                        alt='Google Logo'
                                        title='Google Logo'
                                        className='google-logo-hero span'
                                        width={750}
                                        height={100}
                                    />
                                </div>
                                <p className="hidden">Google Workspace </p>
                                <div className='hero-anim'>
                                    <span className="span">
                                        Manager
                                    </span>
                                </div>
                            </h1>
                            
                            <h1 className='title-5xl lg:hidden block'>
                                <div className="flex flex-col gap-y-[2vw]">
                                    <div className="hero-anim flex items-end gap-x-[2vw] w-full">
                                        <span className="span">
                                            Your
                                        </span>
                                        <p className="hidden"> Google Workspace </p>
                                        <span className="md:w-[45%] w-[50%] mt-[1.5vw] span">
                                            <img className="w-full google" src="/assets/home/google.svg" loading="lazy" width={307} height={100} alt="google logo image" />
                                        </span>
                                    </div>
                                    <div className="hero-anim">
                                        <span className="md:w-[70%] w-[80%] mt-[1.5vw] span">
                                            <img className="w-full" src="/assets/home/workspace.svg" loading="lazy" width={450} height={100} alt="google workspace image"/>
                                        </span>
                                    </div>
                                    <div className="hero-anim">
                                        <span className="span manager">
                                            Manager
                                        </span>
                                    </div>
                                </div>
                            </h1>
                            <p className="hero-para">
                                <span>
                                    The only tool you'll ever need to streamline your Google Workspace management.
                                </span>
                            </p>

                            <button onClick={openVideoModal} className="btn hero-button-anim">
                                <span data-primary className="btn-text">
                                    Watch Demo
                                </span>
                                <div aria-hidden="true" className="btn-circle demo">
                                    <div className="btn-circle-text">
                                        Watch Demo
                                        <svg viewBox="0 0 16 21" fill="none" xmlns="http://www.w3.org/2000/svg" className="btn-icon">
                                            <path d="M1.21809 0C1.35452 0 1.49094 0 1.63711 0C2.16333 0.105559 2.64082 0.326273 3.08908 0.623757C6.96748 3.24354 10.8459 5.85372 14.7145 8.4735C14.9094 8.60785 15.1141 8.75179 15.2797 8.92453C15.9326 9.57707 16.186 10.3352 15.8547 11.2276C15.65 11.7842 15.231 12.1681 14.7438 12.4943C10.8459 15.1237 6.95773 17.7531 3.05984 20.3633C2.70903 20.6032 2.29975 20.7855 1.89048 20.9199C1.1109 21.1694 0.428768 20.8239 0.175405 20.0562C0.0584683 19.7107 0.0194894 19.3365 0.0194894 18.9718C0 13.3196 0 7.66742 0 2.02481C0 1.89046 0 1.75612 0.00974472 1.61217C0.0487236 0.758105 0.409278 0.268695 1.21809 0Z" className="btn-path fill-current"/>
                                            <path d="M1.21809 0C1.35452 0 1.49094 0 1.63711 0C2.16333 0.105559 2.64082 0.326273 3.08908 0.623757C6.96748 3.24354 10.8459 5.85372 14.7145 8.4735C14.9094 8.60785 15.1141 8.75179 15.2797 8.92453C15.9326 9.57707 16.186 10.3352 15.8547 11.2276C15.65 11.7842 15.231 12.1681 14.7438 12.4943C10.8459 15.1237 6.95773 17.7531 3.05984 20.3633C2.70903 20.6032 2.29975 20.7855 1.89048 20.9199C1.1109 21.1694 0.428768 20.8239 0.175405 20.0562C0.0584683 19.7107 0.0194894 19.3365 0.0194894 18.9718C0 13.3196 0 7.66742 0 2.02481C0 1.89046 0 1.75612 0.00974472 1.61217C0.0487236 0.758105 0.409278 0.268695 1.21809 0Z" className="btn-path fill-current"/>
                                        </svg>
                                    </div>
                                </div>
                            </button>

                        </div>
                        
                        <div className="hero-right">
                            <video 
                                src="/assets/home/Dashboard-Hero.webm" 
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
                                <circle className="hero-svg-circle" cx="43" cy="43" r="42" stroke="currentColor" strokeWidth="2"/>
                            </svg>
                            <span className="scroll-img-container">
                                <img data="first" src="/assets/icons/arrow-scroll.png" alt="arrow-image"/>
                                <img data="second" src="/assets/icons/arrow-scroll.png" alt="arrow-image"/>
                            </span>
                        </button>
                    </div>
                </div>
            </section>
        </>
    )
}