export default function SectionTitle( {sectionTitle1, sectionTitle2, sectionPara} ) {
    return (
            <div className="sectionTitle">
                <h2 className="title-4xl mb-8">
                    <span>
                        {sectionTitle1}
                     </span>
                     <br />
                     <span>
                        {sectionTitle2}
                     </span>
                </h2>
                <p className="content-p w-[25vw]">
                    {sectionPara}
                </p>
            </div>
    )
}