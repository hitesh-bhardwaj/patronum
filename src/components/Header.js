// import React, { useState, useRef, useEffect } from 'react';
// import Image from 'next/image';
// import { motion } from 'framer-motion';

// const Header = () => {

//     const [isFeaturesDropdownOpen, setFeaturesDropdownOpen] = useState(false);
//     const [isUsecasesDropdownOpen, setUsecasesDropdownOpen] = useState(false);
    // const [isResourcesDropdownOpen, setResourcesDropdownOpen] = useState(false);
//     const featureDropdownRef = useRef(null);
//     const usecaseDropdownRef = useRef(null);
    // const resourceDropdownRef = useRef(null);

//     const handleFeaturesClick = () => {
//         setFeaturesDropdownOpen(!isFeaturesDropdownOpen);
//     };
//     const handleFeaturesClickOutside = (event) => {
//         if (featureDropdownRef.current && !featureDropdownRef.current.contains(event.target)) {
//         setFeaturesDropdownOpen(false);
//         }
//     };

//     const handleUsecasesClick = () => {
//         setUsecasesDropdownOpen(!isUsecasesDropdownOpen);
//     };
//     const handleUsecasesClickOutside = (event) => {
//         if (usecaseDropdownRef.current && !usecaseDropdownRef.current.contains(event.target)) {
//         setUsecasesDropdownOpen(false);
//         }
//     };

//     const handleResourcesClick = () => {
//         setResourcesDropdownOpen(!isResourcesDropdownOpen);
//     };
//     const handleResourcesClickOutside = (event) => {
//         if (resourceDropdownRef.current && !resourceDropdownRef.current.contains(event.target)) {
//         setResourcesDropdownOpen(false);
//         }
//     };

//     useEffect(() => {
//         document.addEventListener('mousedown', handleFeaturesClickOutside);
//         return () => {
//             document.removeEventListener('mousedown', handleFeaturesClickOutside);
//         };
//     }, []);

//     useEffect(() => {
//         document.addEventListener('mousedown', handleUsecasesClickOutside);
//         return () => {
//             document.removeEventListener('mousedown', handleUsecasesClickOutside);
//         };
//     }, []);

//     useEffect(() => {
//         document.addEventListener('mousedown', handleResourcesClickOutside);
//         return () => {
//             document.removeEventListener('mousedown', handleResourcesClickOutside);
//         };
//     }, []);

