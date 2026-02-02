"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import LinkButton from "../Buttons/LinkButton";

function Hero({
  employees,
  setEmployees,
  churn,
  setChurn,
  risk,
  setRisk,
  currency,
  setCurrency,
}) {
  const section = useRef(null);
  const para = useRef(null);

  // EMPLOYEES
  const handleEmployeesChange = (e) => setEmployees(e.target.value);

  const handleEmployeesBlur = () => {
    const val = parseInt(employees, 10);
    if (Number.isNaN(val) || val < 50) setEmployees("50");
    else setEmployees(String(val));
  };

  const incrementEmployees = () => {
    const val = parseInt(employees, 10) || 50;
    setEmployees(String(val + 50));
  };

  const decrementEmployees = () => {
    const val = parseInt(employees, 10) || 50;
    setEmployees(String(Math.max(50, val - 50)));
  };

  // CHURN
  const handleChurnChange = (e) => setChurn(e.target.value);

  const handleChurnBlur = () => {
    const val = parseInt(churn, 10);
    if (Number.isNaN(val) || val < 1) setChurn("1");
    else setChurn(String(val));
  };

  const incrementChurn = () => {
    const val = parseInt(churn, 10) || 1;
    setChurn(String(val + 1));
  };

  const decrementChurn = () => {
    const val = parseInt(churn, 10) || 1;
    setChurn(String(Math.max(1, val - 1)));
  };

  const handleScrollToBreakdown = (e) => {
    // if LinkButton renders an <a>, prevent navigation jump
    if (e && e.preventDefault) e.preventDefault();
    const el = document.getElementById("breakdown");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // GSAP animation
  useEffect(() => {
    const isFirstTimeLoading =
      typeof window !== "undefined" &&
      window.sessionStorage.getItem("hasVisited") === null;

    const delay = isFirstTimeLoading ? 3.4 : 0.6;

    const ctx = gsap.context(() => {
      const heroPara = para.current;
      if (!heroPara) return;

      const tl = gsap.timeline();

      tl.fromTo(
        ".hero-anim .span",
        { yPercent: 105 },
        {
          yPercent: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "power2.out",
        },
        `+=${delay}`,
      )
        .fromTo(
          heroPara,
          {
            yPercent: 30,
            opacity: 0,
          },
          {
            yPercent: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power2.out",
          },
          "-=0.6",
        )
        .from(
          ".hero-button-anim",
          {
            y: 30,
            opacity: 0,
            duration: 0.8,
            ease: "power2.out",
          },
          "-=0.6",
        )
        .fromTo(
          ".hero-svg-circle",
          { strokeDasharray: "0% 300%" },
          {
            strokeDasharray: "310% 300%",
            duration: 1.5,
            ease: "power2.out",
          },
          "-=0.8",
        )
        .from(
          ".scroll-img-container",
          {
            y: -10,
            opacity: 0,
            duration: 0.8,
          },
          "-=0.5",
        )
        .fromTo(
          ".hero-img",
          {
            x: 100,
            opacity: 0,
          },
          {
            x: 0,
            opacity: 1,
            duration: 2,
            ease: "expo.out",
          },
          "-=2",
        );
      gsap.from(".calculater,.linkbtn", {
        yPercent: 20,
        opacity: 0,
        duration: 0.8,
        delay: 0.6,
        ease: "power2.out",
      });
    }, section);

    if (isFirstTimeLoading && typeof window !== "undefined") {
      window.sessionStorage.setItem("hasVisited", "true");
    }

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={section}
      id="hero"
      className="lg:h-[80vh] lg:py-[10%] w-screen h-fit flex items-center"
    >
      <div className="container-lg lg:px-[7vw] relative lg:mb-0 mb-[10vw]">
        <div className="flex lg:flex-row lg:justify-between lg:gap-[4vw] flex-col gap-[8vw]">
          {/* LEFT SECTION */}
          <div className="w-full lg:w-[40%] flex flex-col gap-y-10 pt-[25vw] md:pt-[20vw] lg:pt-0">
            <h1 className="title-4xl hero-anim flex gap-[2vw] lg:gap-0 flex-wrap items-end">
              <div className="overflow-hidden">
                <span className="span block"> Quantify Your Google Workspace Efficiency</span>
              </div>
            </h1>

            <p
              ref={para}
              className="lg:text-[1.25vw] text-[5vw] md:text-[4vw] font-medium"
            >
              Stop guessing your IT costs. Use our interactive calculator to see
              how much time, risk, and budget you can recover with Patronum’s
              automated management.
            </p>
          </div>

          {/* RIGHT SECTION – inputs */}
          <div className="flex flex-col lg:gap-[0.5vw] gap-[4vw] calculater items-end">
            <div className="flex flex-col lg:flex-row lg:gap-[0.5vw] gap-[4vw] w-full ">
              {/* EMPLOYEES CARD */}
              <div className="lg:w-[22vw] lg:h-[13vw]  w-full h-[40vw] lg:rounded-[2.2vw] rounded-[4vw] border border-black/10 bg-white/40 backdrop-blur-md lg:p-[2vw] lg:pb-[2vw] p-[4vw] pb-[7vw] flex flex-col justify-between">
                <div className="flex justify-between">
                  <div>
                    <h3 className="lg:text-xl text-xl font-medium md:text-4xl">
                      Number of employees
                    </h3>
                    <p className="lg:text-sm text-sm text-black/60 md:text-xl">
                      (minimum 50)
                    </p>
                  </div>
                  <div className="lg:w-[2.5vw] lg:h-[2.5vw] w-[7vw] h-[7vw]">
                    <Image
                      src="/assets/roi/no-employees.svg"
                      alt="emp"
                      className="w-full h-full"
                      width={40}
                      height={40}
                    />
                  </div>
                </div>

                <div className="flex items-center gap-3 border-b border-black/30 lg:pb-[1vw] pb-[2vw]">
                  <Input
                    type="number"
                    value={employees}
                    onChange={handleEmployeesChange}
                    onBlur={handleEmployeesBlur}
                    className="text-start text-lg font-body font-medium border-none bg-transparent pl-0"
                  />

                  <div className="flex lg:gap-[0.5vw] gap-[2vw]">
                    <Button
                      type="button"
                      variant="outline"
                      size="icon"
                      className="rounded-full lg:w-[2.5vw] lg:h-[2.5vw] lg:p-[1vw] md:w-[8vw] md:h-[8vw]"
                      onClick={decrementEmployees}
                    >
                      <div className="lg:text-2xl text-2xl md:text-4xl">-</div>
                    </Button>
                    <Button
                      type="button"
                      variant="outline"
                      onClick={incrementEmployees}
                      size="icon"
                      className="rounded-full lg:w-[2.5vw] lg:h-[2.5vw] lg:p-[1vw] md:w-[8vw] md:h-[8vw]"
                    >
                      <div className="lg:text-2xl text-2xl md:text-4xl">+</div>
                    </Button>
                  </div>
                </div>
              </div>

              {/* CHURN CARD */}
              <div className="lg:w-[22vw] lg:h-[13vw]  w-full h-[40vw] lg:rounded-[2.2vw] rounded-[4vw] border border-black/10 bg-white/40 backdrop-blur-md lg:p-[2vw] lg:pb-[2vw] p-[4vw] pb-[7vw] flex flex-col justify-between">
                <div className="flex justify-between">
                  <div>
                    <h3 className="lg:text-xl text-xl font-medium md:text-4xl">
                      Annual staff churn (%)
                    </h3>
                    <p className="lg:text-sm text-sm text-black/60 md:text-xl">
                      (minimum 1%)
                    </p>
                  </div>
                  <div className="lg:w-[1.5vw] lg:h-[2.5vw] w-[6vw] h-[6vw]">
                    <Image
                      src="/assets/roi/churn-rate.svg"
                      alt="churn"
                      className="w-full h-full"
                      width={40}
                      height={40}
                    />
                  </div>
                </div>

                <div className="flex items-center gap-3 border-b border-black/30 lg:pb-[1vw] pb-[2vw] ">
                  <Input
                    type="number"
                    value={churn}
                    onChange={handleChurnChange}
                    onBlur={handleChurnBlur}
                    className="text-start text-lg font-body font-medium border-none bg-transparent pl-0"
                  />

                  <div className="flex lg:gap-[0.5vw] gap-[2vw]">
                    <Button
                      onClick={decrementChurn}
                      type="button"
                      variant="outline"
                      size="icon"
                      className="rounded-full lg:w-[2.5vw] lg:h-[2.5vw] lg:p-[1vw] md:w-[8vw] md:h-[8vw]"
                    >
                      <div className="lg:text-2xl text-2xl md:text-4xl">-</div>
                    </Button>
                    <Button
                      onClick={incrementChurn}
                      type="button"
                      variant="outline"
                      size="icon"
                      className="rounded-full lg:w-[2.5vw] lg:h-[2.5vw] lg:p-[1vw] md:w-[8vw] md:h-[8vw]"
                    >
                      <div className="lg:text-2xl text-2xl md:text-4xl">+</div>
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row lg:gap-[0.5vw] gap-[4vw] w-full">
              {/* COMPLIANCE RISK */}
              <div className="lg:w-[22vw] lg:h-[13vw]  w-full h-[40vw] lg:rounded-[2.2vw] rounded-[4vw] border border-black/10 bg-white/40 backdrop-blur-md lg:p-[2vw] lg:pb-[2vw] p-[4vw] pb-[7vw] flex flex-col justify-between">
                <div className="w-full flex justify-between">
                  <div>
                    <h3 className="lg:text-xl text-xl font-medium md:text-4xl">
                      Compliance risk level
                    </h3>
                  </div>
                  <div className="lg:w-[2.5vw] lg:h-[2.5vw] w-[7vw] h-[7vw]">
                    <Image
                      src="/assets/roi/compiliance.svg"
                      alt="compliance"
                      className="w-full h-full"
                      width={40}
                      height={40}
                    />
                  </div>
                </div>

                <div className="select risk font-body mt-[1.5vw]">
                  <Select value={risk} onValueChange={(v) => setRisk(v)}>
                    <SelectTrigger className="w-full border-b border-black/30 rounded-none px-0 bg-transparent text-lg md:text-3xl lg:text-lg font-medium">
                      <SelectValue placeholder="Select risk level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="low">Low</SelectItem>
                      <SelectItem value="medium">Medium</SelectItem>
                      <SelectItem value="high">High</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* CURRENCY */}
              <div className="lg:w-[22vw] lg:h-[13vw]  w-full h-[40vw] lg:rounded-[2.2vw] rounded-[4vw] border border-black/10 bg-white/40 backdrop-blur-md lg:p-[2vw] lg:pb-[2vw] p-[4vw] pb-[7vw] flex flex-col justify-between">
                <div className="flex justify-between">
                  <div>
                    <h3 className="lg:text-xl text-xl font-medium md:text-4xl">
                      Currency
                    </h3>
                  </div>
                  <div className="lg:w-[2vw] lg:h-[2.5vw] w-[7vw] h-[7vw]">
                    <Image
                      src="/assets/roi/currency.svg"
                      alt="currency"
                      className="w-full h-full"
                      width={40}
                      height={40}
                    />
                  </div>
                </div>

                <div className="select currency font-body mt-[1.5vw]">
                  <Select
                    value={currency}
                    onValueChange={(v) => setCurrency(v)}
                  >
                    <SelectTrigger className="w-full border-b border-black/30 rounded-none px-0 bg-transparent text-lg md:text-3xl lg:text-lg font-medium">
                      <SelectValue placeholder="Select currency" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="USD">USD ($)</SelectItem>
                      <SelectItem value="GBP">GBP (£)</SelectItem>
                      <SelectItem value="EUR">EUR (€)</SelectItem>
                      <SelectItem value="AUD">AUD (A$)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
            <div className="w-fit mt-6">
              <LinkButton
                btnText="View Details"
                href="#breakdown"
                onClick={handleScrollToBreakdown}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
