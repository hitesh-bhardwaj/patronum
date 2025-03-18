import gsap from "gsap";
import { useEffect, useRef } from "react"
import Image from "next/image";
import DemoButton from "@/components/Buttons/DemoButton";
import ScrollButton from "@/components/Buttons/ScrollButton";
import FreeTrialForm from "../Forms/FreeTrialForm";
import img from "../../../public/assets/extras/free-trial.png";
import Link from "next/link";
import DemoBlue from "../Buttons/DemoBlue";

export default function Hero() {
    const section = useRef(null);
    const para = useRef(null);

    useEffect(() => {
        const isFirstTimeLoading = sessionStorage.getItem('hasVisited') === null;
        let delayTime = isFirstTimeLoading ? 3.4 : 0.6;

        let ctx = gsap.context(() => {
            const heroPara = para.current;
            const heroAnim = section.current.querySelectorAll(".hero-anim .span");

            const tl = gsap.timeline();

            tl.fromTo(heroAnim, 0.8, {
                yPercent: 105,
            }, {
                yPercent: 0,
                stagger: 0.1,
                ease: 'power2.out',
            }, `+=${delayTime}`)
                .fromTo(heroPara, 0.4, {
                    yPercent: 100,
                    opacity: 0
                }, {
                    yPercent: 0,
                    opacity: 1,
                    ease: "Power2.out",
                    stagger: 0.1,
                }, '-=0.8')
                .from('.hero-button-anim', 0.8, {
                    y: 30,
                    opacity: 0,
                    ease: "power2.out",
                }, '-=0.8')
                .fromTo(".hero-svg-circle", {
                    strokeDasharray: "0% 300%",
                }, {
                    strokeDasharray: "310% 300%",
                    duration: 1.5,
                    ease: "power2.out",
                }, '-=0.8')
                .from(".scroll-img-container", {
                    y: -10,
                    opacity: 0,
                    duration: 0.8
                }, '-=0.5')
                .fromTo('.hero-img', 2, {
                    x: 100,
                    opacity: 0
                }, {
                    x: 0,
                    opacity: 1,
                    ease: "expo.out",
                }, '-=2');
        });
        return () => ctx.revert();
    }, []);

    return (
        <>
            <section ref={section} id="hero" className="lg:min-h-screen lg:h-full w-screen h-fit">
                <div className="container-lg relative lg:mb-0 mb-[10vw]">
                    <div className='xl:w-[14.5vw] md:w-[25vw] w-[42%] mt-[2%]'>
                        <Link href='/' className='z-[1] relative'>
                            <Image
                                className='w-full h-auto fadeUp'
                                src="/logo.svg"
                                width={200}
                                height={50}
                                alt='Patronum Logo'
                                title='Patronum Logo'
                                priority={true}
                            />
                        </Link>
                    </div>
                    <div className="lg:flex lg:items-center lg:justify-between h-full w-full lg:mb-0 mb-[10vw] md:mb-[15vw]">
                        <div className="pt-[25vw] gap-y-[7vw] flex-col w-full flex md:pt-[20vw] lg:pt-[5vw] lg:gap-y-10 lg:w-[55%]">
                            <h1 className='title-5xl hero-anim flex flex-wrap justify-start items-end space-y-[2vw] lg:space-y-0'>
                                <div className='overflow-hidden lg:w-full mb-[1vw] w-fit'>
                                    <span className="span block">Your{" "}</span>
                                </div>
                                <div className="overflow-hidden w-fit ml-[2.5vw] lg:ml-0">
                                    <Image className="span lg:w-[15.5vw] md:w-[40vw] w-[43vw]" src="/assets/home/google.svg" priority={false} width={250} height={100} alt="google logo image" />
                                </div>
                                <div className="overflow-hidden w-fit lg:ml-[1.4vw] tablet:ml-0">
                                    <Image className="span lg:mt-[0.2vw] md:mt-[3vw] mt-[2.5vw] lg:w-[23vw] md:w-[62vw] w-[95%]" src="/assets/home/workspace.svg" priority={false} width={400} height={100} alt="google workspace image" />
                                </div>
                                <span className="hidden">Google Workspace{" "}</span>
                                <div className='overflow-hidden w-full'>
                                    <span className="span block leading-[115%]">Manager</span>
                                </div>
                            </h1>

                            <p ref={para} className="lg:text-[1.25vw] lg:w-[24vw] md:mb-0 font-medium md:text-[4vw] md:w-full text-[5vw] mb-[5vw]">
                                The only tool you'll ever need to streamline your Google Workspace management.
                            </p>

                            <div className="flex md:gap-[2vw] flex-col md:flex-row gap-[5vw]">
                                {/* <DemoButton className="hero-button-anim" /> */}
                                <DemoBlue className="hero-button-anim" />
                            </div>
                            <ScrollButton className="!static w-fit mt-[2vw]" />
                        </div>

                        <div className="lg:w-[40%] lg:block text-left relative lg:mt-[2%] hero-img md:mt-[15%] mt-[20%]">
                            <div className="relative z-[2] w-full h-full bg-[#FDFDFD] lg:py-[3vw] lg:px-[3vw] border border-[#d7d7d7] md:py-[5vw] md:px-[5vw] py-[10vw] px-[7vw] rounded-5xl shadow-xl">
                                <h2 className="lg:text-[2.3vw] text-center text-head lg:mb-[2.5vw] md:text-[5.5vw] md:mb-[7vw] text-[7vw] mb-[10vw]">Sign Up For a Free Trial</h2>
                                <FreeTrialForm />
                            </div>
                            <Image src={img} placeholder="blur" className="w-[30%] absolute left-[-28%] lg:block hidden bottom-0 md:hidden" quality={100} alt="form icon"/>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}