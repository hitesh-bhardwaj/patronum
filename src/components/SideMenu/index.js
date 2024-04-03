import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import ScrollToPlugin from "gsap/dist/ScrollToPlugin";
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

const handleSmoothScroll = (sectionId) => {
    gsap.to(window, {
        duration: 1.5,
        scrollTo: { y: `${sectionId}`, offsetY: 50 },
        ease: "power3.out",
    });
};

export default function SideMenu({sections}) {
    const [activeSection, setActiveSection] = useState('');
    const progressBars = useRef([]);

    useEffect(() => {
        const triggers = sections.map((section, index) => {
        return ScrollTrigger.create({
            trigger: section.id,
            start: 'top bottom',
            end: 'bottom bottom',
            scrub: true,
            onEnter: () => setActiveSection(section.id),
            onLeaveBack: () => setActiveSection(''),
            onEnterBack: () => setActiveSection(section.id),
            onUpdate: self => {
                const progress = self.progress;
                // Adjust the progress here to range up to 1.1 instead of 1
                const adjustedProgress = progress * 1.1; // Maps 0-1 to 0-1.1
                gsap.to(progressBars.current[index], {
                    scaleY: adjustedProgress,
                });
            },
        });
        });

        return () => {
        triggers.forEach(trigger => trigger.kill());
        };
    }, []);

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
    <div className='fixed z-10 left-10 top-1/2 -translate-y-1/2 flex gap-5 items-center h-[11vw]' id='toc'>
        <div className="progress-container h-full w-full overflow-hidden rounded">
            {sections.map((_, index) => (
                <div
                    key={index}
                    className={`progress-bar w-[0.25rem] bg-[#7aa5ed] h-[14.28%] scale-y-0 origin-top scale-x-[1.5]`}
                    ref={el => progressBars.current[index] = el}
                />
            ))}
        </div>
        <ul className="text-[0.8vw] aeonik opacity-40 h-full flex flex-col justify-between">
            {sections.map(({ id, name }) => (
                <li
                    key={id}
                    onClick={() => handleSmoothScroll(id)}
                    className={`text-black hover:opacity-100 transition-all duration-300 cursor-pointer ${activeSection === id ? 'text-bold' : ''}`}>
                    {name}
                </li>
            ))}
        </ul>
    </div>
  );
}
