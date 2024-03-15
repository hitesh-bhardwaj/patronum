import { useEffect } from "react"
import SplitType from "split-type";
import gsap from "gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger);

export default function SectionBreakSmall( {sectionBreakText} ) {

    useEffect(() => {
        const sectionBreakAnimations = document.querySelectorAll('.section-break-text');
    
        sectionBreakAnimations.forEach((sectionBreakAnimation) => {
          let ctx = gsap.context(() => {
            const sectionBreakAnim = new SplitType(sectionBreakAnimation, {types: 'word char'});
            let sectionBreakAnimWord = sectionBreakAnimation.querySelectorAll('.char');
    
            gsap.from(sectionBreakAnimWord, {
              scrollTrigger: {
                trigger: sectionBreakAnimation,
                start: 'top 80%',
                scrub: true,
                end: 'bottom 40%'
              },
              duration: 0.5,
              opacity: 0.3,
              stagger: 0.1,
              ease: 'expo.out'
            });
          });
          return () => ctx.revert();
        });
      }, []);

    return (
        <section className="section-break" id="second-section">
            <div className="container">
                <div className="content-2">
                    <p className="section-break-text small aeonik">{sectionBreakText}</p>
                </div>
            </div>
        </section>
    )
}