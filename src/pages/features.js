import Faqs from "@/components/PageComponents/FeaturesPage/Faq";
import Testimonial from "@/components/PageLayout/Testimonial";
import PageLayout from "@/components/PageLayout";
import SectionTitle from "@/components/PageLayout/SectionTitle";
import FeatureCard from "@/components/PageLayout/FeatureCard";

const featuresData = [
    {
        title: 'Onboarding & Offboarding',
        para1: "Patronum transforms the onboarding and offboarding process within Google Workspace into a streamlined, efficient, and secure experience. With Patronum, the entire process is automated, ensuring that new employees are quickly integrated with access to essential tools and resources from day one. Similarly, for the offboarding process, when employees leave, Patronum ensures that their access to company resources is revoked promptly and securely, safeguarding sensitive information and maintaining the integrity of your Google Workspace.",
        para2: "This comprehensive approach to user management saves administrative time and significantly enhances your organization's security posture, making it an indispensable tool for any Google Workspace administrator.",
        img: "/assets/features/onboarding.svg",
        link: "#"
    },
    {
        title: 'File Unsharing & Compliance',
        para1: "Patronum's Automated File Unsharing feature is a game-changer for organizations looking to enhance data security and regulatory compliance within Google Workspace. Patronum allows administrators to establish policies that automate the clean-up of shared files, particularly with external organizations, ensuring adherence to data protection laws and regulations. With Patronum, you can maintain control over who has access to your files and for how long, providing a secure and controlled environment for your organization's sensitive data.",
        para2: "Moreover, it simplifies the often complex and error-prone process of managing file permissions, making it easier for administrators to enforce compliance and data governance policies. By automating these critical tasks, Patronum bolsters your security posture and frees up valuable time for IT staff to focus on other strategic initiatives.",
        img: "/assets/features/file-unsharing.svg",
        link: "#"
    },
    {
        title: 'Contact Sharing',
        para1: "Break free from contact sharing limitations! Patronum is the is the only enterprise-ready application designed for contact sharing within Google Workspace. It allows seamless sharing of contact information across teams or departments, ensuring that everyone in your organization has access to the most current and accurate contact details. With Patronum, the contact sharing process is not only simple but also secure, giving administrators enhanced control over who can access and share contacts.",
        para2: "Enhance organisational efficiency by improving communication flows and ensuring that important contact information is always at your team's fingertips while protecting sensitive information and ensuring that it is only accessible to authorized personnel.",
        img: "/assets/features/contact-sharing.svg",
        link: "#"
    },
    {
        title: 'Email Signature Management',
        para1: "Patronum's Email Signature Management feature offers a dynamic and consistent solution for managing email signatures across your Google Workspace. With Patronum, the process of updating and managing email signatures is automated, eliminating the need for manual intervention and ensuring uniformity across all users. It also allows for quick updates to signature templates, which can be instantly rolled out across the organization, ensuring that any branding or contact information changes are immediately reflected in every email sent.",
        para2: "Transform your email signatures into a powerful branding asset with Patronum, where every email becomes an opportunity to showcase your organization's professionalism and attention to detail.",
        img: "/assets/features/email-signature.svg",
        link: "#"
    },
    {
        title: 'Google Workspace Backup',
        para1: "A robust and reliable solution for backing up your Google Workspace data. Patronum provides high-frequency, comprehensive backups of all your Google data, including Emails, Calendars, Contacts, Files, and Shared Drives. With Patronum Backup, you can rest assured that your data is secure and easily recoverable in the event of accidental or malicious deletions. The backups are performed with 100% fidelity, ensuring that your data is preserved exactly as it is, without any loss of information or structure.",
        para2: "Secure Your Google Workspace data with the most advanced, reliable backup technology available in the market to ensure your Google Workspace data is always protected.",
        img: "/assets/features/workspace-backup.svg",
        link: "#"
    },
    {
        title: 'Google Drive Management',
        para1: "Maintain the integrity and security of your organization's data with Patronum. Our platform provides administrators with comprehensive control over users' files and folders, enhancing the management of Google Drive within Google Workspace. This allows for the sharing, copying, and backup of Google Drive content, ensuring that important files are not only accessible but also secure. Administrators can easily manage file access permissions, organize Drive content, and safeguard critical files through backups.",
        para2: "Patronum provides an intuitive way for administrators to oversee and manage the vast amount of data stored in Google Drive and simplifies the complexities of file management, improving efficiency and reducing the risk of data loss or unauthorized access.",
        img: "/assets/features/drive-management.svg",
        link: "#"
    },
    {
        title: 'Organisational Chart',
        para1: "Patronum's Organizational Chart is a powerful tool for navigating and understanding the structure of your organization within Google Workspace. This feature provides a clear and detailed view of the company hierarchy, showing who reports to whom and the relationships between different team members. The Organizational Chart is particularly useful for new employees who need to understand the company structure and for managers who need to keep track of team dynamics. ",
        para2: "The Patronum People Search feature, integrated within the Organizational Chart, makes finding and connecting with colleagues easy, fostering a more connected and collaborative work environment.",
        img: "/assets/features/organisational-chart.svg",
        link: "#"
    },
];

export default function Features(){

    return (
        <>
            <PageLayout 
                pageTitle1={'Your Swiss Army Knife'} 
                pageTitle2={'For Google Workspace'}
                pagePara={"The only tool you'll ever need to streamline your Google Workspace management."} 
                imgSrc={'features.svg'}>

                <section id="second-section">
                    <div className="container">
                        <div className="content">
                            <div className="featuresPage-top">
                                <SectionTitle sectionTitle1='Features' sectionPara="Transform your Google Workspace experience with Patronum, the ultimate solution to your onboarding nightmares, permission hassles, and data compliance woes. " />
                                <div className="paraSectionHead">
                                    <p className="aeonik font-[400]">Transform your Google Workspace experience with Patronum, the ultimate solution to your onboarding nightmares, permission hassles, and data compliance woes. Patronum is designed to streamline the management of Google Workspace.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="features-main">
                    <div className="container">
                        <div className="content">
                            {featuresData.map((feature, index) => (
                                <FeatureCard
                                    key={index}
                                    featTitle={feature.title}
                                    featPara1={feature.para1}
                                    featPara2={feature.para2}
                                    featImg={feature.img}
                                    featLink={feature.link}
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