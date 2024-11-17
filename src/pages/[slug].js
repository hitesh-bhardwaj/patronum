import React, { useState, useEffect } from "react";
import { format } from 'date-fns';

import { getApolloClient } from '@/lib/apollo-client';
import { QUERY_ALL_POST_SLUGS } from '@/data/posts';
import { getPostBySlug, getHomePagePosts } from '@/lib/posts';
import BlogLayout from "@/components/PageComponents/BlogPage/BlogLayout";

import { unified } from 'unified';
import rehypeParse from 'rehype-parse';
import rehypeStringify from 'rehype-stringify';
import { visit } from 'unist-util-visit';
import parameterize from 'parameterize';

import styles from '@/styles/blog.module.css';

import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import ScrollToPlugin from 'gsap/dist/ScrollToPlugin';
import Head from "next/head";
import { NextSeo } from "next-seo";
import dynamic from "next/dynamic";

const ProgressBar = dynamic(() => import("@/components/PageComponents/BlogPage/ProgressBar"), { ssr: false });
const RelatedPosts = dynamic(() => import("@/components/PageComponents/BlogPage/RelatedPosts"), { ssr: false });

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

function PostDetail({ post, recentPosts }) {

  const [activeSection, setActiveSection] = useState(null);

  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    const targetPosition = targetElement.offsetTop;
    gsap.to(window, {
      duration: 1.5,
      scrollTo: { y: targetPosition, offsetY: 130, autoKill: true },
      ease: "power3.inOut",
    });
  };

  if (!post) {
    return <div>Loading...</div>;
  }

  const formattedDate = format(new Date(post.date), 'MMMM dd, yyyy');

  const toc = [];

  const content = unified()
    .use(rehypeParse, {
      fragment: true,
    })
    .use(() => {
      return (tree) => {
        visit(tree, 'element', function (node) {
          if (node.tagName === 'h2') {
            const extractText = (node) => {
              if (node.children?.[0]?.type === 'text') {
                return node.children[0].value;
              } else if (node.children?.[0]?.children?.[0]?.type === 'text') {
                return node.children[0].children[0].value;
              } else {
                let foundText = null;
                const findTextRecursively = (node) => {
                  if (node.type === 'text') {
                    foundText = node.value;
                    return;
                  }
                  if (node.children) {
                    for (let child of node.children) {
                      findTextRecursively(child);
                      if (foundText) break;
                    }
                  }
                };
                findTextRecursively(node);
                return foundText || "";
              }
            };

            const textContent = extractText(node);
            const id = parameterize(textContent);

            node.properties.id = id;

            if (id && textContent) {
              toc.push({
                id,
                title: textContent,
              });
            } else {
              console.error(`Invalid section generated`, { id, title: textContent });
            }

            node.children.unshift({
              type: 'element',
              properties: {
                href: `#${id}`,
                class: styles.anchor,
                'aria-hidden': 'true'
              },
              tagName: 'a',
              type: 'element'
            });
          }
        });
        return;
      };
    })
    .use(rehypeStringify)
    .processSync(post.content)
    .toString();

  if (globalThis.innerWidth > 1024) {
    useEffect(() => {
      let ctx = gsap.context(() => {
        let brandImagePin = document.getElementById("table-of-content");
        let brandImageNotPin = document.getElementById("blog-content");
        ScrollTrigger.create({
          trigger: brandImagePin,
          start: "top 18%",
          endTrigger: brandImageNotPin,
          end: "bottom 80%",
          invalidateOnRefresh: true,
          pin: brandImagePin,
          markers: false,
        });
      });
      return () => ctx.revert();
    });
  }

  useEffect(() => {
    const handleScroll = () => {
      const sectionOffsets = toc.map(({ id }) => {
        const element = document.getElementById(id);
        if (element) {
          return {
            id,
            offsetTop: element.offsetTop - 130, // Adjust for sticky header if necessary
          };
        }
        return null;
      }).filter(Boolean);

      const scrollPosition = window.scrollY;

      for (let i = sectionOffsets.length - 1; i >= 0; i--) {
        if (scrollPosition >= sectionOffsets[i].offsetTop) {
          setActiveSection(sectionOffsets[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [toc]);

  return (
    <>
      <NextSeo
        title={post.seo.title}
        description={post.seo.description}
        openGraph={{
          type: 'article',
          article: {
            publishedTime: post.date,
            modifiedTime: post.modified,
          },
          url: `https://www.patronum.io/${post.slug}`,
          title: post.seo.title,
          "description": post.seo.description,
          images: [
            {
              url: post.featuredImage.sourceUrl,
              width: 1200,
              height: 630,
              alt: post.title,
              type: "image/png",
            },
          ],
          siteName: "Patronum",
        }}
        canonical={`{https://www.patronum.io/${post.slug}`}
        languageAlternates={{
          hreflang: "en_US",
          href: `https://www.patronum.io/${post.slug}`,
        }}
      />

      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              {
                "@context": "https://schema.org",
                "@type": "BlogPosting",
                "headline": post.seo.title,
                "keywords": post.seo.keywords,
                "datePublished": post.date,
                "dateModified": post.modified,
                "author": {
                  "name": "Patronum",
                  "@id": "https://www.patronum.io/admin/",
                },
                "publisher": {
                  "@id": "https://www.patronum.io/#organization"
                },
                "name": post.seo.title,
                "description": post.seo.description,
                "@id": `https://www.patronum.io/${post.slug}#richSnippet`,
                "url": `https://www.patronum.io/${post.slug}`,
                "isPartOf": {
                  "@id": `https://www.patronum.io/${post.slug}#website`
                },
                "image": {
                  "@id": post.seo.image,
                },
                "inLanguage": "en_US",
                "mainEntityOfPage": {
                  "@id": `https://www.patronum.io/${post.slug}#webpage`
                },
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
                "@type": "WebPage",
                "@id": `https://www.patronum.io/${post.slug}#webpage`,
                "url": `https://www.patronum.io/${post.slug}`,
                "name": post.seo.title,
                "description": post.seo.description,
                "datePublished": post.date,
                "dateModified": post.modified,
                "publisher": {
                  "@type": "Organization",
                  "name": "Patronum",
                  "logo": {
                    "@type": "ImageObject",
                    "url": "https://www.patronum.io/logo.svg",
                  }
                },
                "about": {
                  "@id": `https://www.www.patronum.io/${post.slug}#organization`
                },
                "isPartOf": {
                  "@id": `https://www.www.patronum.io/${post.slug}#website`
                },
                "inLanguage": "en_US",
              }
            ),
          }}
        />
      </Head>
      <BlogLayout
        postTitle={post.title}
        postAuthor={post.author.name}
        postDate={formattedDate}
        shareLink={post.slug}
        featImg={post.featuredImage.sourceUrl}
        readingTime={post.readingTime}
      >
        <section className="container">
          <div className="content blog-content">
            <div className="flex w-full justify-between items-start" id="blog-container">
              <div className="w-[20%] -ml-[3vw] relative" id="table-of-content">
                {/* Update TOC rendering to indicate the active section */}
                <ul className="toc_ul_list">
                  {toc.map(({ id, title }) => (
                    <li key={id} className={`mb-[1vw] leading-[1.2] transition-all ${id === activeSection ? 'toc-active' : ''}`}>
                      <a href={`#${id}`} onClick={(e) => handleSmoothScroll(e, id)} className="text-head/60 aeonik text-[0.9vw] transition-all hover:text-primary">
                        {title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div
                dangerouslySetInnerHTML={{
                  __html: content,
                }}
                id="blog-content"
                className={styles.blogContent}
              />
            </div>
          </div>
        </section>

        <ProgressBar />

        <RelatedPosts sectionTitle={'Related Blogs'} recentPosts={recentPosts} currentSlug={post.slug} />

      </BlogLayout>
    </>
  );
}

export default PostDetail;

export async function getStaticPaths() {
  const apolloClient = getApolloClient();

  const { data } = await apolloClient.query({
    query: QUERY_ALL_POST_SLUGS
  });

  const allSlugs = data.posts.edges.map(edge => edge.node.slug);

  const paths = allSlugs.map(slug => ({
    params: { slug },
  }));

  return {
    paths,
    fallback: 'blocking',
  }
}

export async function getStaticProps({ params }) {
  try {
    const { slug } = params;
    const { post } = await getPostBySlug(slug);

    const recentPosts = await getHomePagePosts();

    if (!post) {
      return {
        notFound: true,
      };
    }

    return {
      props: {
        post,
        recentPosts,
      },
      revalidate: 500,
    };
  } catch (error) {
    console.error('Error fetching data:', error);

    return {
      props: {
        post: null,
        recentPosts: [],
      },
      revalidate: 500,
    };
  }
}