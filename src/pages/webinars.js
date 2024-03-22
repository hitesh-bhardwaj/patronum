import PageLayout from "@/components/PageLayout";
import LinkButton from "@/components/PageLayout/Button/LinkButton";

import { useEffect } from "react";
import gsap from "gsap"
import SplitType from "split-type";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const WebinarCard = ( { imgSrc, title, para, link } ) => {
    return (
        <div className="fadeUp webinar-card hover:shadow-lg duration-300 w-[47%] overflow-hidden rounded-[10px] h-full border border-[#e8e8e8]">
            <div className="image-container w-full h-[65%]">
                <img src={imgSrc} className="h-full w-full object-cover" alt="Webinar Image" title="Webinar Image"/>
            </div>
            <div className="text-container px-[8%] py-[4%] pb-[6%] flex flex-col lg:gap-[1.2vw] gap-[4vw]">
                <h3 className="lg:text-[1.57vw] text-[6vw] leading-[1.4]">
                    {title}
                </h3>
                <p className="content-p text-[#444444]">
                    {para}
                </p>
                <span className="w-full h-[1px] block bg-[#C5C5C5]"/>
                <div className="">
                <LinkButton 
                    link={link}
                    btnText={"Watch Webinar"}
                />
                </div>
            </div>
        </div>
    )
}

export default function Webinars(){

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

    return (
        <>
            <PageLayout
                pageTitle1={'Webinars'} 
                pagePara={"View our latest webinars and videos, or register for upcoming content to hear from industry experts."} 
                imgSrc={'webinars.svg'}>

                    <section id="second-section">
                        <div className="container">
                            <div className="content-2">
                                <h2 className="title-4xl text-anim">
                                    <span>
                                        Explore Our
                                    </span>
                                    <br />
                                    <span>
                                        Latest Webinars
                                    </span>
                                </h2>

                                <div className="cards-wrapper webinar">
                                    <WebinarCard 
                                        imgSrc="/assets/resources/webinars/webinar-1.png"
                                        title={"How to better protect your Shared Drives files"}
                                        para={"Managing and sharing contacts can be a daunting task, especially with the many contact management apps and services available today."}
                                        link={"#"}
                                    />
                                    <WebinarCard 
                                        imgSrc="/assets/resources/webinars/webinar-2.png"
                                        title={"How to better protect your Shared Drives files"}
                                        para={"Managing and sharing contacts can be a daunting task, especially with the many contact management apps and services available today."}
                                        link={"#"}
                                    />
                                    <WebinarCard 
                                        imgSrc="/assets/resources/webinars/webinar-1.png"
                                        title={"How to better protect your Shared Drives files"}
                                        para={"Managing and sharing contacts can be a daunting task, especially with the many contact management apps and services available today."}
                                        link={"#"}
                                    />
                                    <WebinarCard 
                                        imgSrc="/assets/resources/webinars/webinar-2.png"
                                        title={"How to better protect your Shared Drives files"}
                                        para={"Managing and sharing contacts can be a daunting task, especially with the many contact management apps and services available today."}
                                        link={"#"}
                                    />
                                    <WebinarCard 
                                        imgSrc="/assets/resources/webinars/webinar-1.png"
                                        title={"How to better protect your Shared Drives files"}
                                        para={"Managing and sharing contacts can be a daunting task, especially with the many contact management apps and services available today."}
                                        link={"#"}
                                    />
                                    <WebinarCard 
                                        imgSrc="/assets/resources/webinars/webinar-2.png"
                                        title={"How to better protect your Shared Drives files"}
                                        para={"Managing and sharing contacts can be a daunting task, especially with the many contact management apps and services available today."}
                                        link={"#"}
                                    />
                                    <WebinarCard 
                                        imgSrc="/assets/resources/webinars/webinar-1.png"
                                        title={"How to better protect your Shared Drives files"}
                                        para={"Managing and sharing contacts can be a daunting task, especially with the many contact management apps and services available today."}
                                        link={"#"}
                                    />
                                    <WebinarCard 
                                        imgSrc="/assets/resources/webinars/webinar-2.png"
                                        title={"How to better protect your Shared Drives files"}
                                        para={"Managing and sharing contacts can be a daunting task, especially with the many contact management apps and services available today."}
                                        link={"#"}
                                    />
                                </div>
                            </div>
                        </div>
                    </section>
                    
            </PageLayout>
        </>
    )
}

