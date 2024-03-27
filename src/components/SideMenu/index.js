import gsap from "gsap";
import ScrollToPlugin from "gsap/dist/ScrollToPlugin";
import React, { useEffect, useState, useRef } from "react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

const handleSmoothScroll = (sectionId) => {
    gsap.to(window, {
        duration: 1.5,
        scrollTo: { y: `#${sectionId}`, offsetY: 50 },
        ease: "power3.inOut",
    });
};

export default function SideMenu({ sections, scrollEnd }) {
    const [activeSection, setActiveSection] = useState('');

    useEffect(() => {
        const sections = document.querySelectorAll("section");
        const observer = new IntersectionObserver(
            (entries) => {
                let activeId = activeSection; // Keep track of the current active section
                entries.forEach((entry) => {
                  if (entry.isIntersecting && entry.intersectionRatio > 0.5) { // This checks if more than half of the item is visible
                    activeId = entry.target.id;
                  }
                });
                setActiveSection(activeId);
              },
              {
                rootMargin: "0px",
                threshold: 0.5, // Adjust as needed
              }
        );

        sections.forEach((section) => {
            observer.observe(section);
        });

        return () => {
            sections.forEach((section) => {
                observer.unobserve(section);
            });
        };
    }, []);

    useEffect(() => {
        let ctx = gsap.context(() => {
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: 'main',
              start: 'top 0',
              end: 'bottom 0',
              scrub: true,
            },
          });

          tl.to('#toc-bar', {
            scaleY: 1,
            duration: 1,
          })
        });
        return () => ctx.revert();
      });

      useEffect(() => {
        let ctx = gsap.context(() => {
            gsap.from('#toc',{
                scrollTrigger: {
                    trigger: "#toc",
                    start: 'top top',
                    toggleActions: 'play none none reverse',
                },
                opacity: 0,
                duration: 0.5,
            })
        });
        return () => ctx.revert();
      }, []);

    return (
        <>
            <div className="fixed left-[2vw] top-1/2 transform -translate-y-1/2 flex items-start z-10" id="toc">
                <span className="absolute h-[90%] block w-[0.3rem] bg-black/10 overflow-hidden rounded top-2">
                    <span className="w-full h-full bg-black scale-y-[2%] block rounded origin-top" id="toc-bar"/>
                </span>
                <ul className="text-[0.8vw] aeonik space-y-1 ml-5">
                    {sections.map(({ id, name }) => (
                        <li
                        key={id}
                        onClick={() => handleSmoothScroll(id)}
                        className={`text-black hover:opacity-100 transition-all duration-300 cursor-pointer ${
                            activeSection === id ? "opacity-100" : "opacity-50"
                        }`}
                        >
                        {name}
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}