import SectionTitle from "@/components/PageLayout/SectionTitle";
import Image from "next/image";
import React from "react";

const UpcomingWebinars = () => {
  // helper scroll function
  const scrollToJoinCommunity = () => {
    const section = document.getElementById("join-community");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="second-section">
      <div className="container">
        <div className="content-2 ">
          <SectionTitle
            sectionTitle1={"Upcoming Webinars"}
            sectionTitle2={" "}
            sectionPara={""}
          />
          <div className="lg:space-y-[0.5vw] space-y-[3vw]">
            {/* First clickable block */}
            <a
               href="https://meet.google.com/gjn-iczh-usy?hs=224"
              target="_blank"
              // onClick={scrollToJoinCommunity}
              className="h-full w-full rounded-[2.5vw] duration-200 overflow-hidden fadeUp hover:shadow-xl border hover:border-2 border-[#e8e8e8] hover:border-primary cursor-pointer block lg:rounded-[0.8vw]"
            >
              <div className="block w-full h-full">
                <Image
                  quality={100}
                  src={"/assets/community/upcoming-webinar-29-jan.png"}
                  alt="Upcoming Webinar Banner"
                  height={650}
                  width={1440}
                  className="object-cover"
                />
              </div>
            </a>

            {/* Second clickable block */}
            <a
              href="https://meet.google.com/gjn-iczh-usy?hs=224"
              target="_blank"
              // onClick={scrollToJoinCommunity}
              className="block cursor-pointer"
            >
              <div className="h-full w-full rounded-[2.5vw] border border-[#E8E8E8] bg-white hover:border-primary hover:border-2 flex flex-col lg:items-center lg:justify-center lg:text-center lg:py-[1vw] lg:space-y-[1vw] fadeUp lg:px-0 py-[5vw] px-[5vw] space-y-[5vw] duration-200 hover:shadow-xl lg:rounded-[0.8vw]">
                <p className="lg:text-[1.8vw] lg:w-[60%] aeonik font-normal text-[6.5vw] md:text-[4.5vw]">
                  Google Workspace Community Hangout: Why DMARC matters: Protecting your brand from BEC matters
                </p>
                <p className="content-p text-[#666666]">
                 January 29 , 4:00 pm
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UpcomingWebinars;
