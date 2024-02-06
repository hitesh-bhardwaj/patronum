import { useEffect } from "react"
import styles from '@/styles/background.module.css'

export default function Background(){
    
    useEffect(() => {
        const interBubble = document.querySelector(`.${styles.interactive}`);
        let curX = 0;
        let curY = 0;
        let tgX = 0;
        let tgY = 0;
    
        function move() {
          curX += (tgX - curX) / 20;
          curY += (tgY - curY) / 20;
          interBubble.style.transform = `translate(${Math.round(curX)}px, ${Math.round(curY)}px)`;
          requestAnimationFrame(() => {
            move();
          });
        }
    
        window.addEventListener('mousemove', (event) => {
          tgX = event.clientX;
          tgY = event.clientY;
        });
    
        move();
      }, []);

    return(
        <>
            <div className={styles.gradientBg}>
                <svg xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <filter id="goo">
                    <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
                    <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8" result="goo" />
                    <feBlend in="SourceGraphic" in2="goo" />
                    </filter>
                </defs>
                </svg>
                <div className={styles.gradientsContainer}>
                <div className={styles.g1}></div>
                {/* <div className={styles.g2}></div> */}
                <div className={styles.g3}></div>
                {/* <div className={styles.g4}></div>
                <div className={styles.g5}></div> */}
                <div className={styles.interactive}></div>
                </div>
            </div>
        </>
    )
}
