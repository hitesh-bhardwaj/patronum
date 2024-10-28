import React from "react";
import { useModal } from "../Modals/ModalContext";
import Image from "next/image";
import InstallButton from "../PageLayout/Button/InstallButton";
import DemoButton from "../PageLayout/Button/DemoButton";

export default function FooterContact() {

    const { openModal } = useModal();

    const openContactModal = () => {
        openModal('contact');
    };

    const openVideoModal = () => {
        openModal('video');
    };

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
                                <DemoButton onClick={openVideoModal} />
                                <InstallButton onClick={openContactModal} />
                            </div>
                        </div>

                        <div className="right">
                            <div className="footer-lottie fadeUp">
                                <Image 
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