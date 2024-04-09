import React, { useState } from 'react';
import Link from 'next/link';
import { useModal } from '../InstallModal/ModelContext';
import { motion } from 'framer-motion';
import PrimaryButton from '../PageLayout/Button/PrimaryButton';

const DesktopNavigation = () => {
    const { openModal } = useModal();
    const [isFeaturesDropdownOpen, setFeaturesDropdownOpen] = useState(false);
    const [isUsecasesDropdownOpen, setUsecasesDropdownOpen] = useState(false);
    const [isResourcesDropdownOpen, setResourcesDropdownOpen] = useState(false);
    const [isPriceDropdownOpen, setPriceDropdownOpen] = useState(false);

    const openContactModal = () => {
        openModal('contact');
    };

    return (
        <>
                <nav className='navbar lg:block hidden'>
                    <ul className='navbar-list'>
                        <li className='nav-list-item'>
                            <Link href='/about-us' >
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
                                                title={'Organisational Chart'}
                                                disc={'Locate & view organisation hierarchy'}
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
                                                link={'/patronum-for-it-admins'}
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
                            <Link href='/pricing' className='dropdown' >
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
                                                <Link href="/pricing" className='flex justify-center items-center mb-10'>
                                                    <div className='flex flex-col gap-4 items-center px-[3vw] py-4 mx-8'>
                                                        <img className='h-[9vw]' loading='lazy' width="170" height="140" src='/assets/pricing/education.svg' alt='price image'/>
                                                        <div>
                                                            <p className='text-head text-2xl text-center transition mb-2'>Education</p>
                                                            <p className='text-primary text-2xl text-center group-hover:text-primary transition'>$ 2.00<span className='text-gray-400'> /year</span></p>
                                                        </div>
                                                    </div>
                                                    <div className='flex flex-col gap-4 items-center px-[3vw] py-4 mx-8'>
                                                        <img className='h-[9vw]' loading='lazy' width="170" height="140" src='/assets/pricing/non-profit.svg' alt='price image'/>
                                                        <div>
                                                            <p className='text-head text-2xl text-center transition mb-2'>Non-Profit</p>
                                                            <p className='text-primary text-2xl text-center group-hover:text-primary transition'>$ 2.00<span className='text-gray-400'> /year</span></p>
                                                        </div>
                                                    </div>
                                                    <div className='flex flex-col gap-4 items-center px-[3vw] py-4 mx-8'>
                                                        <img className='h-[9vw]' loading='lazy' width="170" height="140" src='/assets/pricing/business.svg' alt='price image'/>
                                                        <div>
                                                            <p className='text-head text-2xl text-center transition mb-2'>Business</p>
                                                            <p className='text-primary text-2xl text-center group-hover:text-primary transition'>$ 8.00<span className='text-gray-400'> /year</span></p>
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
                                            <NavItem 
                                                title={'Blog'}
                                                disc={'Tips, Resources & Latest News'}
                                                link={'/blog'}
                                                img={'resource-blog.svg'}
                                            />
                                            {/* <NavItem 
                                                title={'Guides'}
                                                disc={'Step-by-Step User Guides'}
                                                link={'/guides'}
                                                img={'resource-guides.svg'}
                                            />
                                            <NavItem 
                                                title={'Ebooks'}
                                                disc={'Exclusive Patronum Content in Ebooks'}
                                                link={'/ebooks'}
                                                img={'resource-ebooks.svg'}
                                            />
                                            <NavItem 
                                                title={'Webinars'}
                                                disc={'Engage With Experts Live'}
                                                link={'/webinars'}
                                                img={'resource-webinars.svg'}
                                            />
                                            <NavItem 
                                                title={'Case Studies'}
                                                disc={"Patronum's Real-World Success Stories"}
                                                link={'/case-studies'}
                                                img={'resource-case-studies.svg'}
                                            />
                                            <NavItem 
                                                title={'Product Videos'}
                                                disc={'In-depth video guides'}
                                                link={'/product-videos'}
                                                img={'resource-product-videos.svg'}
                                            /> */}
                                            <li className='nav-drop-list-item'>
                                                <Link href='https://community.patronum.io' target='_blank' className='nav-drop-list-hover' >
                                                    <div className='img'>
                                                        <img loading='lazy' src='/assets/menu/resource-community.svg' alt='menu icon'/>
                                                    </div>
                                                    <div className='w-[16vw]'>
                                                        <p className='nav-drop-title'>Community</p>
                                                        <p className='nav-drop-text'>Connect & Collaborate with Peers</p>
                                                    </div>
                                                </Link>
                                            </li>
                                            <li className='nav-drop-list-item'>
                                                <Link href='https://help.patronum.io' target='_blank' className='nav-drop-list-hover' >
                                                    <div className='img'>
                                                        <img loading='lazy' src='/assets/menu/resource-help.svg' alt='menu icon'/>
                                                    </div>
                                                    <div className='w-[16vw]'>
                                                        <p className='nav-drop-title'>Help</p>
                                                        <p className='nav-drop-text'>Need Assistance? We're here!</p>
                                                    </div>
                                                </Link>
                                            </li>
                                            <NavItem 
                                                title={'Legal'}
                                                disc={'Legal Information & Terms of Use'}
                                                link={'/legal'}
                                                img={'resource-legal.svg'}
                                            />
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
        </>
    );
};

const NavItem = ({ link, img, title, disc }) => {
    return (
        <li className='nav-drop-list-item'>
            <Link href={link} className='nav-drop-list-hover' >
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
