import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import CustomEase from "gsap/dist/CustomEase";

gsap.registerPlugin(CustomEase);

export default function PreLoader() {
  const counterRef = useRef(null);
  const progressBarRef = useRef(null);
  const loaderLogoRef = useRef(null);
  const progressBarMainRef = useRef(null);
  const loaderBgRef = useRef(null);

  useEffect(() => {
    const timelineSettings = {
      initialOpacityDuration: 0.4,
      mainProgressDelay: -0.4,
      finalAnimationDuration: 2.5,
      easeSettings: {
        bezier_1: CustomEase.create("cus1", "M0,0 C0.424,0.343 0.294,0.974 1,1 "),
        bezier_2: CustomEase.create("cus2", "M0,0 C0.634,0 0.927,0.604 1,1 "),
        bezier_3: CustomEase.create("cus3", "M0,0 C0.634,0 0.702,1 1,1 ")
      },
      finalY: "-5vw",
      finalTop: globalThis.innerWidth > 640 ? '2%' : '2.6%',
      opacityDelay: -0.3,
      easeFinal: "power4.out",
    };

    const tl = gsap.timeline();

    tl.to(loaderLogoRef.current, {
      opacity: 1,
      duration: timelineSettings.initialOpacityDuration,
    }).to(progressBarMainRef.current, {
      scaleX: 1,
      duration: timelineSettings.initialOpacityDuration,
      delay: timelineSettings.mainProgressDelay,
    }).to('.counterLoaderMain', {
      opacity: 1,
      duration: timelineSettings.initialOpacityDuration,
      delay: timelineSettings.mainProgressDelay
    })
    .to(counterRef.current, {
        innerHTML: "100",
        duration: timelineSettings.finalAnimationDuration,
        ease: timelineSettings.easeSettings.bezier_3,
        onUpdate: () => {
          const percentage = parseInt(counterRef.current.innerHTML);
          const formattedCounter = String(percentage).padStart(2, "0");
          counterRef.current.innerHTML = formattedCounter;
        },
    })
    .to(progressBarRef.current, {
        width: '100%',
        duration: timelineSettings.finalAnimationDuration,
        ease: timelineSettings.easeSettings.bezier_3,
    }, `-=${timelineSettings.finalAnimationDuration}`)
    .to(".loadingCounter, .progressMainLoader", {
        y: timelineSettings.finalY,
        duration: timelineSettings.finalAnimationDuration,
        ease: timelineSettings.easeSettings.bezier_3,
    }, `-=${timelineSettings.finalAnimationDuration}`)
    .to(".loaderLogoMain", {
        top: timelineSettings.finalTop,
        duration: timelineSettings.finalAnimationDuration,
        ease: timelineSettings.easeSettings.bezier_3,
    }, `-=${timelineSettings.finalAnimationDuration}`)
    .to(".loadingCounter, .progressMainLoader", {
      opacity: 0,
      duration: 0.5,
      ease: timelineSettings.easeFinal,
      delay: timelineSettings.opacityDelay,
    })
    .to(loaderBgRef.current, {
      y: '100%',
      duration: 0.5,
      ease: "power3.in",
      delay: timelineSettings.opacityDelay
    })
    .to(".loaderLogoMain", {
      opacity: 0,
    }, "=-0.5")
    .to("#loader", {
      display: "none",
      visibility: "hidden",
    });

    return () => tl.kill(); // Cleanup the timeline on component unmount
  }, []);

  return (
    <>
      <div id="loader" className="w-screen h-screen loader fixed z-[1000] top-0 left-0">
        <div className="w-full h-full text-white aeonik relative lg:px-[6%] px-[5%] py-[5%]">
          <span className="absolute left-0 top-0 bg-primary h-full w-full -z-[1] loaderBgMain" ref={loaderBgRef}/>
          <div className="w-full loaderMainContainer">
            <div className="flex justify-between items-end w-full">
              <div className="w-[11.5vw] h-[3vw]">
                <img loading="lazy" width="247" height="66" src="/logo-white.svg" className="lg:w-[11.5vw] md:w-[25%] opacity-0 w-[37.7%] lg:top-[75vh] md:top-[78vh] top-[76vh] loaderLogoMain absolute" alt="Patronum Logo" ref={loaderLogoRef}/>
              </div>
              <div className="loadingCounter lg:translate-y-[60vh] translate-y-[70vh]">
                <div className="lg:text-[7vw] md:text-[15vw] text-[20vw] relative leading-[0.8] lg:pr-[3vw] md:pr-[5.5vw] pr-[8vw] counterLoaderMain w-[50vw] text-right opacity-0">
                  <span ref={counterRef}>00</span>
                  <span className="lg:text-[3vw] md:text-[6vw] text-[8vw] absolute right-0 lg:top-[0.5vw] md:top-[1.5vw] top-[1.8vw] z-10">%</span>
                </div>
              </div>
            </div>
            <div className="lg:translate-y-[60vh] translate-y-[70vh] lg:mt-[2%] scale-x-0 md:mt-[4%] mt-[4%] w-full lg:h-[7px] h-[5px] bg-white/10 origin-left progressMainLoader" ref={progressBarMainRef}>
              <span className="h-full w-0 bg-white block" ref={progressBarRef}/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
