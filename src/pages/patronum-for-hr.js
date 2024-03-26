import UseCaseCard from "@/components/PageComponents/UseCasePage/UseCaseCard";
import PageLayout from "@/components/PageLayout";
import SectionTitle from "@/components/PageLayout/SectionTitle";

const UseCasesInfo = [
    {
        id: "01",
        para: "“Patronum is a real game-changer when it comes to Google Workspace administration.” Alexis Trabuchet, IT Manager, Fintecture explained, “With Patronum we can completely automate the user on and offboarding with policies that you can apply organization-wide.",
        img: "/assets/useCases/hr/main1.svg",
    },
    {
        id: "02",
        para: "For large enterprises Patronum is a Google Workspace productivity suite for IT professionals who need to implement strategic policies. Many tasks can either be automated by dedicated IT staff in centralized support and/or delegated to knowledgable non-IT managers. These include Google Drive Management, Contact Sharing and Email Signature Management. With subsidiaries or franchises, pre-agreed Patronum policies enable IT professionals to set up a tailored Google Workspace environment quickly.",
        img: "/assets/useCases/hr/main2.svg",
    },
    {
        id: "03",
        para: "For small to medium enterprise (SME) Patronum’s intuitive interface is ideal for busy executives, who may not have a detailed knowledge of Google, but want a better way to manage Google Workspace. These include Google Drive management with automated file unsharing and compliance.",
        img: "/assets/useCases/hr/main3.svg",
    },
    {
        id: "04",
        para: "For large enterprises Patronum is a Google Workspace productivity suite for IT professionals who need to implement strategic policies. Many tasks can either be automated by dedicated IT staff in centralized support and/or delegated to knowledgable non-IT managers. These include Google Drive Management, Contact Sharing and Email Signature Management. With subsidiaries or franchises, pre-agreed Patronum policies enable IT professionals to set up a tailored Google Workspace environment quickly.",
        img: "/assets/useCases/hr/main4.svg",
    },
    {
        id: "05",
        para: "For small to medium enterprise (SME) Patronum’s intuitive interface is ideal for busy executives, who may not have a detailed knowledge of Google, but want a better way to manage Google Workspace. These include Google Drive management with automated file unsharing and compliance.",
        img: "/assets/useCases/hr/main5.svg",
    }
]

export default function UseCasesDetail(){

    return (
        <>
            <PageLayout 
                pageTitle1={'Patronum'} 
                pageTitle2={'for HR'}
                pagePara={"The only tool you'll ever need to streamline your Google Workspace management."} 
                imgSrc={'use-cases-hr.svg'}
            >

                <section id="second-section">
                    <div className="container">
                        <div className="content-2">
                            <SectionTitle 
                                sectionTitle1="Use Cases:"
                                sectionTitle2="Patronum for HR"
                                sectionPara="Patronum redefines user lifecycle management by providing a consistent and unified experience within Google Workspace while significantly reducing IT expenditure in managing users and resources."
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

            </PageLayout>
        </>
    )
}