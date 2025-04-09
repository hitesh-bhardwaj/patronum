// import InstallButton from "../Buttons/InstallButton";
import DemoButton from "@/components/Buttons/DemoButton";
import styles from "@/components/Footer/footer.module.css"
import FooterInstallButton from "@/components/Buttons/FooterInstallButton";
import Image from "next/image";

export default function Transform() {

    return(
            <div>
                <div className="w-[90%] mx-auto py-[5%] pb-[10%]">
                    <div className="flex flex-col lg:flex-row justify-between w-full items-center gap-[7vw] lg:gap-0">
                        <div className="w-[65%] h-fit px-[7vw] ">
                           <Image src={"/assets/features/email-signature-management/feature-transform.svg"} alt="" width={300} height={300} className="w-full h-full object-contain"/>
                            
                        </div>
                        {/* <span className={styles.footerContactBg} /> */}
                        <div className={`${styles.left} flex flex-col gap-[5vw] lg:gap-[2vw] justify-center items-center lg:items-start`}>
                            <h2 className="title-4xl text-anim w-full text-center lg:text-left">
                                <span>
                                Ready to Transform Your Email Signatures?
                                </span>
                            </h2>
                            <p className="content-p fadeUp text-center lg:text-left">
                            Take control of your organization's email communications today.​
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