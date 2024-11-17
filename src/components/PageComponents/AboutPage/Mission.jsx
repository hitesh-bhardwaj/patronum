import SectionTitle from "@/components/PageLayout/SectionTitle";
import Image from "next/image";

const Mission = () => {

    const missionContent = [
        {
            missionImg: "icon-1.png",
            missionTitle: "A Platform Built on Innovation and Excellence",
            missionPara: "Patronum has been at the forefront of innovation in cloud management since its inception. The platform is continuously updated with new features and capabilities, ensuring that it remains aligned with the evolving needs of modern IT organizations. This commitment to excellence has positioned Patronum as a leader in the field, trusted by businesses worldwide for their Google Workspace management needs."
        },
        {
            missionImg: "icon-2.png",
            missionTitle: "Customer-Centric Approach",
            missionPara: "At the core of Patronum's ethos is a customer-first philosophy. Every aspect of our service, from feature development to pricing strategies, is guided by the needs and feedback of our customers. We believe in fostering a transparent, collaborative, and engaging community, not just within our team but also among our partners and customers."
        },
        {
            missionImg: "icon-3.png",
            missionTitle: "Empowering IT Organizations",
            missionPara: "Our platform is more than just a tool; it's a solution that empowers IT organizations to manage their Google Workspace environments efficiently. By automating administrative tasks, we enable IT teams to focus on more strategic initiatives, enhancing overall productivity and security."
        }
    ];

    return (
        <section className="patronum-mission" id="mission">
            <div className="container">
                <div className="content">
                    <div className="mission-top flex lg:flex-row justify-between items-start flex-col flex-wrap lg:space-y-[10%]">
                        <SectionTitle sectionTitle1='Our Mission' sectionTitle2="And Values" sectionPara="Give your users a consistent, and unified experience within their Google Workspace while at the same time reduce IT spend managing users and resources." />
                        {missionContent.map((item, index) => (
                            <div key={index} className="lg:w-[29vw] lg:pt-[1vw] w-[95%] lg:mb-0 mb-[15vw] last:mb-0">
                                <Image className="fadeUp lg:w-[2.8vw] lg:mb-[1vw] w-[11vw] mb-[8vw]" src={`/assets/about/${item.missionImg}`} alt="mission icon" width={42} height={50} loading="lazy"/>
                                <h4 className="lg:text-[2.2vw] leading-[1.3] lg:mb-[2vw] text-anim-2 text-[6.8vw] mb-[8vw] fadeUp">{item.missionTitle}</h4>
                                <p className="content-p !leading-[1.6] fadeUp">{item.missionPara}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Mission;