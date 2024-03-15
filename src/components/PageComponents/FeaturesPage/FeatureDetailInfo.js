export default function FeatureDetailInfo( {featureDetailInfoTitle, imgSrc, featureDetailInfoPara} ) {
    return(
        <>
            <div className="section-list-item">
                <div className="section-list-head">
                    <h3 className="title-3xl fadeIn">
                        <span>
                            {featureDetailInfoTitle}
                        </span>
                    </h3>
                    <span className="section-list-hr lineDraw"/>
                </div>
                <div className="section-list-body">
                    <div className="section-list-body-left fadeUp">
                        <img className="" loading="lazy" src={imgSrc} alt={featureDetailInfoTitle} title={featureDetailInfoTitle}/>
                    </div>
                    <div className="section-list-body-right">
                        <p className="content-p fadeUp">
                            {featureDetailInfoPara}
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}