import { useState } from 'react';
import PageLayout from "@/components/PageLayout";
import { getPaginatedPosts, sortStickyPosts } from '@/lib/posts';
import { getCategories } from '@/lib/categories';
import FeaturedPost from "@/components/PageComponents/BlogPage/FeaturedPost";
import PostCard from "@/components/PageComponents/BlogPage/PostCard";
import CategoryList from "@/components/PageComponents/BlogPage/CategoryList";
import Pagination from '@/components/PageComponents/BlogPage/Pagination';

export default function Blogs( { posts, featuredPost, pagination, categories } ) {
    
  const [activeCategory, setActiveCategory] = useState('all');

    return (
        <>
            <PageLayout
                pageTitle1={"Our"}
                pageTitle2={"Latest Blogs"}   
                pagePara={"The only tool you'll ever need to streamline your Google Workspace management."}
                imgSrc={"/blog.svg"}
            >

                {/* Featured Post Component */}
                {featuredPost && (
                    <FeaturedPost post={featuredPost} />
                )}

                <section id="blogs-container">
                    <div className="container">
                        <div className="content">
                            <div className='section-head'>
                                <h4 className='title-4xl'>
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
    )
}

export async function getStaticProps({ params }) {
    const { slug } = params || {};
  
    // Fetch paginated posts
    let { posts, pagination } = await getPaginatedPosts({
      queryIncludes: 'archive',
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
      },
      revalidate: 10,
    };
  }