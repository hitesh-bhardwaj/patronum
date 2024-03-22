import Faqs from "@/components/PageComponents/FeaturesPage/Faq";
import Testimonial from "@/components/PageLayout/Testimonial";
import PageLayout from "@/components/PageLayout";
import FeatureCard from "@/components/PageLayout/FeatureCard";
import SectionBreakSmall from "@/components/PageLayout/SectionBreakSmall";

import SplitType from "split-type";
import gsap from "gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

const useCasesData = [
    {
        title: 'Patronum for Business',
        para1: "Provisioning and deprovisioning users within Google Workspace can be time-consuming and costly. Let Patronum fully automate all the administrator and user tasks to ensure an effective and secure process. ",
        para2: "Provisioning and deprovisioning users within Google Workspace can be time-consuming and costly. Let Patronum fully automate all the administrator.",
        img: "/assets/useCases/business.svg",
        link: "/patronum-for-business"
    },
    {
        title: 'Patronum for HR',
        para1: "With Patronum you can automatically unshare Google Files reducing your organisations exposure. Quickly and easily set up policies that automate the clean up of file sharing with external organisations.",
        para2: "With Patronum you can automatically unshare Google Files reducing your organisations exposure. Quickly and easily set up policies that automate.",
        img: "/assets/useCases/hr.svg",
        link: "/patronum-for-hr"
    },
    {
        title: 'Patronum for Education',
        para1: "With Patronum you can automatically unshare Google Files reducing your organisations exposure. Quickly and easily set up policies that automate the clean up of file sharing with external organisations.",
        para2: "With Patronum you can automatically unshare Google Files reducing your organisations exposure. Quickly and easily set up policies that automate.",
        img: "/assets/useCases/education.svg",
        link: "/patronum-for-education"
    },
    {
        title: 'Patronum for sales & marketing',
        para1: "Patronum is the only enterprise-ready contact sharing application for Google Workspace. Allow your users to share their specific contacts via labels, while giving administrators enhanced visibility and management of the whole process.",
        para2: "Patronum is the only enterprise-ready contact sharing application for Google Workspace. Allow your users to share their specific contacts.",
        img: "/assets/useCases/sales-marketing.svg",
        link: "/patronum-for-sales-marketing"
    },
    {
        title: 'Patronum for IT Admins',
        para1: "With Patronum you can automatically unshare Google Files reducing your organisations exposure. Quickly and easily set up policies that automate the clean up of file sharing with external organisations.",
        para2: "With Patronum you can automatically unshare Google Files reducing your organisations exposure. Quickly and easily set up policies that automate.",
        img: "/assets/useCases/it-admins.svg",
        link: "/patronum-for-it-admins"
    },
    {
        title: 'Patronum for Users',
        para1: "With Patronum your staff will be up and running from day one with Google Drive Management, contact and calendar sharing. No more hunting for documents, or requesting access to schedules, or data they need.",
        para2: "Even in small organizations, it’s often difficult to connect with the right people. Patronum gives your organization instant access to your internal staff list via contact sharing. Search for people by department, location, or even skills using the Patronum Organisation Chart and People Finder. Then connect and start collaborating.",
        img: "/assets/useCases/users.svg",
        link: "/patronum-for-users"
    }
];

export default function useCases(){

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
                pageTitle1={'Address Challenges'} 
                pageTitle2={'Across Your Organisation'}
                pagePara={"The only tool you'll ever need to streamline your Google Workspace management."} 
                imgSrc={'useCases.svg'}>

                <SectionBreakSmall 
                    sectionBreakText={"Patronum gives you full control over how Google Workspace is managed with intelligent automation and delegation"}
                />

                <section className="features-main useCases-main">
                    <div className="container">
                        <div className="content">
                            {useCasesData.map((useCase, index) => (
                                <FeatureCard
                                    key={index}
                                    featTitle={useCase.title}
                                    featPara1={useCase.para1}
                                    featPara2={useCase.para2}
                                    featImg={useCase.img}
                                    featLink={useCase.link}
                                    btnText="Learn More"
                                />
                            ))}
                        </div>
                    </div>
                </section>

                <Testimonial />

                <Faqs />

            </PageLayout>
        </>
    )
}