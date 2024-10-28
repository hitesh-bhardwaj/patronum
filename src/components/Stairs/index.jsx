import React from 'react'
import { motion } from 'framer-motion';
import PageLoader from '../PageLoader';
import dynamic from 'next/dynamic'

const CrispWithNoSSR = dynamic(() => import('@/components/Crisp'), { ssr: false });
const DynamicHeader = dynamic(() => import('../Header'), {ssr: false});
const DynamicFooter = dynamic(() => import('../Footer'), {ssr: false});

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
            <CrispWithNoSSR />
            <DynamicHeader />
                {children}
            <DynamicFooter />
        </div>
    )
}