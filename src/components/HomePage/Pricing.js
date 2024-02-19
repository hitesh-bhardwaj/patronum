import React, { useState } from 'react';
import PricingCard from './PricingCard';
import CustomDropdown from './DropDown';

const PricingPage = () => {
    const [isAnnual, setIsAnnual] = useState(true);
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
                            <h2 className='title-4xl text-anim'>
                                <span>
                                    Plans & Pricing
                                </span>
                            </h2>
                        </div>

                        <div className='pricing-main'>
                        
                            <div className='pricing-selectors flex-all'>
                                
                                <div className='pricing-toggle fadeUp'>
                                    <span className={`pricing-selector-type ${isAnnual ? '' : 'active' }`}>
                                        Monthly
                                    </span>
                                    <ToggleSwitch isAnnual={isAnnual} onToggle={handleToggle} />
                                    <span className={`pricing-selector-type ${isAnnual ? 'active' : '' }`}>
                                        Yearly
                                    </span>
                                </div>
                                
                                <div className='fadeUp relative z-10'>
                                    <CustomDropdown
                                        options={['USD', 'GBP', 'EUR', 'AUD']}
                                        value={selectedCurrency}
                                        onChange={handleCurrencyChange}
                                    />
                                </div>
                            </div>

                            <div className='pricing-card-wrapper fadeUpsMulties'>
                                <PricingCard category="Education" isAnnual={isAnnual} selectedCurrency={selectedCurrency} pricingImage='/assets/pricing/education.svg'/>
                                <PricingCard category="Non-Profit" isAnnual={isAnnual} selectedCurrency={selectedCurrency} pricingImage='/assets/pricing/non-profit.svg'/>
                                <PricingCard category="Business" isAnnual={isAnnual} selectedCurrency={selectedCurrency} pricingImage='/assets/pricing/business.svg'/>
                            </div>
                        </div>

                        <div className="section-btn-container">
                            <a href="/pricing" className="btn fadeUp">
                                <span data-primary className="btn-text">
                                    Detailed Pricing
                                </span>
                                <div aria-hidden="true" className="btn-circle">
                                    <div className="btn-circle-text">
                                        Detailed Pricing
                                        <svg viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg" className="btn-icon">
                                            <path data-v-f4363f2a fillRule="evenodd" clipRule="evenodd" d="M3.82475e-07 5.625L7.625 5.625L4.125 9.125L5 10L10 5L5 -4.37114e-07L4.125 0.874999L7.625 4.375L4.91753e-07 4.375L3.82475e-07 5.625Z" className="btn-path fill-current" />
                                            <path data-v-f4363f2a fillRule="evenodd" clipRule="evenodd" d="M3.82475e-07 5.625L7.625 5.625L4.125 9.125L5 10L10 5L5 -4.37114e-07L4.125 0.874999L7.625 4.375L4.91753e-07 4.375L3.82475e-07 5.625Z" className="btn-path fill-current" />
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


