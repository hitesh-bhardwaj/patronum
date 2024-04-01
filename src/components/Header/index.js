import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import DesktopNavigation from './DesktopNavigation'; 
import MobileNavigation from './MobileNavigation'; 
import useWindowSize from './useWindowSize';

const Header = () => {
    const { width } = useWindowSize();
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

                {width >= 1024 ? (
                    <DesktopNavigation/>
                ) : (
                    <MobileNavigation isOpen={isSideNavOpen} setSideNavOpen={setSideNavOpen} />
                )}
            </div>
        </header>
    </>
  );
};

export default Header;