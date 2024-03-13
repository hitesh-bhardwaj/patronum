import gsap from "gsap";
import ScrollToPlugin from "gsap/dist/ScrollToPlugin";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useEffect } from "react"

gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

export default function UseCase2() {

    useEffect(() => {
        let ctx = gsap.context(() => {
        const sectionLength = document.getElementsByClassName('use-case-section').length;
        const foc_container = document.querySelector('.foc_container');
        const newWidth = sectionLength * 100;
        foc_container.style.width = newWidth + "%";
        const foc_sections = gsap.utils.toArray(".foc_container .use-case-section");
    
          const navbarLinks = document.querySelectorAll(".use-case-navbar a");
          const sections = gsap.utils.toArray('.use-case-section');
    
    
         let scrollTween = gsap.to(sections, {
            xPercent: -100 * (sections.length - 1),
            ease: 'none',
            scrollTrigger: {
              trigger: '.foc_container',
              pin: true,
              start: "top top",
              markers: true,
              scrub: 1,
              snap: {
                snapTo: 1 / (foc_sections.length - 1),
                inertia: false,
                duration: {min: 0.1, max: 1.5}
            },
            end: "+=" + (foc_container.offsetWidth - innerWidth)
            }
          });
    
          sections.forEach((section, i) => {
    
            let relatedLink = document.querySelector(`[data-section="${section.id}"]`);
            
            console.log(relatedLink, section, `[data-section="${section.id}"]`, "this is the info we need");
    
            ScrollTrigger.create({
                trigger: section,
                start: "left 90%",
                end: "right 90%",
                containerAnimation: scrollTween,
                markers: true,
                id: `section-${i+1}`,
                onToggle: self => { // Use self to access trigger element within onToggle
                  const currentActive = document.querySelector('.use-case-navbar .active');
                  if (self.isActive) {
                    relatedLink.classList.add('active');
                    if (currentActive && currentActive !== relatedLink) {
                      currentActive.classList.remove('active');
                    }
                  } else {
                    relatedLink.classList.remove('active');
                  }
                },
              });
            });
    
            navbarLinks.forEach(anchor => {
                anchor.addEventListener("click", function(e) {
                    e.preventDefault();
                    let targetElem = document.querySelector(e.target.getAttribute("href")),
                        y = targetElem;
                    if (targetElem && foc_container.isSameNode(targetElem.parentElement)) {
                        // Ensure scrollTrigger and its properties are defined
                        if (scrollTween.scrollTrigger && 'end' in scrollTween.scrollTrigger && 'start' in scrollTween.scrollTrigger) {
                            let totalScroll = scrollTween.scrollTrigger.end - scrollTween.scrollTrigger.start,
                                totalMovement = (foc_sections.length - 1) * targetElem.offsetWidth;
                            y = Math.round(scrollTween.scrollTrigger.start + (targetElem.offsetLeft / totalMovement) * totalScroll);
                        }
                        gsap.to(window, {
                            scrollTo: {
                                y: y,
                                autoKill: false
                            },
                            duration: 1
                        });
                    }
                });
            });
        });
        return () => ctx.revert();
    }, []);

    return (
        <>
            <div className="use-case-header">
                <div className="use-case-navbar">
                    <a data-section="HOME" href="#HOME">HOME</a>
                    <a data-section="ABOUT" href="#ABOUT">ABOUT</a>
                    <a data-section="SERVICES" href="#SERVICES">SERVICES</a>
                    <a data-section="PROJECTS" href="#PROJECTS">PROJECTS</a>
                    <a data-section="TEAM" href="#TEAM">TEAM</a>
                    <a data-section="CONTACT" href="#CONTACT">CONTACT</a>
                </div>
            </div>

            <div className="foc_container">
                <div id="HOME" className="use-case-section">
                    <div className="foc_home_container">
                        <div className="foc_home_content">
                            <div className="foc_title">
                                <h1>
                                    Home
                                </h1>
                            </div>
                        </div>
                    </div>            
                </div>
                <div id="ABOUT" className="use-case-section">ABOUT</div>
                <div id="SERVICES" className="use-case-section">SERVICES</div>
                <div id="PROJECTS" className="use-case-section">PROJECTS</div>
                <div id="TEAM" className="use-case-section">TEAM</div>
                <div id="CONTACT" className="use-case-section">CONTACT</div>
            </div>
        </>
    )
}