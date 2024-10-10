import ReferCustomerForm from "@/components/Forms/ReferCustomerForm";
import PageLayout from "@/components/PageLayout";
import SectionTitle from "@/components/PageLayout/SectionTitle";

export default function PartnersDetail() {

    return (
        <>
            <PageLayout
                pageTitle1="Refer"
                pageTitle2="A Customer"
                pagePara="Join forces with Patronum! Let’s redefine efficiency and productivity together!"
                imgSrc="partner-with-us.svg"
                title={"Refer A Customer - Patronum"}
                description={"Patronum provides a better way to Google Workspace (GSuite) Management. Patronum fully automates all the administrator and user tasks to ensure an efficient, effective and secure process."}
                url={"refer-a-customer"}
                img={"homepage.jpg"}
                date_published={"2023-05-13T12:00"}
                date_modified={"2024-04-04T12:00"}
                keywords={"Patronum, Google Workspace Manager, G-Suite Manager"}
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