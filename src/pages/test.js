import React, { useState } from "react";
import Header from "@/components/Header";
import HomeNavigation from "@/components/SideMenu";

export default function Test() {

    return (
        <>
            <Header />
            <HomeNavigation />
            <main>
                <section className="h-screen w-screen" id="intro">
                    <div className="h-full w-full flex justify-center items-start text-9xl">
                        Introduction
                    </div>
                </section>
                <section className="h-screen w-screen" id="about">
                    <div className="h-full w-full flex justify-center items-start text-9xl">
                        About
                    </div>
                </section>
                <section className="h-[120vw] w-screen" id="features">
                    <div className="h-full w-full flex justify-center items-start text-9xl">
                        Features
                    </div>
                </section>
                <section className="h-screen w-screen">
                    <div className="h-full w-full flex justify-center items-start text-9xl">
                        Testimonial
                    </div>
                </section>
                <section className="h-[500vh] w-screen" id="use-cases">
                    <div className="h-full w-full flex justify-center items-start text-9xl">
                        Use Cases
                    </div>
                </section>
                <section className="h-screen w-screen" id="blog">
                    <div className="h-full w-full flex justify-center items-start text-9xl">
                        Blog
                    </div>
                </section>
            </main>
        </>
    )
}