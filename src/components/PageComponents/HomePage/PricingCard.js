import LinkButton from '@/components/Buttons/LinkButton';
import React, { useEffect, useState } from 'react';
import styles from '@/styles/pricing.module.css';

const PricingCard = ({ category, isAnnual, selectedCurrency, pricingImage, title, href, className="" }) => {

  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    setIsVisible(true); // Ensure the pricing card is initially visible
  }, []);

  // Prices (monthly and annual) for each category and currency
  const prices = {
    Education: {
      "USD $": { monthly: "0.17", annual: "2.00" },
      "GBP £": { monthly: '0.13', annual: '1.50' },
      "EUR €": { monthly: '0.15', annual: '1.80' },
      "AUD A$": { monthly: '0.24', annual: '2.80' }
    },
    Education_Plus: {
      "USD $": { monthly: "0.34", annual: "4.00" },
      "GBP £": { monthly: '0.26', annual: '3.00' },
      "EUR €": { monthly: '0.30', annual: '3.60' },
      "AUD A$": { monthly: '0.48', annual: '5.60' }
    },
    Business: {
      "USD $": { monthly: '0.67', annual: '8.00' },
      "GBP £": { monthly: '0.50', annual: '6.00' },
      "EUR €": { monthly: '0.59', annual: '7.00' },
      "AUD A$": { monthly: '0.92', annual: '11.0' }
    },
    Business_Plus: {
      "USD $": { monthly: '1.34', annual: '16.00' },
      "GBP £": { monthly: '1.00', annual: '12.00' },
      "EUR €": { monthly: '1.18', annual: '14.00' },
      "AUD A$": { monthly: '1.84', annual: '22.0' }
    },
  };

  return (
    <div className={`${styles.pricingCard} fadeUp !pt-[2vw]`}>
      <div className='w-full flex justify-center'>
        <div className="lg:w-[65%] lg:h-[16vw] md:w-[60%] md:h-[40vw] w-[70%] h-[50vw] flex justify-center items-center">
          <img src={pricingImage} alt='Price Category Image' loading='lazy' title='Patronum Pricing' className='object-contain w-full' />
        </div>
      </div>
      <h3
        className={`${styles.pricingCategory} ${className} !text-center w-full md:h-fit leading-[1.2]`}
        dangerouslySetInnerHTML={{ __html: title }}
      />
      <span className={styles.hr} />
      <div className='flex justify-between items-center w-full lg:mt-0 mt-[5vw] flex-col gap-[1vw]'>
        <p className={`${styles.pricingPrice} text-center lg:text-center w-[65%] lg:w-full lg:!leading-[1]  !leading-[1.5] `}>
        <span className='font-light'>Free for 30 days then </span> 
          <span >{getCurrencySymbol(selectedCurrency)} </span>
          
          <span >{isAnnual ? prices[category][selectedCurrency].annual : prices[category][selectedCurrency].monthly}</span>
          <span className={`${styles.pricingType} lg:!text-[1.45vw] md:!text-[2.8vw]`}>{isAnnual ? '/year' : '/month'}/user</span>
        </p>
        <div>
          <LinkButton
            href={href}
            btnText="Start Your Free Trial"
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
