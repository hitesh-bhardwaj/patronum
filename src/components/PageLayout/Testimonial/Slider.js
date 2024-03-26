import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Scrollbar } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/scrollbar';

export default function Slider() {

    const data = [
        {
          content: "Managing Google Workspace can be a daunting task for some companies. The team at Patronum took something that is quite tedious and complex for most people to do and made it as simple as it gets. Implementing our email signature.",
          clientImage: "/assets/testimonial/client-1.webp",
          clientName: "Bhaskar Varshney",
          clientCompany: "Enigma Digital Consulting"
        },
        {
          content: "Working with the Patronum and the team was quick and simple. They took my initial designs and created an extremely attractive and engaging email signature.",
          clientImage: "/assets/testimonial/client-2.webp",
          clientName: "John Knot",
          clientCompany: "Zola Systems Limited"
        },
        {
            content: "Working with the Patronum and the team was quick and simple. They took my initial designs and created an extremely attractive and engaging email signature for my business and also several promotional campaigns. 5 stars!!",
            clientImage: "/assets/testimonial/client-3.webp",
            clientName: "Juan Marquez",
            clientCompany: "Risk Optics"
          },
          {
            content: "Being a Patronum partner is a really great opportunity to offer our clients a top-class Workspace management tool, that works really well with our Workspace consulting offering.",
            clientImage: "/assets/testimonial/client-4.webp",
            clientName: "Dominik Kugelmann",
            clientCompany: "CEO - 22d consulting"
          },
          {
            content: "Managing Google Workspace can be a daunting task for some companies. The team at Patronum took something that is quite tedious and complex for most people to do and made it as simple as it gets. Implementing our email signature.",
            clientImage: "/assets/testimonial/client-1.webp",
            clientName: "Bhaskar Varshney",
            clientCompany: "Enigma Digital Consulting"
          },
          {
            content: "Working with the Patronum and the team was quick and simple. They took my initial designs and created an extremely attractive and engaging email signature.",
            clientImage: "/assets/testimonial/client-2.webp",
            clientName: "John Knot",
            clientCompany: "Zola Systems Limited"
          },
          {
              content: "Working with the Patronum and the team was quick and simple. They took my initial designs and created an extremely attractive and engaging email signature for my business and also several promotional campaigns. 5 stars!!",
              clientImage: "/assets/testimonial/client-3.webp",
              clientName: "Juan Marquez",
              clientCompany: "Risk Optics"
            },
            {
              content: "Being a Patronum partner is a really great opportunity to offer our clients a top-class Workspace management tool, that works really well with our Workspace consulting offering.",
              clientImage: "/assets/testimonial/client-4.webp",
              clientName: "Dominik Kugelmann",
              clientCompany: "CEO - 22d consulting"
            },
      ];

    return (
      <>
        <Swiper
            slidesPerView={4}
            spaceBetween={30}
            freeMode={true}
            grabCursor={true}
            scrollbar={{ draggable: true }}
            modules={[Scrollbar, FreeMode]}
            breakpoints={{
              300: {
                slidesPerView: 1.2,
                spaceBetween: 10,
              },
              1024: {
                slidesPerView: 4.2,
                spaceBetween: 30,
              },
            }}
            className="mySwiper"
        >
            {data.map((testimonial, index) => (
                <SwiperSlide key={index} className='fadeUpsMulties'>
                    <TestimonialCard
                        content={testimonial.content}
                        clientImage={testimonial.clientImage}
                        clientName={testimonial.clientName}
                        clientCompany={testimonial.clientCompany}
                    />
                </SwiperSlide>
            ))}
            <SwiperSlide />
        </Swiper>
      </>
    );
  }

  const TestimonialCard = ({ content, clientImage, clientName, clientCompany }) => {
    return (
        <div className='testimonial-card'>
            <div className='testicard-content'>
                <div>
                    <img width="64" height="57" src='/assets/icons/quote-icon.webp' alt='quote icon' className='testi-quote-icon'/>
                    <p className='testimonial-para'>
                        {content}
                    </p>
                </div>
                <div className='testi-details'>
                    <div className='testi-client-image'>
                        <img width="100" height="100" src={clientImage} alt='client image'/>
                    </div>
                    <div className='testi-client-details'>
                        <h5  className='testi-client-name'>
                            {clientName}
                        </h5>
                        <p>{clientCompany}</p>
                    </div>
                </div>
            </div>
        </div>
    )
  }