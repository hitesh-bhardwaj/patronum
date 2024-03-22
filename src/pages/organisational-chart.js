import Faqs from "@/components/PageComponents/FeaturesPage/Faq";
import FeatureDetailInfo from "@/components/PageComponents/FeaturesPage/FeatureDetailInfo";
import FeatureDetailTitle from "@/components/PageComponents/FeaturesPage/FeatureDetailTitle";
import PageLayout from "@/components/PageLayout";
import SectionBreak from "@/components/PageLayout/SectionBreak";
import VideoPlayer from "@/components/PageLayout/VideoPlayer";

import { useEffect } from "react";
import gsap from "gsap"
import SplitType from "split-type";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function FeatureDetail(){

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
        const sHeadings = document.querySelectorAll('.text-anim-2');
    
        sHeadings.forEach((sHeading) => {
          let ctx = gsap.context(() => {
            const textAnim2 = new SplitType(sHeading, {types: 'words'});
            let animWord2 = sHeading.querySelectorAll('.word');
    
            gsap.from(animWord2, {
              scrollTrigger: {
                trigger: sHeading,
                start: 'top 80%',
              },
              duration: 0.5,
              yPercent: 100,
              opacity: 0,
              stagger: 0.01,
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

    const featuresDetail = [
        {
            title: 'Easy to use',
            para: "In addition to sharing contacts across all your users within your company Google Workspace domain and sub-domains, you can also share and interact with customers and partners by sharing your Google Contacts outside of your Google Workspace domain.",
            img: "/assets/features/organisational-chart/main-1.svg",
        },
        {
            title: 'Custom Schema',
            para: "Google contact sharing enables the best features for you and to manage your contacts. Patronum is smoothly integrated into Google Workspace, Gmail and Google Contacts. Our Google Chrome extension gives users the best possible experience when it comes to managing and sharing contacts with co-workers.",
            img: "/assets/features/organisational-chart/main-2.svg",
        },
        {
            title: 'Hierarchical Display',
            para: "Patronum is built on a global scale technical infrastructure designed to provide security throughout. We have invested heavily in securing our infrastructure and we have engineers dedicated to keeping your data and information secure and private.",
            img: "/assets/features/organisational-chart/main-3.svg",
        },
        {
            title: 'Direct Reports',
            para: "In Google contact sharing your Google Contacts are updated automatically across various platforms: Desktop, Mobile, Tablet or Microsoft Outlook. Users get instant access to contacts across different devices automatically.",
            img: "/assets/features/organisational-chart/main-4.svg",
        },
        {
            title: 'Unlock Talent',
            para: "With Patronum you are in control of your Google Addressbook. Share contact labels with other users and assign permissions such as “Can Edit”, “Can Delete” and “Read Only”. Our interface is based on the same permissions model used within Google Docs making it super easy to understand and deploy.",
            img: "/assets/features/organisational-chart/main-5.svg",
        },
        {
            title: 'Improved Collaboration',
            para: "Patronum provides administrators with an extensive logging feature which gives them the power to monitor and keep a track of updates to contact sharing throughout the whole system. See who is sharing what and to whom.",
            img: "/assets/features/organisational-chart/main-6.svg",
        },
    ]

    return (
        <>
            <PageLayout
                pageTitle1={'Organisational'} 
                pageTitle2={'Chart'}
                pagePara={"The only tool you'll ever need to streamline your Google Workspace management."} 
                imgSrc={'organisational-chart.svg'}
                >

                <VideoPlayer videoId="POIX6FiWaN0" videoCover={"/assets/features/organisational-chart/video-cover.png"}/> 

                <FeatureDetailTitle
                    sectionTitle1="Organisational Chart"    
                    sectionTitle2="For Google Workspace"
                    sectionPara="Find, collaborate and better understand the hierarchy within your organisation through the Patronum Organisational Chart and People Finder."
                    sectionParaBig="Google drive management solutions from Patronum allows IT administration to see Google drive in a whole different way. Allows IT administrators to see Google Drive in a whole different way."
                />

                <section id="feature-detail-info">
                    <div className="container">
                        <div className="content">
                            <div className="section-list-container">
                                {featuresDetail.map((feature, index) => (
                                    <FeatureDetailInfo
                                        key={index}
                                        featureDetailInfoTitle={feature.title}
                                        featureDetailInfoPara={feature.para}
                                        imgSrc={feature.img}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>    
                </section>

                <SectionBreak 
                    sectionBreakText="Patronum redefines User Lifecycle Management in Google Workspace by using automation, delivering unparalleled security and productivity, freeing you to focus on innovation and strategic growth."
                />

                <Faqs />

            </PageLayout>

        </>
    )
}