//   return (
//     <header className='fixed top-0 left w-screen h-fit'>
//         <div className='container mt-5 px-3 py-3 bg-white shadow-linear rounded-full flex justify-between items-center mx-auto'>
//             <div className='logo-container ml-3'>
//                 <a href='/'>
//                     <Image 
//                         src="/logo.svg"
//                         width={200}
//                         height={200}
//                         alt='Patronum Logo'
//                         title='Patronum Logo'
//                         priority={true}
//                     />
//                 </a>
//             </div>
//             <nav>
//                 <ul className='flex gap-10 text-head font-medium'>
//                     <li className='text-xl hover:text-primary duration-300 relative after:absolute after:w-full after:bg-primary after:bottom-0 after:h-[2px] after:left-0 after:duration-300 hover:after:scale-x-100 after:scale-x-0'>
//                         <a href='/about'>About</a>
//                     </li>
//                     <li className='relative text-xl hover:text-primary active:text-primary duration-300 after:absolute after:w-full after:bg-primary after:bottom-0 after:h-[2px] after:left-0 after:duration-300 hover:after:scale-x-100 after:scale-x-0' ref={featureDropdownRef}>
//                         <button className='flex items-center' onClick={handleFeaturesClick}>Features
//                             <svg className='w-3 ml-2 h-3 mt-1 ' viewBox="0 0 13 8" fill="none" xmlns="http://www.w3.org/2000/svg">
//                                 <path d="M1 1L6.5 6.5L12 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//                             </svg>
//                         </button>
//                         {isFeaturesDropdownOpen && (
//                             <motion.div 
//                                 initial={{ y: -30, opacity: 0 }}
//                                 animate={{ y: 0, opacity: 1 }}
//                                 transition={{ duration: 0.4 }}
//                                 className='absolute bg-white top-[70px] left-[-22vw] shadow-11xl bg-white text-white rounded-2xl dropdown-point w-max px-24 py-12'>
//                                 <ul className='relative grid grid-cols-2 gap-x-32 gap-y-6 w-full py-2 after:absolute after:top-0 after:left-1/2 after:bg-gray-200 after:rounded-full after:h-full after:w-[2px]'>
//                                     <li>
//                                         <a href='#' className='flex items-center gap-3'>
//                                             <img src='/assets/menu/onboarding.png' alt='features icon' title='features icon'/>
//                                             <div>
//                                                 <p className='text-head text-xl mb-1 font-medium'>Onboarding</p>
//                                                 <p className='text-body text-sm'>Lorem Ipsum is simply dummy text</p>
//                                             </div>
//                                         </a>
//                                     </li>
//                                     <li>
//                                         <a href='#' className='flex items-center gap-3'>
//                                             <img src='/assets/menu/workspace-backup.png' alt='features icon' title='features icon'/>
//                                             <div>
//                                                 <p className='text-head text-xl mb-1 font-medium'>Workspace Backup</p>
//                                                 <p className='text-body text-sm'>Lorem Ipsum is simply dummy text</p>
//                                             </div>
//                                         </a>
//                                     </li>
//                                     <li>
//                                         <a href='#' className='flex items-center gap-3'>
//                                             <img src='/assets/menu/email-signature.png' alt='features icon' title='features icon'/>
//                                             <div>
//                                                 <p className='text-head text-xl mb-1 font-medium'>Email Signature</p>
//                                                 <p className='text-body text-sm'>Lorem Ipsum is simply dummy text</p>
//                                             </div>
//                                         </a>
//                                     </li>
//                                     <li>
//                                         <a href='#' className='flex items-center gap-3'>
//                                             <img src='/assets/menu/file-sharing.png' alt='features icon' title='features icon'/>
//                                             <div>
//                                                 <p className='text-head text-xl mb-1 font-medium'>File Unsharing</p>
//                                                 <p className='text-body text-sm'>Lorem Ipsum is simply dummy text</p>
//                                             </div>
//                                         </a>
//                                     </li>
//                                     <li>
//                                         <a href='#' className='flex items-center gap-3'>
//                                             <img src='/assets/menu/contact-sharing.png' alt='features icon' title='features icon'/>
//                                             <div>
//                                                 <p className='text-head text-xl mb-1 font-medium'>Contact Sharing</p>
//                                                 <p className='text-body text-sm'>Lorem Ipsum is simply dummy text</p>
//                                             </div>
//                                         </a>
//                                     </li>
//                                     <li>
//                                         <a href='#' className='flex items-center gap-3'>
//                                             <img src='/assets/menu/organisational-chart.png' alt='features icon' title='features icon'/>
//                                             <div>
//                                                 <p className='text-head text-xl mb-1 font-medium'>Organisational Chart</p>
//                                                 <p className='text-body text-sm'>Lorem Ipsum is simply dummy text</p>
//                                             </div>
//                                         </a>
//                                     </li>
//                                     <li>
//                                         <a href='#' className='flex items-center gap-3'>
//                                             <img src='/assets/menu/drive-management.png' alt='features icon' title='features icon'/>
//                                             <div>
//                                                 <p className='text-head text-xl mb-1 font-medium'>Drive Management</p>
//                                                 <p className='text-body text-sm'>Lorem Ipsum is simply dummy text</p>
//                                             </div>
//                                         </a>
//                                     </li>
//                                 </ul>
//                             </motion.div>
//                         )}
//                     </li>
//                     <li className='text-xl hover:text-primary duration-300 flex items-center relative after:absolute after:w-full after:bg-primary after:bottom-0 after:h-[2px] after:left-0 after:duration-300 hover:after:scale-x-100 after:scale-x-0' ref={usecaseDropdownRef}>
//                         <button className='flex items-center' onClick={handleUsecasesClick}>Use Cases
//                             <svg className='w-3 ml-2 h-3 mt-1' viewBox="0 0 13 8" fill="none" xmlns="http://www.w3.org/2000/svg">
//                                 <path d="M1 1L6.5 6.5L12 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//                             </svg>
//                         </button>
//                         {isUsecasesDropdownOpen && (
//                             <motion.div 
//                                 initial={{ y: -30, opacity: 0 }}
//                                 animate={{ y: 0, opacity: 1 }}
//                                 transition={{ duration: 0.4 }} 
//                                 className='absolute bg-white top-[70px] left-[-22vw] shadow-11xl bg-white text-white rounded-2xl dropdown-point w-max px-24 py-12'>
//                                 <ul className='relative grid grid-cols-2 gap-x-32 gap-y-6 w-full py-2 after:absolute after:top-0 after:left-1/2 after:bg-gray-200 after:rounded-full after:h-full after:w-[2px]'>
//                                     <li>
//                                         <a href='#' className='flex items-center gap-3'>
//                                             <img src='/assets/menu/use-case-business.png' alt='features icon' title='features icon'/>
//                                             <div>
//                                                 <p className='text-head text-xl mb-1 font-medium'>For Business</p>
//                                                 <p className='text-body text-sm'>Lorem Ipsum is simply dummy text</p>
//                                             </div>
//                                         </a>
//                                     </li>
//                                     <li>
//                                         <a href='#' className='flex items-center gap-3'>
//                                             <img src='/assets/menu/use-case-education.png' alt='features icon' title='features icon'/>
//                                             <div>
//                                                 <p className='text-head text-xl mb-1 font-medium'>For Education</p>
//                                                 <p className='text-body text-sm'>Lorem Ipsum is simply dummy text</p>
//                                             </div>
//                                         </a>
//                                     </li>
//                                     <li>
//                                         <a href='#' className='flex items-center gap-3'>
//                                             <img src='/assets/menu/use-case-hr.png' alt='features icon' title='features icon'/>
//                                             <div>
//                                                 <p className='text-head text-xl mb-1 font-medium'>For HR</p>
//                                                 <p className='text-body text-sm'>Lorem Ipsum is simply dummy text</p>
//                                             </div>
//                                         </a>
//                                     </li>
//                                     <li>
//                                         <a href='#' className='flex items-center gap-3'>
//                                             <img src='/assets/menu/use-case-users.png' alt='features icon' title='features icon'/>
//                                             <div>
//                                                 <p className='text-head text-xl mb-1 font-medium'>For Users</p>
//                                                 <p className='text-body text-sm'>Lorem Ipsum is simply dummy text</p>
//                                             </div>
//                                         </a>
//                                     </li>
//                                     <li>
//                                         <a href='#' className='flex items-center gap-3'>
//                                             <img src='/assets/menu/use-case-sales.png' alt='features icon' title='features icon'/>
//                                             <div>
//                                                 <p className='text-head text-xl mb-1 font-medium'>For Sales & Marketing</p>
//                                                 <p className='text-body text-sm'>Lorem Ipsum is simply dummy text</p>
//                                             </div>
//                                         </a>
//                                     </li>
//                                     <li>
//                                         <a href='#' className='flex items-center gap-3'>
//                                             <img src='/assets/menu/use-case-admin.png' alt='features icon' title='features icon'/>
//                                             <div>
//                                                 <p className='text-head text-xl mb-1 font-medium'>For IT Admins</p>
//                                                 <p className='text-body text-sm'>Lorem Ipsum is simply dummy text</p>
//                                             </div>
//                                         </a>
//                                     </li>
//                                 </ul>
//                             </motion.div>
//                         )}
//                     </li>
//                     <li className='text-xl hover:text-primary duration-300 relative after:absolute after:w-full after:bg-primary after:bottom-0 after:h-[2px] after:left-0 after:duration-300 hover:after:scale-x-100 after:scale-x-0'>
//                         <a href='/pricing'>Pricing</a>
//                     </li>
//                     <li className='text-xl hover:text-primary duration-300 flex items-center relative after:absolute after:w-full after:bg-primary after:bottom-0 after:h-[2px] after:left-0 after:duration-300 hover:after:scale-x-100 after:scale-x-0' ref={resourceDropdownRef}>
//                         <button className='flex items-center' onClick={handleResourcesClick}>Resources
//                             <svg className='w-3 ml-2 h-3 mt-1' viewBox="0 0 13 8" fill="none" xmlns="http://www.w3.org/2000/svg">
//                                 <path d="M1 1L6.5 6.5L12 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//                             </svg>
//                         </button>
//                         {isResourcesDropdownOpen && (
//                             <motion.div 
//                                 initial={{ y: -30, opacity: 0 }}
//                                 animate={{ y: 0, opacity: 1 }}
//                                 transition={{ duration: 0.4 }} 
//                                 className='absolute bg-white top-[70px] left-[-41.2vw] container flex shadow-11xl bg-white text-white rounded-2xl dropdown-point-2 w-max py-12 pl-0 pr-10'>
//                                 <ul className='relative w-[100%] grid grid-cols-2 gap-x-0 justify-items-center gap-y-6 w-full py-2 after:absolute after:top-0 after:left-1/2 after:bg-gray-200 after:rounded-full after:h-full after:w-[2px]'>
//                                     <li>
//                                         <a href='#' className='flex items-center gap-3'>
//                                             <img src='/assets/menu/resource-blog.png' alt='features icon' title='features icon'/>
//                                             <div>
//                                                 <p className='text-head text-xl mb-1 font-medium'>Blog</p>
//                                                 <p className='text-body text-sm'>Lorem Ipsum is simply dummy text</p>
//                                             </div>
//                                         </a>
//                                     </li>
//                                     <li>
//                                         <a href='#' className='flex items-center gap-3'>
//                                             <img src='/assets/menu/resource-guide.png' alt='features icon' title='features icon'/>
//                                             <div>
//                                                 <p className='text-head text-xl mb-1 font-medium'>Guides</p>
//                                                 <p className='text-body text-sm'>Lorem Ipsum is simply dummy text</p>
//                                             </div>
//                                         </a>
//                                     </li>
//                                     <li>
//                                         <a href='#' className='flex items-center gap-3'>
//                                             <img src='/assets/menu/resource-ebook.png' alt='features icon' title='features icon'/>
//                                             <div>
//                                                 <p className='text-head text-xl mb-1 font-medium'>Ebooks</p>
//                                                 <p className='text-body text-sm'>Lorem Ipsum is simply dummy text</p>
//                                             </div>
//                                         </a>
//                                     </li>
//                                     <li>
//                                         <a href='#' className='flex items-center gap-3'>
//                                             <img src='/assets/menu/resource-webinar.png' alt='features icon' title='features icon'/>
//                                             <div>
//                                                 <p className='text-head text-xl mb-1 font-medium'>Webinars</p>
//                                                 <p className='text-body text-sm'>Lorem Ipsum is simply dummy text</p>
//                                             </div>
//                                         </a>
//                                     </li>
//                                     <li>
//                                         <a href='#' className='flex items-center gap-3'>
//                                             <img src='/assets/menu/resource-case-study.png' alt='features icon' title='features icon'/>
//                                             <div>
//                                                 <p className='text-head text-xl mb-1 font-medium'>Case Studies</p>
//                                                 <p className='text-body text-sm'>Lorem Ipsum is simply dummy text</p>
//                                             </div>
//                                         </a>
//                                     </li>
//                                     <li>
//                                         <a href='#' className='flex items-center gap-3'>
//                                             <img src='/assets/menu/resource-product-videos.png' alt='features icon' title='features icon'/>
//                                             <div>
//                                                 <p className='text-head text-xl mb-1 font-medium'>Product Videos</p>
//                                                 <p className='text-body text-sm'>Lorem Ipsum is simply dummy text</p>
//                                             </div>
//                                         </a>
//                                     </li>
//                                     <li>
//                                         <a href='#' className='flex items-center gap-3'>
//                                             <img src='/assets/menu/resource-community.png' alt='features icon' title='features icon'/>
//                                             <div>
//                                                 <p className='text-head text-xl mb-1 font-medium'>Community</p>
//                                                 <p className='text-body text-sm'>Lorem Ipsum is simply dummy text</p>
//                                             </div>
//                                         </a>
//                                     </li>
//                                     <li>
//                                         <a href='#' className='flex items-center gap-3'>
//                                             <img src='/assets/menu/resource-help.png' alt='features icon' title='features icon'/>
//                                             <div>
//                                                 <p className='text-head text-xl mb-1 font-medium'>Help</p>
//                                                 <p className='text-body text-sm'>Lorem Ipsum is simply dummy text</p>
//                                             </div>
//                                         </a>
//                                     </li>
//                                     <li>
//                                         <a href='#' className='flex items-center gap-3'>
//                                             <img src='/assets/menu/resource-legal.png' alt='features icon' title='features icon'/>
//                                             <div>
//                                                 <p className='text-head text-xl mb-1 font-medium'>Legal</p>
//                                                 <p className='text-body text-sm'>Lorem Ipsum is simply dummy text</p>
//                                             </div>
//                                         </a>
//                                     </li>
//                                 </ul>
//                                 <div className='text-body flex flex-col gap-8 border-l-2 border-gray-200 pl-10'>
//                                     <p className='text-2xl'>From Our Blog</p>
//                                     <div className='flex justify-center gap-8'>
//                                         <img src='/assets/menu/blog-1.png' alt='blog-image' title='blog-image'/>
//                                         <div>
//                                             <p className='text-xl mb-4'>Duet AI in Google Workspace: Revolutionizing Work with Generative AI</p>
//                                             <a href='#' className='flex items-center w-fit text-primary relative after:absolute after:bg-primary after:bottom-0 after:left-0 after:h-[2px] after:w-full after:scale-x-100 hover:after:scale-x-0 after:transition-all'>Read More
//                                                 <img className='block ml-2' src='/assets/icons/arrow-left.png' alt='arrow-left-icon' title='arrow-icon'/>
//                                             </a>
//                                         </div>
//                                     </div>
//                                     <div className='flex justify-center gap-8'>
//                                         <img src='/assets/menu/blog-1.png' alt='blog-image' title='blog-image'/>
//                                         <div>
//                                             <p className='text-xl mb-4'>Duet AI in Google Workspace: Revolutionizing Work with Generative AI</p>
//                                             <a href='#' className='flex items-center w-fit text-primary relative after:absolute after:bg-primary after:bottom-0 after:left-0 after:h-[2px] after:w-full after:scale-x-100 hover:after:scale-x-0 after:transition-all'>Read More
//                                                 <img className='block ml-2' src='/assets/icons/arrow-left.png' alt='arrow-left-icon' title='arrow-icon'/>
//                                             </a>
//                                         </div>
//                                     </div>
//                                     <a href='#' className='flex items-center w-fit text-primary relative after:absolute after:bg-primary after:-bottom-1 after:left-0 after:h-[2px] after:w-full after:scale-x-100 hover:after:scale-x-0 after:transition-all'>View All Blogs
//                                         <img className='block ml-2' src='/assets/icons/arrow-left.png' alt='arrow-left-icon' title='arrow-icon'/>
//                                     </a>
//                                 </div>
//                             </motion.div>
//                         )}
//                     </li>
//                     <li className='text-xl hover:text-primary duration-300 relative after:absolute after:w-full after:bg-primary after:bottom-0 after:h-[2px] after:left-0 after:duration-300 hover:after:scale-x-100 after:scale-x-0'>
//                         <a href='/partners'>Partners</a>
//                     </li>
//                     <li className='text-xl hover:text-primary duration-300 relative after:absolute after:w-full after:bg-primary after:bottom-0 after:h-[2px] after:left-0 after:duration-300 hover:after:scale-x-100 after:scale-x-0'>
//                         <a href='/support'>Support</a>
//                     </li>
//                 </ul>
//             </nav>
//             <div>
//                 <button className="bg-transparent">
//                     <img className='w-6 h-6' src='/assets/icons/search-icon.svg' alt='search icon' title='search icon'/>
//                 </button>
//             </div>
//             <div>
//                 <button className='button-style-1'>
//                     <span>Install Patronum</span>
//                 </button>
//             </div>
//         </div>
//     </header>
//   );
// };

