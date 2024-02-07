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
            <label className="toggle-switch">
                <input type="checkbox" checked={isAnnual} onChange={onToggle} />
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
                            <h3 className='title-4xl'>Plans & Pricing</h3>
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

                            <div className="flex justify-center">
                                <div className="w-[40%] flex justify-center">
                                    <a href='#' className='btn-primary arrow'>
                                        <span className="btn-bg" />
                                        <div>
                                            <span className="btn-icon">
                                                <span className="">
                                                    <svg className="" viewBox="0 0 38 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M0 9.27361C2.25898 9.27361 4.5105 9.26604 6.76947 9.26604C15.4997 9.26604 24.2299 9.26604 32.9602 9.26604C33.1018 9.26604 33.2509 9.26604 33.3777 9.26604C30.8876 6.74513 28.4049 4.22423 25.9521 1.74117C26.5784 1.09769 27.1375 0.537491 27.6669 0C31.0814 3.4672 34.5556 6.98738 37.9925 10.4773C34.5482 13.9672 31.0814 17.4874 27.6296 20.9924C27.1003 20.4549 26.5486 19.9023 25.982 19.327C28.4571 16.8212 30.9472 14.3003 33.4373 11.7794C33.4299 11.7491 33.4224 11.7188 33.415 11.6885C33.2733 11.6885 33.1391 11.6885 32.9975 11.6885C22.1573 11.6885 11.3172 11.6885 0.484599 11.6885C0.320581 11.6885 0.164018 11.6885 0 11.681C0 10.8861 0 10.0761 0 9.27361Z" fill="currentColor"/>
                                                    </svg>
                                                    <svg className="" viewBox="0 0 38 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M0 9.27361C2.25898 9.27361 4.5105 9.26604 6.76947 9.26604C15.4997 9.26604 24.2299 9.26604 32.9602 9.26604C33.1018 9.26604 33.2509 9.26604 33.3777 9.26604C30.8876 6.74513 28.4049 4.22423 25.9521 1.74117C26.5784 1.09769 27.1375 0.537491 27.6669 0C31.0814 3.4672 34.5556 6.98738 37.9925 10.4773C34.5482 13.9672 31.0814 17.4874 27.6296 20.9924C27.1003 20.4549 26.5486 19.9023 25.982 19.327C28.4571 16.8212 30.9472 14.3003 33.4373 11.7794C33.4299 11.7491 33.4224 11.7188 33.415 11.6885C33.2733 11.6885 33.1391 11.6885 32.9975 11.6885C22.1573 11.6885 11.3172 11.6885 0.484599 11.6885C0.320581 11.6885 0.164018 11.6885 0 11.681C0 10.8861 0 10.0761 0 9.27361Z" fill="currentColor"/>
                                                    </svg>
                                                </span>
                                            </span>
                                            <span className="btn-text">Detailed Pricing</span>
                                        </div>
                                    </a>
                                </div>
                            </div>
                    </div>
                </div>
            </section>
            
      </>
    );
  };
  
  export default PricingPage;


