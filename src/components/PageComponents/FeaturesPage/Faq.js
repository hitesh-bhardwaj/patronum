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
import { FAQPageJsonLd } from 'next-seo';
import LinkButton from '@/components/Buttons/LinkButton';

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

  const mainEntity = [
    ...filteredFaqData.map((item) => ({
      questionName: item.title,
      acceptedAnswerText: item.content,
    })),
  ]

  return (
    <>
      <FAQPageJsonLd mainEntity={mainEntity} />
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
                    <AccordionTrigger className="title-2xl pb-2 relative px-[2vw] lg:py-[2vw] py-[5vw] w-[90%] flex items-center">
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
                  <LinkButton 
                    btnText="View More FAQs"
                    href="javascript:void(0)"
                    onClick={handleViewMore}
                    aria-label="View More Faqs"
                  />
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
