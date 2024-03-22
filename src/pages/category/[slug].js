import { useEffect, useState } from 'react';
import { getAllCategories, getCategoryBySlug } from '@/lib/categories';
import { getPostsByCategoryId } from '@/lib/posts';

import CategoryList from '@/components/PageComponents/BlogPage/CategoryList';
import CategoryPosts from '@/components/PageComponents/BlogPage/CategoryPosts';
import PageLayout from '@/components/PageLayout';

import gsap from "gsap"
import SplitType from "split-type";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Category = ({ category, posts, categories }) => {
  const [activeCategory, setActiveCategory] = useState(`${category.name}`);

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
        pageTitle1={"Our"}
        pageTitle2={"Latest Blogs"}   
        pagePara={"The only tool you'll ever need to streamline your Google Workspace management."}
        imgSrc={"/blog.svg"}
        >

          <section id="second-section">
            <div className="container">
              <div className="content-2">
                <div className='section-head'>
                  <h4 className='title-4xl text-anim'>
                    <span>
                      {category.name}
                    </span>
                    <br />
                    <span>
                      Blogs
                    </span>
                  </h4>
                </div>

                <div className="lg:w-[105%] lg:ml-[-2.5%] ml-0 w-full">
                    <CategoryList categories={categories} activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
                </div>

                <CategoryPosts posts={posts} />

              </div>
            </div>
          </section>
        </PageLayout>
    </>
  );
}

export default Category;

export async function getStaticProps({ params = {} } = {}) {
  const { category } = await getCategoryBySlug(params?.slug);

  if (!category) {
    return {
      props: {},
      notFound: true,
    };
  }

  const { posts } = await getPostsByCategoryId({
    categoryId: category.databaseId,
    queryIncludes: 'archive',
  });

  const categories = await getAllCategories();

  return {
    props: {
      category,
      posts,
      categories,
    },
    revalidate: 10,
  };
}

export async function getStaticPaths() {
  const { categories } = await getAllCategories();

  const paths = categories.map((category) => ({
    params: {
      slug: category.slug,
    },
  }));

  return {
    paths,
    fallback: 'blocking',
  };
}
