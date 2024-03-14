// import gsap from "gsap";
// import react, { useEffect } from "react";

// export default function PreLoader() {

//     useEffect(() => {
    
//           let ctx = gsap.context(() => {
//             // const headings = document.querySelectorAll('#preloader p');
//             let animPara1 = document.querySelectorAll('.preload-para-1 span');
//             let animPara2 = document.querySelectorAll('.preload-para-2 span');
    
//             const tl = gsap.timeline();

//             tl.to(animPara1, {
//               opacity: 1,
//               y: 0,
//               duration: 0.5,
//               stagger: 0.04,
//               ease: 'power3.out',
//             }, '+=0.5')
//             .to(animPara1, {
//               opacity: 0,
//               yPercent: -100,
//               duration: 0.5,
//               stagger: 0.04,
//             ease: 'power3.out',
//             }, '+=0.8')
//             .to(animPara2, {
//                 opacity: 1,
//                 y: 0,
//                 duration: 0.6,
//                 stagger: 0.04,
//                 ease: 'power3.out',
//               }, '+=0.2')
//             .to('.preloader-img', {
//                 y: 0,
//                 opacity: 1,
//                 duration: 0.7,
//                 ease: 'power3.out',
//             }, '-=0.8')
//               .to(animPara2, {
//                 opacity: 0,
//                 yPercent: -100,
//                 duration: 0.6,
//                 stagger: 0.04,
//               ease: 'power3.out',
//               }, '+=0.8')
//               .to('.preloader-img', {
//                 left: '6vw',
//                 top: '1.3vw',
//                 width: '11.5vw',
//                 duration: 1,
//                 ease: 'power3.inOut'
//               }, '-=0.7')
//               .to('.preloader-overlay', 0.8,{
//                 height: 0,
//                 ease: 'power3.out'
//               }, '-=0.3')
//               .set('.preloader-img', {
//                 opacity: '0',
//               }, '-=0.4')
//               .set('.preloader', {
//                 display: 'none',
//                 opacity: 0,
//                 visibility: 'hidden',
//               });
//         });
//         return () => ctx.revert();
//       }, []);

//     return(
//         <>
//             <div className="preloader" id="preloader">
//                 <div className="preloader-overlay" />
//                 <div className="preloader-text">
//                     <div className="preload-para preload-para-1">
//                         <span>Tired </span>
//                         <span>of </span> 
//                         <span>Managing </span>
//                         <span>Google </span>
//                         <span>Workspace?</span>
//                     </div>
//                     <div className="preload-para preload-para-2">
//                         <span>Let </span>
//                         <span className="preload-img-span" />
//                         <span>Be </span>
//                         <span>Your </span>
//                         <span>Saviour!</span>
//                     </div>
//                 </div>
//                 <img src="/logo-white.svg" className="preloader-img" alt="preloader-logo"/>
//             </div>
//         </>
//     )
// }

import React, { useEffect, useRef } from "react";
import gsap from "gsap";

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

    let tl = gsap.timeline();

    tl.to(logo, {
      opacity: 1,
      duration: 0.5,
      delay: 0.5
    }).to(mainProgress, {
      scaleX: 1,
      duration: 0.5,
      delay: -0.5,
    }).to('.counterLoaderMain', {
      opacity: 1,
      duration: 0.5,
      delay: -0.5
    })
    tl.to(counter, {
      innerHTML: "100",
      duration: 4,
      ease: "power2.in",
      onUpdate: () => {
        const percentage = parseInt(counter.innerHTML);
        // Format the counter with leading zeros
        const formattedCounter = String(percentage).padStart(2, "0");
        counter.innerHTML = formattedCounter;
      },
    })
    tl.to(progressBar, {
      width: '100%',
      duration: 4,
      ease: "power2.in",
    }, "-=4")
    tl.to(".loadingCounter, .progressMainLoader", {
      y: "-15vw",
      duration: 4,
      ease: "power2.in",
    }, "-=4");
    tl.to(".loaderLogoMain", {
      top: '2.6%',
      duration: 3.8,
      ease: "power2.in",
    }, "-=4");
    tl.to(".loadingCounter, .progressMainLoader", {
      opacity: 0,
      duration: 1,
      ease: "power2.out",
    }, "=-0.7");
    tl.to(".loaderBgMain", {
      top: '100%',
      duration: 1,
    }, "-=0.3")
    tl.to(".loaderLogoMain", {
      opacity: 0,
    }, "=-1")
    tl.to("#loader", {
      display: "none",
      visibility: "hidden"
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
                  <img src="/logo-white.svg" className="w-[11.5vw] top-[80%] opacity-0 loaderLogoMain absolute" alt="Patronum Logo" ref={loaderLogo}/>
                </div>
                <div className="loadingCounter translate-y-[60vh]">
                  <div className="text-[10vw] relative leading-[0.8] opacity-0 counterLoaderMain">
                    {/* <span className="text-[4vw] absolute -right-[30%] top-[12%]">%</span> */}
                    <span ref={counterRef}>00</span>
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