import React, { useState  } from 'react';
import PricingCard from './PricingCard';
import PriceDropDown from '../HomePage/PriceDropDown';
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

      // Features for each category
    const features = {
        Education: [
          'Basic Seo Tools',
          'Unlock Campaign Features',
          'Limited Keywords',
          'Advance AI Features',
          'Advance Support'
        ],
        'Non-Profit': [
          'Basic Seo Tools',
          'Unlock Campaign Features',
          'Limited Keywords',
          'Advance AI Features',
          'Advance Support'
        ],
        Business: [
          'Basic Seo Tools',
          'Unlock Campaign Features',
          'Limited Keywords',
          'Advance AI Features',
          'Advance Support'
        ]
      };

    return (
        <>
            <section id='second-section'>
                <div className='container'>
                    <div className='content-2'>

                        <div className='pricing-head'>
                            <h2 className='title-4xl text-anim'>
                                <span>
                                    Find the Plan is Right
                                </span>
                                <br />
                                <span>
                                    for You & Your Business
                                </span>
                            </h2>
                        </div>

                        <div className='pricing-main'>
                        
                            <div className='pricing-selectors flex-all fadeUp'>
                              
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

                            <div className='pricing-card-wrapper fadeUp'>
                                <PricingCard 
                                    category="Education" 
                                    isAnnual={isAnnual} 
                                    selectedCurrency={selectedCurrency} 
                                    pricingImage='/assets/pricing/education.svg'
                                    features={features.Education}
                                />
                                <PricingCard 
                                    category="Non-Profit" 
                                    isAnnual={isAnnual} 
                                    selectedCurrency={selectedCurrency} 
                                    pricingImage='/assets/pricing/non-profit.svg'
                                    features={features['Non-Profit']}
                                />
                                <PricingCard 
                                    category="Business" 
                                    isAnnual={isAnnual} 
                                    selectedCurrency={selectedCurrency} 
                                    pricingImage='/assets/pricing/business.svg'
                                    features={features.Business}
                                />
                            </div>
                        </div>

                    </div>
                </div>
            </section>
      </>
    );
  };
  
  export default Pricing;
