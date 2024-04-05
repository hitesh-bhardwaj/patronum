import Faqs from "@/components/PageComponents/FeaturesPage/Faq";
import UseCaseCard from "@/components/PageComponents/UseCasePage/UseCaseCard";
import PageLayout from "@/components/PageLayout";
import SectionTitle from "@/components/PageLayout/SectionTitle";

const UseCasesInfo = [
    {
        id: "01",
        para: "For educational institutions, tight budgets and the need to leverage technology like Google Workspace for Education present a dual challenge. Institutions must enhance the educational experience while managing scarce resources. The core issue isn’t just accessing these tools but managing them effectively to meet the varied needs of the educational ecosystem. This includes onboarding, ensuring seamless collaboration, and maintaining professional branding, all of which require time and expertise that many institutions lack.",
        img: "/assets/useCases/education/main1.svg",
    },
    {
        id: "02",
        para: "Efficiently managing Google Workspace for Education is crucial yet burdensome, adding stress to already stretched staff. Manual setups, configuring email signatures, and ensuring proper access can slow down innovation and complicate the integration of new hires. Moreover, the need for rapid adaptation, such as reconfiguring staff for temporary roles, demands agility beyond what many administrators can provide, affecting the institution's primary mission of delivering a seamless learning experience.",
        img: "/assets/useCases/education/main2.svg",
    },
    {
        id: "03",
        para: "Patronum eases this burden by simplifying Google Workspace management. It automates onboarding, email signature setups, and the classification of staff into Google Groups, facilitating immediate integration and resource access for new and temporary hires. This ensures effective collaboration and information access across the board.",
        img: "/assets/useCases/education/main3.svg",
    },
    {
        id: "04",
        para: "Additionally, Patronum’s organizational chart and People Finder enhance community cohesion, enabling new staff to connect with colleagues easily. It automates the secure management of Google Drive data and emails, ensuring smooth transitions and adherence to institutional policies without needing technical expertise.",
        img: "/assets/useCases/education/main5.svg",
    },
    {
        id: "05",
        para: "Extending its utility, Patronum’s Contacts sharing feature promotes inclusive communication with the educational community, including parents and guardians, across various devices. Its automated storage and compliance policies ensure data security and privacy, relieving administrative burdens and enriching the educational experience for all involved. This streamlined approach not only lightens administrative loads but also significantly boosts the learning environment for students, staff, and the broader community.",
        img: "/assets/useCases/education/main4.svg",
    }
]

export default function UseCasesDetail(){

    return (
        <>
            <PageLayout 
                pageTitle1={'Patronum'} 
                pageTitle2={'for Education'}
                pagePara={"Maximize Budget Efficiency with Patronum's Smart Automations built for Educators"} 
                imgSrc={'use-cases-education.svg'}
                title={"Patronum for Education - Patronum"}
                description={"Patronum provides a better way to Google Workspace (GSuite) Management. Patronum fully automates all the administrator and user tasks to ensure an efficient, effective and secure process."}
                url={"patronum-for-education"}
                img={"patronum-for-education.jpg"}
                date_published={"2023-04-20T12:00"}
                date_modified={"2024-04-04T12:00"}
                keywords={"Google Workspace"}
            >

                <section id="second-section">
                    <div className="container">
                        <div className="content-2">
                            <SectionTitle 
                                sectionTitle1="Use Cases:"
                                sectionTitle2="Patronum for Education"
                                sectionPara="Manual setup and constant adjustments burden staff, detracting from education quality. Patronum introduces an intuitive solution, automating Google Workspace management to streamline processes, from email signatures to resource allocation."
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

                <Faqs featureName={'patronum_for_education'}/>

            </PageLayout>
        </>
    )
}