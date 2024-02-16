export default function About() {
    return (
      <>
        <section id="about">
            <div className="container">
                <div className="content flex-all">
                    <div className="about-left w-[37%]">
                        <h2 className="title-4xl"> 
                            <span>
                                Why Patronum
                            </span>
                        </h2>
                        <p className="para-italic mb-10">
                            Ever felt overwhelmed managing Google Workspace? We get it!
                        </p>
                        <p className="content-p mb-14">
                            As seasoned Google Workspace Managers ourselves, we understand the complexities and time constraints of managing an extensive digital workspace. That's precisely why we created Patronum - to transform the IT department's wish list into a robust reality.
                        </p>

                            <a href="/about" className="btn">
                                <span data-primary className="btn-text">
                                    Get Started
                                </span>
                                <div aria-hidden="true" className="btn-circle">
                                    <div className="btn-circle-text">
                                        Get Started
                                        <svg viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg" className="btn-icon">
                                            <path data-v-f4363f2a fillRule="evenodd" clipRule="evenodd" d="M3.82475e-07 5.625L7.625 5.625L4.125 9.125L5 10L10 5L5 -4.37114e-07L4.125 0.874999L7.625 4.375L4.91753e-07 4.375L3.82475e-07 5.625Z" className="btn-path fill-current" />
                                            <path data-v-f4363f2a fillRule="evenodd" clipRule="evenodd" d="M3.82475e-07 5.625L7.625 5.625L4.125 9.125L5 10L10 5L5 -4.37114e-07L4.125 0.874999L7.625 4.375L4.91753e-07 4.375L3.82475e-07 5.625Z" className="btn-path fill-current" />
                                        </svg>
                                    </div>
                                </div>
                            </a>

                    </div>
                    <div className="about-right w-[40%]">
                        <img src="/assets/home/about.svg" loading="lazy" alt="about patronum" title="about patronum image"/>
                    </div>
                </div>
            </div>
        </section>
      </>
    );
  }