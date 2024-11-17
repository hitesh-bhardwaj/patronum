import Image from "next/image";

const FeatureDetailInfo = ({ content }) => {
    return (
        <section id="feature-detail-info">
            <div className="container">
                <div className="content">
                    <div className="section-list-container">
                        {content.map((feature, index) => (
                            <div key={index} className="section-list-item">
                                <div className="section-list-head">
                                    <h3 className="title-3xl fadeRight">
                                        <span>
                                            {feature.title}
                                        </span>
                                    </h3>
                                    <span className="section-list-hr lineDraw" />
                                </div>
                                <div className="section-list-body">
                                    <div className="section-list-body-left">
                                        <Image width={339} height={270} loading="lazy" className="fadeUp" src={feature.img} alt={feature.title} title={feature.title} />
                                    </div>
                                    <div className="section-list-body-right">
                                        <p className="content-p fadeUp">
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
    )
}

export default FeatureDetailInfo;