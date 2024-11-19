import { gsap } from 'gsap/dist/gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { SplitInWordOnly } from './splitText';
import { useEffect } from 'react';

gsap.registerPlugin(ScrollTrigger);

gsap.config({
    nullTargetWarn: false,
});

export function titleAnim() {
    useEffect(() => {
        const headings = document.querySelectorAll(".text-anim");
        let ctx = gsap.context(() => {
            headings.forEach((heading) => {
                SplitInWordOnly(heading);
                let headingWord = heading.querySelectorAll(".word");
                gsap.from(headingWord, {
                    scrollTrigger: {
                        trigger: heading,
                        start: "top 80%",
                    },
                    duration: 0.6,
                    yPercent: 100,
                    stagger: 0.04,
                    ease: "power2.out",
                });
            });
        });
        return () => ctx.revert();
    }, []);
}

export function lineAnim() {
    useEffect(() => {
        const lineDraws = document.querySelectorAll(".lineDraw");
        let ctx = gsap.context(() => {
            lineDraws.forEach((lineDraw) => {
                gsap.from(lineDraw, {
                    scrollTrigger: {
                        trigger: lineDraw,
                        start: "top 80%",
                    },
                    scaleX: 0,
                    transformOrigin: "left",
                    duration: 1,
                    yPercent: 100,
                    stagger: 0.07,
                    ease: "power3.out",
                });
            });
        });
        return () => ctx.revert();
    }, []);
}

export function fadeUp() {
    useEffect(() => {
        const content = document.querySelectorAll(".fadeUp");
        let ctx = gsap.context(() => {
            content.forEach((content) => {
                gsap.from(content, {
                    scrollTrigger: {
                        trigger: content,
                        start: "top 85%",
                    },
                    opacity: 0,
                    delay: 0.3,
                    y: 50,
                    ease: "power3.Out",
                    duration: 0.7,
                    stagger: 0.5
                });
            });
        });
        return () => ctx.revert();
    }, []);
}

export function fadeRight() {
    useEffect(() => {
        const fadeRights = document.querySelectorAll(".fadeRight");
        let ctx = gsap.context(() => {
            fadeRights.forEach((fadeRight) => {
                gsap.from(fadeRight, {
                    scrollTrigger: {
                        trigger: fadeRight,
                        start: "top 85%",
                    },
                    opacity: 0,
                    x: 100,
                    delay: 0.3,
                    ease: "power3.Out",
                    duration: 0.7,
                    stagger: 0.5
                });
            });
        });
        return () => ctx.revert();
    }, []);
}

export function scaleAnim() {
    useEffect(() => {
        const scaleAnims = document.querySelectorAll('.scaleAnim');
        let ctx = gsap.context(() => {
            scaleAnims.forEach((scaleAnim) => {
                gsap.from(
                    scaleAnim,
                    {
                        scrollTrigger: {
                            trigger: scaleAnim,
                            start: 'top bottom',
                            end: 'bottom 85%',
                        },
                        scale: 1.1,
                        y: 40,
                        opacity: 0,
                        transformOrigin: 'bottom center',
                        duration: 0.8,
                        ease: 'Power4.out',
                    });
            });
        });
        return () => ctx.revert();
    }, []);
}
