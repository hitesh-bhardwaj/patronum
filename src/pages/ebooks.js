import PageLayout from "@/components/PageLayout";
import LinkButton from "@/components/PageLayout/Button/LinkButton";

    const EbookCard = ( {imgSrc, title, para, link } ) => {
        return (
            <div className="fadeUp guide-card hover:shadow-lg duration-300 w-[31.5%] overflow-hidden rounded-[18px] h-full">
                <div className="image-container w-full h-[50%]">
                    <img src={imgSrc} className="h-full w-full object-cover" alt="Webinar Image" title="Webinar Image"/>
                </div>
                <div className="text-container px-[4%] py-[4%] lg:pb-[12%] pb-[8%] flex flex-col lg:gap-[1.2vw] gap-[3vw]">
                    <h3 className="lg:text-[1.57vw] text-[5vw] font-medium leading-[1.3]">
                        {title}
                    </h3>
                    <p className="content-p text-[#444444]">
                        {para}
                    </p>
                    <div className="">
                    <LinkButton 
                        link={link}
                        btnText="Download Ebook"
                    />
                    </div>
                </div>
            </div>
        )
    }

export default function Ebooks(){

    return (
        <>
            <PageLayout
                pageTitle1={'Ebooks'} 
                pagePara={"Read our guides for a detailed exploration of relevant industry themes."} 
                imgSrc={'guides.svg'}
                title={"Ebooks - Patronum"}
                description={"Patronum provides a better way to Google Workspace (GSuite) Management. Patronum fully automates all the administrator and user tasks to ensure an efficient, effective and secure process."}
                url={"ebooks"}
                img={"Google-Workspace.png"}
                date_published={"2024-04-04T12:00"}
                date_modified={"2024-04-04T12:00"}
                keywords={"Patronum, Google Workspace Manager, G-Suite Manager"}
                >

                    <section id="second-section">
                        <div className="container">
                            <div className="content-2">
                                <h2 className="title-4xl text-anim">
                                    <span>
                                        Our Ebooks
                                    </span>
                                </h2>

                                <div className="cards-wrapper guide">
                                    <EbookCard 
                                        imgSrc="/assets/resources/ebooks/ebook-1.png"
                                        title={"Protect and promote your Google Drive files"}
                                        link={"#"}
                                    />
                                    <EbookCard 
                                        imgSrc="/assets/resources/ebooks/ebook-1.png"
                                        title={"Protect and promote your Google Drive files"}
                                        link={"#"}
                                    />
                                    <EbookCard 
                                        imgSrc="/assets/resources/ebooks/ebook-1.png"
                                        title={"Protect and promote your Google Drive files"}
                                        link={"#"}
                                    />
                                    <EbookCard 
                                        imgSrc="/assets/resources/ebooks/ebook-1.png"
                                        title={"Protect and promote your Google Drive files"}
                                        link={"#"}
                                    />
                                    <EbookCard 
                                        imgSrc="/assets/resources/ebooks/ebook-1.png"
                                        title={"Protect and promote your Google Drive files"}
                                        link={"#"}
                                    />
                                    <EbookCard 
                                        imgSrc="/assets/resources/ebooks/ebook-1.png"
                                        title={"Protect and promote your Google Drive files"}
                                        link={"#"}
                                    />
                                    <EbookCard 
                                        imgSrc="/assets/resources/ebooks/ebook-1.png"
                                        title={"Protect and promote your Google Drive files"}
                                        link={"#"}
                                    />
                                    <EbookCard 
                                        imgSrc="/assets/resources/ebooks/ebook-1.png"
                                        title={"Protect and promote your Google Drive files"}
                                        link={"#"}
                                    />
                                    <EbookCard 
                                        imgSrc="/assets/resources/ebooks/ebook-1.png"
                                        title={"Protect and promote your Google Drive files"}
                                        link={"#"}
                                    />
                                    <EbookCard 
                                        imgSrc="/assets/resources/ebooks/ebook-1.png"
                                        title={"Protect and promote your Google Drive files"}
                                        link={"#"}
                                    />
                                    <EbookCard 
                                        imgSrc="/assets/resources/ebooks/ebook-1.png"
                                        title={"Protect and promote your Google Drive files"}
                                        link={"#"}
                                    />
                                    <EbookCard 
                                        imgSrc="/assets/resources/ebooks/ebook-1.png"
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

