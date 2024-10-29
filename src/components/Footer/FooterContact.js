import React from "react";
import InstallButton from "../PageLayout/Button/InstallButton";
import DemoButton from "../PageLayout/Button/DemoButton";

export default function FooterContact() {

    return(
            <div className="footer-contact">
                <div className="container">
                    <div className="footer-contact__content">
                        <span className="footer-contact-bg" />
                        <div className="left">
                            <h2 className="title-4xl text-anim">
                                <span>
                                    Get More from Patronum.
                                </span>
                            </h2>
                            <p className="content-p fadeUp">
                                Talk to our experts and see how Patronum makes Google Workspace work for you.
                            </p>

                            <div className="footer-cta-container fadeUp">
                                <DemoButton />
                                <InstallButton />
                            </div>
                        </div>

                        <div className="right">
                            <div className="footer-lottie fadeUp">
                                <img
                                    src="/assets/footer/rocket.gif"
                                    alt="A rocket taking off in space."
                                    width={500}
                                    height={500}
                                    className="lg:w-[27vw] w-full h-auto"
                                    loading="lazy"
                                />
                            </div>
                        </div>
                    </div>
                </div>    
            </div>
    )
}