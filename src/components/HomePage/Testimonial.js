import Slider from "./Slider";

export default function Testimonial(){
    return(
        <>
            <section id="testimonial">
                <div className="content">
                    <div className="container">
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
                    </div>
                    <div className="testi-slider">
                        <Slider />
                    </div>
                </div>
            </section>        
        </>
    )
}