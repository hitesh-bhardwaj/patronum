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
import Gradient from '@/components/Gradient';

export default function Home() {

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
      <Gradient />
    </>
  );
} 
