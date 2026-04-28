import React from 'react'

const partnerCards = [
    {
        icon: '/assets/features/migration/sharepoint.svg',
        alt: 'SharePoint to Google Drive',
        title: 'SharePoint → Google Drive',
        description:
            "Map document libraries to Shared Drives, preserve folder structure and permissions, and run transfer jobs directly from your machine.",
    },
    {
        icon: '/assets/features/migration/email-migration.svg',
        alt: 'M365 Email Migration',
        title: 'M365 Email Migration',
        description:
            'Batch mailbox migration with parallel workers, date range filters, and a per-message ledger - restarts pick up exactly where they left off.',
    },
    {
        icon: '/assets/features/migration/workspace-migration.svg',
        alt: 'Google Workspace Migration',
        title: 'Google Workspace Migration',
        description:
            "Full GWS-to-GWS and M365-to-GWS Patronum moves - email, Drive, Calendar, Contacts, and SharePoint from a single unified Migrate view.",
    },
]

const About = () => {
    return (
        <section id="second-section">
            <div className="container">
                <div className="content-2">
                    <div className="lg:flex items-start justify-between">
                        <h2 className="title-4xl text-anim">
                            <span>Everything you need,</span>
                            <br />
                            <span>nothing you don’t</span>
                        </h2>
                        <p className="content-p lg:w-1/3 w-[95%] lg:mt-[1vw] mt-[5vw] text-anim-2">
                            <span>
                                Run multi-day migrations with confidence on infrastructure you choose - workstation, VM, or server. Patronum Migrate is not a hosted cloud service, and the path from setup through cutover stays predictable.
                            </span>
                        </p>
                    </div>

                    <div className="lg:mt-[8vw] flex items-start justify-between flex-wrap mt-[15vw]">
                        {partnerCards.map((card) => (
                            <div
                                key={card.title}
                                className="fadeUp text-center lg:w-[33%] w-full flex items-center flex-col lg:gap-[1.5vw] mb-[16vw] lg:mb-0  lg:px-0 gap-[4vw]"
                            >
                                <img
                                    className="img lg:w-[28%] lg:h-[5.5vw] w-[30%] h-[20vw]"
                                    src={card.icon}
                                    alt={card.alt}
                                />
                                <h3 className="text-[5.5vw] aeonik lg:text-[1.85vw]">{card.title}</h3>
                                <p className="content-p w-[75%]">{card.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About