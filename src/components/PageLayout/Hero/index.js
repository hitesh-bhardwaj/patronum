export default function Hero( {pageTitle1, pageTitle2, pagePara, imgSrc, lenis} ){

    return(
        <>
            <section id="pageHero">
                <div className="container">
                        <div className="page-hero-flex">
                            <div className="page-hero-left">
                                <h1 className="title-4xl">
                                    <span>
                                        {pageTitle1}
                                    </span>
                                    <br />
                                    <span>
                                        {pageTitle2}
                                    </span>
                                </h1>

                                <p className="hero-para">
                                    <span>
                                        {pagePara}
                                    </span>
                                </p>
                            </div>

                            <div className="page-hero-right">
                                <div className="page-hero-img">
                                    <img loading="preload" src={`/assets/heroSections/${imgSrc}`} alt={`${pageTitle1} Image`} title={`${pageTitle1} Image`}/>
                                </div>
                            </div>
                        </div>

                            <span className="hero-hr"/>

                            <div data-page-hero className="scroll-down-btn">
                                <a href="#second-section" aria-label="Scroll Down to see more">
                                    <svg width="86" height="86" viewBox="0 0 86 86" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle className="hero-svg-circle" cx="43" cy="43" r="42" stroke="currentColor" strokeWidth="2"/>
                                    </svg>
                                    <span className="block absolute overflow-hidden">
                                        <svg className="scroll-down-btn-img" width="19" height="27" viewBox="0 0 19 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g className="first-path">
                                                <path d="M0.838474 17.059C0.838474 16.7978 0.926565 16.5365 1.11533 16.3303C1.48026 15.9316 2.0843 15.9316 2.44924 16.3303L9.42082 23.9474L16.3924 16.3303C16.7573 15.9316 17.3614 15.9316 17.7263 16.3303C18.0912 16.729 18.0912 17.389 17.7263 17.7877L10.0878 26.1335C9.72284 26.5322 9.1188 26.5322 8.75387 26.1335L1.11533 17.7877C0.926565 17.5815 0.838474 17.3202 0.838474 17.059Z" fill="#2A2A2A" stroke="#2A2A2A" strokeWidth="0.5"/>
                                                <path d="M8.4786 25.1711L8.4786 2.03119C8.4786 1.46747 8.90646 1 9.4224 1C9.93835 1 10.3662 1.46747 10.3662 2.03119L10.3662 25.1711C10.3662 25.7348 9.93835 26.2023 9.4224 26.2023C8.90646 26.2023 8.4786 25.7348 8.4786 25.1711Z" fill="#2A2A2A" stroke="#2A2A2A" strokeWidth="0.5"/>
                                            </g>
                                            <g className="second-path">
                                                <path d="M0.838474 17.059C0.838474 16.7978 0.926565 16.5365 1.11533 16.3303C1.48026 15.9316 2.0843 15.9316 2.44924 16.3303L9.42082 23.9474L16.3924 16.3303C16.7573 15.9316 17.3614 15.9316 17.7263 16.3303C18.0912 16.729 18.0912 17.389 17.7263 17.7877L10.0878 26.1335C9.72284 26.5322 9.1188 26.5322 8.75387 26.1335L1.11533 17.7877C0.926565 17.5815 0.838474 17.3202 0.838474 17.059Z" fill="#2A2A2A" stroke="#2A2A2A" strokeWidth="0.5"/>
                                                <path d="M8.4786 25.1711L8.4786 2.03119C8.4786 1.46747 8.90646 1 9.4224 1C9.93835 1 10.3662 1.46747 10.3662 2.03119L10.3662 25.1711C10.3662 25.7348 9.93835 26.2023 9.4224 26.2023C8.90646 26.2023 8.4786 25.7348 8.4786 25.1711Z" fill="#2A2A2A" stroke="#2A2A2A" strokeWidth="0.5"/>
                                            </g>
                                        </svg>
                                    </span>
                                </a>
                            </div>
                </div>
            </section>
        </>
    )
}