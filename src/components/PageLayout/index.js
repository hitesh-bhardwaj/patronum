import Hero from "./Hero";

import { useEffect } from "react";
import gsap from "gsap"
import SplitType from "split-type";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Stairs from '@/components/Stairs'
import MetaData from "./MetaData";

gsap.registerPlugin(ScrollTrigger);

export default function PageLayout( {pageTitle1, pageTitle2, pagePara, imgSrc, children, title, description, url, img, date_published, date_modified, keywords} ){

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

    return(
        <>  
          <MetaData 
            title={title}
            description={description}
            url={url}
            img={img}
            date_published={date_published}
            date_modified={date_modified}
            keywords={keywords}
          />
          <Stairs>
            <main>
              <Hero
                pageTitle1={pageTitle1} 
                pageTitle2={pageTitle2} 
                pagePara={pagePara} 
                imgSrc={imgSrc}
              />
              {children}
            </main>
          </Stairs>
      </>
    )
}