import Faqs from "@/components/PageComponents/FeaturesPage/Faq";
import PageLayout from "@/components/PageLayout";
import FeatureCard from "@/components/PageLayout/FeatureCard";
import SectionBreakSmall from "@/components/PageLayout/SectionBreakSmall";

export default function Support(){

    return (
        <>
            <PageLayout
                pageTitle1={'Support'} 
                pagePara={"The only tool you'll ever need to streamline your Google Workspace management."} 
                imgSrc={'support.svg'}>

                    <SectionBreakSmall 
                        sectionBreakText="With Patronum you get expert help and support directly from within the application."
                    />

                    <section className="features-main useCases-main">
                        <div className="container">
                            <div className="content">
                                <FeatureCard
                                    featTitle={"Chat"}
                                    featPara1={"We know how frustrating it can be to have to create a support ticket, having to write down a complex explanation of your issue, then wait for several days, only for the support agent to ask further dumb questions. At Patronum we’re different, our experts are on hand 24/7 directly within the application to help you get the most out of our platform. Simply click on the chat icon to speak immediately to one of our experts."}
                                    featImg={"/assets/support/chat.svg"}
                                    featLink={"#"}
                                    btnText="Chat With Us"
                                />
                                <FeatureCard
                                    featTitle={"Video Call"}
                                    featPara1={"At Patronum we know that sometimes it’s just easier to have a face to face conversation in order to explain your challenge. Likewise, it’s often quick for our support team to speak with you in order to explain how things can be done better. That’s why we’ve built video chat directly into the Patronum interface. Start a chat and allow our support experts to escalate your chat to a face to face video call."}
                                    featImg={"/assets/support/video-call.svg"}
                                    featLink={"#"}
                                    btnText="Chat With Us"
                                />
                                <FeatureCard
                                    featTitle={"Screen Sharing"}
                                    featPara1={"At Patronum we don’t want you to have to create a long and complex support ticket. We want to help you at precisely the right time and place where you’re having trouble. Within Patronum we’ve added built-in chat, video and even screensharing so that we can provide the very best customer service in the industry. Too many software organisation rely on a support ticketing system where customers log issues and someone will eventually get back to you. That model is broke, with Patronum we want to help you immediately, directly from within our application."}
                                    featImg={"/assets/support/screen-sharing.svg"}
                                    featLink={"#"}
                                    btnText="Chat With Us"
                                />
                            </div>
                        </div>
                    </section>
                    
                    <Faqs />
                    
            </PageLayout>
        </>
    )
}

