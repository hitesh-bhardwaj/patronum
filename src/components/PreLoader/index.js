import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import CustomEase from "gsap/dist/CustomEase";

gsap.registerPlugin(CustomEase);

export default function PreLoader() {

  const counterRef = useRef(null);
  const progressBarRef = useRef(null);
  const loaderLogo = useRef(null);
  const progressBarMain = useRef(null);

  useEffect(() => {
    const counter = counterRef.current;
    const progressBar = progressBarRef.current;
    const logo = loaderLogo.current;
    const mainProgress = progressBarMain.current;

    let s = {
        bezier_1: (0,
        CustomEase).create("cus1", "M0,0 C0.424,0.343 0.294,0.974 1,1 "),
        bezier_2: (0,
        CustomEase).create("cus2", "M0,0 C0.634,0 0.927,0.604 1,1 "),
        bezier_3: (0,
        CustomEase).create("cus3", "M0,0 C0.634,0 0.702,1 1,1 ")
    };

    let tl = gsap.timeline();

    tl.to(logo, {
      opacity: 1,
      duration: 0.5,
      delay: 0.5,
    }).to(mainProgress, {
      scaleX: 1,
      duration: 0.5,
      delay: -0.5,
    }).to('.counterLoaderMain', {
      opacity: 1,
      duration: 0.5,
      delay: -0.5
    })

    // Till 65
    tl.to(counter, {
      innerHTML: "60",
      duration: 2.2,
      ease: s.bezier_1,
      onUpdate: () => {
        const percentage = parseInt(counter.innerHTML);
        // Format the counter with leading zeros
        const formattedCounter = String(percentage).padStart(2, "0");
        counter.innerHTML = formattedCounter;
      },
    })
    .to(progressBar, {
      width: '60%',
      duration: 2.2,
      ease: s.bezier_1,
    }, "-=2.2")
    .to(".loadingCounter, .progressMainLoader", {
      y: "5vw",
      duration: 2.2,
      ease: s.bezier_1,
    }, "-=2.2")
    .to(".loaderLogoMain", {
      top: '25%',
      duration: 2.2,
      ease: s.bezier_1,
    }, "-=2.2");
    
    // Till 100
    tl.to(counter, {
        innerHTML: "100",
        duration: 2.45,
        ease: s.bezier_3,
        onUpdate: () => {
          const percentage = parseInt(counter.innerHTML);
          // Format the counter with leading zeros
          const formattedCounter = String(percentage).padStart(2, "0");
          counter.innerHTML = formattedCounter;
        },
    })
    .to(progressBar, {
        width: '100%',
        duration: 2.45,
        ease: s.bezier_3,
    }, "-=2.45")
    .to(".loadingCounter, .progressMainLoader", {
        y: "-16vw",
        duration: 2.45,
        ease: s.bezier_3,
    }, "-=2.45")
    .to(".loaderLogoMain", {
        top: '2.6%',
        duration: 2.1,
        ease: s.bezier_3,
    }, "-=2.45");

    tl.to(".loadingCounter, .progressMainLoader", {
      opacity: 0,
      duration: 0.8,
      ease: "power4.out",
    }, "=-1")
    .to(".loaderBgMain", {
      top: '100%',
      duration: 1,
      ease: "expo.in",
    }, "-=0.6")
    .to(".loaderLogoMain", {
      opacity: 0,
    }, "=-0.6")
    .to("#loader", {
      display: "none",
      visibility: "hidden",
    });

    return () => {
      tl.kill(); // Kill the timeline on component unmount
    };
  }, []);

    return (
      <>
        <div id="loader" className="w-screen h-screen loader fixed z-[1000] top-0 left-0">
          <div className="w-full h-full text-white aeonik relative px-[6%] py-[5%]">
            <div className="absolute left-0 top-0 bg-primary h-full w-full -z-[1] loaderBgMain"/>
            <div className="w-full loaderMainContainer">
              <div className="flex justify-between items-end w-full">
                <div className="w-[11.5vw] h-[3vw]">
                  <img src="/logo-white.svg" className="w-[11.5vw] top-[76%] opacity-0 loaderLogoMain absolute" alt="Patronum Logo" ref={loaderLogo}/>
                </div>
                <div className="loadingCounter translate-y-[60vh]">
                  <div className="text-[7vw] relative leading-[0.8] pr-[3vw] opacity-0 counterLoaderMain w-[20vw] text-right">
                    <span ref={counterRef}>00</span>
                    <span className="text-[3vw] absolute right-0 top-[0.5vw] z-10">%</span>
                  </div>
                </div>
              </div>
                <div className="translate-y-[60vh] mt-[2%] w-full h-[7px] bg-white/10 scale-x-0 origin-left progressMainLoader" ref={progressBarMain}>
                  <span className="h-full w-0 bg-white block" ref={progressBarRef}/>
                </div>
            </div>
          </div>
        </div>
      </>
    );  
  }
