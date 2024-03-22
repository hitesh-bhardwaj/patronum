import PageLayout from "@/components/PageLayout";
import LinkButton from "@/components/PageLayout/Button/LinkButton";

import { useEffect } from "react";
import gsap from "gsap"
import SplitType from "split-type";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const VideoCard = ({link, imgSrc, title, id}) => {
    return (
        <div className="fadeUp product-video-card hover:shadow-lg duration-300">
            <div className="cards-num">
                <span className="aeonik">
                    {id}
                </span>
            </div>
            <div className="img">
                <img 
                    src={imgSrc}
                    alt={title}
                    title={title}
                />
                <button
                    className="video-tutorial-play-button"
                    aria-label="Play Tutorial Video"
                >
                    <img src="/assets/icons/play.svg" alt="Play Video"/>
                </button>
            </div>
            <div className="info">
                <span className="hr-1p" />
                <h3 className="title-2xl aeonik">
                    {title}
                </h3>
                <span className="hr-1p" />
                <LinkButton link={link} btnText="Watch Now" target="_blank"/>
            </div>
        </div>
    )
}

export default function ProductVideos(){

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
                pageTitle1={'Product Videos'} 
                pagePara={"Read our guides for a detailed exploration of relevant industry themes."} 
                imgSrc={'guides.svg'}>

                    <section id="second-section">
                        <div className="container">
                            <div className="content-2">
                                <h2 className="title-4xl text-anim">
                                    <span>
                                        Product Videos
                                    </span>
                                </h2>

                                <div className="cards-wrapper guide">
                                    <VideoCard 
                                        id={"01"}
                                        title={"Lorem ipsum dolor sit amet"}
                                        imgSrc={"/assets/resources/product-videos/video-1.svg"}
                                        link="#"
                                    />
                                    <VideoCard 
                                        id={"02"}
                                        title={"Lorem ipsum dolor sit amet"}
                                        imgSrc={"/assets/resources/product-videos/video-2.svg"}
                                        link="#"
                                    />
                                    <VideoCard 
                                        id={"03"}
                                        title={"Lorem ipsum dolor sit amet"}
                                        imgSrc={"/assets/resources/product-videos/video-3.svg"}
                                        link="#"
                                    />
                                    <VideoCard 
                                        id={"04"}
                                        title={"Lorem ipsum dolor sit amet"}
                                        imgSrc={"/assets/resources/product-videos/video-1.svg"}
                                        link="#"
                                    />
                                    <VideoCard 
                                        id={"05"}
                                        title={"Lorem ipsum dolor sit amet"}
                                        imgSrc={"/assets/resources/product-videos/video-4.svg"}
                                        link="#"
                                    />
                                    <VideoCard 
                                        id={"06"}
                                        title={"Lorem ipsum dolor sit amet"}
                                        imgSrc={"/assets/resources/product-videos/video-1.svg"}
                                        link="#"
                                    />
                                    <VideoCard 
                                        id={"07"}
                                        title={"Lorem ipsum dolor sit amet"}
                                        imgSrc={"/assets/resources/product-videos/video-2.svg"}
                                        link="#"
                                    />
                                    <VideoCard 
                                        id={"08"}
                                        title={"Lorem ipsum dolor sit amet"}
                                        imgSrc={"/assets/resources/product-videos/video-3.svg"}
                                        link="#"
                                    />
                                    <VideoCard 
                                        id={"09"}
                                        title={"Lorem ipsum dolor sit amet"}
                                        imgSrc={"/assets/resources/product-videos/video-1.svg"}
                                        link="#"
                                    />
                                </div>
                            </div>
                        </div>
                    </section>
                    
            </PageLayout>
        </>
    )
}

