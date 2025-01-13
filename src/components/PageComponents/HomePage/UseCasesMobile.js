import React from 'react';
import dynamic from 'next/dynamic';

const MobileSwiper = dynamic(() => import("./MobileSwiper", {ssr: false}));

export default function UseCasesMobile() {

    return (
        <>
            <section id="use-cases-mobile" className="lg:hidden">
                <div className="content">
                    <div className="container overflow-hidden">
                        <div className="section-head">
                            <h2 className="title-4xl text-anim">
                                <span>Master{" "}Challenges{" "}</span> 
                                <br />
                                <span>Across{" "}Your{" "}Organization</span>
                            </h2>
                        </div>
                    </div>

                    <div>
                        <MobileSwiper />
                    </div>
                </div>
            </section>
        </>
    )
}