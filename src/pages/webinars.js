import PageLayout from "@/components/PageLayout";
import LinkButton from "@/components/PageLayout/Button/LinkButton";

export default function Webinars(){

    const WebinarCard = ( { imgSrc, title, para, link } ) => {
        return (
            <div className="webinar-card hover:shadow-lg duration-300 w-[47%] overflow-hidden rounded-[10px] h-full border border-[#e8e8e8]">
                <div className="image-container w-full h-[65%]">
                    <img src={imgSrc} className="h-full w-full object-cover" alt="Webinar Image" title="Webinar Image"/>
                </div>
                <div className="text-container px-[8%] py-[4%] pb-[6%] flex flex-col gap-[1.2vw]">
                    <h3 className="text-[1.57vw]">
                        {title}
                    </h3>
                    <p className="content-p text-[#444444]">
                        {para}
                    </p>
                    <span className="w-full h-[1px] block bg-[#C5C5C5]"/>
                    <div className="">
                    <LinkButton 
                        link={link}
                        btnText={"Watch Webinar"}
                    />
                    </div>
                </div>
            </div>
        )
    }

    return (
        <>
            <PageLayout
                pageTitle1={'Webinars'} 
                pagePara={"View our latest webinars and videos, or register for upcoming content to hear from industry experts and business leaders on a range of value-driven topics"} 
                imgSrc={'webinars.svg'}>

                    <section id="second-section">
                        <div className="container">
                            <div className="content-2">
                                <h2 className="title-4xl">
                                    <span>
                                        Explore Our
                                    </span>
                                    <br />
                                    <span>
                                        Latest Webinars
                                    </span>
                                </h2>

                                <div className="cards-wrapper webinar">
                                    <WebinarCard 
                                        imgSrc="/assets/resources/webinars/webinar-1.png"
                                        title={"How to better protect your Shared Drives files"}
                                        para={"Managing and sharing contacts can be a daunting task, especially with the many contact management apps and services available today."}
                                        link={"#"}
                                    />
                                    <WebinarCard 
                                        imgSrc="/assets/resources/webinars/webinar-2.png"
                                        title={"How to better protect your Shared Drives files"}
                                        para={"Managing and sharing contacts can be a daunting task, especially with the many contact management apps and services available today."}
                                        link={"#"}
                                    />
                                    <WebinarCard 
                                        imgSrc="/assets/resources/webinars/webinar-1.png"
                                        title={"How to better protect your Shared Drives files"}
                                        para={"Managing and sharing contacts can be a daunting task, especially with the many contact management apps and services available today."}
                                        link={"#"}
                                    />
                                    <WebinarCard 
                                        imgSrc="/assets/resources/webinars/webinar-2.png"
                                        title={"How to better protect your Shared Drives files"}
                                        para={"Managing and sharing contacts can be a daunting task, especially with the many contact management apps and services available today."}
                                        link={"#"}
                                    />
                                    <WebinarCard 
                                        imgSrc="/assets/resources/webinars/webinar-1.png"
                                        title={"How to better protect your Shared Drives files"}
                                        para={"Managing and sharing contacts can be a daunting task, especially with the many contact management apps and services available today."}
                                        link={"#"}
                                    />
                                    <WebinarCard 
                                        imgSrc="/assets/resources/webinars/webinar-2.png"
                                        title={"How to better protect your Shared Drives files"}
                                        para={"Managing and sharing contacts can be a daunting task, especially with the many contact management apps and services available today."}
                                        link={"#"}
                                    />
                                    <WebinarCard 
                                        imgSrc="/assets/resources/webinars/webinar-1.png"
                                        title={"How to better protect your Shared Drives files"}
                                        para={"Managing and sharing contacts can be a daunting task, especially with the many contact management apps and services available today."}
                                        link={"#"}
                                    />
                                    <WebinarCard 
                                        imgSrc="/assets/resources/webinars/webinar-2.png"
                                        title={"How to better protect your Shared Drives files"}
                                        para={"Managing and sharing contacts can be a daunting task, especially with the many contact management apps and services available today."}
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

