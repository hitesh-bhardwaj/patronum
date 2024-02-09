import React, { useState } from 'react';
import PricingCard from './PricingCard';
import CustomDropdown from './DropDown';

const PricingPage = () => {
    const [isAnnual, setIsAnnual] = useState(false);
    const [selectedCurrency, setSelectedCurrency] = useState('USD');
  
    const handleToggle = () => {
      setIsAnnual(!isAnnual);
    };
  
    const handleCurrencyChange = (currency) => {
        setSelectedCurrency(currency);
      };

    const ToggleSwitch = ({ isAnnual, onToggle }) => {
        return (
            <label className="toggle-switch" aria-label="Annual/Monthly Price Toggle">
                <input type="checkbox" checked={isAnnual} onChange={onToggle} aria-label="Annually or Monthly"/>
                <span className="slider"></span>
            </label>
        );
      };
  
    return (
        <>
            <section id='pricing'>
                <div className='container'>
                    <div className='content'>

                        <div className='pricing-head'>
                            <h2 className='title-4xl'>Plans & Pricing</h2>
                        </div>

                        <div className='pricing-main'>
                        
                            <div className='pricing-selectors flex-all'>
                                
                                <div className='pricing-toggle'>
                                    <span className={`pricing-selector-type ${isAnnual ? '' : 'active' }`}>
                                        Monthly
                                    </span>
                                    <ToggleSwitch isAnnual={isAnnual} onToggle={handleToggle} />
                                    <span className={`pricing-selector-type ${isAnnual ? 'active' : '' }`}>
                                        Yearly
                                    </span>
                                </div>
                                
                                <div>
                                    <CustomDropdown
                                        options={['USD', 'GBP', 'EUR', 'AUD']}
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
                            <a data-v-f4363f2a href="/contact" className="btn inline-flex items-center px-10 h-24 relative w-full max-w-[18rem] rounded-full is-default-scale is-default-clip is-default-circle bg-black text-white">
                                <span data-v-f4363f2a className="p1 font-medium leading-none">
                                    Detailed Pricing
                                </span>
                                <div data-v-f4363f2a aria-hidden="true" className="btn__circle absolute inset-[-1px] rounded-full flex items-center p1 font-medium leading-none px-40 z-2 bg-white text-black">
                                    <div data-v-f4363f2a className="px-[1px] w-full flex justify-between items-center">
                                    Detailed Pricing
                                    <svg data-v-f4363f2a viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-15 w-15 overflow-hidden">
                                        <path data-v-f4363f2a fillRule="evenodd" clipRule="evenodd" d="M3.82475e-07 5.625L7.625 5.625L4.125 9.125L5 10L10 5L5 -4.37114e-07L4.125 0.874999L7.625 4.375L4.91753e-07 4.375L3.82475e-07 5.625Z" className="btn__path fill-current" />
                                        <path data-v-f4363f2a fillRule="evenodd" clipRule="evenodd" d="M3.82475e-07 5.625L7.625 5.625L4.125 9.125L5 10L10 5L5 -4.37114e-07L4.125 0.874999L7.625 4.375L4.91753e-07 4.375L3.82475e-07 5.625Z" className="btn__path fill-current" />
                                    </svg>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            
      </>
    );
  };
  
  export default PricingPage;


