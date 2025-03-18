import { useEffect } from 'react';
import MetaData from '@/components/PageLayout/MetaData';
import Layout from '@/components/Layout';
import { formatDate } from '@/lib/datetime';
import Link from 'next/link';
import useSearch from '@/hooks/use-search';
import { postPathBySlug } from '@/lib/posts';
import styles from "@/components/Buttons/link.module.css";

export default function SearchResults() {

  const { query, results, search } = useSearch();
  const title = 'Search Archive - Patronum';
  const description = `Search results for '${query}'`;

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    search({
      query: params.get('q'),
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (

    <>
      <MetaData
        title={title}
        const description={description}
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
                  {results.map((result) => (
                    <div key={result.slug} className='blog-card-main'>
                      <Link href={postPathBySlug(result.slug)} className='hover:shadow-lg block duration-300 h-full w-full bg-white border-[#e8e8e8] group relative border rounded-[15px]'>
                        <div className='px-[2.5vw] md:py-[3vw] py-[3vw] lg:h-auto md:h-[35vw] h-auto'>
                          <div className='flex justify-between align-center lg:text-[1.15vw] lg:mb-[1vw] md:text-[2vw] text-[4vw] mb-[5vw]'>
                            <p>By Patronum</p>
                            <p>{formatDate(result.date)}</p>
                          </div>
                          <div className='lg:border-b lg:border-[#C5C5C5]'>
                            <h3 className='aeonik group-hover:text-primary duration-300 text-head lg:text-[1.56vw] md:text-[2.8vw] text-[5vw] leading-[1.3] font-regular lg:mb-[1.2vw] md:mb-[5vw] mb-[15vw]'>
                              <span>
                                {result.title}
                              </span>
                            </h3>
                          </div>
                          <div className='lg:mt-[1.3vw] lg:mb-[0.5vw] lg:static md:absolute bottom-[4vw] static'>
                            <div className={`${styles.linkBtn}`}>
                              <span className={styles.btnText}>Read More</span>
                              <span className="screen-reader-text">{" "}About This</span>
                              <span className={styles.btnImages}>
                                <div className={styles.div}>
                                  <img alt="arrow-icon" className={styles.img} src="/assets/icons/link-arrow-blue.svg" width={27} height={15} />
                                  <img alt="arrow-icon" className={styles.img} src="/assets/icons/link-arrow-black.svg" width={27} height={15} />
                                </div>
                              </span>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
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
  return {
    props: {},
  };
}
