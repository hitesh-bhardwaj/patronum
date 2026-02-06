"use client";

import Head from "next/head";
import { useEffect, useMemo, useState } from "react";
import SplitType from "split-type";
import gsap from "gsap";
import Layout from "@/components/Layout";
import Ratings from "@/components/PageComponents/HomePage/Ratings";
import Hero from "@/components/Roi/Hero";
import React from "react";
import BreakDown from "@/components/Roi/BreakDown";
import { calculateRoi } from "@/lib/roi-math";
import MetaData from "@/components/PageLayout/MetaData";
import TestimonialSmoothy from "@/components/TestimonialSmoothy";

// ✅ Small helper to inject JSON-LD only on this page
function JsonLd({ data }) {
  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

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

  // ✅ Tool schema ONLY for this page
  const TOOL_URL = "https://www.patronum.io/roi-calculator";

  const toolSchema = useMemo(
    () => ({
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "@id": `${TOOL_URL}#app`,
      name: "SaaS ROI Calculator",
      description:
        "Interactive ROI calculator to estimate time and cost savings from automating user lifecycle management in Google Workspace.",
      url: TOOL_URL,
      applicationCategory: "BusinessApplication",
      applicationSubCategory: "Calculator",
      operatingSystem: "Web",
      isAccessibleForFree: true,
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: currency, // ✅ reflect selected currency
        availability: "https://schema.org/InStock",
      },
      publisher: {
        "@type": "Organization",
        name: "Patronum",
        url: "https://www.patronum.io",
        logo: {
          "@type": "ImageObject",
          url: "https://www.patronum.io/logo.svg",
        },
      },

      // Optional: describe the inputs for better "tool" understanding
      input: [
        {
          "@type": "PropertyValueSpecification",
          name: "Employees",
          valueRequired: true,
          valueMin: 50,
          valuePattern: "^[0-9]+$",
        },
        {
          "@type": "PropertyValueSpecification",
          name: "Annual churn percentage",
          valueRequired: true,
          valueMin: 1,
          valueMax: 100,
          valuePattern: "^[0-9]+$",
        },
        {
          "@type": "PropertyValueSpecification",
          name: "Risk level",
          valueRequired: true,
        },
        {
          "@type": "PropertyValueSpecification",
          name: "Currency",
          valueRequired: true,
        },
      ],

      // Optional: include current values (lightweight)
      variableMeasured: [
        { "@type": "PropertyValue", name: "Employees", value: numericEmployees },
        { "@type": "PropertyValue", name: "ChurnPercent", value: numericChurn },
        { "@type": "PropertyValue", name: "RiskLevel", value: risk },
        { "@type": "PropertyValue", name: "Currency", value: currency },
      ],
    }),
    [TOOL_URL, currency, numericEmployees, numericChurn, risk]
  );

  const howToSchema = useMemo(
    () => ({
      "@context": "https://schema.org",
      "@type": "HowTo",
      "@id": `${TOOL_URL}#howto`,
      name: "How to use the ROI Calculator",
      description:
        "Enter employee count, churn percentage, risk level, and currency to estimate time and cost savings.",
      mainEntityOfPage: TOOL_URL,
      totalTime: "PT2M",
      tool: [{ "@type": "HowToTool", name: "SaaS ROI Calculator" }],
      step: [
        {
          "@type": "HowToStep",
          name: "Enter employee count",
          text: "Enter your total number of employees.",
        },
        {
          "@type": "HowToStep",
          name: "Enter churn percentage",
          text: "Enter your annual churn percentage.",
        },
        {
          "@type": "HowToStep",
          name: "Select risk level",
          text: "Choose low, medium, or high based on your environment.",
        },
        {
          "@type": "HowToStep",
          name: "Select currency",
          text: "Select the currency you want to view the results in.",
        },
        {
          "@type": "HowToStep",
          name: "Review results",
          text: "Review your estimated time and cost savings in the breakdown section.",
        },
      ],
    }),
    [TOOL_URL]
  );

  const breadcrumbSchema = useMemo(
    () => ({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "@id": `${TOOL_URL}#breadcrumbs`,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://www.patronum.io",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "ROI Calculator",
          item: TOOL_URL,
        },
      ],
    }),
    [TOOL_URL]
  );

  useEffect(() => {
    const headings = document.querySelectorAll(".text-anim");

    headings.forEach((heading) => {
      const ctx = gsap.context(() => {
        new SplitType(heading, { types: "words" });
        const animWord = heading.querySelectorAll(".word");

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

    const ctx = gsap.context(() => {
      fadeUps.forEach((fadeUp) => {
        gsap.fromTo(
          fadeUp,
          { opacity: 0, y: 40 },
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
      <MetaData
        title="SaaS ROI Calculator: Calculate Your Google Workspace Savings | Patronum"
        description="Maximize your IT efficiency. Use our SaaS ROI Calculator to discover how much time & money you can save by automating onboarding, offboarding, email signatures & file sharing compliance in Google Workspace. Try our free calculator now."
        date_published="2024-04-04T07:07"
        date_modified="2024-04-04T07:08"
        url="roi-calculator"
        img="homepage.jpg"
        keywords="roi calculator, saas roi, google workspace automation, onboarding automation, offboarding automation"
      />

      {/* ✅ Add NEW tool schema only on this page (MetaData stays untouched) */}
      <Head>
        <JsonLd data={toolSchema} />
        <JsonLd data={howToSchema} />
        <JsonLd data={breadcrumbSchema} />
      </Head>

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
        <TestimonialSmoothy/>
      </Layout>
    </>
  );
};

export default ROI;
