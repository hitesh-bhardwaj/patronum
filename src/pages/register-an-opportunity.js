import RegisterOpportunityForm from "@/components/Forms/RegisterOpportunityForm";
import PageLayout from "@/components/PageLayout";
import SectionTitle from "@/components/PageLayout/SectionTitle";

export default function Partners() {

    return (
        <>
            <PageLayout
                pageTitle1="Register"
                pageTitle2="An Opportunity"
                pagePara="Join forces with Patronum! Let’s redefine efficiency and productivity together!"
                imgSrc="partner-with-us.svg"
            >

                <section id="second-section">
                    <div className="container">
                        <div className="content-2">
                            <div className="flex items-start justify-between">
                                <SectionTitle
                                    sectionTitle1="Register"
                                    sectionTitle2="An Opportunity"
                                    sectionPara="Does your customer need Patronum? As a Patronum reseller partner or a referral source, you can register opportunities for your customers through our website."
                                />

                                <div className="w-[50%] h-full">
                                    <div className="bg-[#FDFDFD] rounded-[15px] px-[11%] py-[7.6%] border-[#E2E2E2] border fadeUp">
                                        <RegisterOpportunityForm />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </PageLayout>
        </>
    )
}