import React, { useState } from 'react';
import Link from 'next/link';
import { m, domAnimation, LazyMotion } from 'framer-motion';
import InstallButton from '../Buttons/InstallButton';
import styles from "./desktop.module.css";
import LinkButton from '../Buttons/LinkButton';

const DesktopNavigation = () => {
    const [isFeaturesDropdownOpen, setFeaturesDropdownOpen] = useState(false);
    const [isUsecasesDropdownOpen, setUsecasesDropdownOpen] = useState(false);
    const [isResourcesDropdownOpen, setResourcesDropdownOpen] = useState(false);
    const [isPriceDropdownOpen, setPriceDropdownOpen] = useState(false);

    return (
        <>
            <LazyMotion features={domAnimation}>
                <nav className='lg:block'>
                    <ul className='flex center gap-[3vw] font-head font-medium'>
                        <li className={styles.navListItem}>
                            <Link href='/about-us' className={styles.pageLink} prefetch={false}>
                                <div>
                                    <span>
                                        About
                                    </span>
                                </div>
                            </Link>
                        </li>
                        <li className={styles.navListItem}
                            onMouseEnter={() => setFeaturesDropdownOpen(true)}
                            onMouseLeave={() => setFeaturesDropdownOpen(false)}
                        >
                            <Link href='/features' className={`${styles.pageLink} ${styles.dropdown}`} prefetch={false}>
                                <div >
                                    <span>
                                        Features
                                    </span>
                                    <svg viewBox="0 0 13 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1 1L6.5 6.5L12 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                            </Link>
                            {isFeaturesDropdownOpen && (
                                <m.div
                                    initial={{ y: -30, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ duration: 0.4 }}
                                    className={styles.navDropdown}>
                                    <ul className={styles.navDropdownList}>
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
                                </m.div>
                            )}
                        </li>

                        <li className={styles.navListItem}
                            onMouseEnter={() => setUsecasesDropdownOpen(true)}
                            onMouseLeave={() => setUsecasesDropdownOpen(false)}
                        >
                            <Link href='/use-cases' className={`${styles.pageLink} ${styles.dropdown}`} prefetch={false}>
                                <div >
                                    <span>
                                        Use Cases
                                    </span>
                                    <svg viewBox="0 0 13 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1 1L6.5 6.5L12 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                            </Link>
                            {isUsecasesDropdownOpen && (
                                <m.div
                                    initial={{ y: -30, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ duration: 0.4 }}
                                    className={styles.navDropdown}>
                                    <ul className={styles.navDropdownList}>
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
                                </m.div>
                            )}
                        </li>
                        <li className={styles.navListItem}
                            onMouseEnter={() => setPriceDropdownOpen(true)}
                            onMouseLeave={() => setPriceDropdownOpen(false)}
                        >
                            <Link href="/pricing" className={`${styles.pageLink} ${styles.dropdown}`} prefetch={false}>
                                <div>
                                    <span>
                                        Pricing
                                    </span>
                                    <svg viewBox="0 0 13 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1 1L6.5 6.5L12 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                            </Link>
                            {/* {isPriceDropdownOpen && ( */}
                            {/* <m.div
                                initial={{ y: -30, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.4 }}
                                className={`${styles.navDropdown}`}>
                                <ul className={`${styles.navDropdownList} !w-[60%] !grid-cols-1`}>
                                    <NavItem
                                        title={'For Business'}
                                        disc={'Scalable Business-Ready Plans'}
                                        link={'/pricing-for-business'}
                                        img={'pricing-for-business.svg'}
                                    />
                                    <NavItem
                                        title={'For Education & Non-Profits'}
                                        disc={'Affordable & Accessible Pricing'}
                                        link={'/pricing-for-education'}
                                        img={'pricing-for-education.svg'}
                                    />
                                </ul>
                            </m.div> */}
                            {/* )} */}
                            {isPriceDropdownOpen && (
                            <m.div
                                initial={{ y: -30, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.4 }}
                                className={styles.navDropdown}>
                                <ul className={`${styles.navDropdownList} justify-center gap-10`}>
                                    <div className='border border-gray-100 rounded-xl py-10 hover:bg-[#fbfbfb] transition duration-300 w-[24vw] mb-5'>
                                        <Link href="/pricing-for-business" className='flex justify-center items-center' prefetch={false}>
                                            <div className='flex flex-col gap-4 items-center'>
                                                <img className='h-[9vw]' loading='lazy' width="170" height="140" src='/assets/pricing/business.svg' alt='price image' />
                                                <div className='text-center'>
                                                    <p className='text-head text-2xl transition mb-2'>For Business</p>
                                                    <p className={styles.navDropText}>Scalable Business-Ready Plans</p>
                                                </div>
                                                <LinkButton href="/pricing-for-business" btnText="Know More" />
                                            </div>
                                        </Link>
                                    </div>
                                    <div className='border border-gray-100 rounded-xl py-10 hover:bg-[#fbfbfb] transition duration-300 w-[24vw] mb-5'>
                                        <Link href="/pricing-for-education" className='flex justify-center items-center' prefetch={false}>
                                            <div className='flex flex-col gap-4 items-center'>
                                                <img className='h-[8vw] mb-[1vw]' loading='lazy' width="170" height="140" src='/assets/pricing/education.svg' alt='price image' />
                                                <div className='text-center'>
                                                    <p className='text-head text-2xl transition mb-2 '>For Education & Non-Profit</p>
                                                    <p className={styles.navDropText}>Affordable & Accessible Pricing</p>
                                                </div>
                                                <LinkButton href="/pricing-for-education" btnText="Know More" />
                                            </div>
                                        </Link>
                                    </div>
                                </ul>
                            </m.div>
                            )}
                        </li>
                        <li className={styles.navListItem}
                            onMouseEnter={() => setResourcesDropdownOpen(true)}
                            onMouseLeave={() => setResourcesDropdownOpen(false)}
                        >
                            <button className={`${styles.pageLink} ${styles.dropdown}`} aria-label="open resource dropdown">
                                <div>
                                    <span>
                                        Resources
                                    </span>
                                    <svg viewBox="0 0 13 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1 1L6.5 6.5L12 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                            </button>
                            {isResourcesDropdownOpen && (
                                <m.div
                                    initial={{ y: -30, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ duration: 0.4 }}
                                    className={styles.navDropdown}>
                                    <ul className={styles.navDropdownList}>
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
                                        <li className={styles.navDropListItem}>
                                            <Link href='https://help.patronum.io' target='_blank' rel="nofollow" className={styles.navDropListHover} prefetch={false}>
                                                <div className={styles.img}>
                                                    <img loading='lazy' src='/assets/menu/resource-help.svg' alt='menu icon' />
                                                </div>
                                                <div className='w-[16vw]'>
                                                    <p className={styles.navDropTitle}>Help</p>
                                                    <p className={styles.navDropText}>Need Assistance? We're here!</p>
                                                </div>
                                            </Link>
                                        </li>
                                        <li className={styles.navDropListItem}>
                                            <Link href='https://community.patronum.io' target='_blank' rel="nofollow" className={styles.navDropListHover} prefetch={false}>
                                                <div className={styles.img}>
                                                    <img loading='lazy' src='/assets/menu/resource-community.svg' alt='menu icon' />
                                                </div>
                                                <div className='w-[16vw]'>
                                                    <p className={styles.navDropTitle}>Community</p>
                                                    <p className={styles.navDropText}>Connect & Collaborate with Peers</p>
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
                                </m.div>
                            )}
                        </li>
                        <li className={styles.navListItem}>
                            <Link className={styles.pageLink} href='/partner-with-us' prefetch={false}>
                                <div >
                                    <span>
                                        Partners
                                    </span>
                                </div>
                            </Link>
                        </li>
                        <li className={styles.navListItem}>
                            <Link className={styles.pageLink} href='/support' prefetch={false}>
                                <div >
                                    <span>
                                        Support
                                    </span>
                                </div>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </LazyMotion>
            <div className='header-anim lg:block md:hidden'>
                <InstallButton btnText={"Try for free"} />
            </div>
        </>
    );
};

const NavItem = ({ link, img, title, disc, className = "" }) => {
    return (
        <li className={`${styles.navDropListItem}`}>
            <Link href={link} className={styles.navDropListHover} prefetch={false}>
                <div className={styles.img}>
                    <img loading='lazy' src={`/assets/menu/${img}`} alt='menu icon' />
                </div>
                <div className={`w-[16vw] ${className}`}>
                    <p className={styles.navDropTitle}>{title}</p>
                    <p className={styles.navDropText}>{disc}</p>
                </div>
            </Link>
        </li>
    )
}

export default DesktopNavigation;
