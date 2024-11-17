import SectionTitle from "@/components/PageLayout/SectionTitle";
import Image from "next/image";

const Advantage = () => {

    const advantageContent = [
        {
            img: "advantage-1.svg",
            title: "Simplifying Google Workspace Management",
            para: "Patronum's platform is specifically tailored to enhance the Google Workspace experience. Automating administrative and user tasks ensures a more efficient, effective, and secure management process. This automation extends across the entire lifecycle of Google Workspace users, from onboarding to offboarding.",
        },
        {
            img: "advantage-2.svg",
            title: "A Testament to Global Excellence",
            para: "Patronum's global footprint is a reflection of our unwavering commitment to excellence and innovation. Our clientele, spanning across continents, is a diverse tapestry of industry leaders, visionary startups, and fast-growing scaleups. Each client's journey with Patronum is a story of transformation marked by enhanced efficiency, robust security, and streamlined cloud management.",
        },
        {
            img: "advantage-3.svg",
            title: "Community & Collaboration",
            para: "We believe in the power of collaboration. We have created an ecosystem that thrives on shared knowledge and collective innovation by actively engaging with our users and partners. This collaborative environment drives innovation and continuous improvement that not only enhances the platform but also fosters a sense of community among our users.",
        },
        {
            img: "advantage-4.svg",
            title: "A Platform for All",
            para: "Whether you're a small business or a large enterprise, Patronum is designed to cater to your specific needs. Our platform scales with your organization, ensuring that your Google Workspace management remains seamless and hassle-free, regardless of your company's size.",
        },
    ]

    return (
        <section className="patronum-advantage" id="advantage-patronum">
            <div className="container">
                <div className="content">
                    <div className="section-head">
                        <SectionTitle
                            sectionTitle1='The Patronum'
                            sectionTitle2="Advantage"
                            sectionPara="Give your users a consistent, and unified experience within their Google Workspace while at the same time reduce IT spend managing users and resources."
                        />
                    </div>
                    <div className="lg:flex flex-wrap items-start justify-between p-0 block">
                        {advantageContent.map((item, index) => {
                            return (
                                <div key={index} className="lg:w-[40%] lg:mb-[5vw] w-[95%] mb-[15vw] sm:last:mb-0">
                                    <div className="fadeIn lg:w-[14.5vw] lg:h-[14.5vw] lg:mb-[1.5vw] w-[70%] h-auto mb-[8vw] relative">
                                        <Image className="w-full h-full object-cover" src={`/assets/about/${item.img}`} alt="advantage image" fill loading="lazy"/>
                                    </div>
                                    <h5 className="title text-anim-2 lg:text-[2.2vw] w-[91%] leading-[1.3] lg:mb-[2vw] text-[6.8vw] mb-[8vw]">{item.title}</h5>
                                    <p className="content-p fadeUp">{item.para}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Advantage;