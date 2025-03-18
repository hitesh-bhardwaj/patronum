import { format } from 'date-fns';
import styles from "@/components/Buttons/link.module.css";
import Link from 'next/link';

const PostCard = ({ post = {} }) => {
    const { title, featuredImage, date, excerpt, slug } = post;

    const formattedDate = format(new Date(date), 'MMMM dd, yyyy');

    return (
        <>
            <div className='blog-card-main fadeUp'>
                <Link href={`/${slug}`} className='hover:shadow-lg block duration-300 h-full w-full bg-white border-[#e8e8e8] group relative border rounded-[15px]'>
                    <div className='image-box-blog'>
                        {featuredImage && (
                            <img
                                className='img-blog w-full h-full object-cover group-hover:scale-[1] scale-[1.03] duration-300'
                                src={featuredImage.sourceUrl}
                                alt={`${title} featured image`}
                                title={title}
                                loading='lazy'
                            />
                        )}
                    </div>
                    <div className='px-[2.5vw] md:py-[1.2vw] py-[3vw] lg:h-auto md:h-[35vw] h-auto'>
                        <div className='flex justify-between align-center lg:text-[1.15vw] lg:mb-[1vw] md:text-[2vw] text-[4vw] mb-[5vw]'>
                            <p>By Patronum</p>
                            <p>{formattedDate}</p>
                        </div>
                        <div className='lg:border-b lg:border-[#C5C5C5]'>
                            <h3 className='aeonik group-hover:text-primary duration-300 text-head lg:text-[1.56vw] md:text-[2.8vw] text-[5vw] leading-[1.3] font-regular lg:mb-[1.2vw] md:mb-[5vw] mb-[15vw]'>
                                <span>
                                    {title}
                                </span>
                            </h3>
                            {(post.excerpt) && (
                                <div dangerouslySetInnerHTML={{
                                    __html: excerpt,
                                }}
                                    className='mb-[2vw] blog-para'
                                />
                            )}
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
        </>
    );
};

export default PostCard;
