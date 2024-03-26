import React from "react";
import { useModal } from './ModelContext'
import ContactForm from "../Forms/ContactForm";

export default function InstallModal() {
    const { modalOpen, closeModal, modalType } = useModal();

    const handleModalClick = (e) => {
        if (e.target.classList.contains("install-modal-overlay")) {
            closeModal();
        }
    };

    if (modalOpen && modalType === 'contact') {

    return (
        <>
            <div id="install-modal" className={`install-modal-overlay ${modalOpen ? 'show' : 'hide'}`} onClick={handleModalClick}>
                <div className="install-modal-container relative py-[4%] px-[9.5%] overflow-hidden">
                    <div className="flex justify-between items-start relative z-10">
                        <div className="install-left text-left flex flex-col justify-between h-full items-start">
                            <p className="aeonik title-4xl text-head">
                                Let’s Get Started
                            </p>
                            <div className="w-[45vh] mt-[10vh]">
                                <img loading="lazy" className="w-full h-full" src="/assets/contact/install-modal.svg" alt="install-modal Image"/>
                            </div>
                        </div>
                        <div className="install-right">
                            <ContactForm />
                        </div>
                    </div>
                    <div className="absolute lg:top-[3%] lg:right-[3%] top-[2vw] right-[5%]">
                        <button aria-label="Pop Up Form Close Button" className="en-btn en-btn_cta -intro -tertiary aeonik" style={{pointerEvents: 'auto'}} onClick={closeModal}>
                            <span className="en-btn_cta-border" style={{translate: 'none', rotate: 'none', scale: 'none', willChange: 'auto', transform: 'translate(0px, 0px)', opacity: '1'}}/>
                            <span className="en-btn_cta-ripple">
                                <span />
                            </span>
                            <span className="en-btn_cta-title" style={{translate: 'none', rotate: 'none', scale: 'none', willChange: 'auto', transform: 'translate(0px, 0%)'}}>
                                <span data-text="close">
                                    close
                                </span>
                            </span>
                        </button>
                    </div>
                    <img className="install-backdrop absolute right-0 bottom-0 w-1/2" loading="lazy" src="/assets/contact/backdrop.png"/>
                </div>
            </div>
        </>
        )
        } else {
            return null; // Render nothing if the modalType doesn't match
        }
}