const FeatureDetailCard  = ({id, img, title, content}) => {
    return (
        <>
            <div className="feature-detail-card">
                <div className="text-left w-full">
                    <div className="cards-num">
                        <span className="aeonik">
                            {id}
                        </span>
                    </div>
                </div>
                <div className="img">
                    <img 
                        src={img} 
                        alt={title} 
                        title={title}
                    />
                </div>
                <div>
                    <h5 className="title aeonik">
                        {title}
                    </h5>
                    <p className="content-p">
                        {content}
                    </p>
                </div>
            </div>
        </>
    )
}

export default FeatureDetailCard;