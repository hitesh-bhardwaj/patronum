import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <div className='h-[300vh] w-screen p-48 '>
      {/* <a href='#' className='group w-80 flex transition-all duration-500 items-center relative gap-10 px-10 py-6 justify-between text-2xl font-medium font-head border-primary border-2 rounded-full'>
          <span className='transition-all duration-500 text-primary absolute z-10'>Try for Free</span>
          <span className='transition-all duration-500 absolute group-hover:h-[100%] group-hover:w-[100%] group-hover:right-0 right-4 flex items-center justify-center rounded-full w-14 h-14 bg-primary'>
            <span className='transition-all duration-500 text-white w-7 flex h-full items-center justify-end overflow-hidden'>
              <svg className='w-7 h-auto' viewBox="0 0 29 22" fill="currentColor" stroke='currentColor' xmlns="http://www.w3.org/2000/svg">
                <path d="M18.0482 20.907C17.7708 20.907 17.4935 20.8049 17.2745 20.5859C16.8512 20.1626 16.8512 19.4619 17.2745 19.0386L25.3614 10.9517L17.2745 2.86481C16.8512 2.44148 16.8512 1.74081 17.2745 1.31749C17.6978 0.89417 18.3985 0.89417 18.8218 1.31749L27.6824 10.178C28.1057 10.6013 28.1057 11.302 27.6824 11.7253L18.8218 20.5859C18.6029 20.8049 18.3255 20.907 18.0482 20.907Z"/>
                <path d="M26.6621 12.0451L2.0948 12.0451C1.49631 12.0451 1 11.5488 1 10.9503C1 10.3518 1.49631 9.85547 2.0948 9.85547L26.6621 9.85547C27.2606 9.85547 27.7569 10.3518 27.7569 10.9503C27.7569 11.5488 27.2606 12.0451 26.6621 12.0451Z"/>
              </svg>
            </span>
          </span>
        </a> */}
      </div>
      <Footer />
    </>
  );
}
