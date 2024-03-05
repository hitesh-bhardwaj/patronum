import { useEffect, useState } from 'react';
import { getAllCategories, getCategoryBySlug } from '@/lib/categories';
import { getPostsByCategoryId } from '@/lib/posts';

import CategoryList from '@/components/PageComponents/BlogPage/CategoryList';
import CategoryPosts from '@/components/PageComponents/BlogPage/CategoryPosts';
import PageLayout from '@/components/PageLayout';
import { Pagination } from 'swiper/modules';

const Category = ({ category, posts, categories }) => {
  const [activeCategory, setActiveCategory] = useState(`${category.name}`);

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
                  <h4 className='title-4xl'>
                    <span>
                      {category.name}
                    </span>
                    <br />
                    <span>
                      Blogs
                    </span>
                  </h4>
                </div>

                <div className="w-[105%] ml-[-2.5%]">
                    <CategoryList categories={categories} activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
                </div>

                <CategoryPosts posts={posts} />

              </div>
            </div>
          </section>
        </PageLayout>

      <main>
        <section className='blogs-sub-section'>
          <div className='blogs-heading' data-cursor-size='10px' data-cursor-text=''>
            <h1 id='blog'>
              <span>{` ${category.name} Blogs`}</span>
            </h1>
          </div>

          <div id='fadeUp'>
            <CategoryList categories={categories} activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
          </div>

          <CategoryPosts posts={posts} />
        </section>

        {/* ======================== Footer END ====================== */}
      </main>
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
