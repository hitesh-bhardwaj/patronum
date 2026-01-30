import React, { useEffect, useState } from 'react';
import faqData from '@/components/PageComponents/FeaturesPage/faqData';
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
  const initialVisibleFaqs = Math.min(8, totalFaqs);
  const [visibleFaqs, setVisibleFaqs] = useState(initialVisibleFaqs);

  const handleViewMore = () => {
    setVisibleFaqs(prevVisibleFaqs => Math.min(prevVisibleFaqs + 8, totalFaqs));
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

            <div className=' w-full mt-[10vw] lg:mt-0'>
              <span className='h-[1px] bg-[#1a1a1a] w-full lineDraw block' />
              <Accordion type="single" collapsible>
                {filteredFaqData.slice(0, visibleFaqs).map((item, index) => (
                  <AccordionItem value={`item-${item.id}`} key={index} className="scaleAnim w-full">
                    <AccordionTrigger className="group title-2xl pb-2 relative px-[2vw] lg:!py-[2vw]  py-[4vw] w-[90%] flex items-center md:!py-[4vw]">
                      <div className=' mt-[2vw] text-[11px] w-[24px] h-[24px] lg:!text-[1vw] font-normal border border-[#2a2a2a] rounded-full lg:!w-[2.3vw] lg:!h-[2.3vw] flex items-center justify-center lg:mt-[0.7vw] md:!text-[2.5vw] md:!w-[5vw] md:!h-[5vw]'>
                        <span className='aeonik'>
                          {item.id}{" "}
                        </span>
                      </div>
                      <div className='lg:w-[85%] w-[76%] md:!w-[76%]'>
                        {item.title}
                      </div>
                      <div className="absolute lg:!w-[3vw] lg:!h-[3vw] bg-[#FDFDFD] lg:!right-[10px] lg:!top-[2.5vw] border border-[#E2E2E2] rounded-full transiton-all duration-300 ease-linear flex items-center justify-center pointer-events-none group-data-[state=open]:bg-primary group-data-[state=open]:border-primary w-[8vw] h-[8vw] top-[5vw] right-[1vw] md:!top-[4vw] md:!w-[7vw] md:!h-[7vw]">
                        <span className=" bg-primary lg:h-[3px] w-[40%] absolute transition-all duration-300 ease-linear  rotate-90 h-[2px] md:h-[3px]"/>
                        <span className=" bg-primary lg:h-[3px] w-[40%] absolute transition-all duration-300 ease-linear group-data-[state=open]:bg-white h-[2px] md:h-[3px]" />
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="lg:text-[1.15vw] lg:!ml-[7vw]  lg:w-[80%] w-[80%] text-[3.5vw] ml-[10vw] mt-[2vw] lg:!mt-0 md:text-[3.5vw] md:!w-[70%] md:!ml-[11vw]">
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
