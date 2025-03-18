import { useEffect } from "react";
import SplitType from "split-type";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { NextSeo } from "next-seo";

import Testimonial from '@/components/PageLayout/Testimonial';
import Ratings from "@/components/PageComponents/HomePage/Ratings";
import Hero from "@/components/LandingPage/Hero";
import Layout from "@/components/LandingPage/Layout";
import Features from "@/components/LandingPage/Features";
import Pricing from "@/components/LandingPage/Pricing";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {

    useEffect(() => {
        const headings = document.querySelectorAll('.text-anim');

        headings.forEach((heading) => {
            let ctx = gsap.context(() => {
                const textAnim = new SplitType(heading, { types: 'words' });
                let animWord = heading.querySelectorAll('.word');

                gsap.from(animWord, {
                    scrollTrigger: {
                        trigger: heading,
                        start: 'top 80%',
                    },
                    duration: 0.6,
                    yPercent: 100,
                    stagger: 0.04,
                });
            });
            return () => ctx.revert();
        });
    }, []);

    useEffect(() => {
        const fadeUps = document.querySelectorAll('.fadeUp');

        let ctx = gsap.context(() => {
            fadeUps.forEach((fadeUp) => {
                gsap.fromTo(
                    fadeUp,
                    {
                        opacity: 0,
                        y: 40,
                    },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.6,
                        ease: 'Power3.out',
                        scrollTrigger: {
                            trigger: fadeUp,
                            start: 'top 85%',
                        },
                    }
                );
            });
        });
        return () => ctx.revert();
    }, []);

    useEffect(() => {
        const pricingCards = document.querySelectorAll('.pricing-card-wrapper .pricing-card');
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".pricing-card-wrapper",
                start: "top 85%",
            }
        });

        tl.fromTo(
            pricingCards,
            {
                opacity: 0,
                y: 100,
            },
            {
                opacity: 1,
                y: 0,
                duration: 0.6,
                stagger: 0.1,
                ease: 'Power2.out',
            }
        );
    }, []);

    useEffect(() => {
        const fadeRights = document.querySelectorAll('.fadeRight');

        let ctx = gsap.context(() => {
            fadeRights.forEach((fadeRight) => {
                gsap.fromTo(
                    fadeRight,
                    {
                        opacity: 0,
                        x: 100,
                    },
                    {
                        opacity: 1,
                        x: 0,
                        duration: 0.6,
                        stagger: 0.05,
                        ease: 'Power3.out',
                        scrollTrigger: {
                            trigger: fadeRight,
                            start: 'top 85%',
                        },
                    }
                );
            });
        });
        return () => ctx.revert();
    }, []);

    useEffect(() => {
        const lineDraws = document.querySelectorAll('.lineDraw');

        let ctx = gsap.context(() => {
            lineDraws.forEach((lineDraw) => {
                gsap.fromTo(
                    lineDraw,
                    {
                        scaleX: 0,
                        transformOrigin: 'left'
                    },
                    {
                        scaleX: 1,
                        duration: 1,
                        ease: 'Power4.out',
                        scrollTrigger: {
                            trigger: lineDraw,
                            start: 'top 90%',
                        },
                    }
                );
            });
        });
        return () => ctx.revert();
    }, []);

    useEffect(() => {
        const scaleAnims = document.querySelectorAll('.scaleAnim');

        let ctx = gsap.context(() => {
            scaleAnims.forEach((scaleAnim) => {
                gsap.fromTo(
                    scaleAnim,
                    {
                        scale: 1.1,
                        y: 40,
                        opacity: 0,
                        transformOrigin: 'bottom center'
                    },
                    {
                        y: 0,
                        scale: 1,
                        opacity: 1,
                        duration: 0.8,
                        ease: 'Power4.out',
                        scrollTrigger: {
                            trigger: scaleAnim,
                            start: 'top bottom',
                            end: 'bottom 85%',
                        },
                    }
                );
            });
        });
        return () => ctx.revert();
    }, []);

    return (
        <>
            <NextSeo
                canonical="https://www.patronum.io"
                languageAlternates={[{
                    hrefLang: 'en-US',
                    href: 'https://www.patronum.io'
                }]}
            />
                <Layout>
                <main>
                    <Hero />
                    <Ratings />
                    <Features />
                    <Pricing />
                    <Testimonial />
                </main>
                </Layout>
        </>
    );
}