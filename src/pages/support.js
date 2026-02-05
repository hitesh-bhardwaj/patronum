import SectionBreakSmall from "@/components/PageLayout/SectionBreakSmall";
import PrimaryButton from "@/components/PageLayout/Button/PrimaryButton";
import MetaData from "@/components/PageLayout/MetaData";
import Layout from "@/components/Layout";
import Hero from "@/components/ContactTrial/Hero";
import { SupportHero } from "@/components/Illustrations/SupportHero";

function openCrispChat() {
  if (window.$crisp) {
    window.$crisp.push(["do", "chat:open"]);
  } else {
    console.error("Crisp chat script not loaded.");
  }
}

export default function Support() {
  const SupportCard = ({ featTitle, featImg, featPara1, btnText }) => {
    return (
      <>
        <div className="group/item">
          <div className="">
            <span className="lineDraw lg:h-[2px] w-full block bg-[#1a1a1a] h-[1px]" />
            <h3 className="title-3xl fadeRight lg:font-medium text-[#2a2a2a] lg:py-[1.5vw] lg:px-[1vw] capitalize font-normal px-[2vw] py-[2vw]">
              <span>{featTitle}</span>
            </h3>
            <span className="lineDraw lg:h-[2px] w-full block bg-[#1a1a1a] h-[1px] " />
          </div>
          <div className=" flex items-center justify-between w-full lg:pt-[6%] lg:pr-[5%] lg:pb-[12%] lg:flex-row flex-col-reverse  lg:group-odd/item:flex-row-reverse  pt-[10%] pb-[20%] gap-[8vw] lg:gap-0">
            <div className=" lg:w-[42%] w-full lg:space-y-[3vw] space-y-[10vw]">
              <p className="content-p fadeUp">{featPara1}</p>
              <div className="">
                <PrimaryButton
                  onClick={openCrispChat}
                  btnText={btnText}
                  scroll={false}
                  link={""}
                />
              </div>
            </div>
            <div className="fadeUp lg:w-[35%] w-[80%]">
              <img
                width="520"
                height="423"
                loading="lazy"
                src={featImg}
                alt={featTitle}
                title={featTitle}
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      <MetaData
        title={"Patronum - Expert Google Workspace support within few minutes"}
        description={
          "You no longer have to wait for any expert help and get direct support for G Suite Management with Patronum. We offer support through video call, chat and even screen sharing."
        }
        url={"support"}
        img={"support.jpg"}
        date_published={"2020-12-21T12:00"}
        date_modified={"2024-04-04T12:00"}
        keywords={"Patronum Google Workspace Manager"}
      />
      <Layout>
        <main>
          <Hero
            pageTitle1={"Support"}
            pagePara={
              "Contact Our Experts for Personalized Support & Find Solutions Quickly"
            }
            svgElement={<SupportHero className={"h-full w-full"}/>}
          />

          <SectionBreakSmall sectionBreakText="With Patronum you get expert help and support directly from within the application." />
          <section className="">
            <div className="container">
              <div className="content">
                {supportFeatures.map((feature, index) => (
                  <SupportCard key={index} {...feature} />
                ))}
              </div>
            </div>
          </section>
        </main>
      </Layout>
    </>
  );
}

const supportFeatures = [
  {
    featTitle: "Chat",
    featPara1:
      "We know how frustrating it can be to have to create a support ticket, having to write down a complex explanation of your issue, then wait for several days, only for the support agent to ask further dumb questions. At Patronum we’re different, our experts are on hand 24/7 directly within the application to help you get the most out of our platform. Simply click on the chat icon to speak immediately to one of our experts.",
    featImg: "/assets/support/chat.svg",
    btnText: "Chat With Us",
  },
  {
    featTitle: "Video Call",
    featPara1:
      "At Patronum we know that sometimes it’s just easier to have a face to face converzation in order to explain your challenge. Likewise, it’s often quick for our support team to speak with you in order to explain how things can be done better. That’s why we’ve built video chat directly into the Patronum interface. Start a chat and allow our support experts to escalate your chat to a face to face video call.",
    featImg: "/assets/support/video-call.svg",
    btnText: "Chat With Us",
  },
  {
    featTitle: "Screen Sharing",
    featPara1:
      "At Patronum we don’t want you to have to create a long and complex support ticket. We want to help you at precisely the right time and place where you’re having trouble. Within Patronum we’ve added built-in chat, video and even screensharing so that we can provide the very best customer service in the industry. Too many software organization rely on a support ticketing system where customers log issues and someone will eventually get back to you. That model is broke, with Patronum we want to help you immediately, directly from within our application.",
    featImg: "/assets/support/screen-sharing.svg",
    btnText: "Chat With Us",
  },
];
