import React, { useState } from 'react';
import PricingCard from './PricingCard';
import PriceDropDown from './PriceDropDown';
import { Switch } from "@/components/ui/switch"
import gsap from 'gsap';

const Pricing = () => {
    const [isAnnual, setIsAnnual] = useState(true);
    const [selectedCurrency, setSelectedCurrency] = useState('$ USD');

      const handleSmoothScroll = () => {
        gsap.to(window, {
            duration: 1.5,
            scrollTo: { y: "#hero", offsetY: 0 },
            ease: "power3.inOut",
        });
    };

    const handleToggle = () => {
        setIsAnnual(!isAnnual);
    };

    const handleCurrencyChange = (currency) => {
        setSelectedCurrency(currency);
    };

    const PricingList = [
        {
            id: 1,
            category: 'Education',
            title: '<span class="text-[#2a2a2a]">Patronum</span> For Education & Non-Profits',
            features: [
                'Onboarding & Offboarding',
                'Email Signature Management',
                'Google Drive Management',
                'Contact Sharing',
                'Organizations Chart',
            ],
            img: '/assets/pricing/education-plus.svg',
            className: "lg:h-[5vw]"
        },
        {
            id: 2,
            category: 'Business',
            title: '<span class="text-[#2a2a2a]">Patronum</span> For Business',
            features: [
                'Onboarding & Offboarding',
                'Email Signature Management',
                'Google Drive Management',
                'Contact Sharing',
                'Organizations Chart',
            ],
            img: '/assets/pricing/business-plus.svg',
            className: "lg:h-[5vw]"
        },
        {
            id: 3,
            category: 'Education_Plus',
            title: '<span class="text-[#2a2a2a]">Patronum+</span> For Education & Non-Profits',
            features: [
                'Everything in Patronum and:',
                'Automated file sharing governance',
                'Empowering End-Users File Compliance',
                'Automated File Expiry',
                'Customise File Governance policies',
            ],
            img: '/assets/pricing/education.svg',
            className: "lg:h-[5vw]"
        },
        {
            id: 4,
            category: 'Business_Plus',
            title: '<span class="text-[#2a2a2a]">Patronum+</span> For Business',
            features: [
                'Everything in Patronum and:',
                'Automated file sharing governance',
                'Empowering End-Users File Compliance',
                'Automated File Expiry',
                'Customise File Governance policies',
            ],
            img: '/assets/pricing/business.svg',
            className: "lg:h-[5vw]"
        },
    ]

    return (
        <>
            <section id='pricing'>
                <div className='container'>
                    <div className='content'>

                        <div className='pricing-head'>
                            <h2 className='title-4xl text-anim'>
                                <span>
                                    Plans & Pricing
                                </span>
                            </h2>
                        </div>

                        <div className='pricing-main'>

                            <div className='pricing-selectors flex items-center justify-between w-full'>

                                <div className="pricing-toggle">
                                    <span className={`pricing-selector-type ${isAnnual ? '' : 'active'}`}>
                                        Monthly
                                    </span>
                                    <Switch
                                        className="price-switch"
                                        checked={isAnnual}
                                        onCheckedChange={handleToggle}
                                        id="price-toggle"
                                        aria-label="Annual/Monthly Price Toggle"
                                    />
                                    <span className={`pricing-selector-type ${isAnnual ? 'active' : ''}`}>
                                        Yearly
                                    </span>
                                </div>

                                <div className='relative z-10'>
                                    <PriceDropDown
                                        options={['$ USD', '£ GBP', '€ EUR', 'A$ AUD']}
                                        value={selectedCurrency}
                                        onChange={handleCurrencyChange}
                                    />
                                </div>
                            </div>

                            <div className='grid lg:grid-cols-2 lg:gap-x-[2vw] lg:gap-y-[4vw]'>
                                {PricingList.map((pricing) => (
                                    <PricingCard 
                                        key={pricing.id} 
                                        category={pricing.category}
                                        title={pricing.title}
                                        isAnnual={isAnnual} 
                                        selectedCurrency={selectedCurrency} 
                                        pricingImage={pricing.img} 
                                        features={pricing.features} 
                                        className={pricing.className}
                                        onClick={handleSmoothScroll}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Pricing;
