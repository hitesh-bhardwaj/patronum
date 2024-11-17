import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

const ProgressBar = () => {

    useEffect(() => {
        let ctx = gsap.context(() => {
          gsap.to('#toc-bar', {
            scrollTrigger: {
              trigger: '#blog-content',
              start: 'top 18%',
              end: 'bottom 80%',
              scrub: 1,
              markers: false,
            },
            width: '100%',
            duration: 1,
            ease: "none",
          });
        });
        return () => ctx.revert();
      });

    return (
        <div className="fixed h-[5px] pointer-events-none w-[100vw] overflow-hidden lg:top-[5.5vw] md:top-[11.5vw] top-[16vw] left-0 z-[999]" id="progress-bar">
            <span className="w-0 h-[5px] bg-primary block origin-top" id="toc-bar" />
        </div>
    )
}

export default ProgressBar;