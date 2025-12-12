"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import PrimaryButton from "../Buttons/PrimaryButton";
import { useModal } from "../Modals/ModalContext";

const NORMAL_KEY = "roi-exit-intent-shown";
const COMMUNITY_KEY = "community-exit-intent-contact-shown";

function ExitIntentModal() {
  const [open, setOpen] = useState(false);
  const [hasScrolledEnough, setHasScrolledEnough] = useState(false);
  const pathname = usePathname();
  const { openModal } = useModal();

  // Track scroll depth (50vh)
  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset;
      const viewportHeight = window.innerHeight || 0;
      if (viewportHeight && scrollY >= viewportHeight * 1.0) {
        setHasScrolledEnough(true);
        window.removeEventListener("scroll", handleScroll);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Exit-intent logic
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!hasScrolledEnough) return; // only after 50vh scroll

    const isCommunity = pathname === "/google-workspace-community";

    const handleMouseOut = (e) => {
      const toElement = e.relatedTarget || e.toElement;

      // Exit at top of viewport
      if (!toElement && e.clientY <= 10) {
        const normalShown =
          window.sessionStorage.getItem(NORMAL_KEY) === "true";
        const communityShown =
          window.sessionStorage.getItem(COMMUNITY_KEY) === "true";

        if (isCommunity) {
          // /google-workspace-community → show contact modal ONCE
          if (!communityShown) {
            window.sessionStorage.setItem(COMMUNITY_KEY, "true");
            openModal && openModal("contact");
          }
        } else {
          // All other routes → normal microconversion modal ONCE
          if (!normalShown) {
            window.sessionStorage.setItem(NORMAL_KEY, "true");
            setOpen(true);
          }
        }

        document.removeEventListener("mouseout", handleMouseOut);
      }
    };

    // Avoid adding listener if this route's modal is already shown
    // const isCommunity = pathname === "/google-workspace-community";
    const alreadyShown = isCommunity
      ? window.sessionStorage.getItem(COMMUNITY_KEY) === "true"
      : window.sessionStorage.getItem(NORMAL_KEY) === "true";

    if (alreadyShown) return;

    if (window.innerWidth >= 768) {
      document.addEventListener("mouseout", handleMouseOut);
    }

    return () => {
      document.removeEventListener("mouseout", handleMouseOut);
    };
  }, [pathname, hasScrolledEnough, openModal]);

  const handleClose = () => {
    setOpen(false);
    if (typeof window !== "undefined") {
      window.sessionStorage.setItem(NORMAL_KEY, "true");
    }
  };

  // This modal never actually opens on /google-workspace-community
  // because there we only trigger openModal("contact")
  return (
    <div
      className={`w-screen h-screen z-[900] fixed inset-0 bg-black/30 backdrop-blur-md duration-500 ease-out justify-center items-center hidden lg:flex ${
        open ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="w-[60%] h-[60%] rounded-[2vw] bg-white p-[3vw] flex justify-between items-center">
        <div className="w-[40%] h-auto">
          <Image
            src={"/assets/community/community-hero.svg"}
            alt="micro-img"
            className="w-full h-full object-contain"
            width={200}
            height={200}
          />
        </div>
        <div className="space-y-[1vw] w-[55%]">
          <h2 className="title-3xl">Want to Join the Community?</h2>
          <p className="lg:text-[1.25vw]">
            Once you&apos;re a part of the community, you&apos;ll gain access to our
            exclusive Google Chat Space where you can attend valuable webinars
            and be part of the community conversation.
          </p>
          <div className="w-fit pt-[2vw]">
            <PrimaryButton
              btnText={"Join Community"}
              href="/google-workspace-community"
            />
          </div>
        </div>
      </div>

      <button
        className="modal-close !top-[14%] !right-[16%]"
        onClick={handleClose}
        aria-label="Close Community Modal"
      >
        <span className="close-plus modal-btn" />
        <span className="close-minus modal-btn" />
      </button>
    </div>
  );
}

export default ExitIntentModal;
