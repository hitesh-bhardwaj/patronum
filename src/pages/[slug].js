import React, { useEffect } from "react";
import { format } from 'date-fns';

// import BlogInfo from "@/components/WpBlogs/BlogInfo";
// import RelatedPosts from '@/components/WpBlogs/RelatedPosts';

import { getApolloClient } from '@/lib/apollo-client';
import { QUERY_ALL_POST_SLUGS } from '@/data/posts';
import { getPostBySlug, getAllPosts } from '@/lib/posts';

function PostDetail({ post, allPosts }) {

  if (!post) {
    return <div>Loading...</div>;
  }

  const formattedDate = format(new Date(post.date), 'dd/MM/yyyy');

return (
      <>
        <main>
            
            <div className="b__dt-main">
              
              <div
                className="b__dt-head-contain"
                data-cursor-size="10px"
                data-cursor-text="">
                <h1 data-jelly id='blog'>{post.title}</h1>
              </div>

              <div className="b__dt-main-blog" id="main-blog-container">
                
               {/* <div className="b__dt-auth" id="left-section">
                 <BlogInfo avatar={post.author.avatar.url} author={post.author.name} date={formattedDate} shareLink={post.slug} />
               </div> */}

               <div 
                className="b__dt-content" 
                id="right-section"
                >
                <div 
                dangerouslySetInnerHTML={{
                  __html: post.content,
                }}/> 

                <div className="blog__dt-tags">
                  {post.tags && post.tags.edges.map(({ node }) => (
                    <h4 key={node.name} className="blog__dt-tag">
                      {node.name}
                    </h4>
                  ))} 
                </div>
              </div>
            </div>
          </div>

          {/* <RelatedPosts posts={allPosts} currentCategory={post.categories[0].name} currentSlug={post.slug} /> */}
    
      </main>    
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

    const { posts: allPosts } = await getAllPosts();

    if (!post) {
      // If the requested post is not found, return a 404 response
      return {
        notFound: true,
      };
    }

    return {
      props: {
        post,
        allPosts,
      },
      revalidate: 10,
    };
  } catch (error) {
    console.error('Error fetching data:', error);

    return {
      props: {
        post: null, // Use null instead of undefined
        allPosts: [],
      },
      revalidate: 10,
    };
  }
}











