import React, { useState  } from 'react';
import PricingCard from './PricingCard';
import PrimaryButton from '@/components/PageLayout/Button/PrimaryButton';
import PriceDropDown from './PriceDropDown';
import { Switch } from "@/components/ui/switch"

const Pricing = () => {
    const [isAnnual, setIsAnnual] = useState(true);
    const [selectedCurrency, setSelectedCurrency] = useState('$ USD');
  
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

                        <div className='pricing-main'>
                        
                            <div className='pricing-selectors flex items-center justify-between w-full'>
                              
                              <div className="pricing-toggle">
                                  <span className={`pricing-selector-type ${isAnnual ? '' : 'active' }`}>
                                    Monthly
                                  </span>
                                  <Switch 
                                    className="price-switch"
                                    checked={isAnnual}
                                    onCheckedChange={handleToggle} 
                                    id="price-toggle" 
                                    aria-label="Annual/Monthly Price Toggle"
                                  />
                                  <span className={`pricing-selector-type ${isAnnual ? 'active' : '' }`}>
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
                                <PricingCard category="Education" isAnnual={isAnnual} selectedCurrency={selectedCurrency} pricingImage='/assets/pricing/education.svg'/>
                                <PricingCard category="Non-Profit" isAnnual={isAnnual} selectedCurrency={selectedCurrency} pricingImage='/assets/pricing/non-profit.svg'/>
                                <PricingCard category="Business" isAnnual={isAnnual} selectedCurrency={selectedCurrency} pricingImage='/assets/pricing/business.svg'/>
                            </div>
                        </div>

                        <div className="section-btn-container">
                            <PrimaryButton link="/pricing" btnText="Detailed Pricing"/>
                        </div>
                    </div>
                </div>
            </section>
      </>
    );
  };
  
  export default Pricing;
