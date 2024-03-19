export default function SectionTitle( {sectionTitle1, sectionTitle2, sectionPara} ) {

    return (
            <div className="sectionTitle">
                <h2 className="title-4xl lg:mb-8 mb-6 text-anim">
                    <span>
                        {sectionTitle1}
                     </span>
                    {sectionTitle2 && (
                        <>
                            <br />
                            <span>
                                {sectionTitle2}
                            </span>
                        </>
                     )}
                </h2>
                {sectionPara && (
                    <p className="content-p lg:w-[25vw] w-[95%] fadeUp">
                    {sectionPara}
                    </p>
                )}
            </div>
    )
}