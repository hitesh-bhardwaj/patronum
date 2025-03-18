import { useEffect, useRef } from "react";
import gsap from "gsap";

const BgVideo = () => {
    const videoRef = useRef();

    useEffect(() => {
        let ctx = gsap.context(() => {
            gsap.to(videoRef.current, {
                opacity: 1,
                duration: 1,
                delay: 6,
            });
        });
        return () => ctx.revert();
    }, []);

    useEffect(() => {
        const video = videoRef.current;
        setTimeout(() => {
            video.src = "/assets/patronum-bg.mp4";
        }, 2000);
    }, []);

    return (
        <>
            <div className="fixed z-[-1] top-0 left-0 h-screen w-screen pointer-events-none">
                <video ref={videoRef} loop autoPlay playsInline muted className="w-full h-full object-cover opacity-0"/>
            </div>
        </>
    )
}

export default BgVideo;