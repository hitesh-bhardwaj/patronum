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
                        <a href='#' className='btn-primary arrow'>
                            <span className="btn-bg" />
                            <div>
                                <span className="btn-icon">
                                    <span className="">
                                        <svg className="" viewBox="0 0 38 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M0 9.27361C2.25898 9.27361 4.5105 9.26604 6.76947 9.26604C15.4997 9.26604 24.2299 9.26604 32.9602 9.26604C33.1018 9.26604 33.2509 9.26604 33.3777 9.26604C30.8876 6.74513 28.4049 4.22423 25.9521 1.74117C26.5784 1.09769 27.1375 0.537491 27.6669 0C31.0814 3.4672 34.5556 6.98738 37.9925 10.4773C34.5482 13.9672 31.0814 17.4874 27.6296 20.9924C27.1003 20.4549 26.5486 19.9023 25.982 19.327C28.4571 16.8212 30.9472 14.3003 33.4373 11.7794C33.4299 11.7491 33.4224 11.7188 33.415 11.6885C33.2733 11.6885 33.1391 11.6885 32.9975 11.6885C22.1573 11.6885 11.3172 11.6885 0.484599 11.6885C0.320581 11.6885 0.164018 11.6885 0 11.681C0 10.8861 0 10.0761 0 9.27361Z" fill="currentColor"/>
                                        </svg>
                                        <svg className="" viewBox="0 0 38 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M0 9.27361C2.25898 9.27361 4.5105 9.26604 6.76947 9.26604C15.4997 9.26604 24.2299 9.26604 32.9602 9.26604C33.1018 9.26604 33.2509 9.26604 33.3777 9.26604C30.8876 6.74513 28.4049 4.22423 25.9521 1.74117C26.5784 1.09769 27.1375 0.537491 27.6669 0C31.0814 3.4672 34.5556 6.98738 37.9925 10.4773C34.5482 13.9672 31.0814 17.4874 27.6296 20.9924C27.1003 20.4549 26.5486 19.9023 25.982 19.327C28.4571 16.8212 30.9472 14.3003 33.4373 11.7794C33.4299 11.7491 33.4224 11.7188 33.415 11.6885C33.2733 11.6885 33.1391 11.6885 32.9975 11.6885C22.1573 11.6885 11.3172 11.6885 0.484599 11.6885C0.320581 11.6885 0.164018 11.6885 0 11.681C0 10.8861 0 10.0761 0 9.27361Z" fill="currentColor"/>
                                        </svg>
                                    </span>
                                </span>
                                <span className="btn-text">Get Started</span>
                            </div>
                        </a>
                    </div>
                    <div className="about-right w-[40%]">
                        <img src="/assets/home/about.svg"/>
                    </div>
                </div>
            </div>
        </section>
      </>
    );
  }