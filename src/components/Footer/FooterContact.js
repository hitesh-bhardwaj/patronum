import InstallButton from "../Buttons/InstallButton";
import DemoButton from "../Buttons/DemoButton";
import styles from "./footer.module.css"

export default function FooterContact() {

    return(
            <div className={styles.footerContact}>
                <div className="container">
                    <div className={styles.footerContact__content}>
                        <span className={styles.footerContactBg} />
                        <div className={styles.left}>
                            <h2 className="title-4xl text-anim">
                                <span>
                                    Get More from Patronum.
                                </span>
                            </h2>
                            <p className="content-p fadeUp">
                                Talk to our experts and see how Patronum makes Google Workspace work for you.
                            </p>

                            <div className={`${styles.footerCtaContainer} fadeUp`}>
                                <DemoButton />
                                <InstallButton />
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