import PrimaryButton from "@/components/PageLayout/Button/PrimaryButton";

export default function About() {
    return (
      <>
        <section id="about">
            <div className="container">
                <div className="content flex justify-between items-center w-full h-full lg:flex-row flex-col-reverse lg:gap-unset gap-[10vw]">
                    <div className="about-left lg:w-[40%] w-full lg:text-left text-center">
                        <h2 className="title-4xl textAnim"> 
                            <span>
                                Why Patronum?
                            </span>
                        </h2>
                        <p className="para-italic mb-10 fadeUp">
                            Ever felt overwhelmed managing Google Workspace? We get it.
                        </p>
                        <p className="content-p mb-14 fadeUp">
                                As seasoned Google Workspace Managers ourselves, we understand the complexities and time constraints of managing an extensive digital workspace. That's precisely why we created Patronum - to transform the IT department's wish list into a robust reality.
                            <br />
                            <br />
                                From user and group management to secure content sharing, from centralised email signatures to Google Workspace backups, Patronum empowers you to take control of your Google Workspace with unmatched ease and precision.
                        </p>

                        <PrimaryButton link="/about" btnText="Get Started"/>

                    </div>
                    <div className="about-right lg:w-[35%] w-[75%] lg:text-right text-center">
                        <img width="520" height="515" className="fadeRight w-full h-full" src="/assets/home/about.svg" loading="lazy" alt="about patronum" title="about patronum image"/>
                    </div>
                </div>
            </div>
        </section>
      </>
    );
  }