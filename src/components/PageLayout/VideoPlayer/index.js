import react, { useState } from "react";
import VideoEmbed from "./VideoEmbed";

const VideoPlayer = ( {videoId} ) => {
    const [modalOpen, setModalOpen] = useState(false);

    const openModal = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    const handleModalClick = (e) => {
        if (e.target.classList.contains("video-modal-overlay")) {
        closeModal();
        }
    };

    return(
        <>
        <section className="feature-detail-video" id="second-section">
            <div className="container-lg">
                <div className="content">
                    <div className="feature-tutorial-video">
                        <img
                            className="h-full w-full object-contain"
                            src="/assets/features/onboarding/video-cover.png"
                            alt="feature-tutorial"
                            loading="lazy"
                        />
                        <button
                            className="video-tutorial-play-button"
                            onClick={openModal}
                        >
                            <img src="/assets/icons/play.svg" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
        {modalOpen && (
            <div className="video-modal-overlay" onClick={handleModalClick}>
                <div className="modal">
                    <VideoEmbed videoId={videoId} />
                    <button className="modal-close" onClick={closeModal}>
                        <span className="close-plus modal-btn"/>
                        <span className="close-minus modal-btn"/>
                    </button>
                </div>
            </div>
        )}
    </>
  );
};

export default VideoPlayer;