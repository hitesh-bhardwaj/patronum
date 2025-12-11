import Image from "next/image";
import Link from "next/link";
import React, { act, useEffect, useState } from "react";
import MobileNavigation from "./MobileNavigation";
import { useDevice } from "@/utils/useDevice";
import Navbar from "./Navbar";
import PinkButton from "../Buttons/PinkButton";

const Header = () => {
  const { isDesktop } = useDevice();
  const [isClient, setIsClient] = useState(false);
  const [isSideNavOpen, setSideNavOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [active, setActive] = useState(null);

  useEffect(() => {
    setIsClient(true);
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      setIsScrolled(scrollTop > 150);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
      onMouseEnter={()=>setActive(null)}
        className={`fixed top-0 left-0 w-screen z-[100] lg:py-[0.5vw] duration-300 ease-in-out transition-all md:py-[3vw] py-[4vw] ${isScrolled ? "bg-white/50 backdrop-blur-md shadow-md" : ""} ${active ? "!bg-white" : ""}`}
      >
        <div className="lg:w-[88%] mx-auto flex items-center justify-between w-[90%]">
          <div className="xl:w-[11.5vw] md:w-[25vw] w-[42%]">
            <Link href="/">
              <Image
                className="w-full h-auto block relative z-[3]"
                src="/logo.svg"
                width={200}
                height={50}
                alt="Patronum Logo"
                title="Patronum Logo"
                priority={true}
              />
            </Link>
          </div>

          <div
            onClick={() => setSideNavOpen(true)}
            className="lg:hidden md:block md:w-[5vw] w-[7vw] cursor-pointer"
          >
            <img
              loading="lazy"
              width={29}
              height={16}
              className="w-full h-auto"
              src="/assets/menu/menu-icon.svg"
              alt="menu-icon"
            />
          </div>
          {isClient && (
            <>
              {isDesktop ? (
                <>
                  <Navbar setActive={setActive} active={active} />
                  <div className="header-anim lg:block md:hidden w-fit h-fit">
                    <PinkButton btnText={"Try for free"} />
                  </div>
                </>
              ) : (
                <MobileNavigation
                  isOpen={isSideNavOpen}
                  setSideNavOpen={setSideNavOpen}
                />
              )}
            </>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;
