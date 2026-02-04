import Image from "next/image";

const FeatureDetailInfo = ({ content }) => {
  return (
    <section id="">
      <div className="mx-auto w-[100%] lg:w-[80%] px-5 max-w-full">
        <div className="py-[5vw]">
          <div>
            {content.map((feature, index) => (
              <div key={index}>
                
                {/* Head */}
                <div className="flex flex-col justify-between px-[1vw] lg:gap-2 py-4 lg:py-[1.5vw]">
                  <h3
                    className="
                      fadeRight
                      lg:text-[2.4vw] text-[6vw] 
                      text-neutral-800
                    "
                  >
                    <span>{feature.title}</span>
                  </h3>

                  <span className="lineDraw block h-[1px] w-full bg-neutral-900" />
                </div>

                {/* Body */}
                <div className={`flex  flex-col lg:gap-0 gap-6 items-center justify-between px-[5%] lg:pt-[4%] pt-10 lg:pb-[5%] pb-[18%] ${index%2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                  
                  {/* Image */}
                  <div className="lg:w-[30%] w-[70%]">
                    <Image
                      width={339}
                      height={270}
                      loading="lazy"
                      src={feature.img}
                      alt={feature.title}
                      title={feature.title}
                      className="fadeUp h-auto w-full"
                    />
                  </div>

                  {/* Text */}
                  <div className="lg:w-[42%] w-[100%] lg:pt-0 pt-4">
                    <p
                      className="
                        fadeUp
                        lg:text-[1.15vw] text-[4vw] leading-[1.5]
                        text-neutral-700
                      "
                    >
                      {feature.para}
                    </p>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureDetailInfo;
