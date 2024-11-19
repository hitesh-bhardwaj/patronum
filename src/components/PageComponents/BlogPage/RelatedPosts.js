import React, { useEffect, useRef } from 'react';
import { format } from 'date-fns';
import LinkButton from '@/components/Buttons/LinkButton';
import PrimaryButton from '@/components/Buttons/PrimaryButton';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function RelatedPosts({ recentPosts, currentSlug, sectionTitle, sectionPara }) {

    const filteredPosts = recentPosts.filter(post => post.slug !== currentSlug).slice(0, 3);

    const formattedDates = filteredPosts.map(post => format(new Date(post.date), 'MMMM dd, yyyy'));

    const container = useRef();

    useEffect(() => {
        let ctx = gsap.context(() => {
            const blogCards = container.current.querySelectorAll('.blog-cards');
            let tl = gsap.timeline({
                scrollTrigger: {
                    trigger: container.current,
                    start: "top 85%",
                    markers: false,
                }
            });

            tl.fromTo(
                blogCards,
                {
                    opacity: 0,
                    y: 100,
                },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.6,
                    stagger: 0.1,
                    ease: 'Power2.out',
                }
            );
        });
        return () => ctx.revert();
    }, []);

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

                        <div ref={container} className='blog-card-wrapper mb-16'>
                            {filteredPosts.map((post, index) => (
                                <div key={index} className="blog-cards">
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
                                                    <p className="head">By {post.author.node.name}</p>
                                                    <p className="date">{formattedDates[index]}</p>
                                                </div>
                                                <h5 className="blog-card-title aeonik">
                                                    {post.title}
                                                </h5>
                                                <LinkButton href={post.slug} btnText="Read More" className='!absolute lg:bottom-[2.5vw] bottom-[5vw]' />
                                            </div>
                                        </div>
                                    </div>
                                </div>
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