import Footer from "@/components/Footer";
import Header from "@/components/Header";
import {
    LinkedinShareButton,
    FacebookShareButton,
    TwitterShareButton,
    WhatsappShareButton
  } from 'next-share';

export default function BlogLayout( { children, postTitle, postAuthor, postDate, shareLink, featImg } ) {
    return(
        <>
            <Header />
            <main>
                <section id="blog-hero">
                    <div className="w-[88%] mx-auto">
                        <div className="content blog-content-1">
                            <div className="lg:w-[88%] w-full mx-auto lg:mt-[6.5vw] md:mt-[3vw] mt-[6vw] lg:mb-[4vw] mb-[6vw]">
                                <h1 className="lg:text-[3.4vw] md:text-[5vw] text-[7vw] leading-[1.2] text-center text-head lg:mb-[2vw] mb-[4vw]">
                                    <span>
                                        {postTitle}
                                    </span>
                                </h1>
                                <div className="lg:text-[1.15vw] md:text-[2.5vw] md:flex items-center justify-between lg:w-[70%] w-[90%] mx-auto md:mb-0">
                                    <div className="flex items-center justify-between gap-[2vw] md:mb-0 mb-[3vw]">
                                        <p>By {postAuthor}</p>
                                        <p>{postDate}</p>
                                    </div>
                                    <div className="flex md:items-center items-end justify-between gap-[2vw]">
                                        <p>Share Article</p>
                                        <div className="flex items-start justify-center lg:gap-[1vw] md:gap-[2vw] gap-[3vw]">
                                            
                                            <FacebookShareButton 
                                                url={`https://patronum.io/${shareLink}`} 
                                                quote={'Read more articles like this on our website - https://patronum.io'} 
                                                hashtag={'#patronum'}
                                                >
                                                <img className="lg:w-[1.8vw] md:w-[2.8vw] w-[6vw]" src="/assets/icons/facebook.webp" alt="social icon" />
                                            </FacebookShareButton>
                                            
                                            <LinkedinShareButton 
                                                url={`https://patronum.io/${shareLink}`} 
                                                hashtag={'#patronum'}
                                                >
                                                <img className="lg:w-[1.8vw] md:w-[2.8vw] w-[6vw]" src="/assets/icons/linkedin.webp" alt="social icon" />
                                            </LinkedinShareButton>
                    
                                            <TwitterShareButton 
                                                url={`https://patronum.io/${shareLink}`} 
                                                title={postTitle}
                                                hashtag={'#patronum'}
                                                >
                                                <img className="lg:w-[1.8vw] md:w-[2.8vw] w-[6vw]" src="/assets/icons/twitter.webp" alt="social icon" />

                                            </TwitterShareButton>

                                            <WhatsappShareButton
                                                url={`https://patronum.io/${shareLink}`} 
                                                title={postTitle}
                                                hashtag={'#patronum'}
                                                >
                                                <img className="lg:w-[1.8vw] md:w-[2.8vw] w-[6vw]" src="/assets/icons/whatsapp.webp" alt="social icon" />
                                            </WhatsappShareButton>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="featured-image overflow-hidden lg:rounded-3xl rounded-2xl lg:h-[35vw] h-[full]">
                                <img className="w-full h-full object-cover object-center" src={featImg} alt={`${postTitle} image`} title={`${postTitle} image`} />
                            </div>
                        </div>
                    </div>
                </section>
                {children}
            </main>
            <Footer />
        </>
    )
}