// export default Header;

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Header = () => {

    const [isFeaturesDropdownOpen, setFeaturesDropdownOpen] = useState(false);
    const [isUsecasesDropdownOpen, setUsecasesDropdownOpen] = useState(false);
    const [isResourcesDropdownOpen, setResourcesDropdownOpen] = useState(false);
    
    const resourceDropdownRef = useRef(null);

    const handleFeaturesClick = () => {
      setFeaturesDropdownOpen(!isFeaturesDropdownOpen);
    };
    
    const handleUsecasesClick = () => {
      setUsecasesDropdownOpen(!isUsecasesDropdownOpen);
    };
    
    // const handleResourcesClick = () => {
    //   setResourcesDropdownOpen(!isResourcesDropdownOpen);
    // };

        const handleResourcesClick = () => {
        setResourcesDropdownOpen(!isResourcesDropdownOpen);
    };
    const handleResourcesClickOutside = (event) => {
        if (resourceDropdownRef.current && !resourceDropdownRef.current.contains(event.target)) {
        setResourcesDropdownOpen(false);
        }
    };

        useEffect(() => {
        document.addEventListener('mousedown', handleResourcesClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleResourcesClickOutside);
        };
    }, []);

  return (
    <header className='fixed top-0 left w-screen h-fit z-50'>
        <div className='container mt-5 px-3 py-3 bg-white shadow-linear rounded-full flex justify-between items-center mx-auto'>
            <div className='logo-container ml-3'>
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
            <nav>
                <ul className='flex gap-10 text-head font-medium'>
                    <li className='text-xl hover:text-primary duration-300 relative after:absolute after:w-full after:bg-primary after:bottom-0 after:h-[2px] after:left-0 after:duration-300 hover:after:scale-x-100 after:scale-x-0'>
                        <a href='/about'>About</a>
                    </li>
                    <li
                        className='relative text-xl hover:text-primary duration-300 after:absolute after:w-full after:bg-primary after:bottom-0 after:h-[2px] after:left-0 after:duration-300 hover:after:scale-x-100 after:scale-x-0'
                        onMouseEnter={() => setFeaturesDropdownOpen(true)}
                        onMouseLeave={() => setFeaturesDropdownOpen(false)}
                        >
                        <a href='/features' className='flex items-center'>Features
                            <svg className='w-3 ml-2 h-3 mt-1 ' viewBox="0 0 13 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 1L6.5 6.5L12 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </a>
                        {isFeaturesDropdownOpen && (
                            <motion.div 
                                initial={{ y: -30, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.4 }}
                                className='absolute bg-white top-[70px] left-[-22vw] shadow-11xl bg-white text-white rounded-2xl dropdown-point w-max px-24 py-12'>
                                <ul className='relative grid grid-cols-2 gap-x-32 gap-y-6 w-full py-2 after:absolute after:top-0 after:left-1/2 after:bg-gray-200 after:rounded-full after:h-full after:w-[2px]'>
                                    <li>
                                        <a href='#' className='flex items-center gap-3'>
                                            <img src='/assets/menu/onboarding.png' alt='features icon' title='features icon'/>
                                            <div>
                                                <p className='text-head text-xl mb-1 font-medium'>Onboarding</p>
                                                <p className='text-body text-sm'>Lorem Ipsum is simply dummy text</p>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' className='flex items-center gap-3'>
                                            <img src='/assets/menu/workspace-backup.png' alt='features icon' title='features icon'/>
                                            <div>
                                                <p className='text-head text-xl mb-1 font-medium'>Workspace Backup</p>
                                                <p className='text-body text-sm'>Lorem Ipsum is simply dummy text</p>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' className='flex items-center gap-3'>
                                            <img src='/assets/menu/email-signature.png' alt='features icon' title='features icon'/>
                                            <div>
                                                <p className='text-head text-xl mb-1 font-medium'>Email Signature</p>
                                                <p className='text-body text-sm'>Lorem Ipsum is simply dummy text</p>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' className='flex items-center gap-3'>
                                            <img src='/assets/menu/file-sharing.png' alt='features icon' title='features icon'/>
                                            <div>
                                                <p className='text-head text-xl mb-1 font-medium'>File Unsharing</p>
                                                <p className='text-body text-sm'>Lorem Ipsum is simply dummy text</p>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' className='flex items-center gap-3'>
                                            <img src='/assets/menu/contact-sharing.png' alt='features icon' title='features icon'/>
                                            <div>
                                                <p className='text-head text-xl mb-1 font-medium'>Contact Sharing</p>
                                                <p className='text-body text-sm'>Lorem Ipsum is simply dummy text</p>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' className='flex items-center gap-3'>
                                            <img src='/assets/menu/organisational-chart.png' alt='features icon' title='features icon'/>
                                            <div>
                                                <p className='text-head text-xl mb-1 font-medium'>Organisational Chart</p>
                                                <p className='text-body text-sm'>Lorem Ipsum is simply dummy text</p>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' className='flex items-center gap-3'>
                                            <img src='/assets/menu/drive-management.png' alt='features icon' title='features icon'/>
                                            <div>
                                                <p className='text-head text-xl mb-1 font-medium'>Drive Management</p>
                                                <p className='text-body text-sm'>Lorem Ipsum is simply dummy text</p>
                                            </div>
                                        </a>
                                    </li>
                                </ul>
                            </motion.div>
                        )}
                    </li>
                    <li className='relative text-xl hover:text-primary duration-300 after:absolute after:w-full after:bg-primary after:bottom-0 after:h-[2px] after:left-0 after:duration-300 hover:after:scale-x-100 after:scale-x-0'
                        onMouseEnter={() => setUsecasesDropdownOpen(true)}
                        onMouseLeave={() => setUsecasesDropdownOpen(false)}
                        >
                        <button className='flex items-center'>Use Cases
                            <svg className='w-3 ml-2 h-3 mt-1' viewBox="0 0 13 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 1L6.5 6.5L12 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </button>
                        {isUsecasesDropdownOpen && (
                            <motion.div 
                                initial={{ y: -30, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.4 }} 
                                className='absolute bg-white top-[70px] left-[-22vw] shadow-11xl bg-white text-white rounded-2xl dropdown-point w-max px-24 py-12'>
                                <ul className='relative grid grid-cols-2 gap-x-32 gap-y-6 w-full py-2 after:absolute after:top-0 after:left-1/2 after:bg-gray-200 after:rounded-full after:h-full after:w-[2px]'>
                                    <li>
                                        <a href='#' className='flex items-center gap-3'>
                                            <img src='/assets/menu/use-case-business.png' alt='features icon' title='features icon'/>
                                            <div>
                                                <p className='text-head text-xl mb-1 font-medium'>For Business</p>
                                                <p className='text-body text-sm'>Lorem Ipsum is simply dummy text</p>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' className='flex items-center gap-3'>
                                            <img src='/assets/menu/use-case-education.png' alt='features icon' title='features icon'/>
                                            <div>
                                                <p className='text-head text-xl mb-1 font-medium'>For Education</p>
                                                <p className='text-body text-sm'>Lorem Ipsum is simply dummy text</p>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' className='flex items-center gap-3'>
                                            <img src='/assets/menu/use-case-hr.png' alt='features icon' title='features icon'/>
                                            <div>
                                                <p className='text-head text-xl mb-1 font-medium'>For HR</p>
                                                <p className='text-body text-sm'>Lorem Ipsum is simply dummy text</p>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' className='flex items-center gap-3'>
                                            <img src='/assets/menu/use-case-users.png' alt='features icon' title='features icon'/>
                                            <div>
                                                <p className='text-head text-xl mb-1 font-medium'>For Users</p>
                                                <p className='text-body text-sm'>Lorem Ipsum is simply dummy text</p>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' className='flex items-center gap-3'>
                                            <img src='/assets/menu/use-case-sales.png' alt='features icon' title='features icon'/>
                                            <div>
                                                <p className='text-head text-xl mb-1 font-medium'>For Sales & Marketing</p>
                                                <p className='text-body text-sm'>Lorem Ipsum is simply dummy text</p>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' className='flex items-center gap-3'>
                                            <img src='/assets/menu/use-case-admin.png' alt='features icon' title='features icon'/>
                                            <div>
                                                <p className='text-head text-xl mb-1 font-medium'>For IT Admins</p>
                                                <p className='text-body text-sm'>Lorem Ipsum is simply dummy text</p>
                                            </div>
                                        </a>
                                    </li>
                                </ul>
                            </motion.div>
                        )}
                    </li>
                    <li className='text-xl hover:text-primary duration-300 relative after:absolute after:w-full after:bg-primary after:bottom-0 after:h-[2px] after:left-0 after:duration-300 hover:after:scale-x-100 after:scale-x-0'>
                        <a href='/pricing'>Pricing</a>
                    </li>
                    <li className='text-xl hover:text-primary duration-300 flex items-center relative after:absolute after:w-full after:bg-primary after:bottom-0 after:h-[2px] after:left-0 after:duration-300 hover:after:scale-x-100 after:scale-x-0' ref={resourceDropdownRef}>
                        <button className='flex items-center' onClick={handleResourcesClick}>Resources
                            <svg className='w-3 ml-2 h-3 mt-1' viewBox="0 0 13 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 1L6.5 6.5L12 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </button>
                        {isResourcesDropdownOpen && (
                            <motion.div 
                                initial={{ y: -30, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.4 }} 
                                className='absolute bg-white top-[70px] left-[-41.2vw] container flex shadow-11xl bg-white text-white rounded-2xl dropdown-point-2 w-max py-12 pl-0 pr-10'>
                                <ul className='relative w-[100%] grid grid-cols-2 gap-x-0 justify-items-center gap-y-6 w-full py-2 after:absolute after:top-0 after:left-1/2 after:bg-gray-200 after:rounded-full after:h-full after:w-[2px]'>
                                    <li>
                                        <a href='#' className='flex items-center gap-3'>
                                            <img src='/assets/menu/resource-blog.png' alt='features icon' title='features icon'/>
                                            <div>
                                                <p className='text-head text-xl mb-1 font-medium'>Blog</p>
                                                <p className='text-body text-sm'>Lorem Ipsum is simply dummy text</p>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' className='flex items-center gap-3'>
                                            <img src='/assets/menu/resource-guide.png' alt='features icon' title='features icon'/>
                                            <div>
                                                <p className='text-head text-xl mb-1 font-medium'>Guides</p>
                                                <p className='text-body text-sm'>Lorem Ipsum is simply dummy text</p>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' className='flex items-center gap-3'>
                                            <img src='/assets/menu/resource-ebook.png' alt='features icon' title='features icon'/>
                                            <div>
                                                <p className='text-head text-xl mb-1 font-medium'>Ebooks</p>
                                                <p className='text-body text-sm'>Lorem Ipsum is simply dummy text</p>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' className='flex items-center gap-3'>
                                            <img src='/assets/menu/resource-webinar.png' alt='features icon' title='features icon'/>
                                            <div>
                                                <p className='text-head text-xl mb-1 font-medium'>Webinars</p>
                                                <p className='text-body text-sm'>Lorem Ipsum is simply dummy text</p>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' className='flex items-center gap-3'>
                                            <img src='/assets/menu/resource-case-study.png' alt='features icon' title='features icon'/>
                                            <div>
                                                <p className='text-head text-xl mb-1 font-medium'>Case Studies</p>
                                                <p className='text-body text-sm'>Lorem Ipsum is simply dummy text</p>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' className='flex items-center gap-3'>
                                            <img src='/assets/menu/resource-product-videos.png' alt='features icon' title='features icon'/>
                                            <div>
                                                <p className='text-head text-xl mb-1 font-medium'>Product Videos</p>
                                                <p className='text-body text-sm'>Lorem Ipsum is simply dummy text</p>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' className='flex items-center gap-3'>
                                            <img src='/assets/menu/resource-community.png' alt='features icon' title='features icon'/>
                                            <div>
                                                <p className='text-head text-xl mb-1 font-medium'>Community</p>
                                                <p className='text-body text-sm'>Lorem Ipsum is simply dummy text</p>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' className='flex items-center gap-3'>
                                            <img src='/assets/menu/resource-help.png' alt='features icon' title='features icon'/>
                                            <div>
                                                <p className='text-head text-xl mb-1 font-medium'>Help</p>
                                                <p className='text-body text-sm'>Lorem Ipsum is simply dummy text</p>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' className='flex items-center gap-3'>
                                            <img src='/assets/menu/resource-legal.png' alt='features icon' title='features icon'/>
                                            <div>
                                                <p className='text-head text-xl mb-1 font-medium'>Legal</p>
                                                <p className='text-body text-sm'>Lorem Ipsum is simply dummy text</p>
                                            </div>
                                        </a>
                                    </li>
                                </ul>
                                <div className='text-body flex flex-col gap-8 border-l-2 border-gray-200 pl-10'>
                                    <p className='text-2xl'>From Our Blog</p>
                                    <div className='flex justify-center gap-8'>
                                        <img src='/assets/menu/blog-1.png' alt='blog-image' title='blog-image'/>
                                        <div>
                                            <p className='text-xl mb-4'>Duet AI in Google Workspace: Revolutionizing Work with Generative AI</p>
                                            <a href='#' className='flex items-center w-fit text-primary relative after:absolute after:bg-primary after:bottom-0 after:left-0 after:h-[2px] after:w-full after:scale-x-100 hover:after:scale-x-0 after:transition-all'>Read More
                                                <img className='block ml-2' src='/assets/icons/arrow-left.png' alt='arrow-left-icon' title='arrow-icon'/>
                                            </a>
                                        </div>
                                    </div>
                                    <div className='flex justify-center gap-8'>
                                        <img src='/assets/menu/blog-1.png' alt='blog-image' title='blog-image'/>
                                        <div>
                                            <p className='text-xl mb-4'>Duet AI in Google Workspace: Revolutionizing Work with Generative AI</p>
                                            <a href='#' className='flex items-center w-fit text-primary relative after:absolute after:bg-primary after:bottom-0 after:left-0 after:h-[2px] after:w-full after:scale-x-100 hover:after:scale-x-0 after:transition-all'>Read More
                                                <img className='block ml-2' src='/assets/icons/arrow-left.png' alt='arrow-left-icon' title='arrow-icon'/>
                                            </a>
                                        </div>
                                    </div>
                                    <a href='#' className='flex items-center w-fit text-primary relative after:absolute after:bg-primary after:-bottom-1 after:left-0 after:h-[2px] after:w-full after:scale-x-100 hover:after:scale-x-0 after:transition-all'>View All Blogs
                                        <img className='block ml-2' src='/assets/icons/arrow-left.png' alt='arrow-left-icon' title='arrow-icon'/>
                                    </a>
                                </div>
                            </motion.div>
                        )}
                    </li>
                    <li className='text-xl hover:text-primary duration-300 relative after:absolute after:w-full after:bg-primary after:bottom-0 after:h-[2px] after:left-0 after:duration-300 hover:after:scale-x-100 after:scale-x-0'>
                        <a href='/partners'>Partners</a>
                    </li>
                    <li className='text-xl hover:text-primary duration-300 relative after:absolute after:w-full after:bg-primary after:bottom-0 after:h-[2px] after:left-0 after:duration-300 hover:after:scale-x-100 after:scale-x-0'>
                        <a href='/support'>Support</a>
                    </li>
                </ul>
            </nav>
            <div>
                <button className="bg-transparent">
                    <img className='w-6 h-6' src='/assets/icons/search-icon.svg' alt='search icon' title='search icon'/>
                </button>
            </div>
            <div>
                <button className='button-style-1'>
                    <span>Install Patronum</span>
                </button>
            </div>
        </div>
    </header>
  );
};

export default Header;