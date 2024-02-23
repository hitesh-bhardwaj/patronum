export default function FeatureDetailTitle( {sectionTitle1, sectionTitle2, sectionPara, sectionParaBig} ) {
    return (
        <section className="feature-detail-title">
            <div className="container">
                <div className="content">
                    <div className="sectionTitle">
                        <h2 className="title-4xl">
                            <span>
                                {sectionTitle1}
                            </span>
                            <br />
                            <span>
                                {sectionTitle2}
                            </span>
                        </h2>
                    </div>
                    <div className="flex items-start justify-between">
                        <div>
                            <p className="content-p mt-[1vw] w-[30.7vw]">
                                {sectionPara}
                            </p>
                        </div>
                        <div className="paraSectionHead">
                            <p className="aeonik font-[400]">
                                {sectionParaBig}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}