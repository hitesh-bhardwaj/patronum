import { useEffect } from "react";
import gsap from "gsap";
import SplitType from "split-type";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import BreadcrumbComponent from "../BreadCrumb";
import ScrollButton from "@/components/Buttons/ScrollButton";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function Hero({ pageTitle1, pageTitle2, pagePara, imgSrc, breadcrumbTitle, breadcrumbLink }) {

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
            tl.from(titleAnim, 0.8, {
                y: 100,
                stagger: 0.02,
            }, `+=${delayTime}`)
            tl.from(heroPara, 0.8, {
                y: 50,
                opacity: 0,
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
            <section id="pageHero" className="h-fit w-full relative">
                <div className="container">
                    <div className="flex lg:flex-row items-center lg:justify-between lg:h-[72%] lg:pt-[10%] lg:mb-[4%] flex-col md:pt-[20%] justify-center h-auto md:mb-[10vw] pt-[30%] mb-[15vw]">
                        <div className="lg:w-[60%] w-full">
                            <h1 className="title-4xl page-hero-anim lg:!mb-[1.5vw] !mb-[4vw]  !leading-[0.5]">
                                <span className="leading-[1.2] overflow-hidden span">
                                    {pageTitle1}
                                </span>
                                {pageTitle2 && (
                                    <>
                                        <br />
                                        <span className="leading-[1.2] overflow-hidden span">
                                            {" "}{pageTitle2}
                                        </span>
                                    </>
                                )}
                            </h1>

                            <p className="hero-para lg:w-[60%] lg:text-[1.25vw] lg:mb-0 font-medium text-[4vw] w-[95%] mb-[6vw]">
                                {pagePara}
                            </p>
                        </div>
                        {imgSrc && (
                            <div className="page-hero-right lg:w-[35%] text-center w-full flex justify-center">
                                <div className="page-hero-img lg:w-full md:w-[60%] w-[70%]">
                                    <Image width={400} height={500} className="w-full h-full" src={`/assets/heroSections/${imgSrc}`} alt={`${pageTitle1} Image`} title={`${pageTitle1} Image`} />
                                </div>
                            </div>
                        )}
                    </div>


                    <div className="lg:mb-[4%] md:mb-[4vw] mb-[5vw] breadanim">
                        <BreadcrumbComponent
                            middleLinkName={breadcrumbTitle}
                            middleLink={breadcrumbLink}
                        />
                    </div>

                    <span className="h-[1px] bg-[#111111] w-0 ml-[-2.5%] block hero-hr" />

                    <ScrollButton className="!static !h-fit !w-fit mt-[10vw] md:mt-[6vw] lg:mt-[4vw]" />
                </div>
            </section>
        </>
    )
}