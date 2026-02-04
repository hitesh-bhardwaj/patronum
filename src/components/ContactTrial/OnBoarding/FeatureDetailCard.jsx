import SectionTitle from "@/components/PageLayout/SectionTitle";
import Image from "next/image";
import InstallButton from "@/components/Buttons/InstallButton";

const FeatureDetailCards = ({ content, title1, title2 }) => {
  return (
    <section id="">
      <div className="mx-auto w-[90%] max-w-full lg:w-[80%] lg:px-[50px]">
        <div className="py-[5vw]">

          <SectionTitle
            sectionTitle1={title1}
            sectionTitle2={title2}
          />

          {/* Cards */}
          <div className="mt-[8vw] block lg:grid lg:grid-cols-3 lg:gap-[3.5vw] lg:mb-[4vw]">
            {content.map((item, index) => (
              <div
                key={index}
                className="
                  fadeUp
                  mb-[8vw]
                  flex flex-col items-center
                  rounded-[10px] text-center
                  px-[4vw] pt-[4vw] pb-[12vw]
                  bg-[#fdfdfd] border border-[#e2e2e2]
                  lg:mb-0 lg:px-[1.5vw] lg:pt-[1.5vw] lg:pb-[4vw]
                "
              >
                {/* Number badge */}
                <div
                  className="
                    mr-auto mb-[2vw]
                    flex items-center justify-center
                    rounded-full font-[400]
                    h-[7.5vw] w-[7.5vw]
                    text-[3.5vw]
                    border border-[#2A2A2A] text-[#2A2A2A]
                    lg:h-[2.1vw] lg:w-[2.1vw] lg:text-[0.9vw]
                  "
                >
                  <span>{item.id}</span>
                </div>

                {/* Image */}
                <div className="mx-auto mb-[10%] w-[50%] lg:mb-[2vw] lg:w-[60%]">
                  <Image
                    loading="lazy"
                    height={185}
                    width={270}
                    src={item.img}
                    alt={item.title}
                    title={item.title}
                  />
                </div>

                {/* Text */}
                <div>
                  <h5
                    className="
                      mb-[4vw]
                      font-[500]
                      text-[5vw]
                      text-[#2A2A2A]
                      lg:mb-[1vw] lg:text-[1.5vw]
                    "
                  >
                    {item.title}
                  </h5>

                  <p
                    className="
                      px-[1vw]
                      text-[4vw]
                      font-[500]
                      leading-[1.3]
                      text-[#444444]
                      lg:text-[1vw]
                    "
                  >
                    {item.para}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="flex justify-center">
            <InstallButton />
          </div>

        </div>
      </div>
    </section>
  );
};

export default FeatureDetailCards;
