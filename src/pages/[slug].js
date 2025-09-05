import React, { useState, useEffect, useMemo, useRef } from 'react';
import { format } from 'date-fns';
import { getApolloClient } from '@/lib/apollo-client';
import { QUERY_ALL_POST_SLUGS } from '@/data/posts';
import { getPostBySlug, getHomePagePosts } from '@/lib/posts';
import BlogLayout from '@/components/PageComponents/BlogPage/BlogLayout';

import parse from 'html-react-parser';
import parameterize from 'parameterize';
import styles from '@/styles/blog.module.css';

import Head from 'next/head';
import { NextSeo } from 'next-seo';
import dynamic from 'next/dynamic';
import { useModal } from "@/components/Modals/ModalContext";
import { sanitizeRankMathGraph } from '@/lib/util';

const ProgressBar = dynamic(() => import('@/components/PageComponents/BlogPage/ProgressBar'), { ssr: false });
const RelatedPosts = dynamic(() => import('@/components/PageComponents/BlogPage/RelatedPosts'), { ssr: true });
const TableOfContents = dynamic(() => import('@/components/PageComponents/BlogPage/TableOfContents'), { ssr: true });


function PostDetail({ post, recentPosts }) {
  
  if (!post) {
    return <div>Loading...</div>;
  }

  const contentContainer = useRef(null);
  const { openModal } = useModal();

  const formattedDate = format(new Date(post.date), 'MMMM dd, yyyy');
  const [activeSection, setActiveSection] = useState(null);

  const getTextContent = (domNode) => {
    let text = '';
    if (domNode.type === 'text') {
      text += domNode.data;
    } else if (domNode.children && domNode.children.length > 0) {
      domNode.children.forEach((child) => {
        text += getTextContent(child);
      });
    }
    return text;
  };

  const { contentWithIds, toc } = useMemo(() => {
    const toc = [];
    const contentWithIds = parse(post.content, {
      replace: (domNode) => {
        if (domNode.type === 'tag' && domNode.name === 'h2') {
          const textContent = getTextContent(domNode);
          const id = parameterize(textContent);
          domNode.attribs.id = id;

          toc.push({ id, title: textContent });
        }
      },
    });
    return { contentWithIds, toc };
  }, [post.content]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 140;
      for (let i = toc.length - 1; i >= 0; i--) {
        const { id } = toc[i];
        const element = document.getElementById(id);
        if (element && scrollPosition >= element.offsetTop) {
          setActiveSection(id);
          return;
        }
      }
      setActiveSection(null);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [toc]);

  useEffect(() => {
    const formOpenButtons = contentContainer.current.querySelectorAll(".open-contact-form");

    const handleClick = () => {
      openModal('contact');
    };

    formOpenButtons.forEach(button => {
      button.addEventListener("click", handleClick);
    });

    return () => {
      formOpenButtons.forEach(button => {
        button.removeEventListener("click", handleClick);
      });
    };
  }, []);


// function sanitizeJsonLd(raw) {
//   if (!raw) return "";

//   const clean = raw.replace(/<\/?script[^>]*>/g, "").trim();

//   try {
//     const parsed = JSON.parse(clean);

//     if (Array.isArray(parsed["@graph"])) {
//       parsed["@graph"] = parsed["@graph"].filter(
//         (schema) =>
//           !["Organization", "WebSite", "ImageObject", "BreadcrumbList"].includes(
//             schema["@type"]
//           )
//       );
//     }

//     if (
//       parsed["@type"] &&
//       ["Organization", "WebSite", "ImageObject", "BreadcrumbList"].includes(
//         parsed["@type"]
//       )
//     ) {
//       return "";
//     }

//     return JSON.stringify(parsed);
//   } catch (err) {
//     console.error("Invalid JSON-LD from WordPress:", err);
//     return "";
//   }
// }

// Safer JSON-LD sanitizer/de-duper




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
          description: post.seo.description,
          images: [
            {
              url: post.featuredImage.sourceUrl,
              width: 1200,
              height: 630,
              alt: post.title,
            },
          ],
          siteName: 'Patronum',
        }}
        canonical={`https://www.patronum.io/${post.slug}`}
        languageAlternates={[
    { hrefLang: 'en-US', href: `https://www.patronum.io/${post.slug}` },
  ]}
      />

      <Head>
        {/* <script
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
                  url:post.featuredImage.sourceUrl,
                  "@id": post.seo.image,
                },
                "inLanguage": "en_US",
                "mainEntityOfPage": {
                  "@id": `https://www.patronum.io/${post.slug}#webpage`
                },
              }
            ),
          }}
        /> */}
        {/* <script
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
                    "url": "https://www.patronum.io/logo.png",
                  }
                },
                "about": {
                  "@id": `https://www.patronum.io/${post.slug}#organization`
                },
                "isPartOf": {
                  "@id": `https://www.patronum.io/${post.slug}#website`
                },
                "inLanguage": "en_US",
              }
            ),
          }}
        /> */}
        {post?.seo?.jsonLd?.raw && (
  <script
  key="rankmath-jsonld-sanitized"
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: sanitizeRankMathGraph(post.seo.jsonLd.raw),
    }}
  />
)}
      </Head>

      <BlogLayout
        postTitle={post.title}
        postAuthor="Patronum"
        postDate={formattedDate}
        shareLink={post.slug}
        featImg={post.featuredImage.sourceUrl}
        readingTime={post.readingTime}
      >
        <section className="container">
          <div className="content blog-content">
            <div className="flex w-full justify-between items-start" id="blog-container">
              <TableOfContents toc={toc} activeSection={activeSection} />
              <div ref={contentContainer} id="blog-content" className={styles.blogContent}>
                {contentWithIds}
              </div>
            </div>
          </div>
        </section>

        <ProgressBar />

        <RelatedPosts sectionTitle="Related Blogs" recentPosts={recentPosts} currentSlug={post.slug} />
      </BlogLayout>
    </>
  );
}

export default PostDetail;

export async function getStaticPaths() {
  const apolloClient = getApolloClient();

  const { data } = await apolloClient.query({
    query: QUERY_ALL_POST_SLUGS,
    fetchPolicy: 'no-cache',
  });

  const paths = data.posts.edges.map(({ node }) => ({
    params: { slug: node.slug },
  }));

  return {
    paths,
    fallback: 'blocking',
  };
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
      revalidate: 60,
    };
  } catch (error) {
    console.error('Error fetching data:', error);
    return {
      notFound: true,
    };
  }
}
