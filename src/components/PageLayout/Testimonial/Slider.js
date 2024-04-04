import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Scrollbar } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/scrollbar';

export default function Slider() {

      const data = [
        {
          content: "The people at Patronum are amazing. they are always willing to help proactively and respectfully even though the needs might be due to a lack of in-house skills. The Patronum product is amazing too and they improve it all the time.",
          clientImage: "/assets/testimonial/virgil-chelu.webp",
          clientName: "Virgil Chelu",
          clientCompany: "HIT Training"
        },
        {
          content: "Patronum makes it easy to manage Google Workspace instances!  I love being able to create onboarding and offboarding policies, as well as shared contacts, and signature management.",
          clientImage: "/assets/testimonial/robby-barnes.webp",
          clientName: "Robby Barnes",
          clientCompany: "215 Tech"
        },
        {
          content: "It's great, Only system I'm aware of that does sync of all user attributes including custom ones. With that pricing it's positioned to be another 'must have' for Workspace admins.",
          clientImage: "/assets/testimonial/mateusz-bijakowski.webp",
          clientName: "Mateusz Bijakowski",
          clientCompany: "Iwoca"
        },
        {
          content: "Patronum makes managing our Google Workspace environment effortless. I especially like the Contact Sharing feature, before Patronum we tried many other solutions and nothing is quite like Patronum for ease of use and functionality. A must-have for any Google Workspace administrator.",
          clientImage: "/assets/testimonial/john-knott.webp",
          clientName: "John Knott",
          clientCompany: "Zola Systems Limited"
        },
        {
          content: "Fantastic automation tool that makes life easy. Simple and intuitive with great support when needed.",
          clientImage: "/assets/testimonial/liam-finnegan.webp",
          clientName: "Liam Finnegan",
          clientCompany: "DPD Group"
        },
        {
          content: "Being a Patronum partner is a really great opportunity to offer our clients a top-class Workspace management tool, that works really well with our Workspace consulting offering.",
          clientImage: "/assets/testimonial/dominik-kugelmann.webp",
          clientName: "Dominik Kugelmann",
          clientCompany: "CEO - 22d consulting"
        },
        {
          content: "Patronum is a great tool allows us to do things that are not available in the Google Administration Console, such as calendar sharing and management, plus its policies and signatures feature is amazing. Their customer service and support are of the highest level. We are very pleased with Patronum, they provide a real bang for your buck!",
          clientImage: "/assets/testimonial/juan-marquez.webp",
          clientName: "Juan Marquez",
          clientCompany: "RiskOptics"
        },
        {
          content: "Easy tool to help with some basic stuff, which should be part of Google Workspace.",
          clientImage: "/assets/testimonial/ruben-hauser.webp",
          clientName: "Ruben Hauser",
          clientCompany: "buerohauser"
        },
        {
          content: "Patronum has been a game-changer for me in managing my Google Workspace. I was struggling with a major problem that Google couldn't solve, but Patronum came to the rescue. The product is power-packed and has exceeded my expectations. It has made my work much easier and more efficient.",
          clientImage: "/assets/testimonial/jeyo-sargunam.webp",
          clientName: "Jeyo Sargunam",
          clientCompany: "Measured"
        },
        {
          content: "Working with the Patronum and the team was quick and simple. They took my initial designs and created an extremely attractive and engaging email signature for my business and also several promotional campaigns. 5 stars!!",
          clientImage: "/assets/testimonial/garry-holt.webp",
          clientName: "Garry Holt",
          clientCompany: "Room 8 Gallery"
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