import react, { useEffect } from "react"
import SplitType from "split-type";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

import Hero from '@/components/HomePage/Hero';
import Features from '@/components/HomePage/Features';
import About from '@/components/HomePage/About';
import UseCases from '@/components/HomePage/UseCases';
import BLogs from '@/components/HomePage/Blogs';
import Faqs from '@/components/HomePage/Faqs';
import Pricing from '@/components/HomePage/Pricing';
import Testimonial from '@/components/HomePage/Testimonial';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {

      useEffect(() => {
        const headings = document.querySelectorAll('.text-anim');
    
        headings.forEach((heading) => {
          let ctx = gsap.context(() => {
            const textAnim = new SplitType(heading, {types: 'words'});
            let animWord = heading.querySelectorAll('.word');
    
            gsap.from(animWord, {
              scrollTrigger: {
                trigger: heading,
                start: 'top 70%',
              },
              duration: 0.6,
              yPercent: 100,
              stagger: 0.04,
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
                duration: 0.4,
                ease: 'Power3.out',
                scrollTrigger: {
                  trigger: fadeUp,
                  start: 'top 80%',
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
                duration: 1,
                ease: 'Power4.out',
                scrollTrigger: {
                  trigger: lineDraw,
                  start: 'top 80%',
                },
              }
            );
          });
        });
        return () => ctx.revert();
      }, []);

      useEffect(() => {
        const scaleAnims = document.querySelectorAll('.scaleAnim');
    
        let ctx = gsap.context(() => {
          scaleAnims.forEach((scaleAnim) => {
            gsap.fromTo(
              scaleAnim,
              {
                scaleX: 1.2,
                opacity: 0,
                transformOrigin: 'center'
              },
              {
                scaleX: 1,
                opacity: 1,
                duration: 1,
                ease: 'Power4.out',
                scrollTrigger: {
                  trigger: scaleAnim,
                  start: 'top bottom',
                  end: 'bottom 80%',
                  // scrub: true,
                  // markers: true,
                },
              }
            );
          });
        });
        return () => ctx.revert();
      }, []);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <UseCases />
        <Pricing />
        <About />
        <Testimonial />
        <BLogs />
        <Faqs />
        <Footer />
      </main>
    </>
  );
} 
