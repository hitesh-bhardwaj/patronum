import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useEffect, useRef, useState } from 'react';

gsap.registerPlugin(ScrollTrigger);

const accordionData = [
    {
        title: 'Onboarding & Offboarding',
        content: 'Provisioning and deprovisioning users within Google Workspace can be time-consuming and costly. Let Patronum fully automate all the administrator and user tasks to ensure an effective and secure process.',
        more: 'Provisioning and deprovisioning users within Google Workspace can be time-consuming and costly. Let Patronum fully automate all the administrator.'
    },
    {
        title: 'File Unsharing & Compliances',
        content: 'With Patronum you can automatically unshare Google Files reducing your organisations exposure. Quickly and easily set up policies that automate the clean up of file sharing with external organisations.',
        more: 'With Patronum you can automatically unshare Google Files reducing your organisations exposure. Quickly and easily set up policies that automate.'
    },
    {
        title: 'Contact Sharing',
        content: 'Patronum is the only enterprise-ready contact sharing application for Google Workspace. Allow your users to share their specific contacts via labels, while giving administrators enhanced visibility and management of the whole process.',
        more: 'Patronum is the only enterprise-ready contact sharing application for Google Workspace. Allow your users to share their specific contacts.'
    },
    {
        title: 'Email Signature Management',
        content: 'With Patronum you can automatically unshare Google Files reducing your organisations exposure. Quickly and easily set up policies that automate the clean up of file sharing with external organisations.',
        more: 'With Patronum you can automatically unshare Google Files reducing your organisations exposure. Quickly and easily set up policies that automate.'
    },
    {
        title: 'Google Drive Management',
        content: "Maintain the integrity and security of your organization's data with Patronum. Our platform provides administrators with comprehensive control over users' files and folders, enhancing the management of Google Drive within Google Workspace.",
        more: 'Patronum provides an intuitive way for administrators to oversee and manage the vast amount of data stored in Google Drive and simplifies the complexities of file management,'
    },
    {
        title: 'Google Workspace Backup',
        content: "Experience the world's fastest backup solution, meticulously designed for Google Workspace. Patronum Backup offers unparalleled high-frequency backups, ensuring your Google data is always secure and recoverable.",
        more: "With Patronum, your Google Workspace data is not just backed up; it's bulletproof. Secure Your Google Workspace leveraging the most advanced."
    }
];  

export default function Features(){

    const [accordionOpen, setAccordionOpen] = useState(0); 
    const scrollTriggerRef = useRef(); 

    const toggleAccordion = (index) => {
        if (accordionOpen === index) {
            setAccordionOpen(null); 
        } else {
            setAccordionOpen(index); 
        }

        setTimeout(() => {
            ScrollTrigger.refresh();
        }, 510); 
    };

    useEffect(() => {
        let brandImagePin = document.getElementById("left-section");
        let brandImageNotPin = document.getElementById("right-section");

        scrollTriggerRef.current = ScrollTrigger.create({
            trigger: brandImagePin,
            start: "top 15%",
            endTrigger: brandImageNotPin,
            end: 'bottom bottom',
            invalidateOnRefresh: true, 
            pin: brandImagePin,
            pinSpacing: true,
            markers: false,
        });

        return () => {
            scrollTriggerRef.current.kill();
        };
    }, []); 

    return(
        <>
            <section id="features">
                <div className="container">
                    <div className="content">
                        <div className="features-top">
                            <h2 className="title-4xl text-anim">
                                <span>Empowering IT </span>
                                <br />
                                <span>Admins & Professionals</span>
                            </h2>
                        </div>
                        <div className="features-bottom relative flex justify-between items-start" id='main-features-container'>
                            <div className="features-left" id='left-section'>
                                <h3 className="feat-head">
                                    Features
                                    <span />
                                </h3>
                                <p className="content-p">
                                    <span>
                                        Streamline Google Workspace Management by automating User Onboarding & Offboarding, Email Signature Management, Contact Sharing, Google Drive Management, Backups, and much more.
                                    </span>
                                </p>
                                <div className='accordion-img'>
                                    <img src='/assets/home/features-1.svg' alt='features image'/>
                                </div>  
                            </div>

                            <div className="features-right" id='right-section'>

                                <div className="feat-accordions">

                                    {accordionData.map((item, index) => (
                                        <div className={`feat-accordion-item ${index === accordionOpen ? 'open' : ''}`} key={index}>
                                            <div className="w-[85%]" onClick={() => toggleAccordion(index)}>
                                                <h3 className="title-3xl pb-2">
                                                    {item.title}
                                                </h3>
                                                <div className="accordion-content">
                                                    <p className="content-p my-6">
                                                        <span>{item.content}</span>
                                                        <br />
                                                        <br />
                                                        <span>{item.more}</span>
                                                    </p>
                                                    <a href="#" className="link-btn">
                                                        <span className="btn-text">Learn More</span>
                                                        <span className="btn-images">
                                                            <div>
                                                                <svg className="" viewBox="0 0 38 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M0 9.27361C2.25898 9.27361 4.5105 9.26604 6.76947 9.26604C15.4997 9.26604 24.2299 9.26604 32.9602 9.26604C33.1018 9.26604 33.2509 9.26604 33.3777 9.26604C30.8876 6.74513 28.4049 4.22423 25.9521 1.74117C26.5784 1.09769 27.1375 0.537491 27.6669 0C31.0814 3.4672 34.5556 6.98738 37.9925 10.4773C34.5482 13.9672 31.0814 17.4874 27.6296 20.9924C27.1003 20.4549 26.5486 19.9023 25.982 19.327C28.4571 16.8212 30.9472 14.3003 33.4373 11.7794C33.4299 11.7491 33.4224 11.7188 33.415 11.6885C33.2733 11.6885 33.1391 11.6885 32.9975 11.6885C22.1573 11.6885 11.3172 11.6885 0.484599 11.6885C0.320581 11.6885 0.164018 11.6885 0 11.681C0 10.8861 0 10.0761 0 9.27361Z" fill="currentColor"/>
                                                                </svg>
                                                                <svg className="" viewBox="0 0 38 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M0 9.27361C2.25898 9.27361 4.5105 9.26604 6.76947 9.26604C15.4997 9.26604 24.2299 9.26604 32.9602 9.26604C33.1018 9.26604 33.2509 9.26604 33.3777 9.26604C30.8876 6.74513 28.4049 4.22423 25.9521 1.74117C26.5784 1.09769 27.1375 0.537491 27.6669 0C31.0814 3.4672 34.5556 6.98738 37.9925 10.4773C34.5482 13.9672 31.0814 17.4874 27.6296 20.9924C27.1003 20.4549 26.5486 19.9023 25.982 19.327C28.4571 16.8212 30.9472 14.3003 33.4373 11.7794C33.4299 11.7491 33.4224 11.7188 33.415 11.6885C33.2733 11.6885 33.1391 11.6885 32.9975 11.6885C22.1573 11.6885 11.3172 11.6885 0.484599 11.6885C0.320581 11.6885 0.164018 11.6885 0 11.681C0 10.8861 0 10.0761 0 9.27361Z" fill="currentColor"/>
                                                                </svg>
                                                            </div>
                                                        </span>
                                                    </a>
                                                </div>
                                            </div>
                                            <div onClick={() => toggleAccordion(index)} className="feat-accordion-btn">
                                                <span className="plus">+</span>
                                                <span className="minus">-</span>
                                            </div>

                                        </div>
                                    ))}     
                                </div> 
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}