export default function SectionBreak( {sectionBreakText} ) {
    return (
        <section className="section-break">
            <div className="container">
                <div className="content">
                    <p className="section-break-text aeonik">{sectionBreakText}</p>
                </div>
            </div>
        </section>
    )
}