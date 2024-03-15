import React, { useEffect, useState } from 'react';
import FaqItem from '@/components/PageLayout/FaqItem'; 
import faqData from './faqData.json'; 
import PrimaryButton from '@/components/PageLayout/Button/PrimaryButton';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Faqs = () => {
    const [accordionOpen, setAccordionOpen] = useState(0);

    const toggleAccordion = (index) => {
        setAccordionOpen(index === accordionOpen ? null : index);
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
                            <span className='h-[1px] bg-[#1a1a1a] w-full lineDraw block'/>
                            {faqData.map((item, index) => (
                                <FaqItem
                                    key={index}
                                    item={item}
                                    index={index}
                                    isOpen={index === accordionOpen}
                                    toggleAccordion={toggleAccordion}
                                />
                            ))}
                            <div className="section-btn-container mt-16">
                                <PrimaryButton link="#" btnText="View All FAQ's"/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Faqs;
