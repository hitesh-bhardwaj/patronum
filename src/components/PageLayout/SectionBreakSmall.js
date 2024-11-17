import { useEffect } from "react"
import SplitType from "split-type";
import gsap from "gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger);

export default function SectionBreakSmall( {sectionBreakText} ) {

    useEffect(() => {
      let ctx = gsap.context(() => {
        const sectionBreakAnimations = document.querySelectorAll('.section-break-text');
          sectionBreakAnimations.forEach((sectionBreakAnimation) => {
            const sectionBreakAnim = new SplitType(sectionBreakAnimation, {types: 'line'});
            let sectionBreakAnimWord = sectionBreakAnimation.querySelectorAll('.line');

          gsap.to(sectionBreakAnimWord, {
            scrollTrigger: {
              trigger: sectionBreakAnimation,
              start: 'top 80%',
              scrub: 1,
              end: 'bottom 30%'
            },
            backgroundPositionX: 0,
            duration: 1,
            stagger: 1,
            ease: "none"
          });
        });
      });
      return () => ctx.revert();
    }, []);

    return (
      <section className="section-break" id="second-section">
        <div className="container">
          <div className="content-2">
            <p className="section-break-text small aeonik fadeUp textbreak">{sectionBreakText}</p>
          </div>
        </div>
      </section>      
    )
  }