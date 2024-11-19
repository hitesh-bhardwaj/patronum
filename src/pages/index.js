import { useEffect, useState } from "react";
import Hero from '@/components/PageComponents/HomePage/Hero';
import Features from '@/components/PageComponents/HomePage/Features';
import About from '@/components/PageComponents/HomePage/About';
import Pricing from '@/components/PageComponents/HomePage/Pricing';

import { getHomePagePosts } from '@/lib/posts';
import UseCasesMobile from "@/components/PageComponents/HomePage/UseCasesMobile";
import Ratings from "@/components/PageComponents/HomePage/Ratings";
import Layout from "@/components/Layout";
import { useDevice } from "@/utils/useDevice";
import { fadeRight, fadeUp, lineAnim, titleAnim } from "@/utils/gsapAnimations";

import dynamic from "next/dynamic";
import MetaData from "@/components/PageComponents/HomePage/MetaData";

const SideMenu = dynamic(() => import("@/components/SideMenu", {ssr: false}));
const UseCases = dynamic(() => import("@/components/PageComponents/HomePage/UseCases", {ssr: false}));
const Faqs = dynamic(() => import("@/components/PageComponents/HomePage/Faqs", {ssr: false}));
const RelatedPosts = dynamic(() => import("@/components/PageComponents/BlogPage/RelatedPosts", {ssr: false}));
const Testimonial = dynamic(() => import("@/components/PageLayout/Testimonial", {ssr: false}));

export default function Home({ recentPosts }) {
  const { isDesktop } = useDevice();
  const [isClient, setIsClient] = useState(false);

  const sections = [
    { id: '#hero', name: 'Introduction' },
    { id: '#features', name: 'Features' },
    { id: '#use-cases', name: 'Use Cases' },
    { id: '#pricing', name: 'Pricing' },
    { id: '#about', name: 'About' },
    { id: '#blogs', name: 'Blog' },
    { id: "#faqs", name: "FAQ's" },
  ];

  titleAnim();
  lineAnim();
  fadeUp();
  fadeRight();

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <>
      <MetaData />
      {isClient && isDesktop && <SideMenu sections={sections} />}
      <Layout>
        <main>
          <Hero />
          <Ratings />
          <Features />
          <div className="xl:h-[5000px] lg:h-[6000px] h-full">
            {isClient && (
              <>
                {isDesktop ? (
                  <UseCases />
                ) : (
                  <UseCasesMobile />
                )}
              </>
            )}
          </div>
          <Pricing />
          <About />
          <Testimonial />
          <RelatedPosts
            sectionPara={"Discover a World of Knowledge with Expert Tips, In-Depth Tricks, Latest News, and Comprehensive Resources for Mastering Google Workspace."}
            recentPosts={recentPosts}
            sectionTitle={"Our Latest Blogs"}
          />
          <Faqs />
        </main>
      </Layout>
    </>
  );
}

export async function getStaticProps() {

  const recentPosts = await getHomePagePosts();

  return {
    props: {
      recentPosts,
    },
    revalidate: 500,
  };
}