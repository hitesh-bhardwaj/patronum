import gsap from "gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"
import { useEffect } from "react"
import SplitType from "split-type"

gsap.registerPlugin(ScrollTrigger);

export default function SectionBreak( {sectionBreakText} ) {

  useEffect(() => {
    let ctx = gsap.context(() => {
      const sectionBreakAnimations = document.querySelectorAll('.section-break-text');
        sectionBreakAnimations.forEach((sectionBreakAnimation) => {
          const sectionBreakAnim = new SplitType(sectionBreakAnimation, {types: 'word char'});
          let sectionBreakAnimWord = sectionBreakAnimation.querySelectorAll('.char');

        gsap.from(sectionBreakAnimWord, {
          scrollTrigger: {
            trigger: sectionBreakAnimation,
            start: 'top 80%',
            scrub: 1,
            end: 'bottom 30%'
          },
          duration: 0.8,
          opacity: 0.2,
          stagger: 0.1,
          ease: 'expo.out'
        });
      });
    });
    return () => ctx.revert();
  }, []);

    return (
        <section className="section-break">
            <div className="container">
                <div className="content">
                    <p className="section-break-text aeonik">{sectionBreakText}</p>
                </div>
            </div>
        </section>
    )
}