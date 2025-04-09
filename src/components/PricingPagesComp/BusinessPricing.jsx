import React, { useState } from "react";
import PricingCard from "../LandingPage/PricingCard";
import PriceDropDown from "../LandingPage/PriceDropDown";
import { Switch } from "@/components/ui/switch";
import LinkButton from "../Buttons/LinkButton";
import Image from "next/image";
import { useModal } from "@/components/Modals/ModalContext";

const BusinessPricing = () => {
  const [isAnnual, setIsAnnual] = useState(true);
  const [selectedCurrency, setSelectedCurrency] = useState("$ USD");

  const handleToggle = () => {
    setIsAnnual(!isAnnual);
  };

  const handleCurrencyChange = (currency) => {
    setSelectedCurrency(currency);
  };

  const { openModal } = useModal();

  const PricingList = [
    {
      id: 1,
      category: "Business",
      title: "Patronum",
      features: [
        'Onboarding & Offboarding',
        "Email Signature Management",
        "Google Drive Management",
        "Contact Sharing",
        "Organizations Chart",
      ],
      img: "/assets/businessPricing/patronum.svg",
    },
    {
      id: 2,
      category: "Business_Plus",
      title: "Patronum+",
      features: [
        "Everything in Patronum and:",
        "Automated file sharing governance",
        "Empowering End-Users File Compliance",
        "Automated File Expiry",
        "Customise File Governance policies",
      ],
      img: "/assets/businessPricing/patronum-plus.svg",
    },
  ];

  return (
    <>
      <section id="second-section">
        <div className="container">
          <div className="content">
            <div className="lg:pb-[5vw] pb-[6vw] lg:w-[55%]">
              <h2 className="title-4xl fadeUp">
                <span>Find the Plan is Right for You & Your Business</span>
              </h2>
            </div>

            <div className="pricing-head">
              <h2 className="title-4xl text-anim">
                <span>Patronum</span>
              </h2>
            </div>

            <div className="pricing-main">
              <div className="pricing-selectors flex items-center justify-between w-full">
                <div className="pricing-toggle">
                  <span
                    className={`pricing-selector-type ${isAnnual ? "" : "active"}`}
                  >
                    Monthly
                  </span>
                  <Switch
                    className="price-switch"
                    checked={isAnnual}
                    onCheckedChange={handleToggle}
                    id="price-toggle"
                    aria-label="Annual/Monthly Price Toggle"
                  />
                  <span
                    className={`pricing-selector-type ${isAnnual ? "active" : ""}`}
                  >
                    Yearly
                  </span>
                </div>

                <div className="relative z-10">
                  <PriceDropDown
                    options={["$ USD", "£ GBP", "€ EUR", "A$ AUD"]}
                    value={selectedCurrency}
                    onChange={handleCurrencyChange}
                  />
                </div>
              </div>

              <div className="grid lg:w-full lg:mx-auto lg:grid-cols-2 lg:gap-x-[4vw] lg:gap-y-[4vw]">
                {PricingList.map((pricing) => (
                  <PricingCard
                    key={pricing.id}
                    category={pricing.category}
                    title={pricing.title}
                    isAnnual={isAnnual}
                    selectedCurrency={selectedCurrency}
                    pricingImage={pricing.img}
                    features={pricing.features}
                    onClick={() => openModal('contact')}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="pricing-head pt-[2vw]">
            <h2 className="title-4xl text-anim">
              <span>Add-Ons</span>
            </h2>
          </div>

          <div className="w-full h-full lg:mt-0 mt-[8vw]">
            <div className="border border-[#e8e8e8] bg-[#fdfdfd] h-full w-full rounded-[16px] flex fadeUp lg:pt-[4%] lg:px-[4%] lg:pb-[3%] lg:gap-[10%] lg:flex-row flex-col px-[10%] pt-[14%] pb-[10%]">
              <div className="lg:w-[40%] relative w-full lg:h-auto h-[35vw] lg:mb-0 mb-[6vw]">
                <Image
                  src="/assets/pricing/backup-pricing.svg"
                  fill
                  alt="Backup Image"
                  loading="lazy"
                />
              </div>

              <div className="lg:w-[60%] w-full">
                <h3 className="lg:text-[2vw] text-primary text-left text-[7vw] lg:mb-0 mb-[4vw]">
                  Backup
                </h3>
                <span className="h-[1px] w-full block bg-[#c5c5c5] my-[1.8vw]" />
                <div className="text-head lg:text-[1.25vw] text-[4.5vw] grid lg:grid-cols-2 grid-col-1 lg:gap-y-[1.5vw] gap-[3.5vw] gap-x-[2vw] lg:py-0 py-[1.5vw]">
                  <h4 className='flex lg:gap-[1vw] gap-[2vw]'><span>✓</span><span>Best-in-Class Full Fidelity backups</span></h4>
                  <h4 className='flex lg:gap-[1vw] gap-[2vw]'><span>✓</span><span>Advanced Intelligent Ransomware Protection</span></h4>
                  <h4 className='flex lg:gap-[1vw] gap-[2vw]'><span>✓</span><span>Automated backup runs, resilient to Google API errors</span></h4>
                  <h4 className='flex lg:gap-[1vw] gap-[2vw]'><span>✓</span><span>Restore data to the same/other accounts</span></h4>
                  <h4 className='flex lg:gap-[1vw] gap-[2vw]'><span>✓</span><span>Google Workspace apps & metadata support</span></h4>
                </div>
                <span className="h-[1px] w-full block bg-[#c5c5c5] my-[1.8vw]" />
                <div className="flex lg:justify-start justify-between gap-[3vw] items-baseline w-full lg:mt-0 mt-[5vw]">
                  <p className="">
                    <span className="text-[#1a1a1a] lg:text-[1.45vw] text-[5vw] font-semibold leading-[1]">
                      $ 3.00
                    </span>{" "}
                    <span className="font-[400] text-[#999] lg:text-[18px] text-[3.5vw]">
                      /month/user
                    </span>
                  </p>
                  <div>
                    <LinkButton
                      href={"javascript:void(0)"}
                      btnText="Get Started"
                      onClick={() => openModal('contact')}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BusinessPricing;
