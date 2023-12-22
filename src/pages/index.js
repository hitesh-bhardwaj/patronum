import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <Header />
      <main>
      <section className='hero-section container mx-auto py-10'>
        <Image 
          src="/assets/home/hero-bg.png" 
          height={900} 
          width={900}
          priority={true}
          alt='background image'
          className='absolute top-0 left-0 -z-10'
        />
        <div className='flex justify-between items-center'>
          <div className='hero-left pl-10'>
            <h1 className='text-8xl relative leading-[1] font-head text-head inline-block mb-10'>
              <span className='flex items-center gap-7'>Your 
              <img
                src="/assets/home/google.png"
                alt='Google Logo'
                title='Google Logo'
                className='h-auto w-[50%] pt-4'
              /></span>
              <span className='text-primary font-semibold block mb-5'> Workspace </span>
              <span>Manager</span>
            </h1>
            <p className='text-head font-medium para-24 mb-16 text-justify'>Streamline your Google Workspace Management by automating User Onboarding & Offboarding, Centralised Email Signature Management, Contact Sharing, Google Drive Management, Backups, and much more.</p>
            <div className='hero-button flex items-center gap-8'>
              <a href='#' className='group w-72 block transition-all duration-500 relative gap-10 px-6 py-4 bg-primary rounded-full border-2 border-primary'>
                <span className="absolute h-12 w-12 bg-white top-[12%] right-[3%] rounded-full transition-all duration-500 group-hover:h-full group-hover:w-full group-hover:top-0 group-hover:right-0"></span>
                <div className="h-full w-full flex items-center justify-between z-10 relative">
                  <span className='pl-2 transition-all duration-500 text-white text-2xl font-medium group-hover:text-primary'>Install Patronum</span>
                  <span className="w-6 overflow-hidden text-primary">
                    <span className="transition-all duration-500 w-[200%] flex -translate-x-1/2 group-hover:translate-x-0 gap-1">
                      <svg className='w-6 h-auto' viewBox="0 0 29 22" fill="currentColor" stroke='currentColor' xmlns="http://www.w3.org/2000/svg">
                        <path d="M18.0482 20.907C17.7708 20.907 17.4935 20.8049 17.2745 20.5859C16.8512 20.1626 16.8512 19.4619 17.2745 19.0386L25.3614 10.9517L17.2745 2.86481C16.8512 2.44148 16.8512 1.74081 17.2745 1.31749C17.6978 0.89417 18.3985 0.89417 18.8218 1.31749L27.6824 10.178C28.1057 10.6013 28.1057 11.302 27.6824 11.7253L18.8218 20.5859C18.6029 20.8049 18.3255 20.907 18.0482 20.907Z"/>
                        <path d="M26.6621 12.0451L2.0948 12.0451C1.49631 12.0451 1 11.5488 1 10.9503C1 10.3518 1.49631 9.85547 2.0948 9.85547L26.6621 9.85547C27.2606 9.85547 27.7569 10.3518 27.7569 10.9503C27.7569 11.5488 27.2606 12.0451 26.6621 12.0451Z"/>
                      </svg>
                      <svg className='w-6 h-auto' viewBox="0 0 29 22" fill="currentColor" stroke='currentColor' xmlns="http://www.w3.org/2000/svg">
                        <path d="M18.0482 20.907C17.7708 20.907 17.4935 20.8049 17.2745 20.5859C16.8512 20.1626 16.8512 19.4619 17.2745 19.0386L25.3614 10.9517L17.2745 2.86481C16.8512 2.44148 16.8512 1.74081 17.2745 1.31749C17.6978 0.89417 18.3985 0.89417 18.8218 1.31749L27.6824 10.178C28.1057 10.6013 28.1057 11.302 27.6824 11.7253L18.8218 20.5859C18.6029 20.8049 18.3255 20.907 18.0482 20.907Z"/>
                        <path d="M26.6621 12.0451L2.0948 12.0451C1.49631 12.0451 1 11.5488 1 10.9503C1 10.3518 1.49631 9.85547 2.0948 9.85547L26.6621 9.85547C27.2606 9.85547 27.7569 10.3518 27.7569 10.9503C27.7569 11.5488 27.2606 12.0451 26.6621 12.0451Z"/>
                      </svg>
                    </span>
                  </span>
                </div>
              </a>
              <a href='#' className='group w-72 block transition-all duration-500 relative gap-10 px-6 py-4 bg-white rounded-full border-2 border-primary'>
                <span className="absolute h-12 w-12 bg-primary top-[12%] right-[3%] rounded-full transition-all duration-500 group-hover:h-full group-hover:w-full group-hover:top-0 group-hover:right-0"></span>
                <div className="h-full w-full flex items-center justify-between z-10 relative">
                  <span className='pl-2 transition-all duration-500 text-primary text-2xl font-medium group-hover:text-white'>Watch Demo</span>
                  <span className="w-4 overflow-hidden text-white">
                    <span className="transition-all duration-500 w-[200%] flex -translate-x-1/2 group-hover:translate-x-0 gap-1">
                      <svg className='w-4 h-auto' viewBox="0 0 16 21" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.21809 0C1.35452 0 1.49094 0 1.63711 0C2.16333 0.105559 2.64082 0.326273 3.08908 0.623757C6.96748 3.24354 10.8459 5.85372 14.7145 8.4735C14.9094 8.60785 15.1141 8.75179 15.2797 8.92453C15.9326 9.57707 16.186 10.3352 15.8547 11.2276C15.65 11.7842 15.231 12.1681 14.7438 12.4943C10.8459 15.1237 6.95773 17.7531 3.05984 20.3633C2.70903 20.6032 2.29975 20.7855 1.89048 20.9199C1.1109 21.1694 0.428768 20.8239 0.175405 20.0562C0.0584683 19.7107 0.0194894 19.3365 0.0194894 18.9718C0 13.3196 0 7.66742 0 2.02481C0 1.89046 0 1.75612 0.00974472 1.61217C0.0487236 0.758105 0.409278 0.268695 1.21809 0Z"/>
                      </svg>
                      <svg className='w-4 h-auto' viewBox="0 0 16 21" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.21809 0C1.35452 0 1.49094 0 1.63711 0C2.16333 0.105559 2.64082 0.326273 3.08908 0.623757C6.96748 3.24354 10.8459 5.85372 14.7145 8.4735C14.9094 8.60785 15.1141 8.75179 15.2797 8.92453C15.9326 9.57707 16.186 10.3352 15.8547 11.2276C15.65 11.7842 15.231 12.1681 14.7438 12.4943C10.8459 15.1237 6.95773 17.7531 3.05984 20.3633C2.70903 20.6032 2.29975 20.7855 1.89048 20.9199C1.1109 21.1694 0.428768 20.8239 0.175405 20.0562C0.0584683 19.7107 0.0194894 19.3365 0.0194894 18.9718C0 13.3196 0 7.66742 0 2.02481C0 1.89046 0 1.75612 0.00974472 1.61217C0.0487236 0.758105 0.409278 0.268695 1.21809 0Z"/>
                      </svg>
                    </span>
                  </span>
                </div>
              </a>
            </div>
          </div>
          <div className='hero-right'>
            <Image 
              src="/assets/home/hero-animation.gif"
              height={600}
              width={600}
              priority={true}
              className='h-auto w-[600px]'
              alt='patronum dashboard showcase'
              title='patronum dashboard showcase'
            />
          </div>
        </div>
      </section>

      <section className='container'>

      </section>
      </main>
      <Footer />
    </>
  );
}
