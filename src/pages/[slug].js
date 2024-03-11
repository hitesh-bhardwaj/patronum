import React, { useEffect } from "react";
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
import  ScrollToPlugin  from 'gsap/dist/ScrollToPlugin';
import RelatedPosts from "@/components/PageComponents/BlogPage/RelatedPosts";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

function PostDetail({ post, recentPosts }) {

  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    const targetPosition = targetElement.offsetTop;
        gsap.to(window, {
            duration: 1.5,
            scrollTo: {y: targetPosition, offsetY: 130, autoKill: true},
            ease: "power3.inOut",
        });
      };    

  if (globalThis.innerWidth>1024) {
    // Section Pinnnig
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

    useEffect(() => {
      let ctx = gsap.context(() => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: '#blog-content',
            start: 'top 18%',
            end: 'bottom 80%',
            scrub: 1,
            markers: false,
          },
        });

        tl.to('#toc-bar', {
          height: '100%',
          duration: 1,
        })
      });
      return () => ctx.revert();
    })
  }

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
            // Function to extract text in a flexible manner
            const extractText = (node) => {
              if (node.children && node.children[0].type === 'text') {
                return node.children[0].value;
              } else if (node.children && node.children[0].children && node.children[0].children[0].type === 'text') {
                return node.children[0].children[0].value;
              }
              return ""; // Return an empty string or any default value you see fit
            };
    
            const textContent = extractText(node);
            const id = parameterize(textContent);
    
            node.properties.id = id;
    
            toc.push({
              id,
              title: textContent,
            });
    
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

return (
      <>
      <BlogLayout
        postTitle={post.title}
        postAuthor={post.author.name}
        postDate={formattedDate}
        shareLink={post.slug}
        featImg={post.featuredImage.sourceUrl}
      >

      <section className="container">
        <div className="content">
          <div className="flex w-full justify-between items-start" id="blog-container">
            <div className="w-[20%] -ml-[2vw] relative" id="table-of-content"> 
              <span className="absolute h-[98%] block w-1.5 bg-[#E9E9E9] overflow-hidden -left-8 rounded -top-[1.5%]">
                <span className="w-full h-[2%] bg-head block rounded origin-top" id="toc-bar"/>
              </span>
              <ul>
                {toc.map(({ id, title}) => {
                  return (
                    <li key={id} className="mb-[1.2vw]">
                      <a href={`#${id}`} onClick={(e) => handleSmoothScroll(e, id)} className="leading-[1] text-head aeonik text-[0.94vw] hover:text-primary transition-all">
                        { title }
                      </a>
                    </li>
                  )
                })}
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

    // const { posts: allPosts } = await getAllPosts();

    if (!post) {
      // If the requested post is not found, return a 404 response
      return {
        notFound: true,
      };
    }

    return {
      props: {
        post,
        recentPosts,
      },
      revalidate: 10,
    };
  } catch (error) {
    console.error('Error fetching data:', error);

    return {
      props: {
        post: null, // Use null instead of undefined
        recentPosts: [],
      },
      revalidate: 10,
    };
  }
}