import { getPaginatedPosts } from '@/lib/posts';
import { getAllPosts, getPagesCount } from '@/lib/posts';
import Pagination from '@/components/PageComponents/BlogPage/Pagination';
import PostCard from '@/components/PageComponents/BlogPage/PostCard';
import { getCategories } from '@/lib/categories';
import CategoryList from '@/components/PageComponents/BlogPage/CategoryList';
import { useEffect, useState } from 'react';
import PageLayout from '@/components/PageLayout';

import gsap from "gsap"
import SplitType from "split-type";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Blog({ posts, pagination, categories }) {
  const [activeCategory, setActiveCategory] = useState('all');
  
  useEffect(() => {
    const headings = document.querySelectorAll('.text-anim');

    headings.forEach((heading) => {
    let ctx = gsap.context(() => {
        const textAnim = new SplitType(heading, {types: 'words'});
        let animWord = heading.querySelectorAll('.word');

        gsap.from(animWord, {
        scrollTrigger: {
            trigger: heading,
            start: 'top 80%',
        },
        duration: 0.8,
        yPercent: 100,
        stagger: 0.02,
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
              y: 50,
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

  return (
    <>

      <PageLayout
        pageTitle1={'Our'}
        pageTitle2={'Latest Blogs'}
        pagePara={"The only tool you'll ever need to streamline your Google Workspace management."}
        imgSrc={"/blog.svg"}
      >

        <section id="second-section">
          <div className="container">
            <div className="content-2">
              <div className='section-head'>
                <h4 className='title-4xl text-anim'>
                  <span>
                    Explore Our
                  </span>
                  <br />
                  <span>
                    Latest Blogs
                  </span>
                </h4>
              </div>

              <div className="lg:w-[105%] lg:ml-[-2.5%] ml-0 w-full">
                <CategoryList categories={categories} activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
              </div>

              <div className='blog-main-container lg:mt-[5vw] mt-[10vw]'>
                {posts.map((post) => {
                  return (
                    <PostCard key={post.slug} post={post} />
                  );
                })}
              </div>

              {pagination && (
                <Pagination
                  addCanonical={false}
                  currentPage={pagination?.currentPage}
                  pagesCount={pagination?.pagesCount}
                  basePath={pagination?.basePath}
                />
              )}
            </div>
          </div>
        </section>
      </PageLayout>
    </>
  );
}

export async function getStaticProps({ params = {} } = {}) {
  const { posts, pagination } = await getPaginatedPosts({
    currentPage: params?.page,
    queryIncludes: 'archive',
  });

  const categories = await getCategories();

  if (!pagination.currentPage) {
    return {
      props: {},
      notFound: true,
    };
  }

  return {
    props: {
      posts,
      categories,
      pagination: {
        ...pagination,
        basePath: '/blog',
      },
    },
    revalidate: 10,
  };
}

export async function getStaticPaths() {
  const { posts } = await getAllPosts({
    queryIncludes: 'index',
  });
  const pagesCount = await getPagesCount(posts);

  const paths = [...new Array(pagesCount)].map((_, i) => {
    return { params: { page: String(i + 1) } };
  });

  return {
    paths,
    fallback: 'blocking',
  };
}
