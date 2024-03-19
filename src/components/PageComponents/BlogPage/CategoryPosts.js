import React from 'react';
import PostCard from './PostCard';

const CategoryPosts = ({ posts }) => {
  return (
    <div className='category-posts'>
      {posts.length > 0 ? (
        <div className='blog-main-container lg:mt-[5vw] mt-[10vw]'>
            {posts.map((post) => {
                return (
                    <PostCard key={post.slug} post={post} />
                );
            })}
        </div>
      ) : (
        <div className=''>
          <p className='no-blog-msg'>No blogs found for this category.</p>
        </div>
      )}
    </div>
  );
};

export default CategoryPosts;
