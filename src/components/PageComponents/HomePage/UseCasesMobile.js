"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import gsap from "gsap";
import Draggable from "gsap/Draggable";
import InertiaPlugin from "gsap/InertiaPlugin";
import LinkButton from "@/components/Buttons/LinkButton";
import { ChevronLeft, ChevronRight } from "lucide-react";

gsap.registerPlugin(Draggable, InertiaPlugin);

export default function UseCasesMobile() {
  const useCaseData = useMemo(
    () => [
      {
        id: 0,
        title: "For Business",
        img: "patronum-for-business.svg",
        description1:
          "Imagine a world where onboarding and offboarding processes are seamlessly automated, where organization-wide policies don't just exist; they thrive, ensuring efficiency and compliance.",
        description2:
          "Patronum brings this vision to life, offering a suite of capabilities tailored for both large enterprises and SMEs. From Google Drive Management & Contact Sharing, to Email Signature Management, Patronum equips IT professionals and non-IT managers alike with unparalleled control and customization.",
        link: "/patronum-for-business",
      },
      {
        id: 1,
        title: "For HR",
        img: "patronum-for-hr.svg",
        description1:
          "As an HR executive, do you daydream of offering a personalised, resource-rich and interconnected workspace experience to each user?",
        description2:
          "With Patronum, onboarding new hires is a tailored journey, where new members are greeted by a Google Workspace sculpted just for their role. Google Groups, Labels, Calendars, and Contacts converge, syncing seamlessly with smart devices. With Patronum, your team is thriving from the outset, enveloped in a culture of collaboration.",
        link: "/patronum-for-hr",
      },
      {
        id: 3,
        title: "For Sales & Marketing",
        img: "patronum-for-sales-marketing.svg",
        description1:
          "Patronum breaks down silos, fostering a culture of shared success. Patronum enables sales & marketing managers to directly manage key Google Workspace features - from resetting passwords to configuring email signatures. From shared contacts and customer lists to up-to-date templates, every feature is designed to streamline workflows & amplify your market presence.",
        description2:
          "Patronum is like having a digital wizard at your fingertips, ensuring your team remains in the fast lane, fully equipped and ready from day one.",
        link: "/patronum-for-sales-marketing",
      },
      {
        id: 4,
        title: "For Education",
        img: "patronum-for-education.svg",
        description1:
          "Patronum is as an indispensable ally for educational institutions leveraging Google Workspace. From the precise alignment of staff in Google Groups to the strategic distribution of resources, Patronum ensures that everyone is on the same page.",
        description2:
          "Patronum is as an indispensable ally for educational institutions leveraging Google Workspace. From the precise alignment of staff in Google Groups to the strategic distribution of resources, Patronum ensures that everyone is on the same page.",
        link: "/patronum-for-hr",
      },
      {
        id: 5,
        title: "For Users",
        img: "patronum-for-users.svg",
        description1:
          "Patronum seamlessly integrates Google Drive Management, shares contacts & calendars and gives users a clear view of organization hierarchy, ensuring your staff has what they need, when they need it.",
        description2:
          "Patronum eliminates the common hurdles of document access and schedule coordination, enabling your all team members to focus on productivity. Patronum also enhances organizational connectivity, with the ability to search for colleagues by department, location, or skillset via the Organization Chart and People Finder.",
        link: "/patronum-for-users",
      },
    ],
    [],
  );

  const viewportRef = useRef(null);
  const trackRef = useRef(null);
  const draggableRef = useRef(null);

  const [activeIndex, setActiveIndex] = useState(0);

  // Slide measurements
  const measureRef = useRef({
    slideW: 0,
    maxX: 0,
    positions: [],
  });

  const clamp = (v, min, max) => Math.min(max, Math.max(min, v));

  const compute = () => {
    const viewport = viewportRef.current;
    const track = trackRef.current;
    if (!viewport || !track) return;

    const slides = Array.from(track.children);
    if (!slides.length) return;

    // Each slide takes full viewport width (1 per view)
    const slideW = viewport.clientWidth;

    // Force slide widths (so snapping stays consistent)
    slides.forEach((s) => {
      s.style.width = `${slideW}px`;
      s.style.flex = `0 0 ${slideW}px`;
    });

    const trackW = slideW * slides.length;
    track.style.width = `${trackW}px`;

    const maxX = 0;
    const minX = -(trackW - slideW); // how far left we can go
    const positions = slides.map((_, i) => -i * slideW);

    measureRef.current = {
      slideW,
      maxX,
      minX,
      positions,
    };

    // If current x is out of bounds after resize, clamp + snap
    const x = gsap.getProperty(track, "x");
    const cx = clamp(typeof x === "number" ? x : 0, minX, maxX);
    gsap.set(track, { x: cx });
    snapToIndex(activeIndex, { immediate: true });
  };

  const nearestIndexFromX = (x) => {
    const { positions } = measureRef.current;
    if (!positions?.length) return 0;

    let best = 0;
    let bestDist = Infinity;
    for (let i = 0; i < positions.length; i++) {
      const d = Math.abs(x - positions[i]);
      if (d < bestDist) {
        bestDist = d;
        best = i;
      }
    }
    return best;
  };

  const snapToIndex = (idx, { immediate = false } = {}) => {
    const track = trackRef.current;
    const { positions, minX, maxX } = measureRef.current;
    if (!track || !positions?.length) return;

    const clamped = clamp(idx, 0, positions.length - 1);
    const targetX = clamp(positions[clamped], minX, maxX);

    setActiveIndex(clamped);

    gsap.to(track, {
      x: targetX,
      duration: immediate ? 0 : 0.55,
      ease: immediate ? "none" : "power3.out",
      overwrite: true,
      onUpdate: () => {
        // keep draggable in sync while animating
        if (draggableRef.current) draggableRef.current.update();
      },
    });
  };

  useEffect(() => {
    const viewport = viewportRef.current;
    const track = trackRef.current;
    if (!viewport || !track) return;

    compute();

    // Kill old draggable if any (Hot reload safe)
    if (draggableRef.current) {
      draggableRef.current.kill();
      draggableRef.current = null;
    }

    const { minX, maxX } = measureRef.current;

    const d = Draggable.create(track, {
      type: "x",
      inertia: true, // needs InertiaPlugin
      allowNativeTouchScrolling: false,
      dragClickables: true, // allow clicking links/buttons inside
      bounds: { minX, maxX },
      edgeResistance: 0.85,
      throwResistance: 2000,
      onDragEnd: function () {
        const idx = nearestIndexFromX(this.x);
        snapToIndex(idx);
      },
      onThrowComplete: function () {
        const idx = nearestIndexFromX(this.x);
        snapToIndex(idx);
      },
    })[0];

    draggableRef.current = d;

    const onResize = () => {
      compute();
      // update draggable bounds after recompute
      const { minX: newMinX, maxX: newMaxX } = measureRef.current;
      if (draggableRef.current) {
        draggableRef.current.applyBounds({ minX: newMinX, maxX: newMaxX });
        draggableRef.current.update();
      }
    };

    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
      if (draggableRef.current) {
        draggableRef.current.kill();
        draggableRef.current = null;
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const UseCasesMobileCard = ({ title, img, description1, description2, link }) => {
    return (
      <div className="text-center w-full h-full md:px-12 px-8 space-y-[8vw] pt-[1.4vw]">
        <h4 className="md:text-4xl text-[6vw]">
          <span>{title}</span>
        </h4>

        <div className="md:w-1/2 w-2/3 mx-auto">
          <img
            width="265"
            height="176"
            loading="lazy"
            className="w-full h-full"
            src={`assets/home/${img}`}
            alt={`${title} image`}
          />
        </div>

        <div className="md:text-2xl text-lg space-y-[4vw]">
          <p>{description1}</p>
          <p>{description2}</p>
        </div>

        <div className="section-button-container">
          <LinkButton href={link} btnText="Learn More" />
        </div>
      </div>
    );
  };

  return (
    <section id="use-cases-mobile" className="lg:hidden">
      <div className="content">
        <div className="container overflow-hidden">
          <div className="section-head">
            <h2 className="title-4xl text-anim">
              <span>Master{" "}Challenges{" "}</span>
              <br />
              <span>Across{" "}Your{" "}Organization</span>
            </h2>
          </div>
        </div>

        <div className="flex items-center justify-between px-5 mt-8 relative z-[2]">
            <button
              type="button"
              className="w-10 h-auto underline"
              onClick={() => snapToIndex(activeIndex - 1)}
              disabled={activeIndex === 0}
            >
              <ChevronLeft className="w-full h-full"/>
            </button>

            <button
              type="button"
              className="w-10 h-auto underline"
              onClick={() => snapToIndex(activeIndex + 1)}
              disabled={activeIndex === useCaseData.length - 1}
            >
             <ChevronRight className="w-full h-full"/>
            </button>
          </div>

        {/* Slider */}
        <div className="-mt-12">
          <div
            ref={viewportRef}
            className="overflow-hidden w-full touch-pan-y"
          >
            <div
              ref={trackRef}
              className="flex will-change-transform cursor-grab active:cursor-grabbing"
              style={{ transform: "translate3d(0,0,0)" }}
            >
              {useCaseData.map((item) => (
                <div key={item.id} className="shrink-0">
                  <UseCasesMobileCard {...item} />
                </div>
              ))}
            </div>
          </div>

          {/* Controls (optional) */}
          
        </div>
      </div>
    </section>
  );
}
