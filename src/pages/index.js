'use client'

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

import gsap from 'gsap';
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useEffect } from "react";
import SplitType from "split-type";
import Background from '@/components/Background';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {

  // useEffect(() => {
  //   const headings = document.querySelectorAll('.title-4xl');

  //   headings.forEach((heading) => {
  //     let ctx = gsap.context(() => {
  //       const textAnim = new SplitType(heading, {types: 'words'});
  //       let animWord = heading.querySelectorAll('.word');

  //       gsap.from(animWord, {
  //         scrollTrigger: {
  //           trigger: heading,
  //           start: 'top 70%',
  //           toggleActions: 'play none none reverse'
  //         },
  //         duration: 0.5,
  //         yPercent: 100,
  //         ease: 'Power1.in',
  //         stagger: 0.03,
  //       });
  //     });
  //     return () => ctx.revert();
  //   });
  // }, []);

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
      <Background />
    </>
  );
} 
