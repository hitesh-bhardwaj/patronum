import { format } from 'date-fns';
import Link from 'next/link';

const PostCard = ({ post = {} }) => {
  const { title, featuredImage, author, date, excerpt } = post;

  const formattedDate = format(new Date(post.date), 'MMMM dd, yyyy');

  return (
    <>
        <Link href={`/${post.slug}`} className='blog-card-main hover:shadow-lg duration-300 border rounded-[15px] bg-white border-[#e8e8e8] group'>
            <div className='image-box-blog'>
                {featuredImage && (
                    <img
                        className='img-blog w-full h-full object-cover group-hover:scale-[1] scale-[1.03] duration-300'
                        src={featuredImage.sourceUrl}
                        alt={`${post.title} featured image`}
                        title={post.title}
                        loading='lazy'
                    />
                )}
            </div>
            <div className='px-[2.5vw] py-[1.2vw]'>
                <div className='flex justify-between align-center text-[1.15vw] mb-[1vw]'>
                    <p>By {post.author.name}</p>
                    <p>{formattedDate}</p>
                </div>
                <div className='border-b border-[#C5C5C5]'>
                    <h3 className='aeonik group-hover:text-primary duration-300 text-head text-[1.56vw] leading-[1.3] font-regular mb-[1.2vw]'>
                        <span>
                            {post.title}
                        </span>
                    </h3>
                    {(post.excerpt) && (
                        <div dangerouslySetInnerHTML={{
                        __html: post.excerpt,
                        }} 
                        className='mb-[2vw] blog-para'
                        />
                    )}
                </div>
                <div className='mt-[1.3vw] mb-[0.5vw]'>
                    <button aria-label='Read More About the Blog' className="link-btn">
                        <span className="btn-text">Read More</span>
                        <span className="btn-images">
                            <div>
                                <svg className="" viewBox="0 0 38 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0 9.27361C2.25898 9.27361 4.5105 9.26604 6.76947 9.26604C15.4997 9.26604 24.2299 9.26604 32.9602 9.26604C33.1018 9.26604 33.2509 9.26604 33.3777 9.26604C30.8876 6.74513 28.4049 4.22423 25.9521 1.74117C26.5784 1.09769 27.1375 0.537491 27.6669 0C31.0814 3.4672 34.5556 6.98738 37.9925 10.4773C34.5482 13.9672 31.0814 17.4874 27.6296 20.9924C27.1003 20.4549 26.5486 19.9023 25.982 19.327C28.4571 16.8212 30.9472 14.3003 33.4373 11.7794C33.4299 11.7491 33.4224 11.7188 33.415 11.6885C33.2733 11.6885 33.1391 11.6885 32.9975 11.6885C22.1573 11.6885 11.3172 11.6885 0.484599 11.6885C0.320581 11.6885 0.164018 11.6885 0 11.681C0 10.8861 0 10.0761 0 9.27361Z" fill="currentColor"/>
                                </svg>
                                <svg className="" viewBox="0 0 38 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0 9.27361C2.25898 9.27361 4.5105 9.26604 6.76947 9.26604C15.4997 9.26604 24.2299 9.26604 32.9602 9.26604C33.1018 9.26604 33.2509 9.26604 33.3777 9.26604C30.8876 6.74513 28.4049 4.22423 25.9521 1.74117C26.5784 1.09769 27.1375 0.537491 27.6669 0C31.0814 3.4672 34.5556 6.98738 37.9925 10.4773C34.5482 13.9672 31.0814 17.4874 27.6296 20.9924C27.1003 20.4549 26.5486 19.9023 25.982 19.327C28.4571 16.8212 30.9472 14.3003 33.4373 11.7794C33.4299 11.7491 33.4224 11.7188 33.415 11.6885C33.2733 11.6885 33.1391 11.6885 32.9975 11.6885C22.1573 11.6885 11.3172 11.6885 0.484599 11.6885C0.320581 11.6885 0.164018 11.6885 0 11.681C0 10.8861 0 10.0761 0 9.27361Z" fill="currentColor"/>
                                </svg>
                            </div>
                        </span>
                    </button>
                </div>
            </div>
        </Link>
    </>
  );
};

export default PostCard;
