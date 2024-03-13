import react, { useState } from "react";
import VideoEmbed from "./VideoEmbed";

const VideoPlayer = ( {videoId, videoCover} ) => {
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
                            src={videoCover}
                            alt="feature-tutorial"
                            loading="lazy"
                        />
                        <button
                            className="video-tutorial-play-button"
                            onClick={openModal}
                            aria-label="Play Tutorial Video"
                        >
                            <img src="/assets/icons/play.svg" alt="Play Video"/>
                        </button>
                    </div>
                    {/* {modalOpen && ( */}
                        <div className={`video-modal-overlay ${modalOpen ? 'show' : 'hide'}`} onClick={handleModalClick}>
                            <div className="modal">
                                <VideoEmbed videoId={videoId} />
                                <button className="modal-close" onClick={closeModal} aria-label="Close Video Modal">
                                    <span className="close-plus modal-btn"/>
                                    <span className="close-minus modal-btn"/>
                                </button>
                            </div>
                        </div>
                    {/* )} */}
                </div>
            </div>
        </section>
    </>
  );
};

export default VideoPlayer;