import { useEffect, useState } from "react";
import SplitType from "split-type";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { NextSeo } from "next-seo";

import Hero from '@/components/PageComponents/HomePage/Hero';
import Features from '@/components/PageComponents/HomePage/Features';
import About from '@/components/PageComponents/HomePage/About';
import UseCases from '@/components/PageComponents/HomePage/UseCases';
import Faqs from '@/components/PageComponents/HomePage/Faqs';
import Pricing from '@/components/PageComponents/HomePage/Pricing';
import Testimonial from '@/components/PageLayout/Testimonial';
import RelatedPosts from "@/components/PageComponents/BlogPage/RelatedPosts";

import { getHomePagePosts } from '@/lib/posts';
import UseCasesMobile from "@/components/PageComponents/HomePage/UseCasesMobile";
import SideMenu from "@/components/SideMenu";
import Head from "next/head";
import Ratings from "@/components/PageComponents/HomePage/Ratings";
import Layout from "@/components/Layout";
import { useDevice } from "@/utils/useDevice";

gsap.registerPlugin(ScrollTrigger);

export default function Home({ recentPosts }) {
  const { isDesktop } = useDevice();
  const [isClient, setIsClient] = useState(false);
  const [showSideMenu, setShowSideMenu] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const checkScreenSize = () => {
      setShowSideMenu(window.innerWidth > 1024);
    };
    // Check on mount
    checkScreenSize();
    // Add event listener
    window.addEventListener('resize', checkScreenSize);
    // Cleanup event listener
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const sections = [
    { id: '#hero', name: 'Introduction' },
    { id: '#features', name: 'Features' },
    { id: '#use-cases', name: 'Use Cases' },
    { id: '#pricing', name: 'Pricing' },
    { id: '#about', name: 'About' },
    { id: '#blogs', name: 'Blog' },
    { id: "#faqs", name: "FAQ's" },
  ];

  useEffect(() => {
    const headings = document.querySelectorAll('.text-anim');

    headings.forEach((heading) => {
      let ctx = gsap.context(() => {
        const textAnim = new SplitType(heading, { types: 'words' });
        let animWord = heading.querySelectorAll('.word');

        gsap.from(animWord, {
          scrollTrigger: {
            trigger: heading,
            start: 'top 80%',
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
    const fadeUps = document.querySelectorAll('.fadeUp');

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
            ease: 'Power3.out',
            scrollTrigger: {
              trigger: fadeUp,
              start: 'top 85%',
            },
          }
        );
      });
    });
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const pricingCards = document.querySelectorAll('.pricing-card-wrapper .pricing-card');
    // Ensure GSAP library is imported and available
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".pricing-card-wrapper",
        start: "top 85%",
      }
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
        ease: 'Power2.out',
      }
    );
  }, []);

  useEffect(() => {
    const blogCards = document.querySelectorAll('.blog-card-wrapper .blog-cards');
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".blog-card-wrapper",
        start: "top 85%",
      }
    });

    tl.fromTo(
      blogCards,
      {
        opacity: 0,
        y: 100,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: 'Power2.out',
      }
    );
  }, []);

  useEffect(() => {
    const fadeRights = document.querySelectorAll('.fadeRight');

    let ctx = gsap.context(() => {
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
            ease: 'Power3.out',
            scrollTrigger: {
              trigger: fadeRight,
              start: 'top 85%',
            },
          }
        );
      });
    });
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const lineDraws = document.querySelectorAll('.lineDraw');

    let ctx = gsap.context(() => {
      lineDraws.forEach((lineDraw) => {
        gsap.fromTo(
          lineDraw,
          {
            scaleX: 0,
            transformOrigin: 'left'
          },
          {
            scaleX: 1,
            duration: 1,
            ease: 'Power4.out',
            scrollTrigger: {
              trigger: lineDraw,
              start: 'top 90%',
            },
          }
        );
      });
    });
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const scaleAnims = document.querySelectorAll('.scaleAnim');

    let ctx = gsap.context(() => {
      scaleAnims.forEach((scaleAnim) => {
        gsap.fromTo(
          scaleAnim,
          {
            scale: 1.1,
            y: 40,
            opacity: 0,
            transformOrigin: 'bottom center'
          },
          {
            y: 0,
            scale: 1,
            opacity: 1,
            duration: 0.8,
            ease: 'Power4.out',
            scrollTrigger: {
              trigger: scaleAnim,
              start: 'top bottom',
              end: 'bottom 85%',
            },
          }
        );
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <>
      <NextSeo
        title="Patronum - Best Platform for Google Workspace (GSuite) Management"
        description="Patronum provides a better way to manage Google Workspace (GSuite). Patronum is your Google Workspace (GSuite) manager that fully automates all administrator and user tasks to ensure an efficient, effective, and secure process."
        openGraph={{
          url: "https://www.patronum.io",
          title: "Patronum - Best Platform for Google Workspace (GSuite) Management",
          "description": "Patronum provides a better way to Google Workspace (GSuite) Management. Patronum fully automates all the administrator and user tasks to ensure an efficient, effective and secure process.",
          images: [
            {
              url: "https://www.patronum.io/assets/seo/homepage.jpg",
              width: 1200,
              height: 630,
              alt: "Patronum",
              type: "image/png",
            },
          ],
          siteName: "Patronum",
        }}

        additionalMetaTags={[
          {
            name: "twitter:title",
            content: "Patronum - Best Platform for Google Workspace (GSuite) Management"
          },
          {
            name: "twitter:description",
            content: "Patronum provides a better way to Google Workspace (GSuite) Management. Patronum fully automates all the administrator and user tasks to ensure an efficient, effective and secure process."
          },
          {
            name: "twitter:image",
            content: "https://www.patronum.io/assets/seo/homepage.jpg"
          },
        ]}
      />
      <Head>
        <link rel="canonical" href="https://www.patronum.io" />
        <link rel="alternate" href="https://www.patronum.io" hreflang="x-default" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              {
                "@context": "https://schema.org",
                "@type": "WebPage",
                "@id": "https://www.patronum.io/#webpage",
                "url": "https://www.patronum.io",
                "name": "Patronum - Best Platform for Google Workspace (GSuite) Management",
                "description": "Patronum provides a better way to Google Workspace (GSuite) Management. Patronum fully automates all the administrator and user tasks to ensure an efficient, effective and secure process.",
                "datePublished": "2020-12-21T12:01:00+00:00",
                "dateModified": "2024-04-04T12:00:00+00:00",
                "publisher": {
                  "@type": "Organization",
                  "name": "Patronum",
                  "logo": {
                    "@type": "ImageObject",
                    "url": "https://www.patronum.io/logo.svg",
                  }
                },
                "about": {
                  "@id": "https://www.patronum.io/#organization"
                },
                "isPartOf": {
                  "@id": "https://www.patronum.io/#website"
                },
                "inLanguage": "en_US",
              }
            ),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              {
                "@context": "https://schema.org",
                "@type": "Article",
                "headline": "Patronum - Best Platform for Google Workspace (GSuite) Management",
                "keywords": "Patronum,Google Workspace,GSuite Management",
                "@id": "https://www.patronum.io/#richSnippet",
                "datePublished": "2020-12-21T12:01:00+00:00",
                "dateModified": "2024-04-04T12:00:00+00:00",
                "url": "https://www.patronum.io",
                "name": "Patronum - Best Platform for Google Workspace (GSuite) Management",
                "description": "Patronum provides a better way to Google Workspace (GSuite) Management. Patronum fully automates all the administrator and user tasks to ensure an efficient, effective and secure process.",
                "author": {
                  "name": "Patronum",
                  "@id": "https://www.patronum.io/admin/",
                },
                "publisher": {
                  "@id": "https://www.patronum.io/#organization"
                },
                "mainEntityOfPage": {
                  "@id": "https://www.patronum.io/#webpage"
                },
                "image": {
                  "@id": "https://www.patronum.io/assets/seo/homepage.jpg",
                },
                "isPartOf": {
                  "@id": "https://www.patronum.io/#website"
                },
                "inLanguage": "en_US",
              }
            ),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              {
                "@context": "https://schema.org",
                "@type": "FAQPage",
                "mainEntity": [{
                  "@type": "Question",
                  "name": "What Measures Does Patronum Take to Ensure Data Security?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Data security is our top priority. Patronum employs state-of-the-art encryption and compliance practices to protect your information. Our platform is built on Google Cloud's secure infrastructure, with regular audits and updates to stay ahead of potential threats, ensuring your data remains safe and compliant with global standards."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How Quickly Can Patronum Be Implemented Across an Organization?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Patronum is designed for quick and easy implementation. Most organizations can start using Patronum within a few hours to a couple of days, depending on the complexity of their Google Workspace environment and specific setup requirements. Our support team is always on hand to guide you through."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How User-Friendly is Patronum for Non-Technical Users?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Patronum is designed with simplicity in mind, making it accessible for users with any level of technical expertise. Our intuitive interface, built using Google Material Design, ensures a seamless experience that mirrors the Google Workspace environment, making navigation and operation straightforward for all users."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Can Patronum be Customised to Fit Specific Organizational Needs?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Absolutely. Patronum offers a range of customization options to align with your organization's unique processes and workflows. From custom schema for user attributes to tailored onboarding and offboarding flows, Patronum can be configured to support your specific requirements, enhancing efficiency and productivity."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What Automation Features Does Patronum Offer?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Patronum brings a high degree of automation to Google Workspace management, streamlining tasks such as user onboarding/offboarding, email signature updates, and resource allocation. These automated processes reduce manual effort, minimize errors, and ensure a consistent experience for all users across your organization."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How Does Patronum Enhance Collaboration Within Teams?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "By organizing users into appropriate Google Groups and managing access permissions efficiently, Patronum facilitates smoother collaboration and information sharing. Our features enable teams to connect and work together more effectively, leveraging shared resources and communication tools integrated within Google Workspace."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Is There Support Available for Patronum Users?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, comprehensive support is a cornerstone of the Patronum experience. We offer detailed guides, a responsive customer service team, and a wealth of online resources to ensure you can maximize the benefits of Patronum. Whether you're seeking technical assistance or need advice on best practices, our team is ready to help."
                  }
                }]
              }
            )
          }} />

      </Head>
      {showSideMenu && <SideMenu sections={sections} />}
      <Layout>
        <main>
          <Hero />
          <Ratings />
          <Features />
          {isClient && (
            <>
              {isDesktop ? (
                <UseCases />
              ) : (
                <UseCasesMobile />
              )}
            </>
          )}
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