import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import PostCard from '@/components/PageComponents/BlogPage/PostCard';
import { getAllPosts } from '@/lib/posts';
import Fuse from 'fuse.js';
import MetaData from '@/components/PageLayout/MetaData';
import Layout from '@/components/Layout';

export default function SearchResults({ posts }) {
  const router = useRouter();
  const { query } = router.query;
  const [filteredPosts, setFilteredPosts] = useState([]);

  useEffect(() => {
    if (query) {
      const fuse = new Fuse(posts, {
        keys: ['title', 'excerpt', 'content'],
        threshold: 0.3,
      });
      const results = fuse.search(query).map(result => result.item);
      setFilteredPosts(results);
    }
  }, [query, posts]);

  return (

    <>
      <MetaData
        title={`Search Archive - Patronum`}
        url={`search`}
            date_published={"2020-12-21T12:00"}
            date_modified={"2024-05-23T12:00"}
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
                        Search Results for
                      </span>
                      <br />
                      <span>
                        {`"${query}"`}
                      </span>
                    </h1>
                  </div>
                  <div className='blog-main-container mt-4'>
                    {filteredPosts.map((post) => (
                      <PostCard key={post.slug} post={post} />
                    ))}
                  </div>
                </div>
              </div>
            </section>
          </main>
        </Layout>
    </>
  );
}

export async function getStaticProps() {
  const { posts } = await getAllPosts({
    queryIncludes: 'index',
  });

  return {
    props: {
      posts,
    },
    revalidate: 500,
  };
}
