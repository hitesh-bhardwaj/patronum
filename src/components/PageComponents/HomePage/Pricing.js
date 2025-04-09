import React, { useState } from 'react';
import PricingCard from './PricingCard';
import PriceDropDown from './PriceDropDown';
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const Pricing = () => {
    const [isAnnual, setIsAnnual] = useState(true);
    const [selectedCurrency, setSelectedCurrency] = useState('USD $');

    const handleToggle = () => {
        setIsAnnual(!isAnnual);
    };

    const handleCurrencyChange = (currency) => {
        setSelectedCurrency(currency);
    };

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

                        <Tabs defaultValue="business">
                            <div className='pricing-main relative'>
                                <div className='pricing-selectors flex items-center justify-between w-full lg:flex-nowrap flex-wrap'>
                                    <div className='lg:w-[20%] lg:order-1 order-2'>
                                        <div className="pricing-toggle w-fit">
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
                                    </div>

                                    <div className='lg:w-1/2 lg:order-2 flex items-center justify-center w-full order-1 lg:mb-0 md:mb-10 mb-4'>
                                        <TabsList className="font-head text-body lg:w-fit w-full rounded-full lg:h-14 md:h-[10vw] h-14 p-1 bg-[#F9FBFF] border border-[#CDDEF5]">
                                            <TabsTrigger value="business" className="lg:w-[12vw] h-full rounded-full py-6 lg:text-[1.1vw] text-[4vw] data-[state=active]:bg-primary data-[state=active]:text-white md:w-[45%] w-full">
                                                Business
                                            </TabsTrigger>
                                            <TabsTrigger value="education" className="lg:w-[14vw] h-full rounded-full py-6 lg:text-[1.1vw] text-[4vw] data-[state=active]:bg-primary data-[state=active]:text-white md:w-[55%] w-full">
                                                Education & Non-Profit
                                            </TabsTrigger>
                                        </TabsList>
                                    </div>

                                    <div className='relative z-10 lg:w-[20%] flex justify-end order-3'>
                                        <PriceDropDown
                                            options={['USD $', 'GBP £', 'EUR €', 'AUD A$']}
                                            value={selectedCurrency}
                                            onChange={handleCurrencyChange}
                                        />
                                    </div>
                                </div>

                                <div className='lg:pt-4'>
                                    <TabsContent value="business">
                                        <div className='grid lg:w-full lg:mx-auto lg:grid-cols-2 lg:gap-x-[4vw] lg:gap-y-[4vw]'>
                                            <PricingCard category="Business" href="/pricing-for-business" isAnnual={isAnnual} selectedCurrency={selectedCurrency} pricingImage='/assets/pricing/business.svg' title='<span class="text-[#2a2a2a]">Patronum</span> For Business' />
                                            <PricingCard category="Business_Plus" href="/pricing-for-business" isAnnual={isAnnual} selectedCurrency={selectedCurrency} pricingImage='/assets/businessPricing/patronum.svg' title='<span class="text-[#2a2a2a]">Patronum+</span> For Business' />
                                        </div>
                                    </TabsContent>
                                    <TabsContent value="education">
                                        <div className='grid lg:w-full lg:mx-auto lg:grid-cols-2 lg:gap-x-[4vw] lg:gap-y-[4vw]'>
                                            <PricingCard category="Education" href="/pricing-for-education" isAnnual={isAnnual} selectedCurrency={selectedCurrency} pricingImage='/assets/educationPricing/patronum.svg' title='<span class="text-[#2a2a2a]">Patronum</span> For Education & Non-Profits' />
                                            <PricingCard category="Education_Plus" href="/pricing-for-education" isAnnual={isAnnual} selectedCurrency={selectedCurrency} pricingImage='/assets/educationPricing/patronum-plus.svg' title='<span class="text-[#2a2a2a]">Patronum+</span> For Education & Non-Profits' />
                                        </div>
                                    </TabsContent>
                                </div>
                            </div>
                        </Tabs>

                    </div>
                </div>
            </section>
        </>
    );
};

export default Pricing;
