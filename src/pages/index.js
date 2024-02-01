import React from 'react';
import Image from 'next/image';
import Hero from '@/components/HomePage/Hero';
import Features from '@/components/HomePage/Features';
import About from '@/components/HomePage/About';
import UseCases from '@/components/HomePage/UseCases';
import BLogs from '@/components/HomePage/Blogs';
import Faqs from '@/components/HomePage/Faqs';
import Pricing from '@/components/HomePage/Pricing';

export default function Home() {

  return (
    <>
      <main>
        <Hero />
        <Features />
        <UseCases />
        <Pricing />
        <About />
        <BLogs />
        <Faqs />
        <div className='h-screen w-screen' />
      </main>
    </>
  );
}
