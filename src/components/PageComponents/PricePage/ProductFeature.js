import SectionTitle from '@/components/PageLayout/SectionTitle';
import React, { useState } from 'react';
import styles from '@/styles/pricing.module.css';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"

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
                'Live Task Status'
            ]
        },
        {
            title: "Google Drive Management",
            img: '/assets/pricing/detail-2.png',
            description: [
                'Domain-wide Google Drive search',
                'Google Shared Drive Search and Management',
                'Document Administration'
            ]
        },
        {
            title: "Google Drive Compliance",
            img: '/assets/pricing/detail-3.png',
            description: [
                'Identify files shared internally',
                'Identify files shared externally',
                'Identify files shared with consumer gmail.com accounts',
                'Bulk removal of access to shared files and folders'
            ]
        },
        {
            title: "Centralised User Management",
            img: '/assets/pricing/detail-4.png',
            description: [
                'Granular Visibility & Control',
                'Google Group Management',
                'Share Google Calendars',
                'Set Google Calendar Timezone',
                'Contact Delegation',
                'Add, Edit, Update and Delete user’s My Contacts',
                'Bulk Import/Export User’s My Contacts',
                'View and Manage User’s Google Drive files',
                'View and Manage User’s Google Shared Drives',
                'Transfer user’s Google Drive files to Shared Drive',
                'Transfer user’s Google Drive files to another user',
                'Transfer only shared Google Drive data',
                'Edit Vacation Responder',
                'Create and Manage User’s Label',
                'Create and Manage User’s email aliases',
                'Configure Email Forwarding',
                'Create and Manage Gmail email filters',
                'Enable and disable POP and IMAP settings',
                'Inbox Delegation',
                'Manage 2-step verification backup codes',
                'Manage App passwords',
                'Edit Recovery phone and email settings',
                'Manage 3rd party applications',
                'Force User sign out',
                'Create and Manage Google Roles',
                'Permissions Management'
            ]
        },
        {
            title: "Email Signature Management",
            img: '/assets/pricing/detail-5.png',
            description: [
                'No email routing through 3rd party server / SMTP configuration',
                'Create, Edit, Update and Delete Google Workspace Email Signatures',
                'Pre-built signature templates',
                'Automatically amend joiners, movers or leavers Email Signatures',
                'Google Directory attributes and all schema extensions',
                'User’s Working Hours',
                'Conditional Statements depending on User’s profile information',
                'Embed Google Analytics UTM codes for marketing purposes',
                'Multiple Google Workspace email signatures per user',
                '“Send As” addresses',
                'Real-time preview and update',
                'Google Workspace user’s photo',
                'Delegated Access to Signature Management'
            ]
        },
        {
            title: "Google Group Administration",
            img: '/assets/pricing/detail-6.png',
            description: [
                'Hide Google Group from Directory',
                'Add Google Group Members',
                'Change Google Group Members permissions',
                'Edit Google Group Settings'
            ]
        },
        {
            title: "Contact Management & Sharing",
            img: '/assets/pricing/detail-7.png',
            description: [
                'Publish Google Directory for iOS and Android mobile devices',
                'Edit Google Domain Contacts',
                'Bulk import Google Domain Contacts',
                'Search all user’s My Contacts',
                'Add, Edit, Update and Delete user’s My Contacts',
                'Shared Google Contacts via Label',
                'Synchronize Google Directory with User’s My Contacts'
            ]
        },
        {
            title: "Automated Onboarding",
            img: '/assets/pricing/detail-8.png',
            description: [
                'User event triggered workflows',
                'Add users to Google Groups automatically',
                'Dynamically create Google Groups',
                'Add users to Google Calendars',
                'Automatically share user’s Google Calendar with others',
                'Automatically share Google Contacts via Labels',
                'Automatically shared Google Directory Contacts',
                'Shared Files from Google Drive and Shared Drives with users',
                'Bulk create Google Drive Files and Folders',
                'Automatically set Gmail Email Signatures',
                'Create Gmail Labels for users',
                'Add Email Aliases automatically to users',
                'Enabled Email Forwarding automatically',
                'Bulk create and distribute Email Filters',
                'Enable and disable POP/IMAP at scale',
                'Activate automatic Gmail Delegation',
                'Automatically allocate Google Workspace Licenses based on role'
            ]
        },
        {
            title: "Automated Offboarding",
            img: '/assets/pricing/detail-9.png',
            description: [
                'Remove users automatically from Google Groups',
                'Automatically transfer Google Group ownership',
                'Remove leavers as calendar event attendee',
                'Transfer Google primary calendars',
                'Automatically delete calendar events freeing up calendar resources',
                'Unshare calendars from staff who are leaving',
                'Transfer Google Contacts to manager or another appropriate user',
                'Remove leavers from all user’s Google Address book',
                'Transfer Google Contact Label sharing',
                'Transfer user’s Google Drive files to Shared Drive',
                'Transfer user’s Google Drive files to another user',
                'Transfer only shared Google Drive data',
                'Configure Email Forwarding',
                'Remove Delegate access',
                'Transfer Delegate access to another appropriate user',
                'Delete 2-step verification backup codes',
                'Delete app-specific passwords',
                'Change user’s password',
                'Remove Recovery Email and Phone Number',
                'Remove Connected 3rd Party Applications',
                'Force user sign out',
                'Hide User from Google Global Address book',
                'Move User to different organisational unit within Google Directory',
                'Rename the User',
                'Allocate leaver’s email address to another user or Google Group',
                'Timed suspension of User',
                'Timed deletion of User',
                'Automatically remove Google Workspace Licenses',
                'Automatically allocate Google Workspace Archive User Licenses'
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
                            <Accordion type="single" collapsible>
                                {features.map((item, index) => (
                                    <>
                                        <AccordionItem value={`item-${index}`} key={index} className={`${styles.featureItem} scaleAnim`}>
                                            <AccordionTrigger className={styles.featureMainContent}>
                                                <h5 className={styles.contentHead}>
                                                    {item.title}
                                                </h5>
                                                <div className={styles.featureImg}>
                                                    <img src={item.img} loading='lazy' alt={`${item.title} Image`} />
                                                </div>
                                            </AccordionTrigger>
                                            <AccordionContent className={styles.content}>
                                                {item.description.map((feature, index) => (
                                                    <span key={index} className='block' >{feature}</span>
                                                ))}
                                            </AccordionContent>
                                        </AccordionItem>
                                        <span className='h-[1px] bg-[#1a1a1a] w-full lineDraw block'/>
                                    </>
                                ))}
                            </Accordion>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default ProductFeatures;
