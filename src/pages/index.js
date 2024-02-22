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
import PreLoader from "@/components/PreLoader";

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
                start: 'top 80%',
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
                y: 40,
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
        const pricingCards = document.querySelectorAll('.pricing-card-wrapper .pricing-card');
        // Ensure GSAP library is imported and available
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".pricing-card-wrapper",
                start: "top 85%",
                // end: "bottom bottom",
                // toggleActions: "play none none reverse"
            }
        });
    
        tl.fromTo(
            pricingCards,
            {
                opacity: 0,
                y: 100,
            },
            {
                opacity: 1,
                y: 0,
                duration: 0.6,
                stagger: 0.1, // Adjust stagger timing as needed
                ease: 'Power2.out',
            }
        );
    }, []);

    useEffect(() => {
      const blogCards = document.querySelectorAll('.blog-card-wrapper .blog-cards');
      // Ensure GSAP library is imported and available
      let tl = gsap.timeline({
          scrollTrigger: {
              trigger: ".blog-card-wrapper",
              start: "top 85%",
              // end: "bottom bottom",
              // toggleActions: "play none none reverse"
          }
      });
  
      tl.fromTo(
          blogCards,
          {
              opacity: 0,
              y: 100,
          },
          {
              opacity: 1,
              y: 0,
              duration: 0.6,
              stagger: 0.1, // Adjust stagger timing as needed
              ease: 'Power2.out',
          }
      );
  }, []);

    useEffect(() => {
      const testicard = document.querySelectorAll('.testi-slider .swiper-wrapper');
      // Ensure GSAP library is imported and available
      let tl = gsap.timeline({
          scrollTrigger: {
              trigger: ".swiper-wrapper",
              start: "top 90%",
              // end: "bottom bottom",
              // toggleActions: "play none none reverse"
          }
      });
  
      tl.fromTo(
          testicard,
          {
              opacity: 0,
              x: 200,
          },
          {
              opacity: 1,
              x: 0,
              duration: 0.6,
              stagger: 0.1, // Adjust stagger timing as needed
              ease: 'Power1.out',
          }
      );
    }, []);

      useEffect(() => {
        const fadeRights = document.querySelectorAll('.fadeRight');
    
        let ctx = gsap.context(() => {
          fadeRights.forEach((fadeRight) => {
            gsap.fromTo(
              fadeRight,
              {
                opacity: 0,
                x: 100,
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
                duration: 1,
                ease: 'Power4.out',
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
        const scaleAnims = document.querySelectorAll('.scaleAnim');
    
        let ctx = gsap.context(() => {
          scaleAnims.forEach((scaleAnim) => {
            gsap.fromTo(
              scaleAnim,
              {
                scale: 1.2,
                opacity: 0,
                transformOrigin: 'center'
              },
              {
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

  return (
    <>
      <PreLoader />
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
      </main>
      <Footer />
    </>
  );
} 
