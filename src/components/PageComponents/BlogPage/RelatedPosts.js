import React from 'react';
import { format } from 'date-fns';
import PrimaryButton from '@/components/Buttons/PrimaryButton';
import Link from 'next/link';
import styles from "@/components/Buttons/link.module.css";

function RelatedPosts({ recentPosts, currentSlug, sectionTitle, sectionPara }) {

    const filteredPosts = recentPosts.filter(post => post.slug !== currentSlug).slice(0, 3);

    const formattedDates = filteredPosts.map(post => format(new Date(post.date), 'MMMM dd, yyyy'));

    return (
        <>
            <section className='recent-blogs' id='blogs'>
                <div className='container'>
                    <div className='content'>
                        <div className='section-head'>
                            <h2 className='title-4xl'>
                                <span>
                                    {sectionTitle}
                                </span>
                            </h2>
                            {sectionPara && (
                                <p className='content-p lg:w-[40%] w-[90%] fadeUp mt-8'>
                                    {sectionPara}
                                </p>
                            )}
                        </div>

                        <div className='blog-card-wrapper mb-16'>
                            {filteredPosts.map((post, index) => (
                                <Link href={post.slug} key={index} className="blog-cards">
                                    <div className="blog-card hover:shadow-lg">
                                        <div className="blog-card-content">
                                            {post.featuredImage && (
                                                <div className="blog-card-image">
                                                    <img
                                                        height="325"
                                                        width="460"
                                                        src={post.featuredImage.node.sourceUrl}
                                                        loading="lazy"
                                                        alt={`${post.title} Image`}
                                                        title={`${post.title} Image`} />
                                                </div>
                                            )}
                                            <div className="blog-card-details">
                                                <div className="blog-card-author">
                                                    <p className="head">By Patronum</p>
                                                    <p className="date">{formattedDates[index]}</p>
                                                </div>
                                                <h5 className="blog-card-title aeonik">
                                                    {post.title}
                                                </h5>
                                                <div className={`${styles.linkBtn} !absolute lg:bottom-[2.5vw] bottom-[5vw]`}>
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
                                    </div>
                                </Link>
                            ))}
                        </div>
                        <div className="section-btn-container">
                            <PrimaryButton href="/blog" btnText="View All Blogs" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default RelatedPosts;