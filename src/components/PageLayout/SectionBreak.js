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
          const sectionBreakAnim = new SplitType(sectionBreakAnimation, {types: 'line word'});
          let sectionBreakAnimWord = sectionBreakAnimation.querySelectorAll('.line');

        gsap.to(sectionBreakAnimWord, {
          scrollTrigger: {
            trigger: sectionBreakAnimation,
            start: 'top 80%',
            scrub: 1,
            end: 'bottom 40%'
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
        <section className="section-break pt-[7%]">
            <div className="container">
                <div className="content">
                    <p className="section-break-text aeonik textbreak">{sectionBreakText}</p>
                </div>
            </div>
        </section>
    )
}