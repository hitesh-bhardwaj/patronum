import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import PrimaryButton from '../PageLayout/Button/PrimaryButton';
import InstallButton from '../PageLayout/Button/InstallButton';

const DesktopNavigation = () => {
    const [isFeaturesDropdownOpen, setFeaturesDropdownOpen] = useState(false);
    const [isUsecasesDropdownOpen, setUsecasesDropdownOpen] = useState(false);
    const [isResourcesDropdownOpen, setResourcesDropdownOpen] = useState(false);
    const [isPriceDropdownOpen, setPriceDropdownOpen] = useState(false);

    return (
        <>
                <nav className='navbar lg:block hidden'>
                    <ul className='navbar-list'>
                        <li className='nav-list-item'>
                            <Link href='/about-us' className='page-link' shallow={false}>
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
                            <Link href='/features' className='page-link dropdown' shallow={false}>
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
                                        <NavItem 
                                            title={'User Management'}
                                            disc={'Automated User Onboarding & Offboarding'}
                                            link={'/on-boarding'}
                                            img={'onboarding.svg'}
                                        />
                                        <NavItem 
                                            title={'Email Signatures'}
                                            disc={'Centrally Managed Gmail Email Signatures'}
                                            link={'/email-signature-management'}
                                            img={'email-signature.svg'}
                                        />
                                        <NavItem 
                                            title={'Workspace Backup'}
                                            disc={'Best-in-Class Full Fidelity Backups'}
                                            link={'/google-workspace-backup'}
                                            img={'workspace-backup.svg'}
                                        />
                                        <NavItem 
                                            title={'Google Drive Management'}
                                            disc={'Manage, Update, or Move User Files'}
                                            link={'/google-drive-management'}
                                            img={'drive-management.svg'}
                                        />
                                        <NavItem 
                                            title={'File Unsharing'}
                                            disc={'Automatically Unshare file & Stay Compliant'}
                                            link={'/google-drive-compliance'}
                                            img={'file-sharing.svg'}
                                        />
                                        <NavItem 
                                            title={'Contact Sharing'}
                                            disc={'Seemless & Secure Contact Sharing'}
                                            link={'/google-contact-sharing'}
                                            img={'contact-sharing.svg'}
                                        />
                                        <NavItem 
                                            title={'Organizational Chart'}
                                            disc={'Locate & view organization hierarchy'}
                                            link={'/organisational-chart'}
                                            img={'organisational-chart.svg'}
                                        />
                                    </ul>
                                </motion.div>
                            )}
                        </li>

                        <li className='nav-list-item' 
                            onMouseEnter={() => setUsecasesDropdownOpen(true)}
                            onMouseLeave={() => setUsecasesDropdownOpen(false)}
                            >
                            <Link href='/use-cases' className='page-link dropdown' shallow={false}>
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
                                            <NavItem 
                                                title={'For Business'}
                                                disc={'Optimize Operations, Maximize Potential'}
                                                link={'/patronum-for-business'}
                                                img={'for-business.svg'}
                                            />
                                            <NavItem 
                                                title={'For HR'}
                                                disc={'Human Resources: Digitally Empowered'}
                                                link={'/patronum-for-hr'}
                                                img={'for-hr.svg'}
                                            />
                                            <NavItem 
                                                title={'For Sales & Marketing'}
                                                disc={'Elevating Brand Through Unified Messaging'}
                                                link={'/patronum-for-sales-marketing'}
                                                img={'for-sales-marketing.svg'}
                                            />
                                            <NavItem 
                                                title={'For Education'}
                                                disc={'Empowering Education with Smart Administration'}
                                                link={'/patronum-for-education'}
                                                img={'for-education.svg'}
                                            />
                                            <NavItem 
                                                title={'For Users'}
                                                disc={'User Empowerment: Connect More, Do More'}
                                                link={'/patronum-for-users'}
                                                img={'for-users.svg'}
                                            />
                                            <NavItem 
                                                title={'For IT Admins'}
                                                disc={'Administrate Smarter, Not Harder'}
                                                link={'#'}
                                                img={'for-it-admins.svg'}
                                            />
                                        </ul>
                                    </motion.div>
                                )}
                        </li>
                        <li className='nav-list-item' 
                            onMouseEnter={() => setPriceDropdownOpen(true)}
                            onMouseLeave={() => setPriceDropdownOpen(false)}
                            >
                            <Link href='/pricing' className='page-link dropdown' shallow={false}>
                                <div className='header-anim'>
                                    <span>
                                        Pricing
                                    </span>
                                    <svg viewBox="0 0 13 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1 1L6.5 6.5L12 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </div>
                            </Link>
                                {isPriceDropdownOpen && (
                                    <motion.div 
                                        initial={{ y: -30, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        transition={{ duration: 0.4 }} 
                                        className='nav-dropdown'>
                                        <ul className='nav-dropdown-list justify-center'>
                                            <div className='border border-gray-100 rounded-xl py-10 hover:bg-[#fbfbfb] transition duration-300'>
                                                <Link href="/pricing" className='flex justify-center items-center mb-10' shallow={false}>
                                                    <div className='flex flex-col gap-4 items-center px-[3vw] py-4 mx-8'>
                                                        <img className='h-[9vw]' loading='lazy' width="170" height="140" src='/assets/pricing/education.svg' alt='price image'/>
                                                        <div>
                                                            <p className='text-head text-2xl text-center transition mb-2'>Education</p>
                                                            <p className='text-primary text-2xl text-center group-hover:text-primary transition'>$ 2.00<span className='text-gray-400 text-xl'> user/year</span></p>
                                                        </div>
                                                    </div>
                                                    <div className='flex flex-col gap-4 items-center px-[3vw] py-4 mx-8'>
                                                        <img className='h-[9vw]' loading='lazy' width="170" height="140" src='/assets/pricing/non-profit.svg' alt='price image'/>
                                                        <div>
                                                            <p className='text-head text-2xl text-center transition mb-2'>Non-Profit</p>
                                                            <p className='text-primary text-2xl text-center group-hover:text-primary transition'>$ 2.00<span className='text-gray-400 text-xl'> user/year</span></p>
                                                        </div>
                                                    </div>
                                                    <div className='flex flex-col gap-4 items-center px-[3vw] py-4 mx-8'>
                                                        <img className='h-[9vw]' loading='lazy' width="170" height="140" src='/assets/pricing/business.svg' alt='price image'/>
                                                        <div>
                                                            <p className='text-head text-2xl text-center transition mb-2'>Business</p>
                                                            <p className='text-primary text-2xl text-center group-hover:text-primary transition'>$ 8.00<span className='text-gray-400 text-xl'> user/year</span></p>
                                                        </div>
                                                    </div>
                                                </Link>
                                                <div className='section-btn-container'>
                                                    <PrimaryButton 
                                                        link="/pricing"
                                                        btnText="Get Started"
                                                    />
                                                </div>
                                            </div>
                                        </ul>
                                    </motion.div>
                                )}
                        </li>
                        <li className='nav-list-item' 
                            onMouseEnter={() => setResourcesDropdownOpen(true)}
                            onMouseLeave={() => setResourcesDropdownOpen(false)}
                            >
                            <button className='page-link dropdown' aria-label="open resource dropdown">
                                <div className='header-anim'>
                                    <span>
                                        Resources
                                    </span>
                                    <svg viewBox="0 0 13 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1 1L6.5 6.5L12 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </div>
                            </button>
                                {isResourcesDropdownOpen && (
                                    <motion.div 
                                        initial={{ y: -30, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        transition={{ duration: 0.4 }} 
                                        className='nav-dropdown'>
                                        <ul className='nav-dropdown-list'>
                                            <NavItem 
                                                title={'Blog'}
                                                disc={'Tips, Resources & Latest News'}
                                                link={'/blog'}
                                                img={'resource-blog.svg'}
                                            />
                                            <NavItem 
                                                title={'Webinars'}
                                                disc={'Engage With Experts Live'}
                                                link={'/webinars'}
                                                img={'resource-webinars.svg'}
                                            />
                                            <NavItem 
                                                title={'Compliance'}
                                                disc={'Our Security & Compliance Practices'}
                                                link={'/security-and-compliance'}
                                                img={'resource-compliance.svg'}
                                            />
                                            <li className='nav-drop-list-item'>
                                                <Link href='https://help.patronum.io' target='_blank' rel="nofollow" className='nav-drop-list-hover' shallow={false}>
                                                    <div className='img'>
                                                        <img loading='lazy' src='/assets/menu/resource-help.svg' alt='menu icon'/>
                                                    </div>
                                                    <div className='w-[16vw]'>
                                                        <p className='nav-drop-title'>Help</p>
                                                        <p className='nav-drop-text'>Need Assistance? We're here!</p>
                                                    </div>
                                                </Link>
                                            </li>
                                            <li className='nav-drop-list-item'>
                                                <Link href='https://community.patronum.io' target='_blank' rel="nofollow" className='nav-drop-list-hover' shallow={false}>
                                                    <div className='img'>
                                                        <img loading='lazy' src='/assets/menu/resource-community.svg' alt='menu icon'/>
                                                    </div>
                                                    <div className='w-[16vw]'>
                                                        <p className='nav-drop-title'>Community</p>
                                                        <p className='nav-drop-text'>Connect & Collaborate with Peers</p>
                                                    </div>
                                                </Link>
                                            </li>
                                            <NavItem 
                                                title={'Legal'}
                                                disc={'Legal Information & Terms of Use'}
                                                link={'/legal'}
                                                img={'resource-legal.svg'}
                                            />
                                            <NavItem 
                                                title={'Contact Us'}
                                                disc={'Get in Touch with Us'}
                                                link={'/contact-us'}
                                                img={'resource-contact.svg'}
                                            />
                                        </ul>
                                    </motion.div>
                                )}
                            </li>
                        <li className='nav-list-item'>
                            <Link className='page-link' href='/partner-with-us' shallow={false}>
                                <div className='header-anim'>
                                    <span>
                                        Partners
                                    </span>
                                </div>
                            </Link>
                        </li>
                        <li className='nav-list-item'>
                            <Link className='page-link' href='/support' shallow={false}>
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
                    <InstallButton />
                </div>
        </>
    );
};

const NavItem = ({ link, img, title, disc }) => {
    return (
        <li className='nav-drop-list-item'>
            <Link href={link} className='nav-drop-list-hover' shallow={false}>
                <div className='img'>
                    <img loading='lazy' src={`/assets/menu/${img}`} alt='menu icon'/>
                </div>
                <div className='w-[16vw]'>
                    <p className='nav-drop-title'>{title}</p>
                    <p className='nav-drop-text'>{disc}</p>
                </div>
            </Link>
        </li>
    )
  }

export default DesktopNavigation;
