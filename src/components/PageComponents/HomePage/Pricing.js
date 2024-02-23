import React, { useEffect, useState } from 'react';
import PricingCard from './PricingCard';
import PrimaryButton from '@/components/PageLayout/Button/PrimaryButton';

const Pricing = () => {
    const [isAnnual, setIsAnnual] = useState(true);
    const [selectedCurrency, setSelectedCurrency] = useState('USD');
  
    const handleToggle = () => {
      setIsAnnual(!isAnnual);
    };
  
    const handleCurrencyChange = (currency) => {
        setSelectedCurrency(currency);
      };

    const ToggleSwitch = ({ onToggle }) => {
        return (
            <label className="toggle-switch" aria-label="Annual/Monthly Price Toggle">
                <input type="checkbox" checked={isAnnual} onChange={onToggle} aria-label="Annually or Monthly"/>
                <span className="slider"></span>
            </label>
        );
    };

      const CustomDropdown = ({ options, onChange, value }) => {
        const [isOpen, setIsOpen] = useState(false);
      
        const handleToggle = () => {
          setIsOpen(!isOpen);
        };
      
        const handleSelectOption = (option) => {
          onChange(option);
          setIsOpen(false);
        };
      
        return (
          <div className="custom-dropdown">
            <div className="selected-option" onClick={handleToggle}>
              {value}
              <span className={`arrow ${isOpen ? 'open' : ''}`}>
                <svg width="13" height="8" viewBox="0 0 13 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 1L6.5 6.5L12 1" stroke="#1069df" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </div>
            {isOpen && (
              <div className="options">
                {options.map((option, index) => (
                  <div
                    key={index}
                    className="option"
                    onClick={() => handleSelectOption(option)}
                  >
                    {option}
                  </div>
                ))}
              </div>
            )}
          </div>
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
                                
                                <div className='pricing-toggle'>
                                    <span className={`pricing-selector-type ${isAnnual ? '' : 'active' }`}>
                                        Monthly
                                    </span>
                                    <ToggleSwitch isAnnual={isAnnual} onToggle={handleToggle} />
                                    <span className={`pricing-selector-type ${isAnnual ? 'active' : '' }`}>
                                        Yearly
                                    </span>
                                </div>
                                
                                <div className='relative z-10'>
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
                            <PrimaryButton link="/pricing" btnText="Detailed Pricing"/>
                        </div>
                    </div>
                </div>
            </section>
      </>
    );
  };
  
  export default Pricing;
