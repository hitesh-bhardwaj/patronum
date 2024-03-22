import Faqs from '@/components/PageComponents/FeaturesPage/Faq';
import Pricing from '@/components/PageComponents/PricePage/Pricing';
import ProductFeatures from '@/components/PageComponents/PricePage/ProductFeature';
import PageLayout from '@/components/PageLayout';

import { useEffect } from "react";
import gsap from "gsap"
import SplitType from "split-type";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function PricePage() {

    useEffect(() => {
        const scaleAnims = document.querySelectorAll('.scaleAnim');
    
        let ctx = gsap.context(() => {
          scaleAnims.forEach((scaleAnim) => {
            gsap.fromTo(
              scaleAnim,
              {
                scale: 1.1,
                y: 40,
                opacity: 0,
                transformOrigin: 'bottom center'
              },
              {
                y: 0,
                scale: 1,
                opacity: 1,
                duration: 0.8,
                ease: 'Power4.out',
                scrollTrigger: {
                  trigger: scaleAnim,
                  start: 'top bottom',
                  end: 'bottom 85%',
                },
              }
            );
          });
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

    return(
        <>
            <PageLayout
                pageTitle1="No Setup Fee,"
                pageTitle2="No Upsells, No Worries"
                pagePara="The only tool you'll ever need to streamline your Google Workspace management."
                imgSrc="pricing.svg"
            >

                <Pricing />

                <ProductFeatures />

                <Faqs />

            </PageLayout>
        </>
    )
}