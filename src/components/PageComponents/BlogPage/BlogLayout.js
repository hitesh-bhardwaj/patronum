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
                        <div className="content">
                            <div className="w-[88%] mx-auto mt-[6.5vw] mb-20">
                                <h1 className="text-[3.4vw] leading-[1.2] text-center text-head mb-[2vw]">
                                    <span>
                                        {postTitle}
                                    </span>
                                </h1>
                                <div className="text-[1.15vw] flex items-center justify-between w-[70%] mx-auto">
                                    <div className="flex items-center justify-between gap-[2vw]">
                                        <p>By {postAuthor}</p>
                                        <p>{postDate}</p>
                                    </div>
                                    <div className="flex items-center justify-between gap-[2vw]">
                                        <p>Share Article</p>
                                        <div className="flex items-start justify-center gap-[1vw]">
                                            
                                            <FacebookShareButton 
                                                url={`https://patronum.io/${shareLink}`} 
                                                quote={'Read more articles like this on our website - https://patronum.io'} 
                                                hashtag={'#patronum'}
                                                >
                                                <img className="w-[1.8vw]" src="/assets/icons/facebook.webp" alt="social icon" />
                                            </FacebookShareButton>
                                            
                                            <LinkedinShareButton 
                                                url={`https://patronum.io/${shareLink}`} 
                                                hashtag={'#patronum'}
                                                >
                                                <img className="w-[1.8vw]" src="/assets/icons/linkedin.webp" alt="social icon" />
                                            </LinkedinShareButton>
                    
                                            <TwitterShareButton 
                                                url={`https://patronum.io/${shareLink}`} 
                                                title={postTitle}
                                                hashtag={'#patronum'}
                                                >
                                                <img className="w-[1.8vw]" src="/assets/icons/twitter.webp" alt="social icon" />

                                            </TwitterShareButton>

                                            <WhatsappShareButton
                                                url={`https://patronum.io/${shareLink}`} 
                                                title={postTitle}
                                                hashtag={'#patronum'}
                                                >
                                                <img className="w-[1.8vw]" src="/assets/icons/whatsapp.webp" alt="social icon" />
                                            </WhatsappShareButton>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="featured-image overflow-hidden rounded-3xl h-[35vw]">
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