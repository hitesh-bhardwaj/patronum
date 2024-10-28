import React, { useState } from 'react';

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
            title: 'What Measures Does Patronum Take to Ensure Data Security?',
            content: "Data security is our top priority. Patronum employs state-of-the-art encryption and compliance practices to protect your information. Our platform is built on Google Cloud's secure infrastructure, with regular audits and updates to stay ahead of potential threats, ensuring your data remains safe and compliant with global standards.",
        },
        {
            title: 'How Quickly Can Patronum Be Implemented Across an Organization?',
            content: 'Patronum is designed for quick and easy implementation. Most organizations can start using Patronum within a few hours to a couple of days, depending on the complexity of their Google Workspace environment and specific setup requirements. Our support team is always on hand to guide you through.',
        },
        {
            title: 'How User-Friendly is Patronum for Non-Technical Users?',
            content: 'Patronum is designed with simplicity in mind, making it accessible for users with any level of technical expertise. Our intuitive interface, built using Google Material Design, ensures a seamless experience that mirrors the Google Workspace environment, making navigation and operation straightforward for all users.',
        },
        {
            title: 'Can Patronum be Customised to Fit Specific Organizational Needs?',
            content: "Absolutely. Patronum offers a range of customization options to align with your organization's unique processes and workflows. From custom schema for user attributes to tailored onboarding and offboarding flows, Patronum can be configured to support your specific requirements, enhancing efficiency and productivity.",
        },
        {
            title: "What Automation Features Does Patronum Offer?",
            content: "Patronum brings a high degree of automation to Google Workspace management, streamlining tasks such as user onboarding/offboarding, email signature updates, and resource allocation. These automated processes reduce manual effort, minimize errors, and ensure a consistent experience for all users across your organization.",
        },
        {
            title: "How Does Patronum Enhance Collaboration Within Teams?",
            content: "By organizing users into appropriate Google Groups and managing access permissions efficiently, Patronum facilitates smoother collaboration and information sharing. Our features enable teams to connect and work together more effectively, leveraging shared resources and communication tools integrated within Google Workspace.",
        },
        {
            title: "Is There Support Available for Patronum Users?",
            content: "Yes, comprehensive support is a cornerstone of the Patronum experience. We offer detailed guides, a responsive customer service team, and a wealth of online resources to ensure you can maximize the benefits of Patronum. Whether you're seeking technical assistance or need advice on best practices, our team is ready to help.",
        },
    ];

    return(
        <>
            <section id="faqs">
                <div className="container">
                    <div className="content">
                        <div className="section-head">
                            <h2 className="title-4xl text-anim">
                                Frequently{" "}
                                <br />
                                Asked Questions
                            </h2>
                        </div>

                        <div className='faq-wrapper'>
                            <span className='h-[1px] bg-[#1a1a1a] w-full lineDraw block'/>
                            {faqData.map((item, index) => (
                                <React.Fragment key={index}>
                                    <div onClick={() => toggleAccordion(index)} className={`faq-item scaleAnim ${index === accordionOpen ? 'open' : ''}`}>
                                        <div className="faq-item-content">
                                            <h6 className="title-2xl pb-2">
                                                {item.title}
                                            </h6>
                                            <div className="faq-content">
                                                <p className="content-p md:my-6 my-3">
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
                                </React.Fragment>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}