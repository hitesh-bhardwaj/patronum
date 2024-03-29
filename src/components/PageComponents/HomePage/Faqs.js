import PrimaryButton from '@/components/PageLayout/Button/PrimaryButton';
import { useState } from 'react';

export default function Faqs(){

    const [accordionOpen, setAccordionOpen] = useState(0); // State to manage open accordion item

    const toggleAccordion = (index) => {
        if (accordionOpen === index) {
            setAccordionOpen(null); // Close accordion if already open
        } else {
            setAccordionOpen(index); // Open accordion
        }
    };

    const faqData = [
        {
            title: 'Can Patronum handle role-based access control during onboarding?',
            content: 'Yes, Patronum can manage role-based access control during onboarding. It assigns Google Workspace access and permissions based on specific job roles or departments, ensuring that each user has the appropriate level.',
        },
        {
            title: 'What is automated user onboarding and offboarding in Google Workspace?',
            content: 'Yes, Patronum can manage role-based access control during onboarding. It assigns Google Workspace access and permissions based on specific job roles or departments, ensuring that each user has the appropriate level.',
        },
        {
            title: 'How does Patronum ensure security during the offboarding process?',
            content: 'Yes, Patronum can manage role-based access control during onboarding. It assigns Google Workspace access and permissions based on specific job roles or departments, ensuring that each user has the appropriate level.',
        },
        {
            title: 'Is it possible to customise onboarding workflows with Patronum?',
            content: 'Yes, Patronum can manage role-based access control during onboarding. It assigns Google Workspace access and permissions based on specific job roles or departments, ensuring that each user has the appropriate level.',
        }
    ];

    return(
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
                                <>
                                <div onClick={() => toggleAccordion(index)} className={`faq-item scaleAnim ${index === accordionOpen ? 'open' : ''}`} key={index}>
                                    <div className="faq-item-content">
                                        <h6 className="title-2xl pb-2">
                                            {item.title}
                                        </h6>
                                        <div className="faq-content">
                                            <p className="content-p my-6">
                                                <span>{item.content}</span>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="feat-accordion-btn">
                                        <span className="plus"/>
                                        <span className="minus"/>
                                    </div>
                                </div>
                                <span className='h-[1px] bg-[#1a1a1a] w-full lineDraw block'/>
                                </>
                            ))}
                        
                            <div className="section-btn-container mt-16">
                                <PrimaryButton link="#" btnText="View All FAQ's"/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}