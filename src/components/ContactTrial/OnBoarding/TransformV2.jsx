
import DemoButton from "@/components/Buttons/DemoButton";
import FooterInstallButton from "@/components/Buttons/FooterInstallButton";
import Image from "next/image";

export default function Transform({ text, content }) {

    return (
        <div>
            <div className="w-full px-[5%] mx-auto py-[5%] pb-[10%] bg-[#f8f8f8]">
                <div className="flex flex-col lg:flex-row justify-between w-full items-center gap-[7vw] lg:gap-0">
                    <div className="w-[65%] h-fit px-[7vw]">
                        <Image src={"/assets/features/email-signature-management/feature-transform.svg"} alt="" width={300} height={300} className="w-full h-full object-contain" />
                    </div>
                   
                    <div className="flex flex-col gap-[4vw] justify-center items-center w-full px-[5vw] py-[10vw] text-center lg:w-[90%] lg:px-0 lg:py-[6vw] lg:items-start lg:text-left lg:gap-[0.8vw]">
                        <h2 className="title-4xl text-anim w-full text-center lg:text-left m-0">
                            <span>
                               {text}
                            </span>
                        </h2>
                        <p className="content-p fadeUp text-center lg:text-left w-full lg:w-[100%] mb-[2.5vw]">
                           {content}
                        </p>
                       
                        <div className="fadeUp flex flex-col items-center gap-[4vw] w-fit md:flex-row lg:gap-[2.5vw]">
                            <DemoButton />
                            <FooterInstallButton />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}