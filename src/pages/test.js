import React, { useState } from "react";
import Header from "@/components/Header";
import ContactForm from "@/components/Forms/ContactForm";

export default function Test() {

    return (
        <>
            <Header />
            <div className="h-screen w-screen flex justify-center items-center">
                <div className={"w-96 px-5"}>
                    <ContactForm />
                </div>                
            </div>
        </>
    )
}