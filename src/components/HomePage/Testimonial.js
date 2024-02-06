import Slider from "./Slider";

export default function Testimonial(){
    return(
        <>
            <section id="testimonial">
                <div className="container">
                    <div className="content">
                        <div className="testimonial-top mb-[4vw]">
                            <h5 className="title-4xl">
                                <span>
                                    Client Speak: 
                                </span>
                                <br />
                                <span>
                                    Real Stories, Real Impact!
                                </span>
                            </h5>
                        </div>
                        <>
                            <Slider />   
                        </>
                    </div>
                </div>
            </section>        
        </>
    )
}