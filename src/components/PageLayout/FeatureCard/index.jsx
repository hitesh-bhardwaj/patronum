import PrimaryButton from "../Button/PrimaryButton";

const FeatureCard = ( {featTitle, featImg, featPara1, featPara2, featLink, btnText} ) => {
    return ( 
        <>
            <div className="section-list-item">
                <div className="section-list-head">
                    <span className="section-list-hr lineDraw"/>
                    <h3 className="title-3xl fadeRight">
                        <span>
                            {featTitle}
                        </span>
                    </h3>
                    <span className="section-list-hr lineDraw"/>
                </div>
                <div className="section-list-body">
                    <div className="section-list-body-right">
                        <p className="content-p fadeUp">
                            {featPara1}
                        </p>
                        <p className="content-p fadeUp">
                            {featPara2}
                        </p>
                        <div className="section-list-button">
                            <PrimaryButton link={featLink} btnText={btnText}/>
                        </div>
                    </div>
                    <div className="section-list-body-left fadeUp">
                        <img loading="lazy" src={featImg} alt={featTitle} title={featTitle}/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FeatureCard;