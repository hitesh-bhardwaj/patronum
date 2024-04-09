'use client'
import { useModal } from "./ModelContext";

export default function DemoModal() {

    const { modalOpen, closeModal, modalType } = useModal();

    const handleModalClick = (e) => {
        if (e.target.classList.contains("video-modal-overlay")) {
            closeModal();
        }
    };

    if (modalOpen && modalType === 'video') {
        return(
            <>
                <div id="video-modal" className={`video-modal-overlay ${modalOpen ? 'show' : 'hide'}`} onClick={handleModalClick}>
                    <div className="modal">
                        <iframe
                            width="1321" 
                            height="694" 
                            src="https://www.youtube.com/embed/A6rBxfmr8hs" 
                            title="Patronum - Full product demo" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                            allowFullScreen>
                        </iframe>
                        <button className="modal-close" onClick={closeModal} aria-label="Close Video Modal">
                            <span className="close-plus modal-btn"/>
                            <span className="close-minus modal-btn"/>
                        </button>
                    </div>
                </div>
            </>
        )
        } else {
            return null; // Render nothing if the modalType doesn't match
        }
    }