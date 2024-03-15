export default function UseCaseCard( {para, imgSrc} ) {
    return(
        <>
            <div className="section-list-item">
                <div className="section-list-body">
                    <div className="section-list-body-left fadeUp">
                        <img loading="lazy" src={imgSrc} alt="useCases Image"/>
                    </div>
                    <div className="section-list-body-right">
                        <p className="content-p text-anim-2">
                            <span>
                                {para}
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}