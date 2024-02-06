import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Header = () => {

    const [isFeaturesDropdownOpen, setFeaturesDropdownOpen] = useState(false);
    const [isUsecasesDropdownOpen, setUsecasesDropdownOpen] = useState(false);
    const [isResourcesDropdownOpen, setResourcesDropdownOpen] = useState(false);

    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset;
            if (scrollTop > 20) {
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
                        src="/logo.svg"
                        width={200}
                        height={200}
                        alt='Patronum Logo'
                        title='Patronum Logo'
                        priority={true}
                    />
                </a>
            </div>

            <nav className='navbar'>
                <ul className='navbar-list'>
                    <li className='nav-list-item'>
                        <a href='/about'>About</a>
                    </li>
                    <li className='nav-list-item'
                        onMouseEnter={() => setFeaturesDropdownOpen(true)}
                        onMouseLeave={() => setFeaturesDropdownOpen(false)}
                        >
                        <a href='/features' className=''>Features
                            <svg viewBox="0 0 13 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 1L6.5 6.5L12 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
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
                        <a href='/use-cases' className=''>Use Cases
                            <svg className='' viewBox="0 0 13 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 1L6.5 6.5L12 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
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
                        <a className='' href='/pricing'>Pricing</a>
                    </li>
                    <li className='nav-list-item' 
                        onMouseEnter={() => setResourcesDropdownOpen(true)}
                        onMouseLeave={() => setResourcesDropdownOpen(false)}
                        >
                        <a href='/resources' className=''>Resources
                            <svg className='' viewBox="0 0 13 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 1L6.5 6.5L12 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
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
                        <a className='' href='/partners'>Partners</a>
                    </li>
                    <li className='nav-list-item'>
                        <a className='' href='/support'>Support</a>
                    </li>
                </ul>
            </nav>
            <div>
                <a href="#" className='button-style-1'>
                    <span>Install Patronum</span>
                </a>
            </div>
        </div>
    </header>
  );
};

export default Header;