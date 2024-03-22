import Faqs from "@/components/PageComponents/FeaturesPage/Faq";
import PageLayout from "@/components/PageLayout";
import FeatureCard from "@/components/PageLayout/FeatureCard";
import SectionBreakSmall from "@/components/PageLayout/SectionBreakSmall";

import { useEffect } from "react";
import gsap from "gsap"
import SplitType from "split-type";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Support(){

    useEffect(() => {
        const headings = document.querySelectorAll('.text-anim');
    
        headings.forEach((heading) => {
          let ctx = gsap.context(() => {
            const textAnim = new SplitType(heading, {types: 'words'});
            let animWord = heading.querySelectorAll('.word');
    
            gsap.from(animWord, {
              scrollTrigger: {
                trigger: heading,
                start: 'top 80%',
              },
              duration: 0.8,
              yPercent: 100,
              stagger: 0.02,
            });
          });
          return () => ctx.revert();
        });
      }, []);

      useEffect(() => {
        const fadeUps = document.querySelectorAll('.fadeUp');
    
        let ctx = gsap.context(() => {
          fadeUps.forEach((fadeUp) => {
            gsap.fromTo(
              fadeUp,
              {
                opacity: 0,
                y: 50,
              },
              {
                opacity: 1,
                y: 0,
                duration: 0.6,
                ease: 'Power3.out',
                scrollTrigger: {
                  trigger: fadeUp,
                  start: 'top 85%',
                },
              }
            );
          });
        });
        return () => ctx.revert();
      }, []);

      useEffect(() => {
        const fadeRights = document.querySelectorAll('.fadeRight');
    
        let ctx = gsap.context(() => {
          fadeRights.forEach((fadeRight) => {
            gsap.fromTo(
              fadeRight,
              {
                opacity: 0,
                x: 50,
              },
              {
                opacity: 1,
                x: 0,
                duration: 0.6,
                stagger: 0.05,
                ease: 'Power3.out',
                scrollTrigger: {
                  trigger: fadeRight,
                  start: 'top 85%',
                },
              }
            );
          });
        });
        return () => ctx.revert();
      }, []);

      useEffect(() => {
        const lineDraws = document.querySelectorAll('.lineDraw');
    
        let ctx = gsap.context(() => {
          lineDraws.forEach((lineDraw) => {
            gsap.fromTo(
              lineDraw,
              {
                scaleX: 0,
                transformOrigin: 'left'
              },
              {
                scaleX: 1,
                duration: 2,
                ease: 'expo.out',
                scrollTrigger: {
                  trigger: lineDraw,
                  start: 'top 90%',
                },
              }
            );
          });
        });
        return () => ctx.revert();
      }, []);

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

