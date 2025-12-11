"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import PrimaryButton from "../Buttons/PrimaryButton";
import { useModal } from "../Modals/ModalContext";
// import { useModal } from "@/context/modal-context"; // 🔁 change path if needed

function ExitIntentModal() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const { openModal } = useModal(); // from your ModalProvider

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Only show once per session (for both variants)
    const hasShown = window.sessionStorage.getItem("roi-exit-intent-shown");
    if (hasShown) return;

    const handleMouseOut = (e) => {
      const toElement = e.relatedTarget || e.toElement;

      // Exit intent: cursor leaves viewport at the top
      if (!toElement && e.clientY <= 10) {
        window.sessionStorage.setItem("roi-exit-intent-shown", "true");

        // 🔹 Special case: community page → open context modal
        if (pathname === "/google-workspace-community") {
          openModal && openModal("contact");
        } else {
          // 🔹 All other routes → show this microconversion modal
          setOpen(true);
        }

        document.removeEventListener("mouseout", handleMouseOut);
      }
    };

    // Desktop only to avoid weird mobile behavior
    if (window.innerWidth >= 768) {
      document.addEventListener("mouseout", handleMouseOut);
    }

    return () => {
      document.removeEventListener("mouseout", handleMouseOut);
    };
  }, [pathname, openModal]);

  const handleClose = () => {
    setOpen(false);
    if (typeof window !== "undefined") {
      window.sessionStorage.setItem("roi-exit-intent-shown", "true");
    }
  };

  // On /google-workspace-community we *only* use context modal,
  // so this JSX will never be shown there (open stays false).
  return (
    <div
      className={`w-screen h-screen z-[900] fixed inset-0 bg-black/30 backdrop-blur-md duration-500 ease-out  justify-center items-center hidden lg:flex ${
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
