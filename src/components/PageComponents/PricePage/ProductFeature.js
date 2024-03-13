import SectionTitle from '@/components/PageLayout/SectionTitle';
import React, { useState } from 'react';
import styles from '@/styles/pricing.module.css';

const ProductFeatures = () => {
    const [isOpen, setIsOpen] = useState(null);

    const toggleAccordion = (index) => {
        setIsOpen(isOpen === index ? null : index);
    };

    const features = [
        {
            title: "Dashboard",
            img: '/assets/pricing/detail-1.png',
            description: [
                'Top Organisation Shares',
                'Top Externally Shared Files',
                'Top External Domains',
                'Alerts & Reports',
                'Live Task Status',
            ]
        },
        {
            title: "Google Drive Management",
            img: '/assets/pricing/detail-2.png',
            description: [
                'Top Organisation Shares',
                'Top Externally Shared Files',
                'Top External Domains',
                'Alerts & Reports',
                'Live Task Status',
            ]
        },
        {
            title: "Google Drive Compliance",
            img: '/assets/pricing/detail-3.png',
            description: [
                'Top Organisation Shares',
                'Top Externally Shared Files',
                'Top External Domains',
                'Alerts & Reports',
                'Live Task Status',
            ]
        },
        {
            title: "Centralised User Management",
            img: '/assets/pricing/detail-4.png',
            description: [
                'Top Organisation Shares',
                'Top Externally Shared Files',
                'Top External Domains',
                'Alerts & Reports',
                'Live Task Status',
            ]
        },
        {
            title: "Email Signature Management",
            img: '/assets/pricing/detail-5.png',
            description: [
                'Top Organisation Shares',
                'Top Externally Shared Files',
                'Top External Domains',
                'Alerts & Reports',
                'Live Task Status',
            ]
        },
        {
            title: "Google Group Administration",
            img: '/assets/pricing/detail-6.png',
            description: [
                'Top Organisation Shares',
                'Top Externally Shared Files',
                'Top External Domains',
                'Alerts & Reports',
                'Live Task Status',
            ]
        },
        {
            title: "Contact Management & Sharing",
            img: '/assets/pricing/detail-7.png',
            description: [
                'Top Organisation Shares',
                'Top Externally Shared Files',
                'Top External Domains',
                'Alerts & Reports',
                'Live Task Status',
            ]
        },
        {
            title: "Automated Onboarding",
            img: '/assets/pricing/detail-8.png',
            description: [
                'Top Organisation Shares',
                'Top Externally Shared Files',
                'Top External Domains',
                'Alerts & Reports',
                'Live Task Status',
            ]
        },
        {
            title: "Automated Offboarding",
            img: '/assets/pricing/detail-9.png',
            description: [
                'Top Organisation Shares',
                'Top Externally Shared Files',
                'Top External Domains',
                'Alerts & Reports',
                'Live Task Status',
            ]
        },
    ]

    return (
        <>
            <section id="features">
                <div className="container">
                    <div className="content">
                        <div className="section-head">
                            <SectionTitle 
                                sectionTitle1={"Lorem Ipsum"}
                                sectionTitle2={"Lorem Ipsum Dolor"}
                                sectionPara={"Patronum redefines user lifecycle management by providing a consistent and unified experience within Google Workspace while significantly reducing IT expenditure in managing users and resources."}
                            />
                        </div>

                        <div className={styles.wrapper}>
                            {features.map((item, index) => (
                                <>
                                    <div onClick={() => toggleAccordion(index)} className={`${styles.featureItem} ${index === isOpen ? `${styles.open}` : ''}`} key={index}>
                                        <div className={`${styles.featureItemContent} ${styles.features}`}>
                                            <div className={styles.featureMainContent}>
                                                <h5 className={styles.contentHead}>
                                                    {item.title}
                                                </h5>
                                                <div className={styles.featureContent}>
                                                    {item.description.map((feature, index) => (
                                                        <p key={index} className={styles.content}>
                                                            <span>{feature}</span>
                                                        </p>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                        <div className={styles.featureImg}>
                                            <img src={item.img} loading='lazy' alt={`${item.title} Image`} />
                                        </div>
                                    </div>
                                    <span className='h-[1px] bg-[#1a1a1a] w-full lineDraw block'/>
                                </>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default ProductFeatures;
