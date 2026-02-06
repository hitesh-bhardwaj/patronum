import Layout from "@/components/Layout";
import Features from "@/components/PageComponents/CommunityPage/Features";
import Group from "@/components/PageComponents/CommunityPage/Group";
import Hero from "@/components/PageComponents/CommunityPage/Hero";
import Hosting from "@/components/PageComponents/CommunityPage/Hosting";
import JoinCommunity from "@/components/PageComponents/CommunityPage/JoinCommunity";
import Network from "@/components/PageComponents/CommunityPage/Network";
import UpcomingWebinars from "@/components/PageComponents/CommunityPage/UpcomingWebinars";
import Webinars from "@/components/PageComponents/CommunityPage/Webinars";
import Faqs from "@/components/PageComponents/FeaturesPage/Faq";
import React, { useEffect } from "react";
import SplitType from "split-type";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import MetaData from "@/components/PageLayout/MetaData";
import TestimonialSmoothy from "@/components/TestimonialSmoothy";
gsap.registerPlugin(ScrollTrigger);

const page = () => {
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

    const pricingCards = document.querySelectorAll(
      ".pricing-card-wrapper .pricing-card",
    );
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".pricing-card-wrapper",
        start: "top 85%",
      },
    });

    tl.fromTo(
      pricingCards,
      {
        opacity: 0,
        y: 100,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "Power2.out",
      },
    );

    const fadeRights = document.querySelectorAll(".fadeRight");

    fadeRights.forEach((fadeRight) => {
      gsap.fromTo(
        fadeRight,
        {
          opacity: 0,
          x: 100,
        },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          stagger: 0.05,
          ease: "Power3.out",
          scrollTrigger: {
            trigger: fadeRight,
            start: "top 85%",
          },
        },
      );
    });

    const scaleAnims = document.querySelectorAll(".scaleAnim");

    scaleAnims.forEach((scaleAnim) => {
      gsap.fromTo(
        scaleAnim,
        {
          scale: 1.1,
          y: 40,
          opacity: 0,
          transformOrigin: "bottom center",
        },
        {
          y: 0,
          scale: 1,
          opacity: 1,
          duration: 0.8,
          ease: "Power4.out",
          scrollTrigger: {
            trigger: scaleAnim,
            start: "top bottom",
            end: "bottom 85%",
          },
        },
      );
    });

    const fadeUps = document.querySelectorAll(".fadeUp");

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
        },
      );
    });
  }, []);
  return (
    <>
      <MetaData
        title="Google Workspace Community: Webinars, Networking & Insights | Patronum"
        description="Join Patronum's exclusive Google Workspace Community for IT admins and partners. Access free webinars, expert discussions, real-world solutions, and networking opportunities to optimize your Workspace management. Sign up today!"
        url="google-workspace-community"
        img={"google-workspace-community.png"}
        date_published="2025-09-10T12:00"
        date_modified="2025-09-10T12:00"
        keywords={"Patronum,Google Workspace Community"}
      />
      <Layout>
        <main>
          <Hero />
          <Network />
          <Webinars />
          <UpcomingWebinars />
          <Features />
          <TestimonialSmoothy/>
          <JoinCommunity />
          <Group />
          <Hosting />
          <Faqs featureName={"community"} />
        </main>
      </Layout>
    </>
  );
};

export default page;
