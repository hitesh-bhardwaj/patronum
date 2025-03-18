import { useState } from 'react';
import { getAllCategories, getCategoryBySlug } from '@/lib/categories';
import { getPostsByCategoryId } from '@/lib/posts';

import CategoryList from '@/components/PageComponents/BlogPage/CategoryList';
import CategoryPosts from '@/components/PageComponents/BlogPage/CategoryPosts';
import MetaData from '@/components/PageLayout/MetaData';
import Search from '@/components/Search';
import BreadcrumbComponent from '@/components/PageLayout/BreadCrumb';
import Layout from '@/components/Layout';

const Category = ({ category, posts, categories }) => {
  const [activeCategory, setActiveCategory] = useState(`${category.name}`);

  return (
    <>
      <MetaData
        title={`${category.name} Archive - Patronum`}
        description={"Get all the information that can help you with effective & efficient management of your Google Workspace (GSuite). Download our resources and participate in webinars to know more."}
        url={`category/${category.slug}`}
        img={"blog.jpg"}
        date_published={"2020-12-21T12:00"}
        date_modified={"2024-04-04T12:00"}
        keywords={"Patronum,Google Workspace Manager"}
      />
      <Layout>
        <main>
          <section id="">
            <div className="container">
              <div className="content-2">
                <div className='section-head'>
                  <h1 className='title-4xl text-anim'>
                    <span>
                      {category.name}
                    </span>
                    <br />
                    <span>
                      Blogs
                    </span>
                  </h1>
                  <div className='mt-[6vw] mb-[3vw]'>
                    <BreadcrumbComponent
                      middleLinkName={"Blog"}
                      middleLink={"blog"}
                    />
                  </div>

                  <span className='h-[1px] block w-full bg-head'></span>
                </div>
                <div className="2xl:w-[112%] 2xl:ml-[-6%] gap-y-[2vw] lg:w-[105%] lg:ml-[-2.5%] ml-0 w-full flex justify-between flex-wrap">
                  <CategoryList categories={categories} activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
                  <Search posts={posts} />
                </div>

                <CategoryPosts posts={posts} />

              </div>
            </div>
          </section>
        </main>
      </Layout>
    </>
  );
}

export default Category;

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
    revalidate: 500,
  };
}
