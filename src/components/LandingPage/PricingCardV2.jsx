import React, { useEffect, useState } from 'react';
import LinkButton from '@/components/Buttons/LinkButton';

const PricingCard = ({ features, category, isAnnual, selectedCurrency, pricingImage, title, onClick, featureTitle, className=""}) => {

  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    setIsVisible(true); // Ensure the pricing card is initially visible
  }, []);

  // Prices (monthly and annual) for each category and currency
  const prices = {
    Education: {
      "$ USD": { monthly: "0.17", annual: "2.00" },
      "£ GBP": { monthly: '0.13', annual: '1.50' },
      "€ EUR": { monthly: '0.15', annual: '1.80' },
      "A$ AUD": { monthly: '0.24', annual: '2.80' }
    },
    Business: {
      "$ USD": { monthly: '0.67', annual: '8.00' },
      "£ GBP": { monthly: '0.50', annual: '6.00' },
      "€ EUR": { monthly: '0.59', annual: '7.00' },
      "A$ AUD": { monthly: '0.92', annual: '11.0' }
    },
    Education_Plus: {
      "$ USD": { monthly: "0.34", annual: "4.00" },
      "£ GBP": { monthly: '0.26', annual: '3.00' },
      "€ EUR": { monthly: '0.30', annual: '3.60' },
      "A$ AUD": { monthly: '0.48', annual: '5.60' }
    },
    Business_Plus: {
      "$ USD": { monthly: '1.34', annual: '16.00' },
      "£ GBP": { monthly: '1.00', annual: '12.00' },
      "€ EUR": { monthly: '1.18', annual: '14.00' },
      "A$ AUD": { monthly: '1.84', annual: '22.0' }
    },
  };

  return (
    <div className={` fadeUp bg-[#FDFDFD] w-full flex flex-col items-start border border-[#e8e8e8] rounded-[16px] lg:px-[14%] lg:py-[10%] mb-[10vw] lg:mb-0 pt-[12%] px-[10%] pb-[14%]`}>
      <div className='w-full flex justify-center'>

      <div className="lg:w-[15vw] lg:h-[12vw] md:w-[35vw] md:h-[35vw] flex justify-center items-center">
        <img src={pricingImage} alt='Price Category Image' loading='lazy' title='Patronum Pricing' className='object-contain w-full lg:h-[9vw] flex items-center justify-center lg:mb-[1.8vw] text-center h-[35vw] mb-[6vw]' />
      </div>

      </div>
      <h3
        className={`${className} !text-center w-full md:h-fit leading-[1.2] lg:text-[2vw] text-primary text-[7vw] mb-[4vw] lg:mb-0 `}
        dangerouslySetInnerHTML={{ __html: title }}
      />
      <span className={` h-[1px] w-full block bg-[#C5C5C5] my-[1.8vw]`} />
      <div className={`h-full`}>
        {featureTitle && (
          <h4 className='font-medium text-[#2A2A2A] lg:text-[1.25vw] leading-[2.5] flex text-[4.5vw] gap-[2vw] '>{featureTitle}</h4>
        )}
        {features.map((feature, index) => (
          <h4 key={index} className='lg:text-[1.2vw] leading-[2.5] text-[4.5vw]'><span>✓</span><span className='ml-[1vw] '>{feature}</span></h4>
        ))}
      </div>
      <span className={` h-[1px] w-full block bg-[#C5C5C5] my-[1.8vw] `} />
      <div className='flex justify-between items-center w-full lg:mt-0 mt-[5vw]'>
        <p className={` text-[#1a1a1a] lg:text-[1.45vw] font-semibold leading-[1] text-[5vw]`}>
          <span >{getCurrencySymbol(selectedCurrency)} </span>
          <span >{isAnnual ? prices[category][selectedCurrency].annual : prices[category][selectedCurrency].monthly}</span>
          <span className={`lg:!text-[1.45vw] md:!text-[2.8vw] font-normal text-[#999999]  text-[2.5vw]`}>{isAnnual ? '/year' : '/month'}/user</span>
        </p>
        <div>
          <LinkButton 
            onClick={onClick}
            href={"javascript:void(0)"} 
            btnText="Get Started"
          />
        </div>
      </div>
    </div>
  );
};

// Helper function to get the currency symbol
const getCurrencySymbol = (currency) => {
  switch (currency) {
    case '$ USD':
      return '$';
    case '£ GBP':
      return '£';
    case '€ EUR':
      return '€';
    case 'A$ AUD':
      return 'A$';
    default:
      return '$';
  }
};

export default PricingCard;
