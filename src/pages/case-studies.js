import PageLayout from "@/components/PageLayout";
import LinkButton from "@/components/PageLayout/Button/LinkButton";

const CaseStudiesCard = ( {imgSrc, title, para, link } ) => {
    return (
        <div className="fadeUp guide-card hover:shadow-lg duration-300 w-[47%] overflow-hidden rounded-[18px] h-full border border-[#e8e8e8] bg-white">
            <div className="image-container w-full h-[50%]">
                <img src={imgSrc} className="h-full w-full object-cover" alt="Webinar Image" title="Webinar Image"/>
            </div>
            <div className="text-container px-[4%] py-[4%] lg:pb-[12%] pb-[8%] flex flex-col lg:gap-[1.2vw] gap-[3vw]">
                <h3 className="lg:text-[1.9vw] text-[5vw] font-medium leading-[1.3]">
                    {title}
                </h3>
                <p className="content-p text-[#444444]">
                    {para}
                </p>
                <div className="">
                <LinkButton 
                    link={link}
                    btnText="Read More"
                />
                </div>
            </div>
        </div>
    )
}

export default function CaseStudies(){

    return (
        <>
            <PageLayout
                pageTitle1={'Case Studies'} 
                pagePara={"Read our guides for a detailed exploration of relevant industry themes."} 
                imgSrc={'guides.svg'}>

                    <section id="second-section">
                        <div className="container">
                            <div className="content-2">
                                <h2 className="title-4xl text-anim">
                                    <span>
                                        Our Guides
                                    </span>
                                </h2>

                                <div className="cards-wrapper case-studies">
                                    <CaseStudiesCard 
                                        imgSrc="/assets/resources/case-studies/case-study-1.png"
                                        title={"Protect and promote your Google Drive files"}
                                        link={"#"}
                                    />
                                    <CaseStudiesCard 
                                        imgSrc="/assets/resources/case-studies/case-study-2.png"
                                        title={"Protect and promote your Google Drive files"}
                                        link={"#"}
                                    />
                                    <CaseStudiesCard 
                                        imgSrc="/assets/resources/case-studies/case-study-1.png"
                                        title={"Protect and promote your Google Drive files"}
                                        link={"#"}
                                    />
                                    <CaseStudiesCard 
                                        imgSrc="/assets/resources/case-studies/case-study-2.png"
                                        title={"Protect and promote your Google Drive files"}
                                        link={"#"}
                                    />
                                    <CaseStudiesCard 
                                        imgSrc="/assets/resources/case-studies/case-study-1.png"
                                        title={"Protect and promote your Google Drive files"}
                                        link={"#"}
                                    />
                                    <CaseStudiesCard 
                                        imgSrc="/assets/resources/case-studies/case-study-2.png"
                                        title={"Protect and promote your Google Drive files"}
                                        link={"#"}
                                    />
                                    <CaseStudiesCard 
                                        imgSrc="/assets/resources/case-studies/case-study-1.png"
                                        title={"Protect and promote your Google Drive files"}
                                        link={"#"}
                                    />
                                    <CaseStudiesCard 
                                        imgSrc="/assets/resources/case-studies/case-study-2.png"
                                        title={"Protect and promote your Google Drive files"}
                                        link={"#"}
                                    />
                                </div>
                            </div>
                        </div>
                    </section>
                    
            </PageLayout>
        </>
    )
}

