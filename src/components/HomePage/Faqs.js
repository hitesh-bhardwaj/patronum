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
            <section id="features">
                <div className="container">
                    <div className="content">
                        <div className="features-top">
                            <h2 className="title-4xl">
                                <span>Frequently </span>
                                <br />
                                <span>Asked Questions</span>
                            </h2>
                        </div>

                        <div className='faq-wrapper'>
                            {faqData.map((item, index) => (
                                <div onClick={() => toggleAccordion(index)} className={`faq-item ${index === accordionOpen ? 'open' : ''}`} key={index}>
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
                                    <div className='faq-arrow'>
                                        <img src="/assets/icons/faq-arrow.svg" alt='arrow icon'/>
                                    </div>
                                </div>
                            ))}
                        
                            <div className="section-btn-container mt-16">
                                <a href="/faqs" className="btn">
                                    <span data-primary className="btn-text">
                                        View All FAQs
                                    </span>
                                    <div aria-hidden="true" className="btn-circle">
                                        <div className="btn-circle-text">
                                            Get Started
                                            <svg viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg" className="btn-icon">
                                                <path data-v-f4363f2a fillRule="evenodd" clipRule="evenodd" d="M3.82475e-07 5.625L7.625 5.625L4.125 9.125L5 10L10 5L5 -4.37114e-07L4.125 0.874999L7.625 4.375L4.91753e-07 4.375L3.82475e-07 5.625Z" className="btn-path fill-current" />
                                                <path data-v-f4363f2a fillRule="evenodd" clipRule="evenodd" d="M3.82475e-07 5.625L7.625 5.625L4.125 9.125L5 10L10 5L5 -4.37114e-07L4.125 0.874999L7.625 4.375L4.91753e-07 4.375L3.82475e-07 5.625Z" className="btn-path fill-current" />
                                            </svg>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}