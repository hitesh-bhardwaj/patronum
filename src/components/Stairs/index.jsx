import React from 'react'
import { motion } from 'framer-motion';
import Header from '../Header';
import Footer from '../Footer';
import PageLoader from '../PageLoader';

export default function Layout({children}) {

    return (
        <div className='page'>
            <div className='fixed w-screen h-screen left-0 top-0 pointer-events-none z-[10000]'>
                <motion.div 
                    initial={{top: 0, height: 0}}
                    exit={{height: '100%'}}
                    transition={{ease: [[0.215, 0.61, 0.355, 1]], duration: 0.4}}
                    className='bg-primary h-0 w-full relative origin-bottom'/>
            </div>
            <PageLoader />
            <Header />
                {children}
            <Footer />
        </div>
    )
}