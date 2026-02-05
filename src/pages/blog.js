import { useState } from "react";
import { getPaginatedPosts, sortStickyPosts } from "@/lib/posts";
import { getCategories } from "@/lib/categories";
import FeaturedPost from "@/components/PageComponents/BlogPage/FeaturedPost";
import PostCard from "@/components/PageComponents/BlogPage/PostCard";
import CategoryList from "@/components/PageComponents/BlogPage/CategoryList";
import Pagination from "@/components/PageComponents/BlogPage/Pagination";
import Search from "@/components/Search";
import Layout from "@/components/Layout";
import MetaData from "@/components/PageLayout/MetaData";
import Hero from "@/components/ContactTrial/Hero";
import BlogHero from "@/components/Illustrations/BlogHero";

export default function Blogs({ posts, featuredPost, pagination, categories }) {
  const [activeCategory, setActiveCategory] = useState("all");

  return (

    <>
      <MetaData
        title={"Learn more about Google Workspace (G Suite) Management"}
        description={
          "Get all the information that can help you with effective & efficient management of your Google Workspace (GSuite). Download our resources and participate in webinars to know more."
        }
        url={"blog"}
        img={"blog.jpg"}
        date_published={"2023-04-24T12:00"}
        date_modified={"2024-04-04T12:00"}
        keywords={"Patronum,Google Workspace Manager"}
      />
      <Layout>
        <main>
          <Hero
            pageTitle1="Expert Tips,"
            pageTitle2="Insights & Latest News"
            pagePara="Dive into the latest updates, tips, and trends in Google Workspace management with Patronum."
            imgSrc="blog.svg"
            svgElement={<BlogHero className={"h-full w-full"} />}
          />
          {/* Featured Post Component */}
          {featuredPost && <FeaturedPost post={featuredPost} />}

          <section id="blogs-container">
            <div className="container">
              <div className="content">
                <div className="section-head">
                  <h4 className="title-4xl text-anim">
                    <span>Explore Our</span>
                    <br />
                    <span>Latest Blogs</span>
                  </h4>
                </div>

                <div className="2xl:w-[112%] 2xl:ml-[-6%] gap-y-[2vw] lg:w-[105%] lg:ml-[-2.5%] ml-0 w-full flex justify-between flex-wrap">
                  <CategoryList
                    categories={categories}
                    activeCategory={activeCategory}
                    setActiveCategory={setActiveCategory}
                  />
                  <Search />
                </div>

                <div className="blog-main-container">
                  {posts.map((post) => {
                    return <PostCard key={post.slug} post={post} />;
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

export async function getStaticProps({ params }) {
  const { slug } = params || {};
  let { posts, pagination } = await getPaginatedPosts({
    queryIncludes: "archive",
  });
  const categories = await getCategories();
  if (slug) {
    const { posts: filteredPosts, pagination: filteredPagination } =
      await getPaginatedPosts({
        queryIncludes: "archive",
        categoryId: slug,
      });
    posts = filteredPosts;
    pagination = {
      ...filteredPagination,
      basePath: `/categories/${slug}/page`,
    };
  }
  posts = sortStickyPosts(posts);
  const featuredPost = posts.find((post) => post.isSticky) || null;
  posts = posts.filter((post) => !post.isSticky);
  return {
    props: {
      posts,
      featuredPost,
      categories,
      pagination: {
        ...pagination,
        basePath: slug ? `/categories/${slug}/page` : "/blog",
      },
    },
    revalidate: 500,
  };
}
