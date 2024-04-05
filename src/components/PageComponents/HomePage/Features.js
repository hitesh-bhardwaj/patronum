import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

gsap.registerPlugin(ScrollTrigger);

const accordionData = [
    {
        title: 'Onboarding & Offboarding',
        content: 'Provisioning and de-provisioning users within Google Workspace can be time-consuming and costly. Let Patronum fully automate all the administrator and user tasks to ensure an effective and secure process.',
        more: 'With Patronum, your team hits the ground running from day one. Automatic access to essential files, folders, calendars, and Google groups enables users to be productive from day one. Plus, our seamless integration with leading IDaaS providers like OneLogin, Namely, Okta, and PingIdentity ensures a smooth continuation of services.',
        img: 'assets/home/features-1.svg',
        link: '/on-boarding',
    },
    {
        title: 'File Unsharing & Compliances',
        content: "In a world where business information flows freely across employees, departments, and external entities, from suppliers to customers, managing your company's data effectively is crucial. Our intuitive policies enable you to effortlessly clean up file sharing with external organizations.",
        more: "With Patronum you can gain comprehensive insights into external access to your data and revoke it as necessary or you can easily set up policies that automate the clean-up of file sharing with external organisations.",
        img: 'assets/home/features-2.svg',
        link: '/google-drive-compliance',
    },
    {
        title: 'Contact Sharing',
        content: 'Patronum is the only enterprise-ready contact sharing application for Google Workspace. Patronum ensures your contacts and labels are in perfect sync with Google Contacts by capturing all changes made throughout the day and updating them across all user accounts.',
        more: 'Our platform also allows users to effortlessly share specific contacts through labels, providing a seamless experience. Meanwhile, administrators gain unparalleled visibility and control over the entire process, ensuring efficient and secure contact management.',
        img: 'assets/home/features-3.svg',
        link: '/google-contact-sharing',
    },
    {
        title: 'Email Signature Management',
        content: 'Crafting the perfect email signature in Gmail just got a whole lot easier with Patronum. Select from a range of templates, customize fonts and colors to your liking, and publish with ease. Designed for users without HTML expertise, Patronum ensures consistency across your organization, providing dynamic and centrally managed Gmail Email Signatures for all users.',
        more: "With Patronum, you can rest assured that your Google Workspace users will always have up-to-date signatures with accurate information, and on-brand templates, enhancing your organization's image in every correspondence.",
        img: 'assets/home/features-4.svg',
        link: '/email-signature-management',
    },
    {
        title: 'Google Drive Management',
        content: "Maintain the integrity and security of your organization's data with Patronum. Our platform provides administrators with comprehensive control over users' files and folders, enhancing the management of Google Drive within Google Workspace.",
        more: 'Patronum provides an intuitive way for administrators to oversee and manage the vast amount of data stored in Google Drive and simplifies the complexities of file management.',
        img: 'assets/home/features-5.svg',
        link: '/google-drive-management',
    },
    {
        title: 'Google Workspace Backup',
        content: "Experience the world's fastest backup solution, meticulously designed for Google Workspace. Patronum Backup offers unparalleled high-frequency backups, ensuring your Google data is always secure and recoverable. Enjoy complete peace of mind with 100% fidelity backups of Email, Calendar, Contacts, Files, and Shared Drives.",
        more: "With Patronum, your Google Workspace data is not just backed up; it's bulletproof. Secure Your Google Workspace leveraging the most advanced, reliable backup technology available in the market.",
        img: 'assets/home/features-6.svg',
        link: '/google-workspace-backup',
    }
];  

export default function Features(){

    const isMobileDevice = globalThis.innerWidth <= 1024; // Check if the screen width is less than or equal to 1024

    const [accordionOpen, setAccordionOpen] = useState(0); 
    const scrollTriggerRef = useRef(); 

    const toggleAccordion = (index) => {
        setAccordionOpen(prevIndex => (prevIndex === index ? null : index)); // Toggle the open/close state
        setTimeout(() => {
            ScrollTrigger.refresh();
        }, 510);
    };

    useEffect(() => {
        let brandImagePin = document.getElementById("left-section");
        let brandImageNotPin = document.getElementById("right-section");

        if (!isMobileDevice) { // Check if it's not a mobile device
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
        }

        return () => {
            if (!isMobileDevice && scrollTriggerRef.current) {
                scrollTriggerRef.current.kill();
            }
        };
    }, [isMobileDevice]);

    return(
        <>
            <section id="features">
                <div className="container">
                    <div className="content">
                        <div className="section-head">
                            <h2 className="title-4xl text-anim">
                                <span>Empowering IT </span>
                                <br />
                                <span>Admins & Professionals</span>
                            </h2>
                        </div>
                        <div className="features-bottom relative lg:flex block justify-between items-start" id='main-features-container'>
                            <div className="features-left lg:w-[35%] w-full" id='left-section'>
                                <h3 className="feat-head">
                                    <span className='fadeUp'>Features</span>
                                    <span className='featured-line lineDraw'/>
                                </h3>
                                <p className="content-p">
                                    <span className='fadeUp'>
                                        Streamline Google Workspace Management by automating User Onboarding & Offboarding, Email Signature Management, Contact Sharing, Google Drive Management, Backups, and much more.
                                    </span>
                                </p>
                                    {accordionData.map((item, index) => (
                                        <div className={`accordion-img ${index === accordionOpen ? 'featImgAnim' : ''}`} key={index}>
                                            <img width="200px" height="200px" src={item.img} alt={`Feature ${index + 1}`} loading='lazy'/>
                                        </div>
                                    ))}
                            </div>

                            <div className="features-right lg:w-[55%] w-full lg:pt-[1vw] pt-[16vw]" id='right-section'>

                                <div className="feat-accordions">
                                    <span className='h-[1px] w-full bg-[#1a1a1a] block lineDraw'/>
                                    {accordionData.map((item, index) => (
                                        <>
                                        <div className={`feat-accordion-item scaleAnim ${index === accordionOpen ? 'open' : ''}`} key={index} onClick={() => toggleAccordion(index)}>
                                            <div className="lg:w-[85%] w-[90%]">
                                                <h3 className="title-3xl pb-2">
                                                    {item.title}
                                                </h3>
                                                <div className="accordion-content">
                                                    <p className="content-p lg:my-6 my-[3vw]">
                                                        <span className='w-full flex justify-center mb-[10vw] mt-[5vw] lg:hidden'>
                                                            <img width="200px" height="200px" className='w-[70%]' src={item.img} loading='lazy' alt="feature image"/>
                                                        </span>
                                                        <span>{item.content}</span>
                                                        <br />
                                                        <br />
                                                        <span>{item.more}</span>
                                                    </p>
                                                    <Link href={item.link} className="link-btn">
                                                        <span className="btn-text">Learn More</span>
                                                        <span className="screen-reader-text">Get Started</span>
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
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className="feat-accordion-btn">
                                                <span className="plus"/>
                                                <span className="minus"/>
                                            </div>
                                        </div>
                                        <span className='h-[1px] w-full bg-[#1a1a1a] block lineDraw'/>
                                        </>
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
