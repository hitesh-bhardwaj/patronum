import { useEffect, useRef } from "react";
import PrimaryButton from '@/components/PageLayout/Button/PrimaryButton';
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import LinkButton from "@/components/PageLayout/Button/LinkButton";

gsap.registerPlugin(ScrollTrigger);

const Blogs = () => {
    const blogCardsWrapper = useRef(null);

    useEffect(() => {
        const blogCards = blogCardsWrapper.current.querySelectorAll('.blog-cards');
        let ctx = gsap.context(() => {
            let tl = gsap.timeline({
                scrollTrigger: {
                    trigger: blogCardsWrapper.current,
                    start: "top 85%",
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
            return () => ctx.revert();
        });
    }, []);

    return (
        <>
            <section className='recent-blogs' id='blogs'>
                <div className='container'>
                    <div className='content'>
                        <div className='section-head'>
                            <h2 className='title-4xl'>
                                Our Latest Blogs
                            </h2>
                            <p className='content-p lg:w-[40%] w-[90%] fadeUp mt-8'>
                                Discover a World of Knowledge with Expert Tips, In-Depth Tricks, Latest News, and Comprehensive Resources for Mastering Google Workspace.
                            </p>
                        </div>

                        <div ref={blogCardsWrapper} className='blog-card-wrapper mb-16'>
                            {Posts.map((post, index) => (
                                <div key={index} className="blog-cards">
                                    <div className="blog-card hover:shadow-lg">
                                        <div className="blog-card-content">
                                            <div className="blog-card-image">
                                                <Image
                                                    height={325}
                                                    width={460}
                                                    src={post.img}
                                                    loading="lazy"
                                                    alt={`${post.title} Image`}
                                                />
                                            </div>
                                            <div className="blog-card-details border-t">
                                                <div className="blog-card-author">
                                                    <p className="head">By Patronum</p>
                                                    <p className="date">{post.date}</p>
                                                </div>
                                                <h5 className="blog-card-title aeonik">
                                                    {post.title}
                                                </h5>
                                                <LinkButton link={post.slug} btnText="Read More"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="section-btn-container">
                            <PrimaryButton link="/blog" btnText="View All Blogs" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Blogs;

const Posts = [
    {
        title: "The Science Behind Effective Email Signature Design: Crafting Digital Handshakes",
        date: "October 01, 2024",
        img: "https://wordpress-213572-4463644.cloudwaysapps.com/wp-content/uploads/2023/10/The-Science-Behind-Effective-Email-Signature-Design-Crafting-Digital-Handshakes.jpg",
        slug: "/the-science-behind-effective-email-signature-design-crafting-digital-handshakes",
    },
    {
        title: "GAM vs GAM7: The Evolution of Google Apps Manager and the Differences Between GAM and GAM7",
        date: "September 27, 2024",
        img: "https://wordpress-213572-4463644.cloudwaysapps.com/wp-content/uploads/2024/10/feature-image.webp",
        slug: "/google-apps-manager-gam-vs-gam7-upgrade-benefits"
    },
    {
        title: "Patronum introduces Google Chat Spaces management",
        date: "September 19, 2024",
        img: "https://wordpress-213572-4463644.cloudwaysapps.com/wp-content/uploads/2024/09/Google-Chat-Migration-Feature-750x420-1.jpg",
        slug: "introducing-google-chat-spaces-management",
    }
]