import gsap from "gsap";
import ScrollToPlugin from "gsap/dist/ScrollToPlugin";
import styles from "./scroll.module.css";

gsap.registerPlugin(ScrollToPlugin);

const ScrollButton = () => {

    const handleSmoothScroll = () => {
        gsap.to(window, {
            duration: 1.5,
            scrollTo: { y: "#second-section", offsetY: 50 },
            ease: "power3.inOut",
        });
    };
    
    return (
        <div className={styles.scrollDownBtn}>
            <button onClick={handleSmoothScroll} className={styles.scrollDownA} aria-label="Scroll Down">
                <svg width="86" height="86" viewBox="0 0 86 86" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle className={`${styles.heroSvgCircle} hero-svg-circle`} cx="43" cy="43" r="42" stroke="currentColor" strokeWidth="2" />
                </svg>
                <span className={`${styles.scrollImgContainer} scroll-img-container`}>
                    <img width={18} height={25} loading="lazy" data-first src="/assets/icons/arrow-down-big.svg" alt="arrow-image" />
                    <img width={18} height={25} loading="lazy" data-second src="/assets/icons/arrow-down-big.svg" alt="arrow-image" />
                </span>
            </button>
        </div>
    )
}

export default ScrollButton;