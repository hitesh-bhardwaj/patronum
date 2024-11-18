import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import ScrollToPlugin from "gsap/dist/ScrollToPlugin";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

function TableOfContents({ toc, activeSection }) {

    if (globalThis.innerWidth > 1024) {
        useEffect(() => {
            let ctx = gsap.context(() => {
                let brandImagePin = document.getElementById("table-of-content");
                let brandImageNotPin = document.getElementById("blog-content");
                ScrollTrigger.create({
                    trigger: brandImagePin,
                    start: "top 18%",
                    endTrigger: brandImageNotPin,
                    end: "bottom 80%",
                    invalidateOnRefresh: true,
                    pin: brandImagePin,
                    markers: false,
                });
            });
            return () => ctx.revert();
        });
    }

    const handleSmoothScroll = (e, targetId) => {
        e.preventDefault();
        const targetElement = document.getElementById(targetId);
        const targetPosition = targetElement.offsetTop;
        gsap.to(window, {
            duration: 1.5,
            scrollTo: { y: targetPosition, offsetY: 130, autoKill: true },
            ease: "power3.inOut",
        });
    };

    return (
        <div className="w-[20%] -ml-[3vw] relative" id="table-of-content">
            <ul className="toc_ul_list">
                {toc.map(({ id, title }) => (
                    <li key={id} className={`mb-[1vw] leading-[1.2] transition-all ${id === activeSection ? 'toc-active' : ''}`}>
                        <a
                            href={`#${id}`}
                            onClick={(e) => handleSmoothScroll(e, id)}
                            className="text-head/60 aeonik text-[0.9vw] transition-all hover:text-primary"
                        >
                            {title}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TableOfContents;