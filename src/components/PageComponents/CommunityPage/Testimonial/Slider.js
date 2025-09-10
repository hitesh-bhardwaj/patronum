import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Scrollbar } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/scrollbar';
import Image from 'next/image';

export default function Slider() {

      const data = [
        {
          content: "I enjoy that the community is a space of like-minded people asking similar questions and supporting one another. I’ve found the discussions and webinars informative and practical, helping to solve real world problems. The community has even given me ideas for new apps that can add value through features or cost savings.",
          clientImage: "/assets/community/paul-barnes.png",
          clientName: "Paul Barnes",
          clientCompany: "MAP"
        },
        {
          content: "It is a huge value to have access to other Google Workspace admins and the solutions within the community. Just seeing the discussion that are currently happening and how issues are being worked through with the community by being resources to each other.",
          clientImage: "/assets/community/adrian-warren.png",
          clientName: "Adrian Warren",
          clientCompany: "Thompson Burton"
        },
        {
          content: "Keep your friends close, and your enemies closer, right?  I love being a part of the community.  It's a great way to collaborate with others in the Google Workspace community, even competitors.",
          clientImage: "/assets/community/kevin-mcgrail.png",
          clientName: "Kevin A. McGrail",
          clientCompany: "Dito "
        },
        {
          content: "The community - It is a place where you can nerd out about things that need people inside the bubble to get you. It becomes a very important wall where you bounce off ideas that linger, ask questions about experience in alternatives before investing time and effort into a trial and error path of finding out for yourself (very valuable).",
          clientImage: "/assets/community/mikael-klambro.png",
          clientName: "Mikael Klambro",
          clientCompany: "Egoiste"
        }
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
                        <Image width={100} height={100} src={clientImage} priority={false} alt={`${clientName} Image`}/>
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