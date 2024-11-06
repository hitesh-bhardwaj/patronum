import { useEffect } from "react";
import gsap from "gsap";
import SplitType from "split-type";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import BreadcrumbComponent from "../BreadCrumb";
import ScrollButton from "@/components/Buttons/ScrollButton";

gsap.registerPlugin(ScrollTrigger);

export default function Hero({ pageTitle1, pageTitle2, pagePara, imgSrc, breadcrumbTitle, breadcrumbLink  }) {

    useEffect(() => {
        const isFirstTimeLoading = sessionStorage.getItem('hasVisited') === null;
        let delayTime = isFirstTimeLoading ? 3.4 : 0.6;

        let ctx = gsap.context(() => {

            const heroPara = document.querySelector('.hero-para');
            const title = new SplitType('.page-hero-anim', { types: 'words' });
            const titleAnim = document.querySelectorAll('.page-hero-anim span .word');

            const tl = gsap.timeline({
                defaults: {
                    ease: "power2.out"
                }
            });
            tl.to(titleAnim, 0.8, {
                y: 0,
                stagger: 0.02,
            }, `+=${delayTime}`)
            tl.to(heroPara, 0.8, {
                y: 0,
                opacity: 1,
            }, '-=0.5')
                .from('.page-hero-img', 1, {
                    y: 50,
                    opacity: 0,
                }, '-=1')
                .to(".hero-hr", {
                    width: "105%",
                    duration: 2,
                    ease: "expo.out"
                }, "-=0.8")
                .from(".breadanim", {
                    y: 20,
                    opacity: 0,
                    duration: 0.5,
                }, "-=1.5")
                .fromTo(".hero-svg-circle", {
                    strokeDasharray: "0% 300%",
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
                                <img width={400} height={500} src={`/assets/heroSections/${imgSrc}`} alt={`${pageTitle1} Image`} title={`${pageTitle1} Image`} />
                            </div>
                        </div>
                    </div>

                    <div className="lg:mb-[4%] md:mb-[4vw] mb-[5vw] breadanim">
                        <BreadcrumbComponent 
                            middleLinkName={breadcrumbTitle}
                            middleLink={breadcrumbLink}
                        />
                    </div>

                    <span className="hero-hr" />

                    <ScrollButton className="!static !h-fit !w-fit mt-[10vw] md:mt-[6vw] lg:mt-[4vw]" />
                </div>
            </section>
        </>
    )
}