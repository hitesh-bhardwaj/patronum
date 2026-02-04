export default function FeatureDetailTitle({
  sectionTitle1,
  sectionTitle2,
  sectionPara,
  sectionParaBig,
}) {
  return (
    <section>
      <div className="mx-auto w-[90%] lg:w-[80%]  max-w-full">
        <div className="py-[5vw]">

          {/* Title */}
          <h2
            className="
              text-anim mb-[3vw] text-[8vw]
              lg:text-[3.8vw] leading-[1.1] font-[400]
              text-neutral-800
            "
          >
            <span>{sectionTitle1}</span>
            <br />
            <span>{sectionTitle2}</span>
          </h2>

          {/* Content */}
          <div className="block items-start justify-between lg:flex">

            {/* Left paragraph */}
            <div>
              <p
                className="
                  fadeUp
                  mt-[5vw] mb-[10vw] w-full text-[4vw]
                  md:text-[1.15vw] leading-[1.5] font-[500]
                  text-neutral-700
                  lg:mt-[1vw] lg:mb-0 lg:w-[30.7vw]
                "
              >
                {sectionPara}
              </p>
            </div>

            {/* Right big paragraph */}
            <div className="mt-[1vw]  w-full text-[4.5vw]  text-neutral-800 lg:w-[40%]">
              <p className="text-anim-2 text-[5vw] lg:text-[1.6vw] font-[400]">
                <span>{sectionParaBig}</span>
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
