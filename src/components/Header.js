import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useModal } from './InstallModal/ModelContext';
import Link from 'next/link';

const Header = () => {
    const { openModal } = useModal();

    const openContactModal = () => {
        openModal('contact');
    };

    const [isFeaturesDropdownOpen, setFeaturesDropdownOpen] = useState(false);
    const [isUsecasesDropdownOpen, setUsecasesDropdownOpen] = useState(false);
    const [isResourcesDropdownOpen, setResourcesDropdownOpen] = useState(false);
    const [isSideNavOpen, setSideNavOpen] = useState(false);
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
    <>
        <header className={isScrolled ? 'header scrolled' : 'header'}>
            <div className='header-container'>
                <div className='logo-container'>
                    <Link href='/'>
                        <Image 
                            className=''
                            src="/logo.svg"
                            width={200}
                            height={200}
                            alt='Patronum Logo'
                            title='Patronum Logo'
                            priority={true}
                        />
                    </Link>
                </div>

                <div 
                    onClick={() => setSideNavOpen(true)}
                    className='lg:hidden block md:w-[5vw] w-[7vw] cursor-pointer'>
                    <img loading='lazy' className='w-full h-auto' src='/assets/menu/menu-icon.svg' alt='menu-icon'/>
                </div>

                <nav className='navbar lg:block hidden'>
                    
                    <ul className='navbar-list'>
                        <li className='nav-list-item'>
                            <Link href='/about' >
                                <div className='header-anim'>
                                    <span>
                                        About
                                    </span>
                                </div>
                            </Link>
                        </li>
                        <li className='nav-list-item'
                            onMouseEnter={() => setFeaturesDropdownOpen(true)}
                            onMouseLeave={() => setFeaturesDropdownOpen(false)}
                        >
                            <Link href='/features' className='dropdown' >
                                <div className='header-anim'>
                                    <span>
                                        Features
                                    </span>
                                    <svg viewBox="0 0 13 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1 1L6.5 6.5L12 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                            </Link>
                                {isFeaturesDropdownOpen && (
                                    <motion.div 
                                        initial={{ y: -30, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        transition={{ duration: 0.4 }} 
                                        className='nav-dropdown'>
                                        <ul className='nav-dropdown-list'>
                                            <li className='nav-drop-list-item'>
                                                <Link href='/on-boarding' className='nav-drop-list-hover' >
                                                    <img loading='lazy' src='/assets/menu/onboarding.png' alt='features icon' title='features icon'/>
                                                    <div>
                                                        <p className='nav-drop-title'>Onboarding</p>
                                                        <p className='nav-drop-text'>Lorem Ipsum is simply dummy text</p>
                                                    </div>
                                                </Link>
                                            </li>
                                            <li className='nav-drop-list-item'>
                                                <Link href='/google-workspace-backup' className='nav-drop-list-hover' >
                                                    <img loading='lazy' src='/assets/menu/workspace-backup.png' alt='features icon' title='features icon'/>
                                                    <div>
                                                        <p className='nav-drop-title'>Workspace Backup</p>
                                                        <p className='nav-drop-text'>Lorem Ipsum is simply dummy text</p>
                                                    </div>
                                                </Link>
                                            </li>
                                            <li className='nav-drop-list-item'>
                                                <Link href='/email-signature-management' className='nav-drop-list-hover' >
                                                    <img loading='lazy' src='/assets/menu/email-signature.png' alt='features icon' title='features icon'/>
                                                    <div>
                                                        <p className='nav-drop-title'>Email Signature</p>
                                                        <p className='nav-drop-text'>Lorem Ipsum is simply dummy text</p>
                                                    </div>
                                                </Link>
                                            </li>
                                            <li className='nav-drop-list-item'>
                                                <Link href='/google-drive-compliance' className='nav-drop-list-hover' >
                                                    <img loading='lazy' src='/assets/menu/file-sharing.png' alt='features icon' title='features icon'/>
                                                    <div>
                                                        <p className='nav-drop-title'>File Unsharing</p>
                                                        <p className='nav-drop-text'>Lorem Ipsum is simply dummy text</p>
                                                    </div>
                                                </Link>
                                            </li>
                                            <li className='nav-drop-list-item'>
                                                <Link href='/google-contact-sharing' className='nav-drop-list-hover'>
                                                    <img loading='lazy' src='/assets/menu/contact-sharing.png' alt='features icon' title='features icon'/>
                                                    <div>
                                                        <p className='nav-drop-title'>Contact Sharing</p>
                                                        <p className='nav-drop-text'>Lorem Ipsum is simply dummy text</p>
                                                    </div>
                                                </Link>
                                            </li>
                                            <li className='nav-drop-list-item'>
                                                <Link href='/organisational-chart' className='nav-drop-list-hover' >
                                                    <img loading='lazy' src='/assets/menu/organisational-chart.png' alt='features icon' title='features icon'/>
                                                    <div>
                                                        <p className='nav-drop-title'>Organisational Chart</p>
                                                        <p className='nav-drop-text'>Lorem Ipsum is simply dummy text</p>
                                                    </div>
                                                </Link>
                                            </li>
                                            <li className='nav-drop-list-item'>
                                                <Link href='/google-drive-management' className='nav-drop-list-hover' >
                                                    <img loading='lazy' src='/assets/menu/drive-management.png' alt='features icon' title='features icon'/>
                                                    <div>
                                                        <p className='nav-drop-title'>Drive Management</p>
                                                        <p className='nav-drop-text'>Lorem Ipsum is simply dummy text</p>
                                                    </div>
                                                </Link>
                                            </li>
                                        </ul>
                                    </motion.div>
                                )}
                            </li>

                        <li className='nav-list-item' 
                            onMouseEnter={() => setUsecasesDropdownOpen(true)}
                            onMouseLeave={() => setUsecasesDropdownOpen(false)}
                            >
                            <Link href='/use-cases' className='dropdown' >
                                <div className='header-anim'>
                                    <span>
                                        Use Cases
                                    </span>
                                    <svg viewBox="0 0 13 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1 1L6.5 6.5L12 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </div>
                            </Link>
                                {isUsecasesDropdownOpen && (
                                    <motion.div 
                                        initial={{ y: -30, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        transition={{ duration: 0.4 }} 
                                        className='nav-dropdown'>
                                    <ul className='nav-dropdown-list'>
                                            <li className='nav-drop-list-item'>
                                                <Link href='/patronum-for-business' className='nav-drop-list-hover' >
                                                    <img loading='lazy' src='/assets/menu/use-case-business.png' alt='features icon' title='features icon'/>
                                                    <div>
                                                        <p className='nav-drop-title'>For Business</p>
                                                        <p className='nav-drop-text'>Lorem Ipsum is simply dummy text</p>
                                                    </div>
                                                </Link>
                                            </li>
                                            <li className='nav-drop-list-item'>
                                                <Link href='/patronum-for-education' className='nav-drop-list-hover' >
                                                    <img loading='lazy' src='/assets/menu/use-case-education.png' alt='features icon' title='features icon'/>
                                                    <div>
                                                        <p className='nav-drop-title'>For Education</p>
                                                        <p className='nav-drop-text'>Lorem Ipsum is simply dummy text</p>
                                                    </div>
                                                </Link>
                                            </li>
                                            <li className='nav-drop-list-item'>
                                                <Link href='/patronum-for-hr' className='nav-drop-list-hover' >
                                                    <img loading='lazy' src='/assets/menu/use-case-hr.png' alt='features icon' title='features icon'/>
                                                    <div>
                                                        <p className='nav-drop-title'>For HR</p>
                                                        <p className='nav-drop-text'>Lorem Ipsum is simply dummy text</p>
                                                    </div>
                                                </Link>
                                            </li>
                                            <li className='nav-drop-list-item'>
                                                <Link href='/patronum-for-users' className='nav-drop-list-hover' >
                                                    <img loading='lazy' src='/assets/menu/use-case-users.png' alt='features icon' title='features icon'/>
                                                    <div>
                                                        <p className='nav-drop-title'>For Users</p>
                                                        <p className='nav-drop-text'>Lorem Ipsum is simply dummy text</p>
                                                    </div>
                                                </Link>
                                            </li>
                                            <li className='nav-drop-list-item'>
                                                <Link href='/patronum-for-sales-marketing' className='nav-drop-list-hover' >
                                                    <img loading='lazy' src='/assets/menu/use-case-sales.png' alt='features icon' title='features icon'/>
                                                    <div>
                                                        <p className='nav-drop-title'>For Sales & Marketing</p>
                                                        <p className='nav-drop-text'>Lorem Ipsum is simply dummy text</p>
                                                    </div>
                                                </Link>
                                            </li>
                                            <li className='nav-drop-list-item'>
                                                <Link href='/patronum-for-it-admins' className='nav-drop-list-hover' >
                                                    <img loading='lazy' src='/assets/menu/use-case-admin.png' alt='features icon' title='features icon'/>
                                                    <div>
                                                        <p className='nav-drop-title'>For IT Admins</p>
                                                        <p className='nav-drop-text'>Lorem Ipsum is simply dummy text</p>
                                                    </div>
                                                </Link>
                                            </li>
                                        </ul>
                                    </motion.div>
                                )}
                        </li>
                        <li className='nav-list-item'>
                            <Link className='' href='/pricing' >
                                <div className='header-anim'>
                                    <span>
                                        Pricing
                                    </span>
                                </div>
                            </Link>
                        </li>
                        <li className='nav-list-item' 
                            onMouseEnter={() => setResourcesDropdownOpen(true)}
                            onMouseLeave={() => setResourcesDropdownOpen(false)}
                            >
                            <Link href='#' className='dropdown'>
                                <div className='header-anim'>
                                    <span>
                                        Resources
                                    </span>
                                    <svg viewBox="0 0 13 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1 1L6.5 6.5L12 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </div>
                            </Link>
                                {isResourcesDropdownOpen && (
                                    <motion.div 
                                        initial={{ y: -30, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        transition={{ duration: 0.4 }} 
                                        className='nav-dropdown'>
                                        <ul className='nav-dropdown-list'>
                                            <li className='nav-drop-list-item'>
                                                <Link href='/blog' className='nav-drop-list-hover' >
                                                    <img loading='lazy' src='/assets/menu/resource-blog.png' alt='features icon' title='features icon'/>
                                                    <div>
                                                        <p className='nav-drop-title'>Blog</p>
                                                        <p className='nav-drop-text'>Lorem Ipsum is simply dummy text</p>
                                                    </div>
                                                </Link>
                                            </li>
                                            <li className='nav-drop-list-item'>
                                                <Link href='/guides' className='nav-drop-list-hover' >
                                                    <img loading='lazy' src='/assets/menu/resource-guide.png' alt='features icon' title='features icon'/>
                                                    <div>
                                                        <p className='nav-drop-title'>Guides</p>
                                                        <p className='nav-drop-text'>Lorem Ipsum is simply dummy text</p>
                                                    </div>
                                                </Link>
                                            </li>
                                            <li className='nav-drop-list-item'>
                                                <Link href='/ebooks' className='nav-drop-list-hover' >
                                                    <img loading='lazy' src='/assets/menu/resource-ebook.png' alt='features icon' title='features icon'/>
                                                    <div>
                                                        <p className='nav-drop-title'>Ebooks</p>
                                                        <p className='nav-drop-text'>Lorem Ipsum is simply dummy text</p>
                                                    </div>
                                                </Link>
                                            </li>
                                            <li className='nav-drop-list-item'>
                                                <Link href='/webinars' className='nav-drop-list-hover' >
                                                    <img loading='lazy' src='/assets/menu/resource-webinar.png' alt='features icon' title='features icon'/>
                                                    <div>
                                                        <p className='nav-drop-title'>Webinars</p>
                                                        <p className='nav-drop-text'>Lorem Ipsum is simply dummy text</p>
                                                    </div>
                                                </Link>
                                            </li>
                                            <li className='nav-drop-list-item'>
                                                <Link href='/case-studies' className='nav-drop-list-hover' >
                                                    <img loading='lazy' src='/assets/menu/resource-case-study.png' alt='features icon' title='features icon'/>
                                                    <div>
                                                        <p className='nav-drop-title'>Case Studies</p>
                                                        <p className='nav-drop-text'>Lorem Ipsum is simply dummy text</p>
                                                    </div>
                                                </Link>
                                            </li>
                                            <li className='nav-drop-list-item'>
                                                <Link href='/product-videos' className='nav-drop-list-hover' >
                                                    <img loading='lazy' src='/assets/menu/resource-product-videos.png' alt='features icon' title='features icon'/>
                                                    <div>
                                                        <p className='nav-drop-title'>Product Videos</p>
                                                        <p className='nav-drop-text'>Lorem Ipsum is simply dummy text</p>
                                                    </div>
                                                </Link>
                                            </li>
                                            <li className='nav-drop-list-item'>
                                                <Link href='https://community.patronum.io' target='_blank' className='nav-drop-list-hover'>
                                                    <img loading='lazy' src='/assets/menu/resource-community.png' alt='features icon' title='features icon'/>
                                                    <div>
                                                        <p className='nav-drop-title'>Community</p>
                                                        <p className='nav-drop-text'>Lorem Ipsum is simply dummy text</p>
                                                    </div>
                                                </Link>
                                            </li>
                                            <li className='nav-drop-list-item'>
                                                <Link href='https://help.patronum.com' target='_blank' className='nav-drop-list-hover'>
                                                    <img loading='lazy' src='/assets/menu/resource-help.png' alt='features icon' title='features icon'/>
                                                    <div>
                                                        <p className='nav-drop-title'>Help</p>
                                                        <p className='nav-drop-text'>Lorem Ipsum is simply dummy text</p>
                                                    </div>
                                                </Link>
                                            </li>
                                            <li className='nav-drop-list-item'>
                                                <Link href='/legal' className='nav-drop-list-hover' >
                                                    <img loading='lazy' src='/assets/menu/resource-legal.png' alt='features icon' title='features icon'/>
                                                    <div>
                                                        <p className='nav-drop-title'>Legal</p>
                                                        <p className='nav-drop-text'>Lorem Ipsum is simply dummy text</p>
                                                    </div>
                                                </Link>
                                            </li>
                                        </ul>
                                    </motion.div>
                                )}
                            </li>
                        <li className='nav-list-item'>
                            <Link className='' href='/partner-with-us' >
                                <div className='header-anim'>
                                    <span>
                                        Partners
                                    </span>
                                </div>
                            </Link>
                        </li>
                        <li className='nav-list-item'>
                            <Link className='' href='/support' >
                                <div className='header-anim'>
                                    <span>
                                        Support
                                    </span>
                                </div>
                            </Link>
                        </li>
                    </ul>
                </nav>
                <div className='header-anim hidden lg:block'>
                    <button data-secondary className="btn header-btn" onClick={openContactModal}>
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
                    </button>
                </div>
            </div>
        </header>
        
        {/* Mobile Nav or Side Nav */}
        <aside
            data-lenis-prevent
            id="default-sidebar"
            className={`fixed top-0 right-0 z-[120] md:w-[30rem] w-full h-screen transition-all duration-300 ${
                isSideNavOpen ? "translate-x-0" : "translate-x-full"
            }`}
            aria-label="Sidenav"
            >
            <div className="overflow-y-auto pb-10 pt-10 h-full w-full bg-white md:border-l border-gray-200">
                <div onClick={() => setSideNavOpen(false)} id='sidenav-close-btn' className='absolute top-6 right-6'>
                    <button className='md:py-2 md:px-4 md:text-xl py-1 px-3 text-lg rounded-full leading-[1] border border-black'>
                        <span>Close</span>
                    </button>
                </div>
                <ul className="my-12">
                    <li className='px-4'>
                        <Link href="/about" className="flex items-center py-4 text-2xl font-normal text-gray-900 border-b" aria-label='About' >
                            <span className="ml-3">About</span>
                        </Link>
                    </li>
                    <li>
                        <div className='px-4'>
                            <div className='flex justify-between border-b'>
                                <Link href="/features" className="flex items-center w-[80%] py-4 text-2xl font-normal text-gray-900" aria-label='Features' >
                                    <span className="ml-3">Features</span>
                                </Link>
                                <button onClick={() => setFeaturesDropdownOpen(!isFeaturesDropdownOpen)} type="button" className={`flex items-center justify-center py-4 w-[20%] text-base font-normal text-gray-900 transition ${isFeaturesDropdownOpen ? "-rotate-90" : "rotate-0"}`} aria-label='Open Features Dropdown'>
                                    <svg aria-hidden="true" className="w-7 h-7" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <ul id="dropdown-features" className={`py-4 px-4 space-y-4 bg-gray-100 transition-all duration-300 ${isFeaturesDropdownOpen ? "block" : "hidden" }`} aria-hidden="true">
                            <li className=''>
                                <Link href='/on-boarding' className='py-2 px-4 rounded flex gap-4 items-center' aria-label='Features - Onboarding' >
                                    <img loading='lazy' className='w-[15%]' src='/assets/menu/onboarding.png' alt='features icon'/>
                                    <div>
                                        <p className='text-xl font-500'>Onboarding</p>
                                        <p className='text-base'>Lorem Ipsum is simply dummy text</p>
                                    </div>
                                </Link>
                            </li>
                            <li className=''>
                                <Link href='/google-workspace-backup' className='py-2 px-4 rounded flex gap-4 items-center' aria-label='Features - Workspace Backup' >
                                    <img loading='lazy' className='w-[15%]' src='/assets/menu/workspace-backup.png' alt='features icon'/>
                                    <div>
                                        <p className='text-xl font-500'>Workspace Backup</p>
                                        <p className='text-base'>Lorem Ipsum is simply dummy text</p>
                                    </div>
                                </Link>
                            </li>
                            <li className=''>
                                <Link href='/email-signature-management' className='py-2 px-4 rounded flex gap-4 items-center' aria-label='Features - Email Signature' >
                                    <img loading='lazy' className='w-[15%]' src='/assets/menu/email-signature.png' alt='features icon'/>
                                    <div>
                                        <p className='text-xl font-500'>Email Signature</p>
                                        <p className='text-base'>Lorem Ipsum is simply dummy text</p>
                                    </div>
                                </Link>
                            </li>
                            <li className=''>
                                <Link href='/google-drive-compliance' className='py-2 px-4 rounded flex gap-4 items-center' aria-label='Features - File Unsharing' >
                                    <img loading='lazy' className='w-[15%]' src='/assets/menu/file-sharing.png' alt='features icon'/>
                                    <div>
                                        <p className='text-xl font-500'>File Unsharing</p>
                                        <p className='text-base'>Lorem Ipsum is simply dummy text</p>
                                    </div>
                                </Link>
                            </li>
                            <li className=''>
                                <Link href='/google-contact-sharing' className='py-2 px-4 rounded flex gap-4 items-center' aria-label='Features - Contact Sharing' >
                                    <img loading='lazy' className='w-[15%]' src='/assets/menu/contact-sharing.png' alt='features icon'/>
                                    <div>
                                        <p className='text-xl font-500'>Contact Sharing</p>
                                        <p className='text-base'>Lorem Ipsum is simply dummy text</p>
                                    </div>
                                </Link>
                            </li>
                            <li className=''>
                                <Link href='/organisational-chart' className='py-2 px-4 rounded flex gap-4 items-center' aria-label='Features - Organisational Chart' >
                                    <img loading='lazy' className='w-[15%]' src='/assets/menu/organisational-chart.png' alt='features icon'/>
                                    <div>
                                        <p className='text-xl font-500'>Organisational Chart</p>
                                        <p className='text-base'>Lorem Ipsum is simply dummy text</p>
                                    </div>
                                </Link>
                            </li>
                            <li className=''>
                                <Link href='/google-drive-management' className='py-2 px-4 rounded flex gap-4 items-center' aria-label='Features - Google Drive Management' >
                                    <img loading='lazy' className='w-[15%]' src='/assets/menu/drive-management.png' alt='features icon'/>
                                    <div>
                                        <p className='text-xl font-500'>Drive Management</p>
                                        <p className='text-base'>Lorem Ipsum is simply dummy text</p>
                                    </div>
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <div className='px-4'>
                            <div className='flex justify-between border-b'>
                                <Link href="/use-cases" className="flex w-[80%] items-center py-4 text-2xl font-normal text-gray-900" aria-label='Use Cases' >
                                    <span className="ml-3">Use Cases</span>
                                </Link>
                                <button onClick={() => setUsecasesDropdownOpen(!isUsecasesDropdownOpen)} type="button" className={`flex items-center justify-center py-4 w-[20%] text-base font-normal text-gray-900 transition ${isUsecasesDropdownOpen ? "-rotate-90" : "rotate-0"}`} aria-label='Open UseCases Dropdown'>
                                    <svg aria-hidden="true" className="w-7 h-7" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <ul id="dropdown-usecases" className={`py-4 px-4 space-y-4 bg-gray-100 ${isUsecasesDropdownOpen ? "block" : "hidden" }`} aria-hidden="true">
                            <li className=''>
                                <Link href='/patronum-for-business' className='py-2 px-4 rounded flex gap-4 items-center' aria-label='Use Cases - For Business' >
                                    <img loading='lazy' className='w-[15%]' src='/assets/menu/use-case-business.png' alt='use cases icon' title='use cases icon'/>
                                    <div>
                                        <p className='text-xl font-500'>For Business</p>
                                        <p className='text-base'>Lorem Ipsum is simply dummy text</p>
                                    </div>
                                </Link>
                            </li>
                            <li className=''>
                                <Link href='/patronum-for-education' className='py-2 px-4 rounded flex gap-4 items-center' aria-label='Use Cases - For Education' >
                                    <img loading='lazy' className='w-[15%]' src='/assets/menu/use-case-education.png' alt='use cases icon' title='use cases icon'/>
                                    <div>
                                        <p className='text-xl font-500'>For Education</p>
                                        <p className='text-base'>Lorem Ipsum is simply dummy text</p>
                                    </div>
                                </Link>
                            </li>
                            <li className=''>
                                <Link href='/patronum-for-hr' className='py-2 px-4 rounded flex gap-4 items-center' aria-label='Use Cases - For HR' >
                                    <img loading='lazy' className='w-[15%]' src='/assets/menu/use-case-hr.png' alt='use cases icon' title='use cases icon'/>
                                    <div>
                                        <p className='text-xl font-500'>For HR</p>
                                        <p className='text-base'>Lorem Ipsum is simply dummy text</p>
                                    </div>
                                </Link>
                            </li>
                            <li className=''>
                                <Link href='/patronum-for-users' className='py-2 px-4 rounded flex gap-4 items-center' aria-label='Use Cases - For Users' >
                                    <img loading='lazy' className='w-[15%]' src='/assets/menu/use-case-users.png' alt='use cases icon' title='use cases icon'/>
                                    <div>
                                        <p className='text-xl font-500'>For Users</p>
                                        <p className='text-base'>Lorem Ipsum is simply dummy text</p>
                                    </div>
                                </Link>
                            </li>
                            <li className=''>
                                <Link href='/patronum-for-sales-marketing' className='py-2 px-4 rounded flex gap-4 items-center' aria-label='Use Cases - For Sales & Marketing' >
                                    <img loading='lazy' className='w-[15%]' src='/assets/menu/use-case-sales.png' alt='use cases icon' title='use cases icon'/>
                                    <div>
                                        <p className='text-xl font-500'>For Sales & Marketing</p>
                                        <p className='text-base'>Lorem Ipsum is simply dummy text</p>
                                    </div>
                                </Link>
                            </li>
                            <li className=''>
                                <Link href='/patronum-for-it-admins' className='py-2 px-4 rounded flex gap-4 items-center' aria-label='Use Cases - For IT Admins' >
                                    <img loading='lazy' className='w-[15%]' src='/assets/menu/use-case-admin.png' alt='use cases icon' title='use cases icon'/>
                                    <div>
                                        <p className='text-xl font-500'>For IT Admins</p>
                                        <p className='text-base'>Lorem Ipsum is simply dummy text</p>
                                    </div>
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li className='px-4'>
                        <Link href="#" className="flex items-center py-4 border-b text-2xl font-normal text-gray-900" aria-label='Pricing' >
                            <span className="ml-3">Pricing</span>
                        </Link>
                    </li>
                    <li>
                        <div className='px-4'>
                            <button onClick={() => setResourcesDropdownOpen(!isResourcesDropdownOpen)} type="button" className="flex items-center py-4 border-b w-full text-2xl font-normal text-gray-900" aria-label='Open Resources Dropdown'>
                                <span className="flex-1 ml-3 text-left w-4/5 whitespace-nowrap">Resources</span>
                                <span className='w-1/5 flex items-center justify-center'>
                                    <svg aria-hidden="true" className={`w-7 h-7 transition ${isResourcesDropdownOpen ? "-rotate-90" : "rotate-0"}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path>
                                    </svg>
                                </span>
                            </button>
                        </div>
                        <ul id="dropdown-resources" className={`py-4 px-4 space-y-4 bg-gray-100 ${isResourcesDropdownOpen ? "block" : "hidden" }`} aria-hidden="true">
                            <li className=''>
                                <Link href='/blog' className='py-2 px-4 rounded flex gap-4 items-center' aria-label='Resources - Blog' >
                                    <img loading='lazy' className='w-[15%]' src='/assets/menu/resource-blog.png' alt='features icon'/>
                                    <div>
                                        <p className='text-xl font-500'>Blog</p>
                                        <p className='text-base'>Lorem Ipsum is simply dummy text</p>
                                    </div>
                                </Link>
                            </li>
                            <li className=''>
                                <Link href='/guides' className='py-2 px-4 rounded flex gap-4 items-center' aria-label='Resources - Guides' >
                                    <img loading='lazy' className='w-[15%]' src='/assets/menu/resource-guide.png' alt='features icon'/>
                                    <div>
                                        <p className='text-xl font-500'>Guides</p>
                                        <p className='text-base'>Lorem Ipsum is simply dummy text</p>
                                    </div>
                                </Link>
                            </li>
                            <li className=''>
                                <Link href='/ebooks' className='py-2 px-4 rounded flex gap-4 items-center' aria-label='Resources - Ebooks' >
                                    <img loading='lazy' className='w-[15%]' src='/assets/menu/resource-ebook.png' alt='features icon'/>
                                    <div>
                                        <p className='text-xl font-500'>Ebooks</p>
                                        <p className='text-base'>Lorem Ipsum is simply dummy text</p>
                                    </div>
                                </Link>
                            </li>
                            <li className=''>
                                <Link href='/webinars' className='py-2 px-4 rounded flex gap-4 items-center' aria-label='Resources - Webinars' >
                                    <img loading='lazy' className='w-[15%]' src='/assets/menu/resource-webinar.png' alt='features icon'/>
                                    <div>
                                        <p className='text-xl font-500'>Webinars</p>
                                        <p className='text-base'>Lorem Ipsum is simply dummy text</p>
                                    </div>
                                </Link>
                            </li>
                            <li className=''>
                                <Link href='/case-studies' className='py-2 px-4 rounded flex gap-4 items-center' aria-label='Resources - Case Studies' >
                                    <img loading='lazy' className='w-[15%]' src='/assets/menu/resource-case-study.png' alt='features icon'/>
                                    <div>
                                        <p className='text-xl font-500'>Case Studies</p>
                                        <p className='text-base'>Lorem Ipsum is simply dummy text</p>
                                    </div>
                                </Link>
                            </li>
                            <li className=''>
                                <Link href='/product-videos' className='py-2 px-4 rounded flex gap-4 items-center' aria-label='Resources - Product Videos'>
                                    <img loading='lazy' className='w-[15%]' src='/assets/menu/resource-product-videos.png' alt='features icon'/>
                                    <div>
                                        <p className='text-xl font-500'>Product Videos</p>
                                        <p className='text-base'>Lorem Ipsum is simply dummy text</p>
                                    </div>
                                </Link>
                            </li>
                            <li className=''>
                                <Link href='https://community.patronum.io' className='py-2 px-4 rounded flex gap-4 items-center' aria-label='Resources - Community'>
                                    <img loading='lazy' className='w-[15%]' src='/assets/menu/resource-community.png' alt='features icon'/>
                                    <div>
                                        <p className='text-xl font-500'>Community</p>
                                        <p className='text-base'>Lorem Ipsum is simply dummy text</p>
                                    </div>
                                </Link>
                            </li>
                            <li className=''>
                                <Link href='https://help.patronum.com' className='py-2 px-4 rounded flex gap-4 items-center' aria-label='Resources - Help'>
                                    <img loading='lazy' className='w-[15%]' src='/assets/menu/resource-help.png' alt='features icon'/>
                                    <div>
                                        <p className='text-xl font-500'>Help</p>
                                        <p className='text-base'>Lorem Ipsum is simply dummy text</p>
                                    </div>
                                </Link>
                            </li>
                            <li className=''>
                                <Link href='/legal' className='py-2 px-4 rounded flex gap-4 items-center' aria-label='Resources - Legal' >
                                    <img loading='lazy' className='w-[15%]' src='/assets/menu/resource-legal.png' alt='features icon'/>
                                    <div>
                                        <p className='text-xl font-500'>Legal</p>
                                        <p className='text-base'>Lorem Ipsum is simply dummy text</p>
                                    </div>
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li className='px-4'>
                        <Link href="/partner-with-us" className="flex items-center py-4 border-b text-2xl font-normal text-gray-900" >
                            <span className="ml-3">Partners</span>
                        </Link>
                    </li>
                    <li className='px-4'>
                        <Link href="/support" className="flex items-center py-4 border-b text-2xl font-normal text-gray-900">
                            <span className="ml-3">Support</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </aside>
    </>
  );
};

export default Header;