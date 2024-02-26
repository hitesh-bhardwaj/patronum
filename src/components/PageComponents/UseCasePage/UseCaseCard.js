export default function UseCaseCard( {para, imgSrc} ) {
    return(
        <>
            <div className="section-list-item">
                <div className="section-list-body">
                    <div className="section-list-body-left">
                        <img loading="lazy" src={imgSrc} alt="useCases Image"/>
                    </div>
                    <div className="section-list-body-right">
                        <p className="content-p">
                            {para}
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}