// components/WpBlogs/FeaturedPost.js
import { format } from 'date-fns';
import LinkButton from '@/components/PageLayout/Button/LinkButton';

const FeaturedPost = ({ post }) => {
  if (!post) {
    return null;
  }

  const formattedDate = format(new Date(post.date), 'MMMM dd, yyyy');

  return (
    <section id='second-section'>
        <div className="container">
            <div className='content-2'>
                <div className='section-head'>
                    <h2 className='title-4xl'>
                        <span>
                            Featured Blog
                        </span>
                    </h2>
                </div>
                <div className='lg:flex lg:justify-between lg:items-start block' id='fadeUp'>
                    <div className='lg:w-[53%] w-full overflow-hidden rounded-xl'>
                        <a href={`/${post.slug}`}>
                            <img
                                className='w-full h-full object-contain hover:scale-[1.02] transition-all duration-500'
                                src={post.featuredImage.sourceUrl}
                                alt={post.title}
                                title={post.title}
                                loading='lazy'
                            />
                        </a>
                    </div>

                    <div className='lg:w-[43.5%] w-full p-[2vw]'>
                        <div className='flex lg:w-[70%] w-full items-center text-[#444444] lg:text-[1.15vw] text-[4vw] justify-between lg:mb-[1vw] mb-[3vw] lg:mt-0 mt-[3vw]'>
                            <p>By {post.author.name}</p>
                            <p>{formattedDate}</p>
                        </div>
                        <div>
                            <a href={`/${post.slug}`} className='hover:text-primary text-head'>
                                <h3 className='aeonik lg:text-[2.35vw] text-[5.5vw] leading-[1.27] duration-300 lg:mb-[1.5vw] mb-[4vw]'>
                                    {post.title}
                                </h3>
                            </a>
                            <div dangerouslySetInnerHTML={{
                                __html: post.excerpt,
                                }} 
                                className='content-p lg:mb-[2vw] mb-[3vw]'
                            />
                            <LinkButton link={`/${post.slug}`} btnText={"Read More"}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default FeaturedPost;
