import PageLayout from "@/components/PageLayout";
import styles from "@/styles/cookie-policy.module.css";

export default function Page() {
  return (
    <>
      <PageLayout
        pageTitle1={"Environmental Policy"}
        pagePara={"Our commitment to a sustainable future through reduced environmental impact & eco-friendly initiatives"}
        imgSrc={"environmental-policy.svg"}

        title={"Patronum's Environment Policy - A Comittement for a Better Future"}
        description={"Patronum is committed to environmental excellence by reducing our carbon footprint,  and embedding sustainability in all we do to protect & ensure a healthier planet for future generations."}
        url={"environment-policy"}
        img={"homepage.jpg"}
        date_published={"2024-09-23T07:07"}
        date_modified={"2024-09-23T07:07"}
        keywords={"Google Workspace, Environment Policy"}
      >
        <section className="" id="second-section">
          <div className="container">
            <div className="content-2">
              <div className="lg:mb-[2vw] md:mb-[5vw] mb-[6vw]">
                <h2 className="title-4xl text-anim">
                  <span>Introduction</span>
                </h2>
              </div>
              <div className={styles.policy}>
                <div className="lg:w-[50%] w-full">
                  <p className="fadeUp">
                    Bespin Labs Limited, is a Google Cloud and Google Workspace business. We provide SaaS-based solutions to organisations all over the world. We have adopted a 100% remote way of working.
                  </p>
                  <p className="fadeUp">
                    We recognise that our activities have an impact on the environment. We are committed to reducing our environmental impact and operating in a sustainable manner. This policy sets out our commitment to environmental protection and our goals for reducing our environmental impact.
                  </p>
                </div>
              </div>

              <div className="lg:mt-[7vw] md:mt-[10vw] mt-[15vw]">
                <span className="h-[1px] bg-[#1a1a1a] w-full lineDraw block" />
                <div className="flex items-start gap-[5%] lg:py-[3vw] lg:px-[3vw] md:py-[5vw] md:px-[2vw] py-[8vw]">
                  <div className="lg:w-[6vw] lg:h-[6vw] md:w-[10vw] md:h-[10vw] w-[15vw] h-[15vw]">
                    <img src="/assets/legal/environmental-policy/commitments.svg" alt="commitment image" />
                  </div>
                  <div className="space-y-[1vw] lg:w-[75%] md:w-[90%] w-[100%]">
                      <h3 className="lg:text-[2.5vw] text-[4.8vw] font-medium block">
                        Key Commitments
                      </h3>
                    <p className="fadeUp content-p">
                      We will make sure that we meet all legal and contractual requirements as a minimum and look to better our actions through continual research into best practice from our sector and peers. To this end, we will:
                    </p>
                    <ul className="content-p font-body list-disc space-y-[0.5vw] pr-[5vw] fadeUp">
                      <li>Have no overheads – we have no corporate offices.</li>
                      <li>Promote remote working practices by incorporating technologies such as Google Workspace, known for their <a className="relative text-primary after:absolute after:bg-primary after:h-[1px] after:left-0 after:bottom-[-2px] after:scale-0 hover:after:scale-100 after:duration-300 after:w-full" href="https://sustainability.google/operating-sustainably/stories/" target="_blank">Green Initiatives.</a></li>
                      <li>Calculate our carbon footprint and put in place actions to reduce it.</li>
                      <li>Reduce our energy consumption and purchase renewable energy.</li>
                      <li>Reduce our waste production and recycle where this is not possible.</li>
                      <li>Ensure our systems and procedures prevent pollution.</li>
                      <li>Educate our employees to improve their energy efficiency in home offices.</li>
                      <li>Promote sustainable travel where possible.</li>
                      <li>Promote sustainable practices among our suppliers.</li>
                      <li>Educate and support our customers to improve their environmental impact.</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="lg:mt-[2vw] md:mt-[5vw] mt-[5vw]">
                <span className="h-[1px] bg-[#1a1a1a] w-full lineDraw block" />
                <div className="flex items-start gap-[5%] lg:py-[3vw] lg:px-[3vw] md:py-[5vw] md:px-[2vw] py-[8vw]">
                  <div className="lg:w-[6vw] lg:h-[6vw] md:w-[10vw] md:h-[10vw] w-[15vw] h-[15vw] fadeUp">
                    <img src="/assets/legal/environmental-policy/review.svg" alt="commitment image" />
                  </div>
                  <div className="space-y-[1vw] lg:w-[75%] md:w-[90%] w-[100%] fadeUp">
                      <h3 className="lg:text-[2.5vw] text-[4.8vw] font-medium block">
                        Review
                      </h3>
                    <p className="fadeUp content-p fadeUp">
                      This Environmental Policy will be reviewed annually, or if there have been significant changes to the business.
                      </p>
                  </div>
                </div>
              </div>

              <div className="lg:mt-[2vw] md:mt-[5vw] mt-[5vw]">
                <span className="h-[1px] bg-[#1a1a1a] w-full lineDraw block" />
                <div className="flex items-start gap-[5%] lg:py-[3vw] lg:px-[3vw] md:py-[5vw] md:px-[2vw] py-[8vw]">
                  <div className="lg:w-[6vw] lg:h-[6vw] md:w-[10vw] md:h-[10vw] w-[15vw] h-[15vw] fadeUp">
                    <img src="/assets/legal/environmental-policy/communication.svg" alt="commitment image" />
                  </div>
                  <div className="space-y-[1vw] lg:w-[75%] md:w-[90%] w-[100%] fadeUp">
                      <h3 className="lg:text-[2.5vw] text-[4.8vw] font-medium block">
                        Communication
                      </h3>
                    <p className="fadeUp content-p fadeUp">
                      This Policy is available on our website, and by request, to staff, customers and interested stakeholders. Staff are also made aware of this policy during their induction training through which they are made aware of their own obligations to help the business meet its commitments.                      </p>
                  </div>
                </div>
                <span className="h-[1px] lg:mt-[1.5vw] md:mt-[2vw] bg-[#1a1a1a] w-full lineDraw block "/>
              </div>

            </div>
          </div>
        </section>
      </PageLayout>
    </>
  );
}
