import { useState, useRef } from "react"
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import dynamic from 'next/dynamic'
import Header from "../Header";
import Footer from "../Footer";
gsap.registerPlugin(useGSAP);

const CrispWithNoSSR = dynamic(
    () => import('@/components/Crisp'),
    { ssr: false }
)

export default function Transition({ children }) {
    const [displayChildren, setDisplayChildren] = useState(children)
    const slide = useRef();

    useGSAP( () => {
        if(children.key !== displayChildren.key){
            gsap.to(slide.current, { scaleY: 1, duration: 0.6, ease: 'expo.out' }).then( () => {
                setDisplayChildren(children)
                window.scrollTo(0, 0);
                gsap.to(slide.current, { top: '100vh', duration: 0.6, delay: 0.2, ease: 'expo.out', onComplete: () => {gsap.set(slide.current, {top: 0, scaleY: 0})} })
            })
        }
    }, [children]);

    return (
        <div className="page">
            <div ref={slide} id="slide" className="bg-[#1069DF] w-screen h-screen fixed top-0 left-0 z-[99999] scale-y-0 origin-top" />
            <CrispWithNoSSR />
            <Header />
            {displayChildren}
            <Footer />
        </div>
    )
}