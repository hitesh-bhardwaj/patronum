import { useState } from "react";
import styles from "./primary.module.css";
import dynamic from "next/dynamic";

const DynamicCalendly = dynamic(() => import('@/components/Calendly'), {
    ssr: false,
});

const CallButton = () => {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <button data-secondary onClick={() => setIsOpen(true)} className={`${styles.btn} hero-button-anim`}>
                <span data-primary className={styles.btnText}>
                    Schedule a Demo
                </span>
                <div aria-hidden="true" className={styles.btnCircle}>
                    <div className={styles.btnCircleText}>
                        Schedule a Demo
                        <svg viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.btnIcon}>
                            <path data-v-f4363f2a fillRule="evenodd" clipRule="evenodd" d="M3.82475e-07 5.625L7.625 5.625L4.125 9.125L5 10L10 5L5 -4.37114e-07L4.125 0.874999L7.625 4.375L4.91753e-07 4.375L3.82475e-07 5.625Z" className={styles.btnPath} />
                            <path data-v-f4363f2a fillRule="evenodd" clipRule="evenodd" d="M3.82475e-07 5.625L7.625 5.625L4.125 9.125L5 10L10 5L5 -4.37114e-07L4.125 0.874999L7.625 4.375L4.91753e-07 4.375L3.82475e-07 5.625Z" className={styles.btnPath} />
                        </svg>
                    </div>
                </div>
            </button>
            <DynamicCalendly isOpen={isOpen} setIsOpen={setIsOpen} />
        </>
    )
}

export default CallButton;