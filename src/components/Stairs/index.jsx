import React from 'react'
import { motion } from 'framer-motion';
import { expand } from './anim';

export default function Layout({children}) {

    const anim = (variants, custom=null) => {
        return {
            initial: "initial",
            animate: "enter",
            exit: "exit",
            custom,
            variants
        }
    }

    return (
        <div className='page stairs'>
            <div className='transition-container'>
                <motion.div {...anim(expand)} className='bg-[#1069df]'/>
            </div>
            {children}
        </div>
    )
}