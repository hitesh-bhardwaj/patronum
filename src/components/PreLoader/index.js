import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import CustomEase from "gsap/dist/CustomEase";

gsap.registerPlugin(CustomEase);

export default function PreLoader() {

  const counterRef = useRef(null);
  const progressBarRef = useRef(null);
  const loaderLogo = useRef(null);
  const progressBarMain = useRef(null);
  const loaderBgRef = useRef(null);

  if(globalThis.innerWidth > 1024) {
    useEffect(() => {
      const counter = counterRef.current;
      const progressBar = progressBarRef.current;
      const logo = loaderLogo.current;
      const mainProgress = progressBarMain.current;
      const loaderBg = loaderBgRef.current;
  
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
        duration: 0.3,
      }).to(mainProgress, {
        scaleX: 1,
        duration: 0.3,
        delay: -0.3,
      }).to('.counterLoaderMain', {
        opacity: 1,
        duration: 0.3,
        delay: -0.3
      })
  
      // Till 60
      tl.to(counter, {
        innerHTML: "60",
        duration: 1.5,
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
        duration: 1.5,
        ease: s.bezier_1,
      }, "-=1.5")
      .to(".loadingCounter, .progressMainLoader", {
        y: "20vh",
        duration: 1.5,
        ease: s.bezier_1,
      }, "-=1.5")
      .to(".loaderLogoMain", {
        top: '34vh',
        duration: 1.5,
        ease: s.bezier_1,
      }, "-=1.5")
      
      // Till 100
      .to(counter, {
          innerHTML: "100",
          duration: 1.5,
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
          duration: 1.5,
          ease: s.bezier_3,
      }, "-=1.5")
      .to(".loadingCounter, .progressMainLoader", {
          y: "-5vw",
          duration: 1.5,
          ease: s.bezier_3,
      }, "-=1.5")
      .to(".loaderLogoMain", {
          top: '2.6%',
          duration: 1.5,
          ease: s.bezier_3,
      }, "-=1.5")
      
      .to(".loadingCounter, .progressMainLoader", {
        opacity: 0,
        duration: 0.5,
        ease: "power4.out",
        delay: -0.3,
      })
      .to(loaderBg, {
        y: '100%',
        duration: 0.5,
        ease: "expo.in",
        delay: -0.3
      })
      .to(".loaderLogoMain", {
        opacity: 0,
      }, "=-0.5")
      .to("#loader", {
        display: "none",
        visibility: "hidden",
      });
  
      return () => {
        tl.kill(); // Kill the timeline on component unmount
      };
    }, []);
  } else if (globalThis.innerWidth > 640 ) {
    useEffect(() => {
      const counter = counterRef.current;
      const progressBar = progressBarRef.current;
      const logo = loaderLogo.current;
      const mainProgress = progressBarMain.current;
      const loaderBg = loaderBgRef.current;
  
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
        duration: 0.3,
      }).to(mainProgress, {
        scaleX: 1,
        duration: 0.3,
        delay: -0.3,
      }).to('.counterLoaderMain', {
        opacity: 1,
        duration: 0.3,
        delay: -0.3
      })
  
      // Till 60
      tl.to(counter, {
        innerHTML: "60",
        duration: 1.5,
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
        duration: 1.5,
        ease: s.bezier_1,
      }, "-=1.5")
      .to(".loadingCounter, .progressMainLoader", {
        y: "20vh",
        duration: 1.5,
        ease: s.bezier_1,
      }, "-=1.5")
      .to(".loaderLogoMain", {
        top: '28vh',
        duration: 1.5,
        ease: s.bezier_1,
      }, "-=1.5")
      
      // Till 100
      .to(counter, {
          innerHTML: "100",
          duration: 1.5,
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
          duration: 1.5,
          ease: s.bezier_3,
      }, "-=1.5")
      .to(".loadingCounter, .progressMainLoader", {
          y: "-5vw",
          duration: 1.5,
          ease: s.bezier_3,
      }, "-=1.5")
      .to(".loaderLogoMain", {
          top: '2%',
          duration: 1.5,
          ease: s.bezier_3,
      }, "-=1.5")
      
      .to(".loadingCounter, .progressMainLoader", {
        opacity: 0,
        duration: 0.5,
        ease: "power4.out",
        delay: -0.3,
      })
      .to(loaderBg, {
        y: '100%',
        duration: 0.5,
        ease: "power3.in",
        delay: -0.3
      })
      .to(".loaderLogoMain", {
        opacity: 0,
      }, "-=0.5")
      .to("#loader", {
        display: "none",
        visibility: "hidden",
      });
  
      return () => {
        tl.kill(); // Kill the timeline on component unmount
      };
    }, []);
  } else {
    useEffect(() => {
      const counter = counterRef.current;
      const progressBar = progressBarRef.current;
      const logo = loaderLogo.current;
      const mainProgress = progressBarMain.current;
      const loaderBg = loaderBgRef.current;
  
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
        duration: 0.3,
      }).to(mainProgress, {
        scaleX: 1,
        duration: 0.3,
        delay: -0.3,
      }).to('.counterLoaderMain', {
        opacity: 1,
        duration: 0.3,
        delay: -0.3
      })
  
      // Till 65
      tl.to(counter, {
        innerHTML: "60",
        duration: 1.5,
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
        duration: 1.5,
        ease: s.bezier_1,
      }, "-=1.5")
      .to(".loadingCounter, .progressMainLoader", {
        y: "20vh",
        duration: 1.5,
        ease: s.bezier_1,
      }, "-=1.5")
      .to(".loaderLogoMain", {
        top: '26vh',
        duration: 1.5,
        ease: s.bezier_1,
      }, "-=1.5")
      
      // Till 100
      .to(counter, {
          innerHTML: "100",
          duration: 1.5,
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
          duration: 1.5,
          ease: s.bezier_3,
      }, "-=1.5")
      .to(".loadingCounter, .progressMainLoader", {
          y: "-5vw",
          duration: 1.5,
          ease: s.bezier_3,
      }, "-=1.5")
      .to(".loaderLogoMain", {
          top: '2%',
          duration: 1.5,
          ease: s.bezier_3,
      }, "-=1.5")
      
      .to(".loadingCounter, .progressMainLoader", {
        opacity: 0,
        duration: 0.5,
        ease: "power4.out",
        delay: -0.3,
      })
      .to(loaderBg, {
        y: '100%',
        duration: 0.5,
        ease: "power3.in",
        delay: -0.3
      })
      .to(".loaderLogoMain", {
        opacity: 0,
      }, "-=0.5")
      .to("#loader", {
        display: "none",
        visibility: "hidden",
      });
  
      return () => {
        tl.kill(); // Kill the timeline on component unmount
      };
    }, []);
  }

    return (
      <>
        <div id="loader" className="w-screen h-screen loader fixed z-[1000] top-0 left-0">
          <div className="w-full h-full text-white aeonik relative lg:px-[6%] px-[5%] py-[5%]">
            <span className="absolute left-0 top-0 bg-primary h-full w-full -z-[1] loaderBgMain" ref={loaderBgRef}/>
            <div className="w-full loaderMainContainer">
              <div className="flex justify-between items-end w-full">
                <div className="w-[11.5vw] h-[3vw]">
                  <img loading="lazy" width="247" height="66" src="/logo-white.svg" className="lg:w-[11.5vw] md:w-[25%] opacity-0 w-[37.7%] lg:top-[75vh] md:top-[78vh] top-[76vh] loaderLogoMain absolute" alt="Patronum Logo" ref={loaderLogo}/>
                </div>
                <div className="loadingCounter lg:translate-y-[60vh] translate-y-[70vh]">
                  <div className="lg:text-[7vw] md:text-[15vw] text-[20vw] relative leading-[0.8] lg:pr-[3vw] md:pr-[5.5vw] pr-[8vw] counterLoaderMain w-[50vw] text-right opacity-0">
                    <span ref={counterRef}>00</span>
                    <span className="lg:text-[3vw] md:text-[6vw] text-[8vw] absolute right-0 lg:top-[0.5vw] md:top-[1.5vw] top-[1.8vw] z-10">%</span>
                  </div>
                </div>
              </div>
                <div className="lg:translate-y-[60vh] translate-y-[70vh] lg:mt-[2%] scale-x-0 md:mt-[4%] mt-[4%] w-full lg:h-[7px] h-[5px] bg-white/10 origin-left progressMainLoader" ref={progressBarMain}>
                  <span className="h-full w-0 bg-white block" ref={progressBarRef}/>
                </div>
            </div>
          </div>
        </div>
      </>
    );  
  }
