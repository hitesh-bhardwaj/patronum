// import InstallButton from "../Buttons/InstallButton";
import DemoButton from "@/components/Buttons/DemoButton";
import styles from "@/components/Footer/footer.module.css"
import FooterInstallButton from "@/components/Buttons/FooterInstallButton";
import Image from "next/image";

export default function Transform({ text, content }) {

    return (
        <div>
            <div className="w-full px-[5%] mx-auto py-[5%] pb-[10%] bg-[#f8f8f8]">
                <div className="flex flex-col lg:flex-row justify-between w-full items-center gap-[7vw] lg:gap-0">
                    <div className="w-[65%] h-fit px-[7vw] ">
                        <Image src={"/assets/features/email-signature-management/feature-transform.svg"} alt="" width={300} height={300} className="w-full h-full object-contain" />
                    </div>
                    <div className={`${styles.left} flex flex-col gap-[5vw] lg:gap-[2vw] justify-center items-center lg:items-start`}>
                        <h2 className="title-4xl text-anim w-full text-center lg:text-left">
                            <span>
                               {text}
                            </span>
                        </h2>
                        <p className="content-p fadeUp text-center lg:text-left">
                           {content}
                        </p>
                        <div className={`${styles.footerCtaContainer} fadeUp`}>
                            <DemoButton />
                            <FooterInstallButton />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}