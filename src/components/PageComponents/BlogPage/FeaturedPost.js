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
                <div className='flex justify-between items-start' id='fadeUp'>
                    <div className='w-[53%] overflow-hidden rounded-xl'>
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

                    <div className='w-[43.5%]'>
                        <div className='flex w-[70%] items-center text-[#444444] text-[1.15vw] justify-between mb-[1vw]'>
                            <p>By {post.author.name}</p>
                            <p>{formattedDate}</p>
                        </div>
                        <div>
                            <a href={`/${post.slug}`} className='hover:text-primary text-head'>
                                <h3 className='aeonik text-[2.35vw] leading-[1.27] duration-300 mb-[1.5vw]'>
                                    {post.title}
                                </h3>
                            </a>
                            <div dangerouslySetInnerHTML={{
                                __html: post.excerpt,
                                }} 
                                className='content-p mb-[2vw]'
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
