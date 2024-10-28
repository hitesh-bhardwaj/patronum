import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

const MobileNavVariants = {
    open: {
        x: 0,
        transition: {
            duration: 0.5,
            type: 'spring',
        }
    },
    closed: {
        x: '100%',
        transition: {
            duration: 0.3,
        }
    }
};

const NavParentVariants = {
    open: {
        transition: {
            staggerChildren: 0.07,
            delayChildren: 0.2,
        }
    },
    closed: {
        transition: {
            staggerChildren: 0.05,
            staggerDirection: -1
        }
    }
};

const NavChildren = {
    open: {
        y: 0,
        opacity: 1,
        transition: {
            y: { stiffness: 1000, velocity: -100 }
        }
    },
    closed: {
        y: 50,
        opacity: 0,
        transition: {
            y: { stiffness: 1000 }
        }
    }
};

const MobileNavigation = ({ isOpen, setSideNavOpen }) => {
    const [isFeaturesDropdownOpen, setFeaturesDropdownOpen] = useState(false);
    const [isUsecasesDropdownOpen, setUsecasesDropdownOpen] = useState(false);
    const [isResourcesDropdownOpen, setResourcesDropdownOpen] = useState(false);

    return (
        <motion.aside
            initial={false}
            variants={MobileNavVariants}
            animate={isOpen ? "open" : "closed"}
            data-lenis-prevent
            id="default-sidebar"
            className="fixed top-0 right-0 z-[120] md:w-[30rem] w-full h-screen"
            aria-label="Sidenav"
        >
            <div className="overflow-y-auto pb-10 pt-10 h-full w-full bg-white md:border-l border-gray-200">
                <div onClick={() => setSideNavOpen(false)} id='sidenav-close-btn' className='absolute top-6 right-6'>
                    <button className='md:py-2 md:px-4 md:text-xl py-1 px-3 text-lg rounded-full leading-[1] border border-black'>
                        <span>Close</span>
                    </button>
                </div>
                <motion.ul variants={NavParentVariants} className="my-12">
                <motion.li 
                        variants={NavChildren}
                        className='px-4'>
                        <Link href="/about-us" className="flex items-center py-4 text-2xl font-normal text-gray-900 border-b" aria-label='About' >
                            <span className="ml-3">About</span>
                        </Link>
                    </motion.li>
                    <motion.li variants={NavChildren}>
                        <div className='px-4'>
                            <div className='flex justify-between border-b'>
                                <Link href="/features" className="flex items-center w-[80%] py-4 text-2xl font-normal text-gray-900" aria-label='Features' >
                                    <span className="ml-3">Features</span>
                                </Link>
                                <button onClick={() => setFeaturesDropdownOpen(!isFeaturesDropdownOpen)} type="button" className={`flex items-center justify-center py-4 w-[20%] text-base font-normal text-gray-900 transition duration-500 ${isFeaturesDropdownOpen ? "-rotate-90" : "rotate-0"}`} aria-label='Open Features Dropdown'>
                                    <svg aria-hidden="true" className="w-7 h-7" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <ul id="dropdown-features" className={`px-4 flex flex-col justify-center space-y-4 bg-gray-100 transition-all duration-500 overflow-hidden ${isFeaturesDropdownOpen ? "h-[730px]" : "h-0" }`}>
                            <li className=''>
                                <Link href='/on-boarding' className='py-2 px-4 rounded flex gap-4 items-center' aria-label='Features - Onboarding' >
                                    <div className='w-[4rem] h-[4rem] p-4 bg-head flex justify-center items-center rounded-full overflow-hidden'>
                                        <Image width={30} height={30} loading='lazy' src='/assets/menu/onboarding.svg' alt='feature icon'/>
                                    </div>
                                    <div>
                                        <p className='text-xl font-500'>User Management</p>
                                        <p className='text-base'>Automated User Onboarding & Offboarding</p>
                                    </div>
                                </Link>
                            </li>
                            <li className=''>
                                <Link href='/email-signature-management' className='py-2 px-4 rounded flex gap-4 items-center' aria-label='Features - Email Signature' >
                                    <div className='w-[4rem] h-[4rem] p-4 bg-head flex justify-center items-center rounded-full overflow-hidden'>
                                        <Image width={30} height={30} loading='lazy' src='/assets/menu/email-signature.svg' alt='feature icon'/>
                                    </div>
                                    <div>
                                        <p className='text-xl font-500'>Email Signatures</p>
                                        <p className='text-base'>Centrally Managed Gmail Email Signatures</p>
                                    </div>
                                </Link>
                            </li>
                            <li className=''>
                                <Link href='/google-workspace-backup' className='py-2 px-4 rounded flex gap-4 items-center' aria-label='Features - Workspace Backup' >
                                    <div className='w-[4rem] h-[4rem] p-4 bg-head flex justify-center items-center rounded-full overflow-hidden'>
                                        <Image width={30} height={30} loading='lazy' src='/assets/menu/workspace-backup.svg' alt='feature icon'/>
                                    </div>
                                    <div>
                                        <p className='text-xl font-500'>Workspace Backup</p>
                                        <p className='text-base'>Best-in-Class Full Fidelity Backups</p>
                                    </div>
                                </Link>
                            </li>
                            <li className=''>
                                <Link href='/google-drive-management' className='py-2 px-4 rounded flex gap-4 items-center' aria-label='Features - Google Drive Management' >
                                    <div className='w-[4rem] h-[4rem] p-4 bg-head flex justify-center items-center rounded-full overflow-hidden'>
                                        <Image width={30} height={30} loading='lazy' src='/assets/menu/drive-management.svg' alt='feature icon'/>
                                    </div>
                                    <div>
                                        <p className='text-xl font-500'>Google Drive Management</p>
                                        <p className='text-base'>Manage, Update, or Move User Files</p>
                                    </div>
                                </Link>
                            </li>
                            <li className=''>
                                <Link href='/google-drive-compliance' className='py-2 px-4 rounded flex gap-4 items-center' aria-label='Features - File Unsharing' >
                                    <div className='w-[4rem] h-[4rem] p-4 bg-head flex justify-center items-center rounded-full overflow-hidden'>
                                        <Image width={30} height={30} loading='lazy' src='/assets/menu/file-sharing.svg' alt='feature icon'/>
                                    </div>
                                    <div>
                                        <p className='text-xl font-500'>File Unsharing</p>
                                        <p className='text-base'>Automatically Unshare file & Stay Compliant</p>
                                    </div>
                                </Link>
                            </li>
                            <li className=''>
                                <Link href='/google-contact-sharing' className='py-2 px-4 rounded flex gap-4 items-center' aria-label='Features - Contact Sharing' >
                                    <div className='w-[4rem] h-[4rem] p-4 bg-head flex justify-center items-center rounded-full overflow-hidden'>
                                        <Image width={30} height={30} loading='lazy' src='/assets/menu/contact-sharing.svg' alt='feature icon'/>
                                    </div>
                                    <div>
                                        <p className='text-xl font-500'>Contact Sharing</p>
                                        <p className='text-base'> Seemless & Secure Contact Sharing</p>
                                    </div>
                                </Link>
                            </li>
                            <li className=''>
                                <Link href='/organisational-chart' className='py-2 px-4 rounded flex gap-4 items-center' aria-label='Features - Organizational Chart' >
                                    <div className='w-[4rem] h-[4rem] p-4 bg-head flex justify-center items-center rounded-full overflow-hidden'>
                                        <Image width={30} height={30} loading='lazy' src='/assets/menu/organisational-chart.svg' alt='use case icon'/>
                                    </div>
                                    <div>
                                        <p className='text-xl font-500'>Organizational Chart</p>
                                        <p className='text-base'>Locate & view organization hierarchy</p>
                                    </div>
                                </Link>
                            </li>
                        </ul>
                    </motion.li>
                    <motion.li variants={NavChildren}>
                        <div className='px-4'>
                            <div className='flex justify-between border-b'>
                                <Link href="/use-cases" className="flex w-[80%] items-center py-4 text-2xl font-normal text-gray-900" aria-label='Use Cases' >
                                    <span className="ml-3">Use Cases</span>
                                </Link>
                                <button onClick={() => setUsecasesDropdownOpen(!isUsecasesDropdownOpen)} type="button" className={`flex items-center justify-center py-4 w-[20%] text-base font-normal text-gray-900 transition duration-500 ${isUsecasesDropdownOpen ? "-rotate-90" : "rotate-0"}`} aria-label='Open UseCases Dropdown'>
                                    <svg aria-hidden="true" className="w-7 h-7" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <ul id="dropdown-usecases" className={`px-4 flex flex-col justify-center space-y-4 bg-gray-100 transition-all duration-500 overflow-hidden ${isUsecasesDropdownOpen ? "h-[650px]" : "h-0" }`}>
                            <li className=''>
                                <Link href='/patronum-for-business' className='py-2 px-4 rounded flex gap-4 items-center' aria-label='Use Cases - For Business' >
                                    <div className='w-[4rem] h-[4rem] p-4 bg-head flex justify-center items-center rounded-full overflow-hidden'>
                                        <Image width={30} height={30} loading='lazy' src='/assets/menu/for-business.svg' alt='use case icon'/>
                                    </div>
                                    <div>
                                        <p className='text-xl font-500'>For Business</p>
                                        <p className='text-base'>Optimize Operations, Maximize Potential</p>
                                    </div>
                                </Link>
                            </li>
                            <li className=''>
                                <Link href='/patronum-for-hr' className='py-2 px-4 rounded flex gap-4 items-center' aria-label='Use Cases - For HR' >
                                    <div className='w-[4rem] h-[4rem] p-4 bg-head flex justify-center items-center rounded-full overflow-hidden'>
                                        <Image width={30} height={30} loading='lazy' src='/assets/menu/for-hr.svg' alt='use case icon'/>
                                    </div>
                                    <div>
                                        <p className='text-xl font-500'>For HR</p>
                                        <p className='text-base'>Human Resources: Digitally Empowered</p>
                                    </div>
                                </Link>
                            </li>
                            <li className=''>
                                <Link href='/patronum-for-sales-marketing' className='py-2 px-4 rounded flex gap-4 items-center' aria-label='Use Cases - For Sales & Marketing' >
                                    <div className='w-[4rem] h-[4rem] p-4 bg-head flex justify-center items-center rounded-full overflow-hidden'>
                                        <Image width={30} height={30} loading='lazy' src='/assets/menu/for-sales-marketing.svg' alt='use case icon'/>
                                    </div>
                                    <div>
                                        <p className='text-xl font-500'>For Sales & Marketing</p>
                                        <p className='text-base'>Elevating Brand Through Unified Messaging</p>
                                    </div>
                                </Link>
                            </li>
                            <li className=''>
                                <Link href='/patronum-for-education' className='py-2 px-4 rounded flex gap-4 items-center' aria-label='Use Cases - For Education' >
                                    <div className='w-[4rem] h-[4rem] p-4 bg-head flex justify-center items-center rounded-full overflow-hidden'>
                                        <Image width={30} height={30} loading='lazy' src='/assets/menu/for-education.svg' alt='use case icon'/>
                                    </div>
                                    <div>
                                        <p className='text-xl font-500'>For Education</p>
                                        <p className='text-base'>Empowering Education with Smart Administration</p>
                                    </div>
                                </Link>
                            </li>
                            <li className=''>
                                <Link href='/patronum-for-users' className='py-2 px-4 rounded flex gap-4 items-center' aria-label='Use Cases - For Users' >
                                    <div className='w-[4rem] h-[4rem] p-4 bg-head flex justify-center items-center rounded-full overflow-hidden'>
                                        <Image width={30} height={30} loading='lazy' src='/assets/menu/for-users.svg' alt='use case icon'/>
                                    </div>
                                    <div>
                                        <p className='text-xl font-500'>For Users</p>
                                        <p className='text-base'>User Empowerment: Connect More, Do More</p>
                                    </div>
                                </Link>
                            </li>
                            <li className=''>
                                <Link href='#' className='py-2 px-4 rounded flex gap-4 items-center' aria-label='Use Cases - For IT Admins' >
                                    <div className='w-[4rem] h-[4rem] p-4 bg-head flex justify-center items-center rounded-full overflow-hidden'>
                                        <Image width={30} height={30} loading='lazy' src='/assets/menu/for-it-admins.svg' alt='use case icon'/>
                                    </div>
                                    <div>
                                        <p className='text-xl font-500'>For IT Admins</p>
                                        <p className='text-base'>Administrate Smarter, Not Harder</p>
                                    </div>
                                </Link>
                            </li>
                        </ul>
                    </motion.li>
                    <motion.li 
                        variants={NavChildren} 
                        className='px-4'>
                        <Link href="/pricing" className="flex items-center py-4 border-b text-2xl font-normal text-gray-900" aria-label='Pricing' >
                            <span className="ml-3">Pricing</span>
                        </Link>
                    </motion.li>
                    <motion.li variants={NavChildren}>
                        <div className='px-4'>
                            <button onClick={() => setResourcesDropdownOpen(!isResourcesDropdownOpen)} type="button" className="flex items-center py-4 border-b w-full text-2xl font-normal text-gray-900" aria-label='Open Resources Dropdown'>
                                <span className="flex-1 ml-3 text-left w-4/5 whitespace-nowrap">Resources</span>
                                <span className='w-1/5 flex items-center justify-center'>
                                    <svg aria-hidden="true" className={`w-7 h-7 transition duration-500 ${isResourcesDropdownOpen ? "-rotate-90" : "rotate-0"}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path>
                                    </svg>
                                </span>
                            </button>
                        </div>
                        <ul id="dropdown-resources" className={`px-4 space-y-4 bg-gray-100 transition-all duration-500 overflow-hidden flex flex-col justify-center ${isResourcesDropdownOpen ? "h-[680px]" : "h-0" }`}>
                            <li className=''>
                                <Link href='/blog' className='py-2 px-4 rounded flex gap-4 items-center' aria-label='Resources - Blog' >
                                    <div className='w-[4rem] h-[4rem] p-4 bg-head flex justify-center items-center rounded-full overflow-hidden'>
                                        <Image width={30} height={30} loading='lazy' src='/assets/menu/resource-blog.svg' alt='resource icon'/>
                                    </div>
                                    <div>
                                        <p className='text-xl font-500'>Blog</p>
                                        <p className='text-base'>Tips, Resources & Latest News</p>
                                    </div>
                                </Link>
                            </li>
                            <li className=''>
                                <Link href='/webinars' className='py-2 px-4 rounded flex gap-4 items-center' aria-label='Resources - Webinars' >
                                    <div className='w-[4rem] h-[4rem] p-4 bg-head flex justify-center items-center rounded-full overflow-hidden'>
                                        <Image width={30} height={30} loading='lazy' src='/assets/menu/resource-webinars.svg' alt='resource icon'/>
                                    </div>
                                    <div>
                                        <p className='text-xl font-500'>Webinars</p>
                                        <p className='text-base'>Engage With Experts Live</p>
                                    </div>
                                </Link>
                            </li>
                            <li className=''>
                                <Link href='/security-and-compliance' className='py-2 px-4 rounded flex gap-4 items-center' aria-label='Resources - Compliance' >
                                    <div className='w-[4rem] h-[4rem] p-4 bg-head flex justify-center items-center rounded-full overflow-hidden'>
                                        <Image width={30} height={30} loading='lazy' src='/assets/menu/resource-compliance.svg' alt='resource icon'/>
                                    </div>
                                    <div>
                                        <p className='text-xl font-500'>Compliance</p>
                                        <p className='text-base'>Our Security & Compliance Practices</p>
                                    </div>
                                </Link>
                            </li>
                            <li className=''>
                                <Link href='https://help.patronum.io' target='_blank' rel="nofollow" className='py-2 px-4 rounded flex gap-4 items-center' aria-label='Resources - Help'>
                                    <div className='w-[4rem] h-[4rem] p-4 bg-head flex justify-center items-center rounded-full overflow-hidden'>
                                        <Image width={30} height={30} loading='lazy' src='/assets/menu/resource-help.svg' alt='resource icon'/>
                                    </div>
                                    <div>
                                        <p className='text-xl font-500'>Help</p>
                                        <p className='text-base'>Need Assistance? We're here!</p>
                                    </div>
                                </Link>
                            </li>
                            <li className=''>
                                <Link href='https://community.patronum.io' target='_blank' rel="nofollow" className='py-2 px-4 rounded flex gap-4 items-center' aria-label='Resources - Community'>
                                    <div className='w-[4rem] h-[4rem] p-4 bg-head flex justify-center items-center rounded-full overflow-hidden'>
                                        <Image width={30} height={30} loading='lazy' src='/assets/menu/resource-community.svg' alt='resource icon'/>
                                    </div>
                                    <div>
                                        <p className='text-xl font-500'>Community</p>
                                        <p className='text-base'>Connect & Collaborate with Peers</p>
                                    </div>
                                </Link>
                            </li>
                            <li className=''>
                                <Link href='/legal' className='py-2 px-4 rounded flex gap-4 items-center' aria-label='Resources - Legal' >
                                    <div className='w-[4rem] h-[4rem] p-4 bg-head flex justify-center items-center rounded-full overflow-hidden'>
                                        <Image width={30} height={30} loading='lazy' src='/assets/menu/resource-legal.svg' alt='resource icon'/>
                                    </div>
                                    <div>
                                        <p className='text-xl font-500'>Legal</p>
                                        <p className='text-base'>Legal Information & Terms of Use</p>
                                    </div>
                                </Link>
                            </li>
                            <li className=''>
                                <Link href='/contact-us' className='py-2 px-4 rounded flex gap-4 items-center' aria-label='Resources - Contact' >
                                    <div className='w-[4rem] h-[4rem] p-4 bg-head flex justify-center items-center rounded-full overflow-hidden'>
                                        <Image width={30} height={30} loading='lazy' src='/assets/menu/resource-contact.svg' alt='resource icon'/>
                                    </div>
                                    <div>
                                        <p className='text-xl font-500'>Contact Us</p>
                                        <p className='text-base'>Get in Touch with Us</p>
                                    </div>
                                </Link>
                            </li>
                        </ul>
                    </motion.li>
                    <motion.li 
                        variants={NavChildren} 
                        className='px-4'>
                        <Link href="/partner-with-us" className="flex items-center py-4 border-b text-2xl font-normal text-gray-900" >
                            <span className="ml-3">Partners</span>
                        </Link>
                    </motion.li>
                    <motion.li 
                        variants={NavChildren}
                        className='px-4'>
                        <Link href="/support" className="flex items-center py-4 border-b text-2xl font-normal text-gray-900">
                            <span className="ml-3">Support</span>
                        </Link>
                    </motion.li>
                </motion.ul>
            </div>
        </motion.aside>
    );
};

export default MobileNavigation;
