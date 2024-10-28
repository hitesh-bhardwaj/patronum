import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";
import { SplitInLine } from "@/components/splitTextUtils";

gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

export default function Hero({ pageTitle1, pageTitle2, pagePara, imgSrc }) {

    const container = useRef(null);
    const titleRef = useRef(null);

    const handleSmoothScroll = () => {
        gsap.to(window, {
            duration: 1.5,
            scrollTo: { y: "#second-section", offsetY: 30 },
            ease: "power3.inOut",
        });
    };

    useEffect(() => {
        const isFirstTimeLoading = sessionStorage.getItem('hasVisited') === null;
        let delayTime = isFirstTimeLoading ? 3.4 : 0.6;

        let ctx = gsap.context(() => {

            SplitInLine(titleRef.current)
            const heroPara = container.current.querySelector('.hero-para');
            const titleAnim = titleRef.current.querySelectorAll('.line .line-internal');

            const tl = gsap.timeline({
                defaults: {
                    ease: "power2.out"
                }
            });
            tl.fromTo(titleAnim, 0.8, {
                yPercent: 100,
            }, {
                yPercent: 0,
                stagger: 0.1,
            }, `+=${delayTime}`)
            tl.fromTo(heroPara, 0.8, {
                yPercent: 50,
                opacity: 0,
            }, {
                yPercent: 0,
                opacity: 1,
            }, '-=0.5')
                .from('.page-hero-img', 1, {
                    y: 50,
                    opacity: 0,
                }, '-=1')
                .fromTo(".hero-hr", {
                    width: 0,
                }, {
                    width: "105%",
                    duration: 2,
                    ease: "expo.out"
                }, "-=0.8")
                .fromTo(".hero-svg-circle", {
                    strokeDasharray: "0 300%"
                }, {
                    strokeDasharray: "310% 300%",
                    duration: 1.2,
                }, '-=1.8')
                .from(".scroll-img-container", {
                    y: -10,
                    opacity: 0,
                    duration: 0.5
                }, "=-1");
        });
        return () => ctx.revert();
    }, []);

    return (
        <>
            <section id="pageHero" ref={container}>
                <div className="container">
                    <div className="page-hero-flex">
                        <div className="page-hero-left">
                            <h1 ref={titleRef} className="title-4xl">
                                {pageTitle1}
                                {pageTitle2 && (
                                    <>
                                        <br />
                                        {" "}{pageTitle2}
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
                                <img width={400} height={500} src={`/assets/heroSections/${imgSrc}`} alt={`${pageTitle1} Image`} title={`${pageTitle1} Image`} />
                            </div>
                        </div>
                    </div>
                    <span className="hero-hr" />
                    <div data-page-hero className="scroll-down-btn">
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