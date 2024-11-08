import Faqs from "@/components/PageComponents/FeaturesPage/Faq";
import UseCaseCard from "@/components/PageComponents/UseCasePage/UseCaseCard";
import PageLayout from "@/components/PageLayout";
import SectionTitle from "@/components/PageLayout/SectionTitle";

const UseCasesInfo = [
    {
        id: "01",
        para: "In the competitive realm of sales and marketing, achieving sales targets and keeping teams motivated are monumental tasks that hinge on efficiency and seamless operations. Yet, one persistent roadblock is the reliance on IT professionals for simple Google Workspace administration tasks. This dependency not only slows down the pace at which sales and marketing teams operate but also diverts their focus from core activities, leading to frustration and decreased productivity. The need to constantly wait for password resets or access permissions adds unnecessary delays, compounding the pressure on sales teams to perform and detracting from their motivation and energy.",
        img: "/assets/useCases/sales-marketing/main1.svg",
    },
    {
        id: "02",
        para: "The recruitment process in sales and marketing is equally fraught with challenges. Attracting top talent is only half the battle; the real test begins with their onboarding. New hires often face a steep learning curve, grappling with access issues and a lack of integration into the company's digital workspace. This initial friction not only dampens early job satisfaction but also delays their contribution to the team's goals. Without immediate access to shared data and resources, new recruits are sidelined, unable to collaborate effectively or immerse themselves in the company culture, leading to disengagement and a potential waste of talent.",
        img: "/assets/useCases/sales-marketing/main2.svg",
    },
    {
        id: "03",
        para: "Patronum introduces a compelling solution to these challenges by empowering sales and marketing managers with delegated Google Workspace administration rights. This innovative approach eliminates the need for constant IT intervention, allowing managers to directly manage login credentials and access rights, streamlining operations, and significantly improving the working environment. This autonomy not only frees up valuable time but also enhances team responsiveness and agility, crucial for meeting sales targets and maintaining team morale.",
        img: "/assets/useCases/sales-marketing/main3.svg",
    },
    {
        id: "04",
        para: "Furthermore, Patronum's policies for automatic resource allocation via Google Groups and Labels transform the onboarding experience for new hires. From day one, team members gain access to essential tools like Google Drive, Calendars, and Contacts, enabling immediate collaboration and integration into the team. This smooth transition process ensures that new talent can hit the ground running, fostering job satisfaction and early engagement in their roles. By removing barriers to entry, Patronum ensures that sales and marketing teams can focus on their primary objectives, harnessing the full potential of their new recruits.",
        img: "/assets/useCases/sales-marketing/main4.svg",
    },
    {
        id: "05",
        para: "Patronum's suite of features extends beyond administrative ease and onboarding enhancements. It revolutionizes data sharing and management, offering sales consultants the ability to securely share presentations or quotes with clients and revoke access as needed. This strategic control over data not only secures sensitive information but also encourages ongoing client engagement. Additionally, compliance with 'do not call' requests and the management of offboarding processes are streamlined, ensuring data privacy and retention policies are effortlessly maintained. Patronum stands as a beacon of efficiency and security in the sales and marketing ecosystem, enabling teams to surpass their targets while safeguarding client relationships and team dynamics.",
        img: "/assets/useCases/sales-marketing/main5.svg",
    }
]

export default function UseCasesDetail() {

    return (
        <>
            <PageLayout
                pageTitle1={'Patronum'}
                pageTitle2={'for Sales & Marketing'}
                pagePara={"Empowering Sales and Marketing Teams with Delegated Administration"}
                imgSrc={'use-cases-sales-marketing.svg'}
                title={"Patronum for Sales Marketing - Patronum"}
                description={"Patronum for Sales and Marketing transforms Google Workspace into a powerhouse for teams, enabling them to excel in the competitive sales arena while achieving targets and maintaining motivation, all without the constant need for IT intervention."}
                url={"patronum-for-sales-marketing"}
                img={"patronum-for-sales-marketing.jpg"}
                date_published={"2023-04-20T12:00"}
                date_modified={"2024-04-04T12:00"}
                keywords={"Google Workspace"}
                breadcrumbTitle={"Use Cases"}
                breadcrumbLink={"use-cases"}
            >

                <section id="second-section">
                    <div className="container">
                        <div className="content-2">
                            <SectionTitle
                                sectionTitle1="Use Cases:"
                                sectionTitle2="Patronum for Sales & Marketing"
                                sectionPara="In the competitive sales and marketing arena, achieving targets and maintaining team motivation are paramount. Patronum transforms Google Workspace into a powerhouse for sales and marketing teams, enabling them to excel without the constant need for IT intervention."
                            />
                            <div className="useCases-Info">
                                {UseCasesInfo.map((usecase, index) => (
                                    <UseCaseCard
                                        key={index}
                                        para={usecase.para}
                                        imgSrc={usecase.img}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                <Faqs featureName={"patronum_for_sales"} />

            </PageLayout>
        </>
    )
}