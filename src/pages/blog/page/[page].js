import { getPaginatedPosts } from '@/lib/posts';
import { getAllPosts, getPagesCount } from '@/lib/posts';
import Pagination from '@/components/PageComponents/BlogPage/Pagination';
import PostCard from '@/components/PageComponents/BlogPage/PostCard';
import { getCategories } from '@/lib/categories';
import CategoryList from '@/components/PageComponents/BlogPage/CategoryList';
import { useEffect, useState } from 'react';
import Layout from '@/components/Stairs';
import MetaData from '@/components/PageLayout/MetaData';
import Search from '@/components/Search';

export default function Blog({ posts, pagination, categories }) {
  const [activeCategory, setActiveCategory] = useState('all');

  return (
    <>
        <MetaData
          title={"Learn more about Google Workspace (G Suite) Management"}
          description={"Get all the information that can help you with effective & efficient management of your Google Workspace (GSuite). Download our resources and participate in webinars to know more."}
          url={`blog/page/${pagination?.currentPage}`}
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
                        Blog Page {pagination?.currentPage}
                      </span>
                    </h1>
                  </div>

                  <div className="2xl:w-[112%] 2xl:ml-[-6%] gap-y-[2vw] lg:w-[105%] lg:ml-[-2.5%] ml-0 w-full flex justify-between flex-wrap">
                    <CategoryList categories={categories} activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
                    <Search posts={posts} />
                  </div>

                  {/* <div className="lg:w-[105%] lg:ml-[-2.5%] ml-0 w-full">
                    <CategoryList categories={categories} activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
                  </div> */}

                  <div className='blog-main-container'>
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
          </main>
        </Layout>
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
    revalidate: 500,
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
