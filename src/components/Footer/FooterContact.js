import InstallButton from "../Buttons/InstallButton";
import DemoButton from "../Buttons/DemoButton";
import styles from "./footer.module.css"
import FooterInstallButton from "../Buttons/FooterInstallButton";
import CallButton from "../Buttons/CallButton";

export default function FooterContact() {

    return(
            <div className={styles.footerContact}>
                <div className="w-[90%] mx-auto">
                    <div className={styles.footerContact__content}>
                        <span className={styles.footerContactBg} />
                        <div className={styles.left}>
                            <h2 className="title-4xl text-anim w-[90%]">
                                <span>
                                Streamline Your Google Workspace Management Today!
                                </span>
                            </h2>
                            <p className="content-p fadeUp">
                            Automate User Onboarding & Offboarding, Email Signature Management, Google Drive Management, File Governance, Drive Data Compliance, Backups, and much more.
                            </p>

                            <div className={`${styles.footerCtaContainer} fadeUp`}>
                                <DemoButton />
                                <CallButton />
                            </div>
                        </div>

                        <div className={styles.right}>
                            <div className={`${styles.footerLottie} fadeUp`}>
                                <img
                                    src="/assets/footer/rocket.gif"
                                    alt="A rocket taking off in space."
                                    width={500}
                                    height={500}
                                    className="lg:w-[27vw] tablet:w-full h-auto"
                                    loading="lazy"
                                />
                            </div>
                        </div>
                    </div>
                </div>    
            </div>
    )
}