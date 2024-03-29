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
            <div id="install-modal" className={`install-modal-overlay relative ${modalOpen ? 'show' : 'hide'}`} onClick={handleModalClick}>
                <div className="install-modal-container relative px-[9.5%] overflow-hidden lg:py-[5vh] py-[2vh]">
                    <div className="flex justify-between items-start relative z-10">
                        <div className="install-left text-left flex flex-col justify-between h-full items-start mt-[4%]">
                            <p className="aeonik lg:text-[2.5vw] text-[8vw] text-head">
                                Let’s Get Started
                            </p>
                            <div className="w-[80%] mt-[10%]">
                                <img loading="lazy" className="w-full h-full" src="/assets/contact/install-modal.svg" alt="install-modal Image"/>
                            </div>
                        </div>
                        <div className="install-right">
                            <ContactForm />
                        </div>
                    </div>
                    <img className="install-backdrop absolute right-0 bottom-0 w-1/2" loading="lazy" src="/assets/contact/backdrop.png"/>
                </div>
                <button className="modal-close" onClick={closeModal} aria-label="Close Form Modal">
                    <span className="close-plus modal-btn"/>
                    <span className="close-minus modal-btn"/>
                </button>
            </div>
        </>
        )
        } else {
            return null; // Render nothing if the modalType doesn't match
        }
}