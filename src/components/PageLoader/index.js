import gsap from "gsap"
import { useEffect } from "react"

export default function PageLoader() {

    useEffect(() => {
        let ctx = gsap.context(() => {

            const tl = gsap.timeline();

            tl.to("#pageLoaderSlide", {
                scaleY: 0,
                duration: 0.6,
                ease: 'power2.in',
                onComplete: () => {
                    gsap.set("#pageLoader", {
                        display: 'none',
                        visibility: 'hidden',
                    })
                }
            });
        });
        return () => ctx.revert();
      }, []);

    return (
        <>
            <div className="fixed top-0 left-0 w-screen h-screen z-[999999] flex justify-center items-center" id="pageLoader">
                <div className="w-full h-full absolute bg-primary origin-bottom" id="pageLoaderSlide"/>
            </div>
        </>
    )
}