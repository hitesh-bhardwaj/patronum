import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import DesktopNavigation from './DesktopNavigation';
import MobileNavigation from './MobileNavigation';
import { useDevice } from '@/utils/useDevice';

const Header = () => {
    const { isDesktop } = useDevice();
    const [isClient, setIsClient] = useState(false);
    const [isSideNavOpen, setSideNavOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        setIsClient(true);
        const handleScroll = () => {
            const scrollTop = window.pageYOffset;
            setIsScrolled(scrollTop > 150);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <header className={`fixed top-0 left-0 w-screen z-[100] lg:py-[0.8vw] duration-300 ease-in-out transition-all md:py-[3vw] py-[4vw] ${isScrolled ? 'bg-white/50 backdrop-blur-md shadow-md' : ''}`}>
                <div className='w-[88%] mx-auto flex items-center justify-between md:w-[90%]'>
                    <div className='xl:w-[11.5vw] md:w-[25vw] w-[42%]'>
                        <Link href='/' className='z-[1] relative'>
                            <Image
                                className='w-full h-auto'
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
                        className='lg:hidden md:block md:w-[5vw] w-[7vw] cursor-pointer'>
                        <img loading='lazy' width={29} height={16} className='w-full h-auto' src='/assets/menu/menu-icon.svg' alt='menu-icon' />
                    </div>
                    {isClient && (
                        <>
                            {isDesktop ? (
                                <DesktopNavigation />
                            ) : (
                                <MobileNavigation isOpen={isSideNavOpen} setSideNavOpen={setSideNavOpen} />
                            )}
                        </>
                    )}
                </div>
            </header>
        </>
    );
};

export default Header;