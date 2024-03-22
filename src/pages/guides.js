import PageLayout from "@/components/PageLayout";
import LinkButton from "@/components/PageLayout/Button/LinkButton";

import { useEffect } from "react";
import gsap from "gsap"
import SplitType from "split-type";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const GuidesCard = ( {imgSrc, title, para, link } ) => {
    return (
        <div className="fadeUp guide-card hover:shadow-lg duration-300 w-[31.5%] overflow-hidden rounded-[10px] h-full border border-[#e8e8e8] bg-white">
            <div className="image-container w-full h-[50%]">
                <img src={imgSrc} className="h-full w-full object-cover" alt="Webinar Image" title="Webinar Image"/>
            </div>
            <div className="text-container px-[8%] py-[4%] lg:pb-[12%] pb-[8%] flex flex-col lg:gap-[1.2vw] gap-[4vw]">
                <h3 className="lg:text-[1.57vw] text-[6vw] leading-[1.3]">
                    {title}
                </h3>
                <p className="content-p text-[#444444]">
                    {para}
                </p>
                <div className="pt-[3%]">
                <LinkButton 
                    link={link}
                    btnText="Read More"
                />
                </div>
            </div>
        </div>
    )
}

export default function Guides(){

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
                pageTitle1={'Guides'} 
                pagePara={"Read our guides for a detailed exploration of relevant industry themes."} 
                imgSrc={'guides.svg'}>

                    <section id="second-section">
                        <div className="container">
                            <div className="content-2">
                                <h2 className="title-4xl text-anim">
                                    <span>
                                        Our Guides
                                    </span>
                                </h2>

                                <div className="cards-wrapper guide">
                                    <GuidesCard 
                                        imgSrc="/assets/resources/guides/guide-1.png"
                                        title={"Protect and promote your Google Drive files"}
                                        para={"Managing and sharing contacts can be a daunting task, especially."}
                                        link={"#"}
                                    />
                                    <GuidesCard 
                                        imgSrc="/assets/resources/guides/guide-2.png"
                                        title={"Protect and promote your Google Drive files"}
                                        para={"Managing and sharing contacts can be a daunting task, especially."}
                                        link={"#"}
                                    />
                                    <GuidesCard 
                                        imgSrc="/assets/resources/guides/guide-3.png"
                                        title={"Protect and promote your Google Drive files"}
                                        para={"Managing and sharing contacts can be a daunting task, especially."}
                                        link={"#"}
                                    />
                                    <GuidesCard 
                                        imgSrc="/assets/resources/guides/guide-1.png"
                                        title={"Protect and promote your Google Drive files"}
                                        para={"Managing and sharing contacts can be a daunting task, especially."}
                                        link={"#"}
                                    />
                                    <GuidesCard 
                                        imgSrc="/assets/resources/guides/guide-2.png"
                                        title={"Protect and promote your Google Drive files"}
                                        para={"Managing and sharing contacts can be a daunting task, especially."}
                                        link={"#"}
                                    />
                                    <GuidesCard 
                                        imgSrc="/assets/resources/guides/guide-3.png"
                                        title={"Protect and promote your Google Drive files"}
                                        para={"Managing and sharing contacts can be a daunting task, especially."}
                                        link={"#"}
                                    />
                                    <GuidesCard 
                                        imgSrc="/assets/resources/guides/guide-1.png"
                                        title={"Protect and promote your Google Drive files"}
                                        para={"Managing and sharing contacts can be a daunting task, especially."}
                                        link={"#"}
                                    />
                                    <GuidesCard 
                                        imgSrc="/assets/resources/guides/guide-2.png"
                                        title={"Protect and promote your Google Drive files"}
                                        para={"Managing and sharing contacts can be a daunting task, especially."}
                                        link={"#"}
                                    />
                                    <GuidesCard 
                                        imgSrc="/assets/resources/guides/guide-3.png"
                                        title={"Protect and promote your Google Drive files"}
                                        para={"Managing and sharing contacts can be a daunting task, especially."}
                                        link={"#"}
                                    />
                                    <GuidesCard 
                                        imgSrc="/assets/resources/guides/guide-1.png"
                                        title={"Protect and promote your Google Drive files"}
                                        para={"Managing and sharing contacts can be a daunting task, especially."}
                                        link={"#"}
                                    />
                                    <GuidesCard 
                                        imgSrc="/assets/resources/guides/guide-2.png"
                                        title={"Protect and promote your Google Drive files"}
                                        para={"Managing and sharing contacts can be a daunting task, especially."}
                                        link={"#"}
                                    />
                                    <GuidesCard 
                                        imgSrc="/assets/resources/guides/guide-3.png"
                                        title={"Protect and promote your Google Drive files"}
                                        para={"Managing and sharing contacts can be a daunting task, especially."}
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

