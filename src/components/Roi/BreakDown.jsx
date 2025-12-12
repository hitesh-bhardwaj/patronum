"use client";

import React, { useEffect } from "react";
import { Pie, PieChart } from "recharts";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { formatMoney, formatNumber } from "@/lib/roi-math";
import { convertCurrency } from "@/lib/currency-data";
import LinkButton from "../Buttons/LinkButton";
import gsap from "gsap";
import RoiBreakDownCards from "./RoiBreakDownCards";

function BreakDown({ roi, currency }) {
  const {
    totalSavings,
    timeSavings,
    licenseSavings,
    staffSavings,
    riskSavings,
  } = roi;

  // ✅ Convert ALL money values from USD → selected currency
  const converted = {
    totalSavings: convertCurrency(totalSavings, currency),
    timeSavings, // hours stay the same, no conversion needed
    licenseSavings: convertCurrency(licenseSavings, currency),
    staffSavings: convertCurrency(staffSavings, currency),
    riskSavings: convertCurrency(riskSavings, currency),
  };

  const summaryCards = [
    {
      id: "total-savings",
      value: formatMoney(converted.totalSavings, currency),
      title: "Total Annual Savings",
    },
    {
      id: "time-saved",
      value: `${formatNumber(converted.timeSavings)} hours`,
      title: "Time Saved Annually",
    },
  ];

  const rows = [summaryCards];

  // ✅ Pie chart also uses converted values
  const chartData = [
    {
      browser: "Compliance Risk Mitigation",
      visitors: converted.riskSavings,
      fill: "var(--color-chrome)",
    },
    {
      browser: "Staff Cost Savings",
      visitors: converted.staffSavings,
      fill: "var(--color-safari)",
    },
    {
      browser: "License Optimization",
      visitors: converted.licenseSavings,
      fill: "var(--color-firefox)",
    },
  ];

  const chartConfig = {
    chrome: {
      label: "Compliance Risk Mitigation",
      color: "#FFBB32",
    },
    safari: {
      label: "Staff Cost Savings",
      color: "#1069DF",
    },
    firefox: {
      label: "License Optimization",
      color: "#FE002F",
    },
  };

  const handleScrollToBreakdown = (e) => {
    if (e && e.preventDefault) e.preventDefault();
    const el = document.getElementById("breakdown");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".linkbtn", {
        yPercent: 20,
        opacity: 0,
        duration: 0.8,
        delay: 0.6,
        ease: "power2.out",
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <>
      {/* SUMMARY CARDS */}
      <section
        className="lg:min-h-fit lg:pb-[7%] lg:py-0 py-[10%] pb-[7%] lg:h-full w-screen h-fit flex items-center text-[#111111]"
        id="roi"
      >
        <div className="flex flex-col items-end w-full container-lg lg:px-[5vw] lg:gap-[3vw] gap-[7vw]">
          <div className="w-fit linkbtn">
            <LinkButton
              btnText="View Details"
              href="#breakdown"
              onClick={handleScrollToBreakdown}
            />
          </div>

          <div className="w-full flex flex-col gap-[2vw] fadeUp">
            {rows.map((row, rowIndex) => (
              <div
                key={rowIndex}
                className="flex lg:flex-row flex-col lg:gap-[2vw] gap-[4vw] w-full "
              >
                {row.map((card) => (
                  <RoiBreakDownCards
                    key={card.id}
                    value={card.value}
                    title={card.title}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BREAKDOWN + PIE */}
      <section
        className="lg:min-h-fit lg:h-full w-screen h-fit flex items-center text-[#111111] lg:pb-[7%] lg:py-0 py-[15%]"
        id="breakdown"
      >
        <div className="w-full flex lg:flex-row flex-col justify-between container-lg lg:px-[5vw] h-full items-center ">
          <div className="lg:w-[45%] lg:space-y-[4vw] space-y-[10vw]">
            <h2 className="title-4xl text-anim">
              <span>Savings breakdown</span>
            </h2>

            <div className="w-full lg:space-y-[2vw] space-y-[4vw]">
              {/* Risk */}
              <div className="w-full h-fit lg:rounded-[0.8vw] rounded-[2.5vw] bg-white/40 backdrop-blur-md border border-black/10 lg:p-[2vw] p-[4vw] flex flex-col justify-between lg:py-[10%] lg:gap-[2vw] gap-[6vw] fadeUp">
                <p className="text-4xl font-head">
                  {formatMoney(converted.riskSavings, currency)}
                </p>
                <div className="lg:space-y-[1vw] space-y-[4vw]">
                  <h3 className="title-3xl">Compliance Risk Mitigation</h3>
                  <p className="lg:text-[1.25vw] text-[4vw] font-medium">
                    Value of avoiding compliance violations, data breaches, and
                    misconfigurations across your user lifecycle.
                  </p>
                </div>
              </div>

              {/* Staff */}
              <div className="w-full h-fit lg:rounded-[0.8vw] rounded-[2.5vw] bg-white/40 backdrop-blur-md border border-black/10 lg:p-[2vw] p-[4vw] flex flex-col justify-between py-[10%] lg:gap-[2vw] gap-[6vw] fadeUp">
                <p className="text-4xl font-head">
                  {formatMoney(converted.staffSavings, currency)}
                </p>
                <div className="lg:space-y-[1vw] space-y-[4vw]">
                  <h3 className="title-3xl">Staff Cost Savings</h3>
                  <p className="lg:text-[1.25vw] text-[4vw] font-medium">
                    IT and HR hours reclaimed by automating provisioning,
                    deprovisioning, and policy enforcement per churned user.
                  </p>
                </div>
              </div>

              {/* License */}
              <div className="w-full h-fit lg:rounded-[0.8vw] rounded-[2.5vw] bg-white/40 backdrop-blur-md border border-black/10 lg:p-[2vw] p-[4vw] flex flex-col justify_between py-[10%] lg:gap-[2vw] gap-[6vw] fadeUp">
                <p className="text-4xl font-head">
                  {formatMoney(converted.licenseSavings, currency)}
                </p>
                <div className="lg:space-y-[1vw] space-y-[4vw]">
                  <h3 className="title-3xl">License Optimization</h3>
                  <p className="lg:text-[1.25vw] text-[4vw] font-medium">
                    Direct savings from reclaiming unused SaaS licenses tied to
                    churned users instead of paying for shelfware.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* PIE CHART */}
          <div className="lg:w-[50%] h-full w-full ">
            <ChartContainer
              config={chartConfig}
              className="mx-auto aspect-square max-h-[550px] fadeUp"
            >
              <PieChart>
                <ChartTooltip
                  cursor={false}
                  content={<ChartTooltipContent hideLabel />}
                />
                <Pie data={chartData} dataKey="visitors" nameKey="browser" />
              </PieChart>
            </ChartContainer>

            <div className="w-full flex lg:gap-[2vw] gap-x-[5vw] gap-y-[4vw] flex-wrap justify-center mt-4">
              <div className="flex gap-[0.5vw] items-center fadeUp">
                <div className="w-4 h-4 bg-[#FFBB32] rounded-full" />
                Compliance Risk Mitigation
              </div>
              <div className="flex gap-[0.5vw] items-center fadeUp">
                <div className="w-4 h-4 bg-[#1069DF] rounded-full" />
                Staff Cost Savings
              </div>
              <div className="flex gap-[0.5vw] items-center fadeUp">
                <div className="w-4 h-4 bg-[#FE002F] rounded-full" />
                License Optimization
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default BreakDown;
