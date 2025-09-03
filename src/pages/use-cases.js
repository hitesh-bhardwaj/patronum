import Testimonial from "@/components/PageLayout/Testimonial";
import PageLayout from "@/components/PageLayout";
import FeatureCard from "@/components/PageLayout/FeatureCard";
import SectionBreakSmall from "@/components/PageLayout/SectionBreakSmall";
import dynamic from "next/dynamic";

const Faqs = dynamic(() => import("@/components/PageComponents/FeaturesPage/Faq"), { ssr: true });

const useCasesData = [
    {
        title: 'Patronum for Business',
        para1: "For businesses, efficiency and data security are paramount. Patronum can automate administrative tasks, manage user access, and secure data, significantly reducing the IT burden. This automation allows businesses to focus on growth and innovation, ensuring that their Google Workspace environment is streamlined, secure, and aligned with business objectives.",
        para2: "By automating routine tasks, companies can enhance productivity, ensuring that every team member has the resources they need to succeed.",
        img: "/assets/home/patronum-for-business.svg",
        link: "/patronum-for-business"
    },
    {
        title: 'Patronum for HR',
        para1: "Patronum goes a long way to giving Human Resource executives control over organization-wide policies that shape how you work. Patronum also makes onboarding and offboarding processes more efficient. By automating the creation and management of user accounts, email signatures, and access to essential documents and drives, HR can ensure a smooth transition for new hires and departing employees.",
        para2: "This digital transformation in HR not only saves time but also enhances the employee experience, reinforcing the organization's commitment to operational excellence and employee satisfaction.",
        img: "/assets/home/patronum-for-hr.svg",
        link: "/patronum-for-hr"
    },
    {
        title: 'Patronum for sales & marketing',
        para1: "Patronum is designed to help non-IT professionals directly control Google Workspace for their teams. With Patronum, marketing teams can centrally manage email signatures to ensure brand consistency, launch targeted marketing campaigns through shared contacts, and efficiently collaborate on shared drives.",
        para2: "These capabilities enable sales and marketing teams to present a unified brand to customers, streamline communication efforts, increase website traffic, generate leads, and drive sales through more effective marketing strategies.",
        img: "/assets/home/patronum-for-sales-marketing.svg",
        link: "/patronum-for-sales-marketing"
    },
    {
        title: 'Patronum for Education',
        para1: "Educational institutions can leverage Patronum to delegate administrative tasks effectively, manage classroom resources, and foster collaboration among students and faculty. Patronum can delegate IT administration within universities to faculty, department or course administration. School districts, groups of schools or academies benefit from predefined IT administration which can be tailored locally to their needs.",
        para2: "These tools simplify the management of educational content, enhance communication channels, and secure sensitive information, providing a safer, collaborative, and more productive learning environment.",
        img: "/assets/home/patronum-for-education.svg",
        link: "/patronum-for-education"
    },
    {
        title: 'Patronum for Users',
        para1: "Patronum enhances the workspace experience for general users by simplifying access to necessary resources from day one. It goes beyond simplifying tasks—it transforms the way users interact with the digital workspace. Instantly accessible resources, streamlined file management, and a connected contact system empower users to work smarter, not harder.",
        para2: "Seamless integration ensures that every user, regardless of tech savviness, can navigate the digital landscape with ease, making every workday more efficient and every collaboration more effective.",
        img: "/assets/home/patronum-for-users.svg",
        link: "/patronum-for-users"
    },
    {
        title: 'Patronum for IT Admins',
        para1: "Patronum redefines the role of IT Administrators in Google Workspace management by offering a suite of tools that automate and simplify complex tasks. From user provisioning to meticulous security configurations and reliable data backups, it covers all bases, liberating IT staff from the trenches of day-to-day management.",
        para2: "This allows for a shift in focus to strategic initiatives that foster innovation and growth. As a nexus of control and efficiency, Patronum provides a safer, more organized digital environment, empowering IT Admins with the capability to preemptively address challenges and support a thriving digital ecosystem.",
        img: "/assets/home/patronum-for-it-admins.svg",
        link: "#"
    },
];

export default function useCases() {

    return (
        <>
            <PageLayout
                pageTitle1={'Unlocking Efficiency'}
                pageTitle2={'Across Departments'}
                pagePara={"Break Barriers, Build Bridges & Harness the Full Potential of Google Workspace Across Your Organization"}
                imgSrc={'useCases.svg'}
                title={"Patronum - One stop destination for G Suite management"}
                description={"With the help of Patronum, you can save time by avoiding those monotonous and repetitive tasks. Patronum will help with G Suite management in whichever field you are in be it IT, HR, Marketing, Sales, Users or Education."}
                url={"use-cases"}
                img={"use-cases.jpg"}
                date_published={"2020-12-21T12:00"}
                date_modified={"2024-04-04T12:00"}
                keywords={"G Suite management"}>

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

                <Faqs featureName="use_cases" />

            </PageLayout>
        </>
    )
}