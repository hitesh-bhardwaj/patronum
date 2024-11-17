export default function FeatureDetailTitle({ sectionTitle1, sectionTitle2, sectionPara, sectionParaBig }) {
    return (
        <section className="feature-detail-title">
            <div className="container">
                <div className="content">
                    <h2 className="title-4xl text-anim mb-[3vw]">
                        <span>
                            {sectionTitle1}{" "}
                        </span>
                        <br />
                        <span>
                            {sectionTitle2}
                        </span>
                    </h2>
                    <div className="lg:flex items-start justify-between block">
                        <div>
                            <p className="content-p lg:mt-[1vw] mt-[5vw] lg:mb-0 mb-[10vw] lg:w-[30.7vw] w-full fadeUp">
                                {sectionPara}
                            </p>
                        </div>
                        <div className="paraSectionHead">
                            <p className="aeonik font-[400] text-anim-2">
                                <span>
                                    {sectionParaBig}
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}