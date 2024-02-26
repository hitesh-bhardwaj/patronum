import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import gsap from 'gsap';

const Header = () => {

    useEffect(() => {
        let ctx = gsap.context(() => {

            const headerAnim = document.querySelectorAll(".header-anim");

            const tl = gsap.timeline();
            tl.from(headerAnim, 1,{
                opacity: 0,
                stagger: 0.05,
                ease: 'power2.out',
            }, '+=6.5');
        });
        return () => ctx.revert();
    }, []);

    const [isFeaturesDropdownOpen, setFeaturesDropdownOpen] = useState(false);
    const [isUsecasesDropdownOpen, setUsecasesDropdownOpen] = useState(false);
    const [isResourcesDropdownOpen, setResourcesDropdownOpen] = useState(false);

    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset;
            if (scrollTop > 150) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

  return (
    <header className={isScrolled ? 'header scrolled' : 'header'}>
        <div className='header-container'>
            <div className='logo-container'>
                <a href='/'>
                    <Image 
                        className=''
                        src="/logo.svg"
                        width={200}
                        height={200}
                        alt='Patronum Logo'
                        title='Patronum Logo'
                        priority={false}
                    />
                </a>
            </div>

            <nav className='navbar'>
                <ul className='navbar-list'>
                    <li className='nav-list-item'>
                        <a href='/about'>
                            <div className='header-anim'>
                                <span>
                                    About
                                </span>
                            </div>
                        </a>
                    </li>
                        <li className='nav-list-item'
                            onMouseEnter={() => setFeaturesDropdownOpen(true)}
                            onMouseLeave={() => setFeaturesDropdownOpen(false)}
                            >
                            <a href='/features' className='dropdown'>
                                <div className='header-anim'>
                                    <span>
                                        Features
                                    </span>
                                    <svg viewBox="0 0 13 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1 1L6.5 6.5L12 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </div>
                            </a>
                            {isFeaturesDropdownOpen && (
                                <motion.div 
                                    initial={{ y: -30, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ duration: 0.4 }}
                                    className='nav-dropdown'>
                                    <ul className='nav-dropdown-list'>
                                        <li className='nav-drop-list-item'>
                                            <a href='#' className='nav-drop-list-hover'>
                                                <img src='/assets/menu/onboarding.png' alt='features icon' title='features icon'/>
                                                <div>
                                                    <p className='nav-drop-title'>Onboarding</p>
                                                    <p className='nav-drop-text'>Lorem Ipsum is simply dummy text</p>
                                                </div>
                                            </a>
                                        </li>
                                        <li className='nav-drop-list-item'>
                                            <a href='#' className='nav-drop-list-hover'>
                                                <img src='/assets/menu/workspace-backup.png' alt='features icon' title='features icon'/>
                                                <div>
                                                    <p className='nav-drop-title'>Workspace Backup</p>
                                                    <p className='nav-drop-text'>Lorem Ipsum is simply dummy text</p>
                                                </div>
                                            </a>
                                        </li>
                                        <li className='nav-drop-list-item'>
                                            <a href='#' className='nav-drop-list-hover'>
                                                <img src='/assets/menu/email-signature.png' alt='features icon' title='features icon'/>
                                                <div>
                                                    <p className='nav-drop-title'>Email Signature</p>
                                                    <p className='nav-drop-text'>Lorem Ipsum is simply dummy text</p>
                                                </div>
                                            </a>
                                        </li>
                                        <li className='nav-drop-list-item'>
                                            <a href='#' className='nav-drop-list-hover'>
                                                <img src='/assets/menu/file-sharing.png' alt='features icon' title='features icon'/>
                                                <div>
                                                    <p className='nav-drop-title'>File Unsharing</p>
                                                    <p className='nav-drop-text'>Lorem Ipsum is simply dummy text</p>
                                                </div>
                                            </a>
                                        </li>
                                        <li className='nav-drop-list-item'>
                                            <a href='#' className='nav-drop-list-hover'>
                                                <img src='/assets/menu/contact-sharing.png' alt='features icon' title='features icon'/>
                                                <div>
                                                    <p className='nav-drop-title'>Contact Sharing</p>
                                                    <p className='nav-drop-text'>Lorem Ipsum is simply dummy text</p>
                                                </div>
                                            </a>
                                        </li>
                                        <li className='nav-drop-list-item'>
                                            <a href='#' className='nav-drop-list-hover'>
                                                <img src='/assets/menu/organisational-chart.png' alt='features icon' title='features icon'/>
                                                <div>
                                                    <p className='nav-drop-title'>Organisational Chart</p>
                                                    <p className='nav-drop-text'>Lorem Ipsum is simply dummy text</p>
                                                </div>
                                            </a>
                                        </li>
                                        <li className='nav-drop-list-item'>
                                            <a href='#' className='nav-drop-list-hover'>
                                                <img src='/assets/menu/drive-management.png' alt='features icon' title='features icon'/>
                                                <div>
                                                    <p className='nav-drop-title'>Drive Management</p>
                                                    <p className='nav-drop-text'>Lorem Ipsum is simply dummy text</p>
                                                </div>
                                            </a>
                                        </li>
                                    </ul>
                                </motion.div>
                            )}
                        </li>

                    <li className='nav-list-item' 
                        onMouseEnter={() => setUsecasesDropdownOpen(true)}
                        onMouseLeave={() => setUsecasesDropdownOpen(false)}
                        >
                        <a href='/use-cases' className='dropdown'>
                            <div className='header-anim'>
                                <span>
                                    Use Cases
                                </span>
                                <svg viewBox="0 0 13 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 1L6.5 6.5L12 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </div>
                        </a>
                            {isUsecasesDropdownOpen && (
                                <motion.div 
                                    initial={{ y: -30, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ duration: 0.4 }} 
                                    className='nav-dropdown'>
                                   <ul className='nav-dropdown-list'>
                                        <li className='nav-drop-list-item'>
                                            <a href='#' className='nav-drop-list-hover'>
                                                <img src='/assets/menu/use-case-business.png' alt='features icon' title='features icon'/>
                                                <div>
                                                    <p className='nav-drop-title'>For Business</p>
                                                    <p className='nav-drop-text'>Lorem Ipsum is simply dummy text</p>
                                                </div>
                                            </a>
                                        </li>
                                        <li className='nav-drop-list-item'>
                                            <a href='#' className='nav-drop-list-hover'>
                                                <img src='/assets/menu/use-case-education.png' alt='features icon' title='features icon'/>
                                                <div>
                                                    <p className='nav-drop-title'>For Education</p>
                                                    <p className='nav-drop-text'>Lorem Ipsum is simply dummy text</p>
                                                </div>
                                            </a>
                                        </li>
                                        <li className='nav-drop-list-item'>
                                            <a href='#' className='nav-drop-list-hover'>
                                                <img src='/assets/menu/use-case-hr.png' alt='features icon' title='features icon'/>
                                                <div>
                                                    <p className='nav-drop-title'>For HR</p>
                                                    <p className='nav-drop-text'>Lorem Ipsum is simply dummy text</p>
                                                </div>
                                            </a>
                                        </li>
                                        <li className='nav-drop-list-item'>
                                            <a href='#' className='nav-drop-list-hover'>
                                                <img src='/assets/menu/use-case-users.png' alt='features icon' title='features icon'/>
                                                <div>
                                                    <p className='nav-drop-title'>For Users</p>
                                                    <p className='nav-drop-text'>Lorem Ipsum is simply dummy text</p>
                                                </div>
                                            </a>
                                        </li>
                                        <li className='nav-drop-list-item'>
                                            <a href='#' className='nav-drop-list-hover'>
                                                <img src='/assets/menu/use-case-sales.png' alt='features icon' title='features icon'/>
                                                <div>
                                                    <p className='nav-drop-title'>For Sales & Marketing</p>
                                                    <p className='nav-drop-text'>Lorem Ipsum is simply dummy text</p>
                                                </div>
                                            </a>
                                        </li>
                                        <li className='nav-drop-list-item'>
                                            <a href='#' className='nav-drop-list-hover'>
                                                <img src='/assets/menu/use-case-admin.png' alt='features icon' title='features icon'/>
                                                <div>
                                                    <p className='nav-drop-title'>For IT Admins</p>
                                                    <p className='nav-drop-text'>Lorem Ipsum is simply dummy text</p>
                                                </div>
                                            </a>
                                        </li>
                                    </ul>
                                </motion.div>
                            )}
                    </li>
                    <li className='nav-list-item'>
                        <a className='' href='/pricing'>
                            <div className='header-anim'>
                                <span>
                                    Pricing
                                </span>
                            </div>
                        </a>
                    </li>
                    <li className='nav-list-item' 
                        onMouseEnter={() => setResourcesDropdownOpen(true)}
                        onMouseLeave={() => setResourcesDropdownOpen(false)}
                        >
                        <a href='/resources' className='dropdown'>
                            <div className='header-anim'>
                                <span>
                                    Resources
                                </span>
                                <svg viewBox="0 0 13 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 1L6.5 6.5L12 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </div>
                        </a>
                            {isResourcesDropdownOpen && (
                                <motion.div 
                                    initial={{ y: -30, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ duration: 0.4 }} 
                                    className='nav-dropdown'>
                                    <ul className='nav-dropdown-list'>
                                        <li className='nav-drop-list-item'>
                                            <a href='#' className='nav-drop-list-hover'>
                                                <img src='/assets/menu/resource-blog.png' alt='features icon' title='features icon'/>
                                                <div>
                                                    <p className='nav-drop-title'>Blog</p>
                                                    <p className='nav-drop-text'>Lorem Ipsum is simply dummy text</p>
                                                </div>
                                            </a>
                                        </li>
                                        <li className='nav-drop-list-item'>
                                            <a href='#' className='nav-drop-list-hover'>
                                                <img src='/assets/menu/resource-guide.png' alt='features icon' title='features icon'/>
                                                <div>
                                                    <p className='nav-drop-title'>Guides</p>
                                                    <p className='nav-drop-text'>Lorem Ipsum is simply dummy text</p>
                                                </div>
                                            </a>
                                        </li>
                                        <li className='nav-drop-list-item'>
                                            <a href='#' className='nav-drop-list-hover'>
                                                <img src='/assets/menu/resource-ebook.png' alt='features icon' title='features icon'/>
                                                <div>
                                                    <p className='nav-drop-title'>Ebooks</p>
                                                    <p className='nav-drop-text'>Lorem Ipsum is simply dummy text</p>
                                                </div>
                                            </a>
                                        </li>
                                        <li className='nav-drop-list-item'>
                                            <a href='#' className='nav-drop-list-hover'>
                                                <img src='/assets/menu/resource-webinar.png' alt='features icon' title='features icon'/>
                                                <div>
                                                    <p className='nav-drop-title'>Webinars</p>
                                                    <p className='nav-drop-text'>Lorem Ipsum is simply dummy text</p>
                                                </div>
                                            </a>
                                        </li>
                                        <li className='nav-drop-list-item'>
                                            <a href='#' className='nav-drop-list-hover'>
                                                <img src='/assets/menu/resource-case-study.png' alt='features icon' title='features icon'/>
                                                <div>
                                                    <p className='nav-drop-title'>Case Studies</p>
                                                    <p className='nav-drop-text'>Lorem Ipsum is simply dummy text</p>
                                                </div>
                                            </a>
                                        </li>
                                        <li className='nav-drop-list-item'>
                                            <a href='#' className='nav-drop-list-hover'>
                                                <img src='/assets/menu/resource-product-videos.png' alt='features icon' title='features icon'/>
                                                <div>
                                                    <p className='nav-drop-title'>Product Videos</p>
                                                    <p className='nav-drop-text'>Lorem Ipsum is simply dummy text</p>
                                                </div>
                                            </a>
                                        </li>
                                        <li className='nav-drop-list-item'>
                                            <a href='#' className='nav-drop-list-hover'>
                                                <img src='/assets/menu/resource-community.png' alt='features icon' title='features icon'/>
                                                <div>
                                                    <p className='nav-drop-title'>Community</p>
                                                    <p className='nav-drop-text'>Lorem Ipsum is simply dummy text</p>
                                                </div>
                                            </a>
                                        </li>
                                        <li className='nav-drop-list-item'>
                                            <a href='#' className='nav-drop-list-hover'>
                                                <img src='/assets/menu/resource-help.png' alt='features icon' title='features icon'/>
                                                <div>
                                                    <p className='nav-drop-title'>Help</p>
                                                    <p className='nav-drop-text'>Lorem Ipsum is simply dummy text</p>
                                                </div>
                                            </a>
                                        </li>
                                        <li className='nav-drop-list-item'>
                                            <a href='#' className='nav-drop-list-hover'>
                                                <img src='/assets/menu/resource-legal.png' alt='features icon' title='features icon'/>
                                                <div>
                                                    <p className='nav-drop-title'>Legal</p>
                                                    <p className='nav-drop-text'>Lorem Ipsum is simply dummy text</p>
                                                </div>
                                            </a>
                                        </li>
                                    </ul>
                                    {/* <div className='text-body flex flex-col gap-8 border-l-2 border-gray-200 pl-10'>
                                        <p className='text-2xl'>From Our Blog</p>
                                        <div className='flex justify-center gap-8'>
                                            <img src='/assets/menu/blog-1.png' alt='blog-image' title='blog-image'/>
                                            <div>
                                                <p className='text-xl mb-4'>Duet AI in Google Workspace: Revolutionizing Work with Generative AI</p>
                                                <a href='#' className='text-xl flex items-center w-fit text-primary relative after:absolute after:bg-primary after:bottom-0 after:left-0 after:h-[2px] after:w-full after:scale-x-100 hover:after:scale-x-0 after:transition-all'>Read More
                                                    <img className='block ml-2' src='/assets/icons/arrow-left.png' alt='arrow-left-icon' title='arrow-icon'/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className='flex justify-center gap-8'>
                                            <img src='/assets/menu/blog-2.png' alt='blog-image' title='blog-image'/>
                                            <div>
                                                <p className='text-xl mb-4'>Duet AI in Google Workspace: Revolutionizing Work with Generative AI</p>
                                                <a href='#' className='text-xl flex items-center w-fit text-primary relative after:absolute after:bg-primary after:bottom-0 after:left-0 after:h-[2px] after:w-full after:scale-x-100 hover:after:scale-x-0 after:transition-all'>Read More
                                                    <img className='block ml-2' src='/assets/icons/arrow-left.png' alt='arrow-left-icon' title='arrow-icon'/>
                                                </a>
                                            </div>
                                        </div>
                                        <a href='#' className='text-xl flex items-center w-fit text-primary relative after:absolute after:bg-primary after:-bottom-1 after:left-0 after:h-[2px] after:w-full after:scale-x-100 hover:after:scale-x-0 after:transition-all'>View All Blogs
                                            <img className='block ml-2' src='/assets/icons/arrow-left.png' alt='arrow-left-icon' title='arrow-icon'/>
                                        </a>
                                    </div> */}
                                </motion.div>
                            )}
                        </li>
                    <li className='nav-list-item'>
                        <a className='' href='/partners'>
                            <div className='header-anim'>
                                <span>
                                    Partners
                                </span>
                            </div>
                        </a>
                    </li>
                    <li className='nav-list-item'>
                        <a className='' href='/support'>
                            <div className='header-anim'>
                                <span>
                                    Support
                                </span>
                            </div>
                        </a>
                    </li>
                </ul>
            </nav>
            <div className='header-anim'>
                <a data-secondary href="/contact" className="btn header-btn">
                    <span className="btn-text">
                        Install Patronum
                    </span>
                    <div aria-hidden="true" className="btn-circle">
                        <div className="btn-circle-text">
                            Install Patronum
                            <svg data-second-install viewBox="0 0 22 22" className="btn-icon" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g className='btn-path fill-current' clipPath="url(#clip0_2103_37341)">
                                    <path d="M21 18.9768C20.9616 19.1084 20.9287 19.24 20.8904 19.3661C20.5834 20.3475 19.6899 20.9945 18.6155 21C15.9624 21.0055 13.3148 21 10.6617 21C7.94832 21 5.22944 21 2.51605 21C0.981206 21 0 20.0186 0 18.4888C0 16.2298 0 13.9708 0 11.7118C0 10.8619 0.778387 10.2971 1.55129 10.5713C2.05012 10.7468 2.33516 11.1854 2.33516 11.794C2.33516 13.4444 2.33516 15.0948 2.33516 16.7397C2.33516 17.0139 2.32968 17.288 2.34064 17.5622C2.36805 18.1708 2.83399 18.6368 3.44792 18.6642C3.51919 18.6697 3.59593 18.6697 3.66719 18.6697C8.2224 18.6697 12.7776 18.6697 17.3383 18.6752C17.7768 18.6752 18.1441 18.571 18.4236 18.2201C18.621 17.9679 18.6648 17.6828 18.6648 17.3702C18.6594 15.5005 18.6594 13.6363 18.6648 11.7666C18.6648 10.977 19.2733 10.4123 19.9914 10.5219C20.5286 10.6042 20.8301 10.9551 21 11.4431C21 13.9434 21 16.4601 21 18.9768Z"/>
                                    <path d="M10.7763 0C10.7983 0.0164491 10.8147 0.0383812 10.8366 0.0493473C11.4341 0.301567 11.6644 0.636031 11.6644 1.28851C11.6644 4.06841 11.6644 6.8483 11.6644 9.6282C11.6644 10.1546 11.6644 10.6809 11.6644 11.2676C11.774 11.1689 11.8398 11.1141 11.9001 11.0538C12.5524 10.4013 13.1992 9.74883 13.857 9.10183C14.1969 8.76736 14.608 8.6577 15.0629 8.81671C15.507 8.97023 15.7646 9.29373 15.8359 9.75431C15.8907 10.1217 15.7865 10.4452 15.5289 10.7084C14.1201 12.123 12.7113 13.5376 11.2971 14.9413C10.8421 15.3909 10.1569 15.3909 9.69646 14.9358C8.28221 13.5376 6.87892 12.1339 5.48112 10.7248C5.02066 10.2587 5.03711 9.55692 5.4866 9.10183C5.94157 8.64125 6.6487 8.63029 7.13108 9.09634C7.79435 9.73786 8.44118 10.3903 9.09349 11.0428C9.15927 11.1086 9.2086 11.1799 9.2689 11.2512C9.29631 11.2402 9.32372 11.2347 9.34564 11.2238C9.34564 11.1305 9.34564 11.0428 9.34564 10.9496C9.34564 7.80783 9.36209 4.66057 9.33468 1.5188C9.32372 0.784073 9.54298 0.274151 10.2282 0C10.4091 0 10.59 0 10.7763 0Z"/>
                                </g>
                                <g className='btn-path fill-current' clipPath="url(#clip0_2103_37341)">
                                    <path d="M21 18.9768C20.9616 19.1084 20.9287 19.24 20.8904 19.3661C20.5834 20.3475 19.6899 20.9945 18.6155 21C15.9624 21.0055 13.3148 21 10.6617 21C7.94832 21 5.22944 21 2.51605 21C0.981206 21 0 20.0186 0 18.4888C0 16.2298 0 13.9708 0 11.7118C0 10.8619 0.778387 10.2971 1.55129 10.5713C2.05012 10.7468 2.33516 11.1854 2.33516 11.794C2.33516 13.4444 2.33516 15.0948 2.33516 16.7397C2.33516 17.0139 2.32968 17.288 2.34064 17.5622C2.36805 18.1708 2.83399 18.6368 3.44792 18.6642C3.51919 18.6697 3.59593 18.6697 3.66719 18.6697C8.2224 18.6697 12.7776 18.6697 17.3383 18.6752C17.7768 18.6752 18.1441 18.571 18.4236 18.2201C18.621 17.9679 18.6648 17.6828 18.6648 17.3702C18.6594 15.5005 18.6594 13.6363 18.6648 11.7666C18.6648 10.977 19.2733 10.4123 19.9914 10.5219C20.5286 10.6042 20.8301 10.9551 21 11.4431C21 13.9434 21 16.4601 21 18.9768Z"/>
                                    <path d="M10.7763 0C10.7983 0.0164491 10.8147 0.0383812 10.8366 0.0493473C11.4341 0.301567 11.6644 0.636031 11.6644 1.28851C11.6644 4.06841 11.6644 6.8483 11.6644 9.6282C11.6644 10.1546 11.6644 10.6809 11.6644 11.2676C11.774 11.1689 11.8398 11.1141 11.9001 11.0538C12.5524 10.4013 13.1992 9.74883 13.857 9.10183C14.1969 8.76736 14.608 8.6577 15.0629 8.81671C15.507 8.97023 15.7646 9.29373 15.8359 9.75431C15.8907 10.1217 15.7865 10.4452 15.5289 10.7084C14.1201 12.123 12.7113 13.5376 11.2971 14.9413C10.8421 15.3909 10.1569 15.3909 9.69646 14.9358C8.28221 13.5376 6.87892 12.1339 5.48112 10.7248C5.02066 10.2587 5.03711 9.55692 5.4866 9.10183C5.94157 8.64125 6.6487 8.63029 7.13108 9.09634C7.79435 9.73786 8.44118 10.3903 9.09349 11.0428C9.15927 11.1086 9.2086 11.1799 9.2689 11.2512C9.29631 11.2402 9.32372 11.2347 9.34564 11.2238C9.34564 11.1305 9.34564 11.0428 9.34564 10.9496C9.34564 7.80783 9.36209 4.66057 9.33468 1.5188C9.32372 0.784073 9.54298 0.274151 10.2282 0C10.4091 0 10.59 0 10.7763 0Z"/>
                                </g>
                            </svg>
                        </div>
                    </div>
                </a>
                {/* <a href="/contact" className="btn-2">
                    <div className="btn-label">Install Patronum</div>
                    <div className="btn-circle">
                        <svg viewBox="0 0 21 23" fill="none" xmlns="http://www.w3.org/2000/svg" className="btn-icon">
                            <g clipPath="url(#clip0_2103_37341)">
                                <path className='btn__path fill-current' data-v-157867a6 d="M21 18.9768C20.9616 19.1084 20.9287 19.24 20.8904 19.3661C20.5834 20.3475 19.6899 20.9945 18.6155 21C15.9624 21.0055 13.3148 21 10.6617 21C7.94832 21 5.22944 21 2.51605 21C0.981206 21 0 20.0186 0 18.4888C0 16.2298 0 13.9708 0 11.7118C0 10.8619 0.778387 10.2971 1.55129 10.5713C2.05012 10.7468 2.33516 11.1854 2.33516 11.794C2.33516 13.4444 2.33516 15.0948 2.33516 16.7397C2.33516 17.0139 2.32968 17.288 2.34064 17.5622C2.36805 18.1708 2.83399 18.6368 3.44792 18.6642C3.51919 18.6697 3.59593 18.6697 3.66719 18.6697C8.2224 18.6697 12.7776 18.6697 17.3383 18.6752C17.7768 18.6752 18.1441 18.571 18.4236 18.2201C18.621 17.9679 18.6648 17.6828 18.6648 17.3702C18.6594 15.5005 18.6594 13.6363 18.6648 11.7666C18.6648 10.977 19.2733 10.4123 19.9914 10.5219C20.5286 10.6042 20.8301 10.9551 21 11.4431C21 13.9434 21 16.4601 21 18.9768Z" fill="currentColor"/>
                                <path className='btn__path fill-current' data-v-157867a6 d="M10.7763 0C10.7983 0.0164491 10.8147 0.0383812 10.8366 0.0493473C11.4341 0.301567 11.6644 0.636031 11.6644 1.28851C11.6644 4.06841 11.6644 6.8483 11.6644 9.6282C11.6644 10.1546 11.6644 10.6809 11.6644 11.2676C11.774 11.1689 11.8398 11.1141 11.9001 11.0538C12.5524 10.4013 13.1992 9.74883 13.857 9.10183C14.1969 8.76736 14.608 8.6577 15.0629 8.81671C15.507 8.97023 15.7646 9.29373 15.8359 9.75431C15.8907 10.1217 15.7865 10.4452 15.5289 10.7084C14.1201 12.123 12.7113 13.5376 11.2971 14.9413C10.8421 15.3909 10.1569 15.3909 9.69646 14.9358C8.28221 13.5376 6.87892 12.1339 5.48112 10.7248C5.02066 10.2587 5.03711 9.55692 5.4866 9.10183C5.94157 8.64125 6.6487 8.63029 7.13108 9.09634C7.79435 9.73786 8.44118 10.3903 9.09349 11.0428C9.15927 11.1086 9.2086 11.1799 9.2689 11.2512C9.29631 11.2402 9.32372 11.2347 9.34564 11.2238C9.34564 11.1305 9.34564 11.0428 9.34564 10.9496C9.34564 7.80783 9.36209 4.66057 9.33468 1.5188C9.32372 0.784073 9.54298 0.274151 10.2282 0C10.4091 0 10.59 0 10.7763 0Z" fill="currentColor"/>
                            </g>
                        </svg>
                    </div>
                </a> */}
            </div>
        </div>
    </header>
  );
};

export default Header;