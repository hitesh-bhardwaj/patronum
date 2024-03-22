import Faqs from "@/components/PageComponents/FeaturesPage/Faq";
import FeatureDetailCard from "@/components/PageComponents/FeaturesPage/FeatureDetailCard";
import FeatureDetailInfo from "@/components/PageComponents/FeaturesPage/FeatureDetailInfo";
import FeatureDetailTitle from "@/components/PageComponents/FeaturesPage/FeatureDetailTitle";
import PageLayout from "@/components/PageLayout";
import InstallBlackButton from "@/components/PageLayout/Button/InstallBlackButton";
import SectionBreak from "@/components/PageLayout/SectionBreak";
import SectionTitle from "@/components/PageLayout/SectionTitle";
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
            title: 'Email Signature Templates',
            para: "Setting up standard folders, calendars, email signatures, and even Gmail Filters and Labels is effortless with Patronum. This ensures that new users have everything they need to be productive immediately, providing a best-in-class start within Google Workspace.",
            img: "/assets/features/email-signature-management/main-1.svg",
        },
        {
            title: 'Professional Google Workspace Email Signatures',
            para: "Understanding that IDaaS providers may not cover all business needs, Patronum complements these services by supporting major IDaaS providers like OneLogin, Namely, Okta, and PingIdentity. Patronum seamlessly integrates with these platforms, picking up where they leave off to provide a comprehensive user management experience.",
            img: "/assets/features/email-signature-management/main-2.svg",
        },
        {
            title: 'Ease of Use',
            para: "Security is a top priority in user management. Patronum adopts a security-first approach, ensuring that user access privileges are appropriately revoked upon their departure from the organisation. This includes automatic password changes, updating recovery email addresses, and deleting all app-specific passwords, thereby maintaining the integrity and security of your Google Workspace.",
            img: "/assets/features/email-signature-management/main-3.svg",
        },
        {
            title: 'HTML Editor For Expert Mode',
            para: "In a mobile-centric world, Patronum also extends its management capabilities to mobile devices. It automatically wipes mobile devices when users leave the organisation, ensuring that sensitive data remains securely within the organisation and does not leave with the departing employee.",
            img: "/assets/features/email-signature-management/main-4.svg",
        },
        {
            title: 'Always Up-to-date',
            para: "Patronum provides complete email signature management within Google Workspace, ensuring that all communications are consistent and aligned with your organisation's branding and standards.",
            img: "/assets/features/email-signature-management/main-5.svg",
        },
        {
            title: 'Delegate Control Of Email Signatures',
            para: "Patronum excels in simplifying complex tasks. Its automated workflows allow administrators to apply dynamic automation centrally, saving time and reducing the likelihood of errors and security issues.",
            img: "/assets/features/email-signature-management/main-6.svg",
        },
        {
            title: 'Real-time previews',
            para: "Patronum intelligently manages Google Workspace licensing, reducing costs by dynamically removing accounts during the de-provisioning process. This ensures that all resources are safely archived without the need for additional software, optimising your investment in Google Workspace.",
            img: "/assets/features/email-signature-management/main-7.svg",
        },
        {
            title: 'No Need For IT Experience Or Complex SMTP Settings',
            para: "For organisations that rely heavily on Google contacts, Patronum offers a centralised management system to keep all Google Contacts in sync and well-managed, enhancing communication efficiency across the organisation.",
            img: "/assets/features/email-signature-management/main-8.svg",
        },
    ]

    const featuresDetailCard = [
        {
            id: '01',
            title: 'Multiple Google Workspace email signatures',
            para: "Effortlessly Manage and Automate Google Group Memberships.",
            img: "/assets/features/email-signature-management/detail-1.svg",
        },
        {
            id: '02',
            title: 'Choose from pre-built signature templates',
            para: "Empower Specific Users with Controlled Access to Manage Others' Google.",
            img: "/assets/features/email-signature-management/detail-2.svg",
        },
        {
            id: '03',
            title: 'No need for IT experience or complex SMTP settings',
            para: "Simplify and Streamline the Sharing of Calendars within your Organisation.",
            img: "/assets/features/email-signature-management/detail-3.svg",
        },
        {
            id: '04',
            title: 'Standardise Branding & Marketing Campaigns',
            para: "Utilise Ready-Made Policy Templates for Quick and Efficient.",
            img: "/assets/features/email-signature-management/detail-4.svg",
        },
        {
            id: '05',
            title: 'Supports “Send As” addresses',
            para: "Securely and Promptly Revoke User Access to Data and Resources.",
            img: "/assets/features/email-signature-management/detail-5.svg",
        },
        {
            id: '06',
            title: 'Include Google Workspace users photo',
            para: "Easily Manage and Delete Calendar Events, Ensuring Up-to-Date.",
            img: "/assets/features/email-signature-management/detail-6.svg",
        },
        {
            id: '07',
            title: 'Real-time update',
            para: "Seamlessly Manage the Entire User Journey within Google Workspace.",
            img: "/assets/features/email-signature-management/detail-7.svg",
        },
        {
            id: '08',
            title: 'Delegated Access',
            para: "Gain Immediate Insights with Live Tracking of all User Activities.",
            img: "/assets/features/email-signature-management/detail-8.svg",
        },
    ]

    return (
        <>
            <PageLayout
                pageTitle1={'Email Signature'} 
                pageTitle2={'Management'}
                pagePara={"The only tool you'll ever need to streamline your Google Workspace management."} 
                imgSrc={'email-signature-management.svg'}
                >

                <VideoPlayer videoId="POIX6FiWaN0" videoCover={"/assets/features/email-signature-management/video-cover.png"}/>

                <FeatureDetailTitle
                    sectionTitle1="Email Signature Management"    
                    sectionTitle2="For Google Workspace"
                    sectionPara="Have you heard about email signature management? Do you want to have professional Google Workspace email signatures but lack the technical ability to do so."
                    sectionParaBig="Give your users a consistent, dynamic and centrally manage Gmail email signatures for all your users. With Patronum you will be confident that everyone within your organization is presenting themselves correctly and on-brand."
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

                <section id="feature-detail-card">
                    <div className="container">
                        <div className="content">
                            <SectionTitle 
                                sectionTitle1="Additional Email Signature"
                                sectionTitle2="Management Features"
                            />

                            <div className="feature-detail-card-wrapper">
                                {featuresDetailCard.map((featureDetail, index) => (
                                    <FeatureDetailCard
                                        key={index}
                                        id={featureDetail.id}
                                        title={featureDetail.title}
                                        content={featureDetail.para}
                                        img={featureDetail.img}
                                    />
                                ))}
                            </div>

                            <div className="section-btn-container">
                                <InstallBlackButton btnText="Install Patronum"/>
                            </div>
                        </div>
                    </div>    
                </section>

                <Faqs />

            </PageLayout>

        </>
    )
}