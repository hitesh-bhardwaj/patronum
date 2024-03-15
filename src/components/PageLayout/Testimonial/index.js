import React, { useEffect } from "react";
import gsap from "gsap";
import Slider from "./Slider";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Testimonial() {

    useEffect(() => {
        const testicard = document.querySelectorAll('.testi-slider .swiper-wrapper');
        
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".swiper-wrapper",
                start: "top 90%",
            }
        });
    
        tl.fromTo(
            testicard,
            {
                opacity: 0,
                x: 200,
            },
            {
                opacity: 1,
                x: 0,
                duration: 0.6,
                stagger: 0.1, // Adjust stagger timing as needed
                ease: 'Power1.out',
            }
        );
      }, []);

    return(
        <>
            <section id="testimonial">
                <div className="content">
                    <div className="container">
                        <div className="section-head">
                            <h2 className="title-4xl text-anim">
                                <span>
                                    Client Speak: 
                                </span>
                                <br />
                                <span>
                                    Real Stories, Real Impact!
                                </span>
                            </h2>
                        </div>
                    </div>
                    <div className="testi-slider">
                        <Slider />
                    </div>
                </div>
            </section>        
        </>
    )
}