import PageLayout from "@/components/PageLayout";
import SectionBreakSmall from "@/components/PageLayout/SectionBreakSmall";

    function openCrispChat() {
        if (window.$crisp) {
        window.$crisp.push(['do', 'chat:open']);
        } else {
        console.error('Crisp chat script not loaded.');
        }
    }

export default function Support(){

    const SupportCard = ( {featTitle, featImg, featPara1, featPara2, btnText} ) => {
        return ( 
            <>
                <div className="section-list-item">
                    <div className="section-list-head">
                        <span className="section-list-hr lineDraw"/>
                        <h3 className="title-3xl fadeRight">
                            <span>
                                {featTitle}
                            </span>
                        </h3>
                        <span className="section-list-hr lineDraw"/>
                    </div>
                    <div className="section-list-body">
                        <div className="section-list-body-right">
                            <p className="content-p fadeUp">
                                {featPara1}
                            </p>
                            <p className="content-p fadeUp">
                                {featPara2}
                            </p>
                            <div className="section-list-button">
                                <button onClick={openCrispChat}  className="btn fadeUp" aria-label="Open Crisp Chat">
                                    <span data-primary className="btn-text">
                                        {btnText}
                                    </span>
                                    <div aria-hidden="true" className="btn-circle">
                                        <div className="btn-circle-text">
                                            {btnText}
                                            <svg viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg" className="btn-icon">
                                                <path data-v-f4363f2a fillRule="evenodd" clipRule="evenodd" d="M3.82475e-07 5.625L7.625 5.625L4.125 9.125L5 10L10 5L5 -4.37114e-07L4.125 0.874999L7.625 4.375L4.91753e-07 4.375L3.82475e-07 5.625Z" className="btn-path fill-current" />
                                                <path data-v-f4363f2a fillRule="evenodd" clipRule="evenodd" d="M3.82475e-07 5.625L7.625 5.625L4.125 9.125L5 10L10 5L5 -4.37114e-07L4.125 0.874999L7.625 4.375L4.91753e-07 4.375L3.82475e-07 5.625Z" className="btn-path fill-current" />
                                            </svg>
                                        </div>
                                    </div>
                                </button>
                            </div>
                        </div>
                        <div className="section-list-body-left fadeUp">
                            <img width="520" height="423" loading="lazy" src={featImg} alt={featTitle} title={featTitle}/>
                        </div>
                    </div>
                </div>
            </>
        )
    }
    
    return (
        <>
            <PageLayout
                pageTitle1={'Support'} 
                pagePara={"Contact Our Experts for Personalized Support & Find Solutions Quickly"} 
                imgSrc={'support.svg'}
                title={"Patronum - Expert Google Workspace support within few minutes"}
                description={"You no longer have to wait for any expert help and get direct support for G Suite Management with Patronum. We offer support through video call, chat and even screen sharing."}
                url={"support"}
                img={"support.jpg"}
                date_published={"2020-12-21T12:00"}
                date_modified={"2024-04-04T12:00"}
                keywords={"Patronum Google Workspace Manager"}
                >

                    <SectionBreakSmall 
                        sectionBreakText="With Patronum you get expert help and support directly from within the application."
                    />

                    <section className="features-main useCases-main">
                        <div className="container">
                            <div className="content">
                                <SupportCard
                                    featTitle={"Chat"}
                                    featPara1={"We know how frustrating it can be to have to create a support ticket, having to write down a complex explanation of your issue, then wait for several days, only for the support agent to ask further dumb questions. At Patronum we’re different, our experts are on hand 24/7 directly within the application to help you get the most out of our platform. Simply click on the chat icon to speak immediately to one of our experts."}
                                    featImg={"/assets/support/chat.svg"}
                                    btnText="Chat With Us"
                                />
                                <SupportCard
                                    featTitle={"Video Call"}
                                    featPara1={"At Patronum we know that sometimes it’s just easier to have a face to face converzation in order to explain your challenge. Likewise, it’s often quick for our support team to speak with you in order to explain how things can be done better. That’s why we’ve built video chat directly into the Patronum interface. Start a chat and allow our support experts to escalate your chat to a face to face video call."}
                                    featImg={"/assets/support/video-call.svg"}
                                    btnText="Chat With Us"
                                />
                                <SupportCard
                                    featTitle={"Screen Sharing"}
                                    featPara1={"At Patronum we don’t want you to have to create a long and complex support ticket. We want to help you at precisely the right time and place where you’re having trouble. Within Patronum we’ve added built-in chat, video and even screensharing so that we can provide the very best customer service in the industry. Too many software organization rely on a support ticketing system where customers log issues and someone will eventually get back to you. That model is broke, with Patronum we want to help you immediately, directly from within our application."}
                                    featImg={"/assets/support/screen-sharing.svg"}
                                    btnText="Chat With Us"
                                />
                            </div>
                        </div>
                    </section>
                    
                    
            </PageLayout>
        </>
    )
}

