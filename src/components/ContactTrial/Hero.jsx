import { useEffect } from "react";
import gsap from "gsap";
import SplitType from "split-type";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import ScrollButton from "@/components/Buttons/ScrollButton";
import BreadcrumbComponent from "../PageLayout/BreadCrumb";

gsap.registerPlugin(ScrollTrigger);

export default function Hero({ pageTitle1, pageTitle2,boldpara, pagePara, svgElement, breadcrumbTitle, breadcrumbLink }) {

    useEffect(() => {
        const isFirstTimeLoading = sessionStorage.getItem('hasVisited') === null;
        let delayTime = isFirstTimeLoading ? 3.4 : 0.6;

        let ctx = gsap.context(() => {

            const heroPara = document.querySelectorAll('.hero-para');
            const title = new SplitType('.page-hero-anim', { types: 'words' });
            const titleAnim = document.querySelectorAll('.page-hero-anim span .word');

            const tl = gsap.timeline({
                defaults: {
                    ease: "power2.out"
                }
            });
            tl.from(titleAnim, 0.8, {
                y: 125,
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

     useEffect(() => {
    const headings = document.querySelectorAll('.text-anim');
    headings.forEach((heading) => {
      let ctx = gsap.context(() => {
        const textAnim = new SplitType(heading, {types: 'words'});
        let animWord = heading.querySelectorAll('.word');

        gsap.from(animWord, {
          scrollTrigger: {
            trigger: heading,
            start: 'top 80%',
          },
          duration: 0.8,
          yPercent: 100,
          stagger: 0.02,
        });
      });
      return () => ctx.revert();
    });
  }, []);

        useEffect(() => {
        const fadeIns = document.querySelectorAll('.fadeIn');
    
        let ctx = gsap.context(() => {
            fadeIns.forEach((fadeIn) => {
            gsap.fromTo(
                fadeIn,
              {
                opacity: 0,
              },
              {
                opacity: 1,
                duration: 0.8,
                ease: 'Power3.out',
                scrollTrigger: {
                  trigger: fadeIn,
                  start: 'top 85%',
                },
              }
            );
          });
        });
        return () => ctx.revert();
      }, []);

  useEffect(() => {
    const sHeadings = document.querySelectorAll('.text-anim-2');

    sHeadings.forEach((sHeading) => {
      let ctx = gsap.context(() => {
        const textAnim2 = new SplitType(sHeading, {types: 'words'});
        let animWord2 = sHeading.querySelectorAll('.word');

        gsap.from(animWord2, {
          scrollTrigger: {
            trigger: sHeading,
            start: 'top 80%',
          },
          duration: 0.5,
          yPercent: 100,
          opacity: 0,
          stagger: 0.01,
        });
      });
      return () => ctx.revert();
    });
  }, []);

  useEffect(() => {
    const fadeUps = document.querySelectorAll('.fadeUp');

    let ctx = gsap.context(() => {
      fadeUps.forEach((fadeUp) => {
        gsap.fromTo(
          fadeUp,
          {
            opacity: 0,
            y: 50,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: 'Power3.out',
            scrollTrigger: {
              trigger: fadeUp,
              start: 'top 85%',
            },
          }
        );
      });
    });
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const fadeRights = document.querySelectorAll('.fadeRight');

    let ctx = gsap.context(() => {
      fadeRights.forEach((fadeRight) => {
        gsap.fromTo(
          fadeRight,
          {
            opacity: 0,
            x: 50,
          },
          {
            opacity: 1,
            x: 0,
            duration: 0.6,
            stagger: 0.05,
            ease: 'Power3.out',
            scrollTrigger: {
              trigger: fadeRight,
              start: 'top 85%',
            },
          }
        );
      });
    });
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const lineDraws = document.querySelectorAll('.lineDraw');

    let ctx = gsap.context(() => {
      lineDraws.forEach((lineDraw) => {
        gsap.fromTo(
          lineDraw,
          {
            scaleX: 0,
            transformOrigin: 'left'
          },
          {
            scaleX: 1,
            duration: 2,
            ease: 'expo.out',
            scrollTrigger: {
              trigger: lineDraw,
              start: 'top 90%',
            },
          }
        );
      });
    });
    return () => ctx.revert();
  }, []);

    useEffect(() => {
        const fadeLefts = document.querySelectorAll('.fadeLeft');
    
        let ctx = gsap.context(() => {
            fadeLefts.forEach((fadeLeft) => {
            gsap.fromTo(
                fadeLeft,
              {
                opacity: 0,
                x: -50,
              },
              {
                opacity: 1,
                x: 0,
                duration: 0.6,
                stagger: 0.05,
                ease: 'Power3.out',
                scrollTrigger: {
                  trigger: fadeLeft,
                  start: 'top 85%',
                },
              }
            );
          });
        });
        return () => ctx.revert();
      }, []);

    return (
        <>
            <section id="pageHero" className="h-fit w-full relative">
                <div className="container">
                    <div className="flex lg:flex-row items-center lg:justify-between lg:h-[72%] lg:pt-[10%] lg:mb-[4%] flex-col md:pt-[20%] justify-center h-auto md:mb-[10vw] pt-[30%] mb-[15vw]">
                        <div className="lg:w-[60%] w-full">
                            <h1 className="title-4xl page-hero-anim lg:!mb-[1.5vw] !mb-[4vw] !leading-[0.5]">
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

                            <p className="hero-para lg:w-[60%] lg:text-[1.25vw] lg:mb-0 font-medium text-[4vw] w-[95%] mb-[2vw]">
                                {pagePara}
                            </p>
                            <p className="hero-para font-bold mt-[0.5vw]">{boldpara}</p>
                        </div>

                        <div className="page-hero-right lg:w-[35%] text-center w-full flex justify-center">
                            <div className="page-hero-img lg:w-full md:w-[60%] w-[70%]">
                                {/* <Image width={400} height={500} className="w-full h-full" src={`/assets/heroSections/${imgSrc}`} alt={`${pageTitle1} Image`} title={`${pageTitle1} Image`} /> */}
                                {svgElement}
                            </div>
                        </div>
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