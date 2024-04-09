import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';

export default function Cookie() {
    const [showCookie, setShowCookie] = useState(true);

    const handleClose = () => {
        setShowCookie(false);
    };
    
    return (
        <>
            {showCookie && (
                <motion.div 
                    initial={{opacity:0, y: 20, x: '-50%'}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.3, delay: 3, ease: [[0.215, 0.61, 0.355, 1]]}}
                    className="z-[11] fixed bottom-0 mb-5 h-fit w-max py-2 px-3 left-1/2 bg-[#fafafa] rounded-full shadow-[0_2px_8px_0px_rgba(0,61,163,0.25)] md:text-base text-sm">
                    <div className="flex items-center justify-center gap-3">
                        <img src='/assets/icons/cookie-icon.png' width={20} height={20}/>
                        <span>This website uses cookies.
                            <Link href="/cookie-policy" className="relative after:absolute after:bottom-0 after:bg-black after:h-[1px] after:black after:w-full after:scale-x-0 hover:after:scale-x-100 after:left-0 after:duration-200 ml-1">Learn More
                                <span className="screen-reader-text">Get Started</span>
                            </Link>
                        </span>
                        <button onClick={handleClose} className="rounded-full bg-primary text-white px-3 py-1 border border-primary hover:bg-[#fafafa] hover:text-primary transition-all duration-200">
                            OK
                        </button>
                    </div>
                </motion.div>
            )}
        </>
    );
}
