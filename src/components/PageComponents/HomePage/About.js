import PrimaryButton from "@/components/PageLayout/Button/PrimaryButton";

export default function About() {
    return (
      <>
        <section id="about">
            <div className="container">
                <div className="content flex-all">
                    <div className="about-left w-[37%]">
                        <h2 className="title-4xl textAnim"> 
                            <span>
                                Why Patronum?
                            </span>
                        </h2>
                        <p className="para-italic mb-10 fadeUp">
                            Ever felt overwhelmed managing Google Workspace? We get it!
                        </p>
                        <p className="content-p mb-14 fadeUp">
                            As seasoned Google Workspace Managers ourselves, we understand the complexities and time constraints of managing an extensive digital workspace. That's precisely why we created Patronum - to transform the IT department's wish list into a robust reality.
                        </p>

                        <PrimaryButton link="/about" btnText="Get Started"/>

                    </div>
                    <div className="about-right w-[40%]">
                        <img className="fadeRight" src="/assets/home/about.svg" loading="lazy" alt="about patronum" title="about patronum image"/>
                    </div>
                </div>
            </div>
        </section>
      </>
    );
  }