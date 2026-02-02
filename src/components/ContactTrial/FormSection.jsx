import React from "react";
import ContactPageTrialForm from "./ContactPageTrialForm";
import Link from "next/link";
import {
  Facebook,
  Instagram,
  LinkedIn,
  Twitter,
  Youtube,
} from "../Illustrations/SocialIcons";
import Image from "next/image";

const FormSection = () => {
  return (
    <section id="second-section">
      <div className="container">
        <div className=" lg:py-[7vw] py-[15%]">
          <div className="lg:flex items-start justify-between">
            <div className="md:mb-[15vw] mb-[10vw]">
              <div className="lg:mb-[5vw] mb-[15vw] md:mb-[8vw]">
                <h2 className="title-4xl text-anim">
                  <span>Get In Touch</span>
                </h2>
              </div>
              <div className="contact-information">
                <p className="lg:text-[1.25vw] md:text-[3vw] text-[4.5vw] md:w-[70%] w-full text-head flex items-start lg:mb-[2vw] mb-6 fadeUp">
                  <span className="lg:mt-[0.45vw] mt-[1vw] mr-[10px] lg:w-[1vw] md:w-[2.5vw] w-[3.5vw]">
                    <Image
                      className="w-full h-full"
                      src="/assets/contact/location.svg"
                      alt="location image"
                      width={11}
                      height={17}
                    />
                  </span>
                  <span>
                    Mill B, Colne Road, Huddersfield, HD1 3AG United Kingdom
                  </span>
                </p>
                <p className="lg:text-[1.25vw] md:text-[3vw] text-[4.5vw] md:w-[70%] w-full text-head flex items-start lg:mb-[2vw] mb-6 fadeUp">
                  <span className="lg:mt-[0.45vw] mt-[1vw] mr-[10px] lg:w-[1vw] md:w-[2.5vw] w-[3.5vw]">
                    <Image
                      className="w-full h-full"
                      src="/assets/contact/phone.svg"
                      alt="phone image"
                      width={15}
                      height={15}
                    />
                  </span>
                  <a href="tel:+441617682192">
                    <span>+44 161 768 2192</span>
                  </a>
                </p>
              </div>
              <div className="social-media-icons mt-[3vw]">
                <h3 className="lg:text-[1.5vw] md:text-[3vw] text-[4.5vw] text-black Aeonik font-medium lg:mb-[1.5vw] mb-[3vw] fadeUp">
                  Find Us
                </h3>
                <ul className="inline-flex justify-between lg:w-[50%] lg:gap-10 md:gap-20 gap-10 items-center fadeUp text-black">
                  <li>
                    <Link
                      href="https://www.facebook.com/patronum.io"
                      target="_blank"
                      rel="noopener"
                      prefetch={false}
                      aria-label="Patronum's Facebook Account"
                    >
                      <Facebook className={"h-6.5 w-6.5"} />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://www.linkedin.com/company/wearepatronum/"
                      target="_blank"
                      rel="noopener"
                      prefetch={false}
                      aria-label="Patronum's LinkedIn Account"
                    >
                      <LinkedIn className={"h-6.5 w-6.5"} />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://twitter.com/Patronum_io"
                      target="_blank"
                      rel="noopener"
                      prefetch={false}
                      aria-label="Patronum's Twitter Account"
                    >
                      <Twitter className={"h-6.5 w-6.5"} />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://www.instagram.com/patronum.io/"
                      target="_blank"
                      rel="noopener"
                      prefetch={false}
                      aria-label="Patronum's Instagram Account"
                    >
                      <Instagram className={"h-6.5 w-6.5"} />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://www.youtube.com/@wearepatronum"
                      target="_blank"
                      rel="noopener"
                      prefetch={false}
                      aria-label="Patronum's YouTube Account"
                    >
                      <Youtube className={"h-6.5 w-6.5"} />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="lg:w-[54.1%] w-full h-full">
              <div className="bg-[#FDFDFD] rounded-[15px] px-[11%] py-[7.6%] border-[#E2E2E2] border fadeUp">
                <h4 className="aeonik lg:text-[2.5vw] mb-[10%] md:text-6xl text-2xl">
                  Fill the Form
                </h4>
                <ContactPageTrialForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FormSection;
