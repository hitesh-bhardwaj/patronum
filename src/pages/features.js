import Faqs from "@/components/PageLayout/Faqs";
import Testimonial from "@/components/HomePage/Testimonial";
import PageLayout from "@/components/PageLayout";
import SectionTitle from "@/components/PageLayout/SectionTitle";

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

    const FeatureCard = ( {featTitle, featImg, featPara1, featPara2, featLink} ) => {
        return ( 
            <>
                <div className="section-list-item">
                    <div className="section-list-head">
                        <span className="section-list-hr"/>
                        <h3 className="title-3xl">
                            <span>
                                {featTitle}
                            </span>
                        </h3>
                        <span className="section-list-hr"/>
                    </div>
                    <div className="section-list-body">
                        <div className="section-list-body-right">
                            <p className="content-p">
                                {featPara1}
                            </p>
                            <p className="content-p">
                                {featPara2}
                            </p>
                            <div className="section-list-button">
                                <a href={featLink} className="btn">
                                    <span data-primary className="btn-text">
                                        Learn More
                                    </span>
                                    <div aria-hidden="true" className="btn-circle">
                                        <div className="btn-circle-text">
                                            Learn More
                                            <svg viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg" className="btn-icon">
                                                <path data-v-f4363f2a fillRule="evenodd" clipRule="evenodd" d="M3.82475e-07 5.625L7.625 5.625L4.125 9.125L5 10L10 5L5 -4.37114e-07L4.125 0.874999L7.625 4.375L4.91753e-07 4.375L3.82475e-07 5.625Z" className="btn-path fill-current" />
                                                <path data-v-f4363f2a fillRule="evenodd" clipRule="evenodd" d="M3.82475e-07 5.625L7.625 5.625L4.125 9.125L5 10L10 5L5 -4.37114e-07L4.125 0.874999L7.625 4.375L4.91753e-07 4.375L3.82475e-07 5.625Z" className="btn-path fill-current" />
                                            </svg>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="section-list-body-left">
                            <img loading="lazy" src={featImg} alt={featTitle} title={featTitle}/>
                        </div>
                    </div>
                </div>
            </>
        )
    }

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
                                <div className="para">
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