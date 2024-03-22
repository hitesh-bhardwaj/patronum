import UseCaseCard from "@/components/PageComponents/UseCasePage/UseCaseCard";
import PageLayout from "@/components/PageLayout";
import SectionTitle from "@/components/PageLayout/SectionTitle";

import { useEffect } from "react";
import SplitType from "split-type";
import gsap from "gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger);

const UseCasesInfo = [
    {
        id: "01",
        para: "“Patronum is a real game-changer when it comes to Google Workspace administration.” Alexis Trabuchet, IT Manager, Fintecture explained, “With Patronum we can completely automate the user on and offboarding with policies that you can apply organization-wide.",
        img: "/assets/useCases/business/main1.svg",
    },
    {
        id: "02",
        para: "For large enterprises Patronum is a Google Workspace productivity suite for IT professionals who need to implement strategic policies. Many tasks can either be automated by dedicated IT staff in centralized support and/or delegated to knowledgable non-IT managers. These include Google Drive Management, Contact Sharing and Email Signature Management. With subsidiaries or franchises, pre-agreed Patronum policies enable IT professionals to set up a tailored Google Workspace environment quickly.",
        img: "/assets/useCases/business/main2.svg",
    },
    {
        id: "03",
        para: "For small to medium enterprise (SME) Patronum’s intuitive interface is ideal for busy executives, who may not have a detailed knowledge of Google, but want a better way to manage Google Workspace. These include Google Drive management with automated file unsharing and compliance.",
        img: "/assets/useCases/business/main3.svg",
    }
]

export default function UseCasesDetail(){

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

    return (
        <>
            <PageLayout 
                pageTitle1={'Patronum'} 
                pageTitle2={'for Business'}
                pagePara={"The only tool you'll ever need to streamline your Google Workspace management."} 
                imgSrc={'use-cases_business.svg'}
            >

                <section id="second-section">
                    <div className="container">
                        <div className="content-2">
                            <SectionTitle 
                                sectionTitle1="Use Cases:"
                                sectionTitle2="Patronum for Business"
                                sectionPara="Patronum redefines user lifecycle management by providing a consistent and unified experience within Google Workspace while significantly reducing IT expenditure in managing users and resources."
                            />
                            <div className="useCases-Info">
                                {UseCasesInfo.map((usecase, index) => (
                                    <UseCaseCard 
                                        key={index}
                                        para={usecase.para}
                                        imgSrc={usecase.img}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>    
                </section>

            </PageLayout>
        </>
    )
}