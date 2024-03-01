import { useModal } from "@/components/InstallModal/ModelContext";
import gsap from "gsap";
import react, { useEffect } from "react"
import SplitType from "split-type";

export default function Hero(){
    
    const { openModal } = useModal();

    const openVideoModal = () => {
        openModal('video');
    }

    useEffect(() => {
        let ctx = gsap.context(() => {

            const text = new SplitType('.hero-para', {types: 'words'});
            const heroPara = document.querySelectorAll('.hero-para span .word');
            const heroAnim = document.querySelectorAll(".hero-anim .span");

            const tl = gsap.timeline();
            tl.to(heroAnim, 0.8,{
                y: 0,
                stagger: 0.3,
                ease: 'power2.out',
            }, '+=5.5').to(heroPara, 0.4,{
                y: 0,
                opacity: 1,
                duration: 0.4,
                ease: "Power2.out",
                stagger: 0.025,
            }, '-=0.8').from('.hero-button-anim', 0.5, {
                y: 30,
                opacity: 0,
                ease: "power2.out",
            }, '-=0.5').to('.hero-img', 1.5,{
                x: 0,
                opacity: 1,
                ease: "power2.out",
            }, '-=1.2')
            .to(".hero-svg-circle",{
                strokeDasharray: "310% 300%",
                duration: 1.5,
                ease: "power2.out",
            }, '-=1')
            .from(".scroll-down-btn-img",{
                y: -10, 
                opacity: 0,
                duration: 0.7
            }, '-=0.4');
        });
        return () => ctx.revert();
    }, []);



    return(
        <>
            <section id="hero">
                <div className="container-lg relative">
                    <div className="px-[4vw] flex-all">
                        <div className="hero-left flex flex-col gap-y-10">
                            <h1 className='title-5xl'>
                                <div className='hero-anim Your'>
                                    <span className="span">Your</span>
                                </div>
                                <div className="hero-anim">
                                    <img
                                        src="/assets/home/google-workspace.svg"
                                        alt='Google Logo'
                                        title='Google Logo'
                                        className='google-logo-hero span'
                                    />
                                </div>
                                
                                <div className='hero-anim'>
                                    <span className="span">
                                        Manager
                                    </span>
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
                            <img
                                src="/assets/home/hero-animation.gif"
                                className='hero-img'
                                alt='patronum dashboard showcase'
                                title='patronum dashboard showcase'
                            />
                            <span className="hero-img-bg" />
                        </div>
                    </div>
                    <div className="scroll-down-btn">
                        <a href="#features">
                            <svg width="86" height="86" viewBox="0 0 86 86" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle className="hero-svg-circle" cx="43" cy="43" r="42" stroke="currentColor" strokeWidth="2"/>
                            </svg>
                            <span className="block absolute overflow-hidden">
                                <svg className="scroll-down-btn-img" width="19" height="27" viewBox="0 0 19 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g className="first-path">
                                        <path d="M0.838474 17.059C0.838474 16.7978 0.926565 16.5365 1.11533 16.3303C1.48026 15.9316 2.0843 15.9316 2.44924 16.3303L9.42082 23.9474L16.3924 16.3303C16.7573 15.9316 17.3614 15.9316 17.7263 16.3303C18.0912 16.729 18.0912 17.389 17.7263 17.7877L10.0878 26.1335C9.72284 26.5322 9.1188 26.5322 8.75387 26.1335L1.11533 17.7877C0.926565 17.5815 0.838474 17.3202 0.838474 17.059Z" fill="#2A2A2A" stroke="#2A2A2A" strokeWidth="0.5"/>
                                        <path d="M8.4786 25.1711L8.4786 2.03119C8.4786 1.46747 8.90646 1 9.4224 1C9.93835 1 10.3662 1.46747 10.3662 2.03119L10.3662 25.1711C10.3662 25.7348 9.93835 26.2023 9.4224 26.2023C8.90646 26.2023 8.4786 25.7348 8.4786 25.1711Z" fill="#2A2A2A" stroke="#2A2A2A" strokeWidth="0.5"/>
                                    </g>
                                    <g className="second-path">
                                        <path d="M0.838474 17.059C0.838474 16.7978 0.926565 16.5365 1.11533 16.3303C1.48026 15.9316 2.0843 15.9316 2.44924 16.3303L9.42082 23.9474L16.3924 16.3303C16.7573 15.9316 17.3614 15.9316 17.7263 16.3303C18.0912 16.729 18.0912 17.389 17.7263 17.7877L10.0878 26.1335C9.72284 26.5322 9.1188 26.5322 8.75387 26.1335L1.11533 17.7877C0.926565 17.5815 0.838474 17.3202 0.838474 17.059Z" fill="#2A2A2A" stroke="#2A2A2A" strokeWidth="0.5"/>
                                        <path d="M8.4786 25.1711L8.4786 2.03119C8.4786 1.46747 8.90646 1 9.4224 1C9.93835 1 10.3662 1.46747 10.3662 2.03119L10.3662 25.1711C10.3662 25.7348 9.93835 26.2023 9.4224 26.2023C8.90646 26.2023 8.4786 25.7348 8.4786 25.1711Z" fill="#2A2A2A" stroke="#2A2A2A" strokeWidth="0.5"/>
                                    </g>
                                </svg>
                            </span>
                        </a>
                    </div>
                </div>
            </section>
        </>
    )
}