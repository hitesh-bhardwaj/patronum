import { useState } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";

const LazyIframe = dynamic(
  () => import("@/components/PageLayout/VideoPlayer/LazyIframe").then((mod) => mod.default),
  { ssr: false }
);

const VideoPlayer = ({ videoId, videoCover, disabled }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
  if (disabled) return;
  setModalOpen(true);
};

  const closeModal = () => setModalOpen(false);

  const handleModalClick = (e) => {
    if (e.target === e.currentTarget) closeModal();
  };

  return (
    <section id="second-section">
      <div className="container-lg">
        <div className="px-0 pt-[15%] pb-[5%] lg:pt-[7.5vw] lg:pb-[5vw]">
          
          {/* Video Cover */}
          <div className="fadeUp relative flex h-full w-full items-center justify-center">
            <div className="w-full h-full">

            <Image
              width={700}
              height={80}
              src={videoCover}
              priority
              sizes="(max-width: 768px)  100vw, 80vw"
              alt="feature-tutorial"
              className="h-full w-full object-contain"
              />

              </div>
            {/* Play Button */}
            <button
              type="button"
              // disabled={disabled}
              onClick={openModal}
              aria-label="Play Tutorial Video"
              className="
                absolute flex items-center justify-center
                h-[5vw] w-[5vw]
                disabled:cursor-not-allowed disabled:opacity-50
              "
            >
              {/* Ping Ring */}
              <span className="absolute inset-0 rounded-full border border-primary opacity-75 animate-ping" />

              {/* Solid Circle */}
              <span className="absolute inset-0 rounded-full bg-primary" />

              {/* Play Icon */}
              <img
                src="/assets/icons/play.svg"
                alt="Play Video"
                className="relative z-10 ml-[3px] h-[30%] w-[20%]"
              />
            </button>
          </div>

          {/* Modal */}
          {modalOpen && (
            <div
              onClick={handleModalClick}
              className="
                fixed inset-0 z-[999]
                flex items-center justify-center
                bg-black/80
                w-screen h-screen
                animate-fadeIn
              "
            >
              <div className="relative w-[80%] h-[80vh]">

                <LazyIframe videoId={videoId} />

                {/* Close Button */}
                <button
                  type="button"
                  onClick={closeModal}
                  aria-label="Close Video Modal"
                  className="
                    absolute -top-10 -right-10
                    flex h-8 w-8 items-center justify-center
                    rounded-full bg-white hover:rotate-180 duration-500 ease-in-out
                  "
                >
                  <span className="absolute h-[2px] w-[18px] rounded-full bg-black rotate-45" />
                  <span className="absolute h-[2px] w-[18px] rounded-full bg-black -rotate-45" />
                </button>
              </div>
            </div>
          )}

        </div>
      </div>
    </section>
  );
};

export default VideoPlayer;
