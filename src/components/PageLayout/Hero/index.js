import { useEffect } from "react";
import gsap from "gsap";
import SplitType from "split-type";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

export default function Hero( {pageTitle1, pageTitle2, pagePara, imgSrc} ){

    const handleSmoothScroll = () => {
      gsap.to(window, {
          duration: 1.5,
          scrollTo: {y: "#second-section", offsetY: 30},
          ease: "power3.inOut",
      });
    };

    useEffect(() => {
        const isFirstTimeLoading = sessionStorage.getItem('hasVisited') === null;
        let delayTime = isFirstTimeLoading ? 3.4 : 0.6;

        let ctx = gsap.context(() => {

            // const headerAnim = document.querySelectorAll(".header-anim");
            const heroPara = document.querySelector('.hero-para');
            const title = new SplitType('.page-hero-anim', {types: 'words'});
            const titleAnim = document.querySelectorAll('.page-hero-anim span .word');
  
            const tl = gsap.timeline({
                defaults: {
                    ease: "power2.out"
                }
            });
            // tl.from(headerAnim, 1,{
            //     opacity: 0,
            //     stagger: 0.05,
            //     ease: 'power2.out',
            // }, `+=${delayTime}`)
            tl.to(titleAnim, 0.8,{
                y: 0,
                stagger: 0.02,
            }, `+=${delayTime}`)
            tl.to(heroPara, 0.8,{
                y: 0,
                opacity: 1,
            }, '-=0.5')
            .from('.page-hero-img', 1,{
                y: 50,
                opacity: 0,
            }, '-=1')
            .to(".hero-hr" ,{
                width: "105%",
                duration: 2,
                ease: "expo.out"
            }, "-=0.8")
            .to(".hero-svg-circle",{
                strokeDasharray: "310% 300%",
                duration: 1.2,
            }, '-=1.8')
            .from(".scroll-img-container",{
                y: -10, 
                opacity: 0,
                duration: 0.5
            }, "=-1");
        });
        return () => ctx.revert();
      }, []);

    return(
        <>
            <section id="pageHero">
                <div className="container">
                        <div className="page-hero-flex">
                            <div className="page-hero-left">
                                <h1 className="title-4xl page-hero-anim">
                                    <span className="span">
                                        {pageTitle1}
                                    </span>
                                    {pageTitle2 && (
                                        <>
                                            <br />
                                            <span className="span">
                                                {" "}{pageTitle2}
                                            </span>
                                        </>
                                    )}
                                </h1>

                                <p className="hero-para">
                                    <span>
                                        {pagePara}
                                    </span>
                                </p>
                            </div>

                                <div className="page-hero-right">
                                    <div className="page-hero-img">
                                        <img width={400} height={500} src={`/assets/heroSections/${imgSrc}`} alt={`${pageTitle1} Image`} title={`${pageTitle1} Image`}/>
                                    </div>
                                </div>
                        </div>

                            <span className="hero-hr"/>

                            <div data-page-hero className="scroll-down-btn">
                                <button className="scroll-down-a" onClick={handleSmoothScroll} aria-label="Scroll Down">
                                    <svg width="86" height="86" viewBox="0 0 86 86" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle className="hero-svg-circle" cx="43" cy="43" r="42" stroke="currentColor" strokeWidth="2"/>
                                    </svg>
                                    <span className="scroll-img-container">
                                        <img data="first" src="/assets/icons/arrow-down-big.svg" alt="arrow-image"/>
                                        <img data="second" src="/assets/icons/arrow-down-big.svg" alt="arrow-image"/>
                                    </span>
                                </button>
                            </div>
                </div>
            </section>
        </>
    )
}