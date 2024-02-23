import react from "react";

export default function FeatureDetailInfo( {featureDetailInfoTitle, imgSrc, featureDetailInfoPara} ) {
    return(
        <>
            <div className="section-list-item">
                <div className="section-list-head">
                    <h3 className="title-3xl">
                        <span>
                            {featureDetailInfoTitle}
                        </span>
                    </h3>
                    <span className="section-list-hr"/>
                </div>
                <div className="section-list-body">
                    <div className="section-list-body-left">
                        <img loading="lazy" src={imgSrc} alt={featureDetailInfoTitle} title={featureDetailInfoTitle}/>
                    </div>
                    <div className="section-list-body-right">
                        <p className="content-p">
                            {featureDetailInfoPara}
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}