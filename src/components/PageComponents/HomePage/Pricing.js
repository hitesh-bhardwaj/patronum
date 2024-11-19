import React, { useEffect, useState } from 'react';
import PricingCard from './PricingCard';
import PriceDropDown from './PriceDropDown';
import { Switch } from "@/components/ui/switch"
import PrimaryButton from '@/components/Buttons/PrimaryButton';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Pricing = () => {
    const [isAnnual, setIsAnnual] = useState(true);
    const [selectedCurrency, setSelectedCurrency] = useState('$ USD');

    const handleToggle = () => {
        setIsAnnual(!isAnnual);
    };

    const handleCurrencyChange = (currency) => {
        setSelectedCurrency(currency);
    };

    useEffect(() => {
        const pricingCards = document.querySelectorAll('.pricing-card-wrapper .pricing-card');
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".pricing-card-wrapper",
                start: "top 85%",
            }
        });

        tl.fromTo(
            pricingCards,
            {
                opacity: 0,
                y: 100,
            },
            {
                opacity: 1,
                y: 0,
                duration: 0.6,
                stagger: 0.1,
                ease: 'Power2.out',
            }
        );
    }, []);

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

                            <div className='pricing-card-wrapper'>
                                <PricingCard category="Education" isAnnual={isAnnual} selectedCurrency={selectedCurrency} pricingImage='/assets/pricing/education.svg' />
                                <PricingCard category="Non-Profit" isAnnual={isAnnual} selectedCurrency={selectedCurrency} pricingImage='/assets/pricing/non-profit.svg' />
                                <PricingCard category="Business" isAnnual={isAnnual} selectedCurrency={selectedCurrency} pricingImage='/assets/pricing/business.svg' />
                            </div>
                        </div>

                        <div className="section-btn-container">
                            <PrimaryButton href="/pricing" btnText="Detailed Pricing" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Pricing;
