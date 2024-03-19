import ReferCustomerForm from "@/components/Forms/ReferCustomerForm";
import PageLayout from "@/components/PageLayout";
import SectionTitle from "@/components/PageLayout/SectionTitle";

export default function Partners() {

    return (
        <>
            <PageLayout
                pageTitle1="Refer"
                pageTitle2="A Customer"
                pagePara="Join forces with Patronum! Let’s redefine efficiency and productivity together!"
                imgSrc="partner-with-us.svg"
            >

                <section id="second-section">
                    <div className="container">
                        <div className="content-2">
                            <div className="lg:flex items-start justify-between">
                                <SectionTitle
                                    sectionTitle1="Refer"
                                    sectionTitle2="A Customer"
                                    sectionPara="Even if you’re not a Patronum reseller partner, you can still refer a customer and earn commission on a completed sale. We welcome referrals from anyone. To refer a customer, simply fill out the form below or reach out to us directly if you prefer."
                                />

                                <div className="lg:w-[50%] w-full h-full">
                                    <div className="bg-[#FDFDFD] rounded-[15px] px-[11%] py-[7.6%] border-[#E2E2E2] border fadeUp">
                                        <ReferCustomerForm />
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