import { useState } from 'react';
import PageLayout from "@/components/PageLayout";
import { getPaginatedPosts, sortStickyPosts } from '@/lib/posts';
import { getCategories } from '@/lib/categories';
import FeaturedPost from "@/components/PageComponents/BlogPage/FeaturedPost";
import PostCard from "@/components/PageComponents/BlogPage/PostCard";
import CategoryList from "@/components/PageComponents/BlogPage/CategoryList";
import Pagination from '@/components/PageComponents/BlogPage/Pagination';
import { getAllPosts } from '@/lib/posts';
import Search from '@/components/Search';

export default function Blogs({ posts, featuredPost, pagination, categories, allPosts }) {
  const [activeCategory, setActiveCategory] = useState('all');

  return (
    <> 
      <PageLayout
        pageTitle1={"Expert Tips,"}
        pageTitle2={" Insights & Latest News"}
        pagePara={"Dive into the latest updates, tips, and trends in Google Workspace management with Patronum."}
        imgSrc={"blog.svg"}
        title={"Learn more about Google Workspace (G Suite) Management"}
        description={"Get all the information that can help you with effective & efficient management of your Google Workspace (GSuite). Download our resources and participate in webinars to know more."}
        url={"blog"}
        img={"blog.jpg"}
        date_published={"2020-12-21T12:00"}
        date_modified={"2024-04-04T12:00"}
        keywords={"Patronum,Google Workspace Manager"}
      >

        {/* Featured Post Component */}
        {featuredPost && (
          <FeaturedPost post={featuredPost} />
        )}

        <section id="blogs-container">
          <div className="container">
            <div className="content">
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

              <div className="2xl:w-[112%] 2xl:ml-[-6%] gap-y-[2vw] lg:w-[105%] lg:ml-[-2.5%] ml-0 w-full flex justify-between flex-wrap">
                <CategoryList categories={categories} activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
                <Search posts={allPosts} />
              </div>

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
      </PageLayout>
    </>
  );
}

export async function getStaticProps({ params }) {
    const { slug } = params || {};
  
    // Fetch paginated posts
    let { posts, pagination } = await getPaginatedPosts({
      queryIncludes: 'archive',
    });
  
    // Fetch all posts for search
    const { posts: allPosts } = await getAllPosts({
        queryIncludes: 'index',
    });

    // Fetch categories
    const categories = await getCategories();
  
    // If a category slug is provided, filter posts by category
    if (slug) {
      const { posts: filteredPosts, pagination: filteredPagination } = await getPaginatedPosts({
        queryIncludes: 'archive',
        categoryId: slug, // Pass the category ID or slug to filter posts
      });
  
      posts = filteredPosts;
      pagination = {
        ...filteredPagination,
        basePath: `/categories/${slug}/page`,
      };
    }
  
    // Sort posts with sticky posts first
    posts = sortStickyPosts(posts);
  
    // Separate the featured post
    const featuredPost = posts.find((post) => post.isSticky) || null;
  
    // Remove the featured post from regular posts
    posts = posts.filter((post) => !post.isSticky);
  
    return {
      props: {
        posts,
        featuredPost,
        categories,
        pagination: {
          ...pagination,
          basePath: slug ? `/categories/${slug}/page` : '/blog',
        },
        allPosts,
      },
      revalidate: 500,
    };
  }