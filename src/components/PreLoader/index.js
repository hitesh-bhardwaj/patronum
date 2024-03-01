import gsap from "gsap";
import react, { useEffect } from "react";

export default function PreLoader() {

    useEffect(() => {
    
          let ctx = gsap.context(() => {
            // const headings = document.querySelectorAll('#preloader p');
            let animPara1 = document.querySelectorAll('.preload-para-1 span');
            let animPara2 = document.querySelectorAll('.preload-para-2 span');
    
            const tl = gsap.timeline();

            tl.to(animPara1, {
              opacity: 1,
              y: 0,
              duration: 0.5,
              stagger: 0.04,
              ease: 'power3.out',
            }, '+=0.5')
            .to(animPara1, {
              opacity: 0,
              yPercent: -100,
              duration: 0.5,
              stagger: 0.04,
            ease: 'power3.out',
            }, '+=0.8')
            .to(animPara2, {
                opacity: 1,
                y: 0,
                duration: 0.6,
                stagger: 0.04,
                ease: 'power3.out',
              }, '+=0.2')
            .to('.preloader-img', {
                y: 0,
                opacity: 1,
                duration: 0.7,
                ease: 'power3.out',
            }, '-=0.8')
              .to(animPara2, {
                opacity: 0,
                yPercent: -100,
                duration: 0.6,
                stagger: 0.04,
              ease: 'power3.out',
              }, '+=0.8')
              .to('.preloader-img', {
                left: '6vw',
                top: '1.3vw',
                width: '11.5vw',
                duration: 1,
                ease: 'power3.inOut'
              }, '-=0.7')
              .to('.preloader-overlay', 0.8,{
                height: 0,
                ease: 'power3.out'
              }, '-=0.3')
              .set('.preloader-img', {
                opacity: '0',
              }, '-=0.4')
              .set('.preloader', {
                display: 'none',
                opacity: 0,
                visibility: 'hidden',
              });
        });
        return () => ctx.revert();
      }, []);

    return(
        <>
            <div className="preloader" id="preloader">
                <div className="preloader-overlay" />
                <div className="preloader-text">
                    <div className="preload-para preload-para-1">
                        <span>Tired </span>
                        <span>of </span> 
                        <span>Managing </span>
                        <span>Google </span>
                        <span>Workspace?</span>
                    </div>
                    <div className="preload-para preload-para-2">
                        <span>Let </span>
                        <span className="preload-img-span" />
                        <span>Be </span>
                        <span>Your </span>
                        <span>Saviour!</span>
                    </div>
                </div>
                <img src="/logo-white.svg" className="preloader-img" alt="preloader-logo"/>
            </div>
        </>
    )
}