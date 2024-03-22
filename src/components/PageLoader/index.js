import gsap from "gsap"
import { useEffect } from "react"

export default function PageLoader() {

    useEffect(() => {
        let ctx = gsap.context(() => {

            const tl = gsap.timeline();

            tl.to("#pageLoaderSlide", {
                scaleY: 0,
                duration: 1,
                ease: 'expo.in',
                delay: 0.4,
            }, 0)
            .to("#pageLoaderIcon", {
                rotateZ: '-7deg',
                autoAlpha: 0, 
                duration: .6, 
                yPercent: 30, 
                ease: 'power2.in',
                onComplete: () => {
                    gsap.set("#pageLoader", {
                        display: 'none',
                        visibility: 'hidden',
                    })
                }
            }, '<=.4');
        });
        return () => ctx.revert();
      }, []);

    return (
        <>
            <div className="fixed top-0 left-0 w-screen h-screen z-[9999] flex justify-center items-center" id="pageLoader">
                <img className="w-[10%] h-[10%] z-10" src="/a.svg" alt="patronum" id="pageLoaderIcon"/>
                <div className="w-full h-full absolute bg-primary origin-bottom" id="pageLoaderSlide"/>
            </div>
        </>
    )
}