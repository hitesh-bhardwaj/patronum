import React, { useEffect, useState } from 'react';
import styles from '@/styles/pricing.module.css';
import LinkButton from '@/components/Buttons/LinkButton';

const PricingCard = ({ features, category, isAnnual, selectedCurrency, pricingImage }) => {
  
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
    'Non-Profit': {
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
    }
  };

  return (
    <div className={`${styles.pricingCard} fadeUp`}>
      <div className={styles.pricingImage}>
        <img src={pricingImage} alt='Price Category Image' loading='lazy' title='Patronum Pricing'/>
      </div>
      <h3 className={styles.pricingCategory}>{category}</h3>
      <span className={styles.hr}/>
      <div className={styles.featureList}>
        {features.map((feature, index) => (
          <h4 key={index}><span>✓</span><span>{feature}</span></h4>
        ))}
      </div>
      <span className={styles.hr}/>
      <div className='flex justify-between items-center w-full lg:mt-0 mt-[5vw]'>
            <p className={styles.pricingPrice}> 
                <span >{getCurrencySymbol(selectedCurrency)} </span>
                <span >{isAnnual ? prices[category][selectedCurrency].annual : prices[category][selectedCurrency].monthly}</span>
                <span className={styles.pricingType}> /user{isAnnual ? '/year' : '/month'}</span>
            </p>
            <div>
              <LinkButton href="/contact-us" btnText="Get Started"/>
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
