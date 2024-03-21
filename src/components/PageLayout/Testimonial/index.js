import React, { useEffect } from "react";
import gsap from "gsap";
import Slider from "./Slider";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Testimonial() {

    useEffect(() => {
        let ctx = gsap.context(() => {

            const testicard = document.querySelectorAll('.testi-slider .mySwiper');
            
            let tl = gsap.timeline({
                scrollTrigger: {
                    trigger: ".testi-slider",
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
                    stagger: 0.1,
                    ease: 'Power1.out',
                }
            );
        });
        return () => ctx.revert();
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