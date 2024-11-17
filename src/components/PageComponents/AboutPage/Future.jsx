import SectionTitle from "@/components/PageLayout/SectionTitle";
import Image from "next/image";
import React from "react";

const Future = () => {

    const futureContent = [
        {
            img: "future-1.png",
            title: "Continuous Innovation",
            para: "Our journey doesn't stop here. We are committed to continuous innovation, constantly enhancing our platform to meet the ever-changing landscape of cloud computing. We aim to remain at the forefront of cloud software services, providing our customers with cutting-edge solutions.",
        },
        {
            img: "future-2.png",
            title: "Expanding Our Reach",
            para: "As we look to the future, we aim to expand our reach, bringing Patronum to more organizations worldwide. We are dedicated to making cloud management more accessible, efficient, and secure for businesses of all sizes.",
        },
        {
            img: "future-3.png",
            title: "Stronger Partnerships",
            para: "We recognize the importance of strong partnerships in our growth and success. Moving forward, we will continue to forge and nurture partnerships that align with our mission and values, creating a robust network that benefits our customers and the broader community.",
        },
    ]

    return (
        <section className="patronum-future" id="future">
                    <div className="container-lg !w-[85%]">
                        <div className="content">
                            <div className="section-head">
                                <SectionTitle
                                    sectionTitle1='Looking Ahead:'
                                    sectionTitle2="The Future of Patronum"
                                    sectionPara="Give your users a consistent, and unified experience within their Google Workspace while at the same time reduce IT spend managing users and resources."
                                />
                            </div>
                            <div className="patronum-future-bottom fadeUp lg:flex items-start justify-between block">
                                <span className="w-[1px] h-[30vw] bg-[#c2c2c2] lg:block hidden" />
                                {futureContent.map((item, index) => {
                                    return (
                                        <React.Fragment key={index}>
                                            <div className="future-card lg:w-[33%] lg:py-[5%] lg:px-[3%] w-full p-[5%] lg:block flex items-center flex-col lg:border-none border-x border-[#e2e2e2] lg:mb-0 mb-[15vw]">
                                                <div className="img fadeUp lg:w-[5vw] lg:h-[5vw] flex justify-center items-center border border-[#2a2a2a] rounded-full lg:p-[1vw] w-[15vw] h-[15vw] p-[5%] lg:mb-0 mb-[5vw] relative">
                                                    <Image width={50} height={50} src={`/assets/about/${item.img}`} alt="Patronum Future Image" className="object-contain" loading="lazy"/>
                                                </div>
                                                <h5 className="title text-anim-2 lg:text-[2vw] text-[#2a2a2a] mt-[1.5vw] lg:mb-[2vw] text-[6.8vw] mb-[8vw]">{item.title}</h5>
                                                <p className="content-p fadeUp lg:!text-[1vw] lg:text-left !text-[4vw] text-center">{item.para}</p>
                                            </div>
                                            <span className="w-[1px] h-[30vw] bg-[#c2c2c2] lg:block hidden" />
                                        </React.Fragment>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </section>
    )
}

export default Future;