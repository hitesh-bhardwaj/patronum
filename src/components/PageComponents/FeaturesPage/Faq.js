import React, { useEffect, useState } from 'react';
import faqData from './faqData.json';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

gsap.registerPlugin(ScrollTrigger);

const Faqs = ({ featureName }) => {

  // Get the FAQs for the specific feature
  const filteredFaqData = faqData.find((item) => item.feature === featureName)?.faqs || [];
  const totalFaqs = filteredFaqData.length;
  const initialVisibleFaqs = Math.min(7, totalFaqs);
  const [visibleFaqs, setVisibleFaqs] = useState(initialVisibleFaqs);

  const handleViewMore = () => {
    setVisibleFaqs(prevVisibleFaqs => Math.min(prevVisibleFaqs + 7, totalFaqs));
  };

  useEffect(() => {
    const scaleAnims = document.querySelectorAll('.scaleAnim');

    let ctx = gsap.context(() => {
      scaleAnims.forEach((scaleAnim) => {
        gsap.fromTo(
          scaleAnim,
          {
            scale: 1.1,
            y: 40,
            opacity: 0,
            transformOrigin: 'bottom center'
          },
          {
            y: 0,
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
      <section id="faqs">
        <div className="container">
          <div className="content">
            <div className="section-head">
              <h2 className="title-4xl text-anim">
                <span>Frequently </span>
                <br />
                <span>Asked Questions</span>
              </h2>
            </div>

            <div className='faq-wrapper'>
              <span className='h-[1px] bg-[#1a1a1a] w-full lineDraw block' />
              <Accordion type="single" collapsible>
                {filteredFaqData.slice(0, visibleFaqs).map((item, index) => (
                  <AccordionItem value={`item-${item.id}`} key={index} className="faq-item-content scaleAnim">
                    <AccordionTrigger className="title-2xl pb-2 relative px-[2vw] py-[2vw] w-[90%]">
                      <div className='faq-number'>
                        <span className='aeonik'>
                          {item.id}{" "}
                        </span>
                      </div>
                      <div className='faq-main-content'>
                        {item.title}
                      </div>
                      <div className="feat-accordion-btn">
                        <span className="plus" />
                        <span className="minus" />
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="content-p faq-main-content ml-[7vw] features">
                      <span dangerouslySetInnerHTML={{ __html: item.content }} />
                    </AccordionContent>
                    <span className='h-[1px] bg-[#1a1a1a] w-full lineDraw block' />
                  </AccordionItem>
                ))}
              </Accordion>
              {visibleFaqs < totalFaqs && (
                <div className="w-full text-center mt-8">
                  <button aria-label="View More Faqs" className="link-btn" onClick={handleViewMore}>
                    <span className="btn-text">View More FAQs</span>
                    <span className="btn-images">
                      <div>
                        <svg className="" viewBox="0 0 38 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M0 9.27361C2.25898 9.27361 4.5105 9.26604 6.76947 9.26604C15.4997 9.26604 24.2299 9.26604 32.9602 9.26604C33.1018 9.26604 33.2509 9.26604 33.3777 9.26604C30.8876 6.74513 28.4049 4.22423 25.9521 1.74117C26.5784 1.09769 27.1375 0.537491 27.6669 0C31.0814 3.4672 34.5556 6.98738 37.9925 10.4773C34.5482 13.9672 31.0814 17.4874 27.6296 20.9924C27.1003 20.4549 26.5486 19.9023 25.982 19.327C28.4571 16.8212 30.9472 14.3003 33.4373 11.7794C33.4299 11.7491 33.4224 11.7188 33.415 11.6885C33.2733 11.6885 33.1391 11.6885 32.9975 11.6885C22.1573 11.6885 11.3172 11.6885 0.484599 11.6885C0.320581 11.6885 0.164018 11.6885 0 11.681C0 10.8861 0 10.0761 0 9.27361Z" fill="currentColor" />
                        </svg>
                        <svg className="" viewBox="0 0 38 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M0 9.27361C2.25898 9.27361 4.5105 9.26604 6.76947 9.26604C15.4997 9.26604 24.2299 9.26604 32.9602 9.26604C33.1018 9.26604 33.2509 9.26604 33.3777 9.26604C30.8876 6.74513 28.4049 4.22423 25.9521 1.74117C26.5784 1.09769 27.1375 0.537491 27.6669 0C31.0814 3.4672 34.5556 6.98738 37.9925 10.4773C34.5482 13.9672 31.0814 17.4874 27.6296 20.9924C27.1003 20.4549 26.5486 19.9023 25.982 19.327C28.4571 16.8212 30.9472 14.3003 33.4373 11.7794C33.4299 11.7491 33.4224 11.7188 33.415 11.6885C33.2733 11.6885 33.1391 11.6885 32.9975 11.6885C22.1573 11.6885 11.3172 11.6885 0.484599 11.6885C0.320581 11.6885 0.164018 11.6885 0 11.681C0 10.8861 0 10.0761 0 9.27361Z" fill="currentColor" />
                        </svg>
                      </div>
                    </span>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Faqs;
