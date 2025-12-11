import { useEffect, useMemo, useState } from "react";
import SplitType from "split-type";
import gsap from "gsap";
// import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Layout from "@/components/Layout";
import Ratings from "@/components/PageComponents/HomePage/Ratings";
import Testimonial from "@/components/PageLayout/Testimonial";
import Hero from "@/components/Roi/Hero";
import React from "react";
import BreakDown from "@/components/Roi/BreakDown";
import { calculateRoi } from "@/lib/roi-math";

const ROI = () => {
  const [employees, setEmployees] = useState("150");
  const [churn, setChurn] = useState("5");
  const [risk, setRisk] = useState("medium"); // "low" | "medium" | "high"
  const [currency, setCurrency] = useState("USD"); // "USD" | "GBP" | "EUR" | "AUD"

  const numericEmployees = useMemo(
    () => Math.max(50, parseInt(employees, 10) || 0),
    [employees]
  );

  const numericChurn = useMemo(
    () => Math.max(1, parseInt(churn, 10) || 0),
    [churn]
  );

  const roi = useMemo(
    () =>
      calculateRoi({
        employees: numericEmployees,
        churnPercent: numericChurn,
        riskLevel: risk,
      }),
    [numericEmployees, numericChurn, risk]
  );
  useEffect(() => {
    const headings = document.querySelectorAll(".text-anim");

    headings.forEach((heading) => {
      let ctx = gsap.context(() => {
        const textAnim = new SplitType(heading, { types: "words" });
        let animWord = heading.querySelectorAll(".word");

        gsap.from(animWord, {
          scrollTrigger: {
            trigger: heading,
            start: "top 80%",
          },
          duration: 0.6,
          yPercent: 100,
          stagger: 0.04,
        });
      });
      return () => ctx.revert();
    });
  }, []);

  useEffect(() => {
    const fadeUps = document.querySelectorAll(".fadeUp");

    let ctx = gsap.context(() => {
      fadeUps.forEach((fadeUp) => {
        gsap.fromTo(
          fadeUp,
          {
            opacity: 0,
            y: 40,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "Power3.out",
            scrollTrigger: {
              trigger: fadeUp,
              start: "top 85%",
            },
          }
        );
      });
    });
    return () => ctx.revert();
  }, []);
  return (
    <>
      <Layout>
        <Hero
          employees={employees}
          setEmployees={setEmployees}
          churn={churn}
          setChurn={setChurn}
          risk={risk}
          setRisk={setRisk}
          currency={currency}
          setCurrency={setCurrency}
        />

        <BreakDown roi={roi} currency={currency} />
        <Ratings />
        <Testimonial />
      </Layout>
    </>
  );
};

export default ROI;
