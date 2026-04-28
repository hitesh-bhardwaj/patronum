import Image from 'next/image';
import React from 'react'

const WebinarCard = ({ imgSrc, title, para}) => {
    return (
      <>
        <div className="fadeUp w-[47%] webinar-card rounded-[10px] border border-[#e8e8e8] cursor-pointer">
          <div
            className="overflow-hidden rounded-[10px] h-full hover:shadow-xl duration-300"
          >
            <div className="image-container xl:h-[23.5vw] h-[55vw] relative w-full border-b border-[#e8e8e8]">
              <Image
                src={imgSrc}
                fill
                className="h-full w-full object-cover"
                alt="Webinar Image"
                title="Webinar Image"
              />
            </div>
            <div className="text-container px-[8%] lg:py-[4%] lg:pb-[6%] py-[8%] lg:space-y-[2vw] space-y-[5%] flex justify-between flex-col">
              <div className="space-y-[2vw]">
                <h3 className="lg:text-[2.35vw] text-[6vw] leading-[1.4] w-[85%]">
                  {title}
                </h3>
                <p className="content-p text-[#444444]">{para}</p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };
const Properties = () => {
  return (
   <section id="second-section ">
            <div className="container">
              <div className="content-2">
                <div className="lg:flex items-start justify-between">
                        <h2 className="title-4xl text-anim">
                            <span>Your data stays on </span>
                            <br />
                            <span>your machine</span>
                        </h2>
                        <p className="content-p lg:w-1/3 w-[95%] lg:mt-[1vw] mt-[5vw] text-anim-2">
                            <span>
                                Patronum Migrate is built for operators who need to know exactly where their data is at every step.
                            </span>
                        </p>
                    </div>

                <div className="flex justify-between flex-wrap lg:gap-y-[5vw] flex-col lg:flex-row  lg:mt-[5vw] mt-[10vw] items-stretch">
                  {Details.map((detail, index) => (
                    <WebinarCard
                      key={index}
                      imgSrc={detail.img}
                      title={detail.title}
                      para={detail.content}
                    />
                  ))}
                </div>
              </div>
               
            </div>
            <div  className="ratings fadeUp container-lg pb-[5vw]">
                          <div className=" bg-white border border-[#e2e2e2] rounded-2xl shadow-lg">
                              
                    <div className=" flex items-start justify-between flex-wrap lg:my-[3vw] my-[7vw] space-y-[8vw] lg:space-y-0">
                        {partnerCards.map((card) => (
                            <div
                                key={card.title}
                                className="fadeUp text-center lg:w-[33%] w-full flex items-center flex-col lg:gap-[0.5vw]  gap-[3vw]"
                            >
                                <img
                                    className="img lg:w-[28%] lg:h-[3vw] w-[30%] h-[10vw]"
                                    src={card.icon}
                                    alt={card.alt}
                                />
                                <h3 className="lg:text-[1.85vw] aeonik text-[4.5vw]">{card.title}</h3>
                                <p className="content-p w-[50%]">{card.description}</p>
                            </div>
                        ))}
                    </div>
                              
                          </div>
                      </div>
          </section>
  )
}

export default Properties
const Details = [
  {
    title:
      "Not Accessible from the Internet",
    img: "/assets/features/migration/not-accessible.svg",
    content:
      "The web interface listens on your local machine only - it can't be reached from outside your computer. There's no cloud relay, no remote access, no inbound port to secure.",
  },
  {
    title: "Credentials Stored Encrypted",
    img: "/assets/features/migration/credentials.svg",
    content:
      "Your Microsoft and Google API credentials are encrypted before being saved. They're never included in exports or visible through the app - only used in the moment a job needs them.",
    
  },
  {
    title: "No Database Server Required",
    img: "/assets/features/migration/database.svg",
    content:
      "All job state and mappings are stored in a local database file on your machine. Nothing to provision, nothing to maintain, and the database path is always shown in the app.",
    
  },
  {
    title: "Nothing Gets Lost on Restart",
    img: "/assets/features/migration/restart.svg",
    content:
      "Every job transition is recorded as it happens. If Patronum Migrate closes mid-migration, the next launch finds exactly where things were and continues cleanly - no silent failures, no lost.",
    
  }
];
const partnerCards = [
    {
       
        icon: '/assets/features/migration/location.svg',
        alt: 'Local',
        title: 'Local',
        description:
            "No cloud servers, no shared infrastructure",
    },
    {
        icon: '/assets/features/migration/single-file.svg',
        alt: 'Single File',
        title: 'Single File',
        description:
            'One binary - web UI, engine and SQLite',
    },
    {
        icon: '/assets/features/migration/encrypted.svg',
        alt: 'Encrypted',
        title: 'Encrypted',
        description:
            "Credentials never stored in plaintext",
    },
]