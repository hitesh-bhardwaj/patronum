import React, { useEffect, useState } from 'react';
import styles from '@/styles/pricing.module.css';

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
                <a href="/contact-us" className="link-btn">
                <span className="btn-text">Get Started</span>
                    <span className="btn-images">
                        <div>
                            <svg className="" viewBox="0 0 38 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 9.27361C2.25898 9.27361 4.5105 9.26604 6.76947 9.26604C15.4997 9.26604 24.2299 9.26604 32.9602 9.26604C33.1018 9.26604 33.2509 9.26604 33.3777 9.26604C30.8876 6.74513 28.4049 4.22423 25.9521 1.74117C26.5784 1.09769 27.1375 0.537491 27.6669 0C31.0814 3.4672 34.5556 6.98738 37.9925 10.4773C34.5482 13.9672 31.0814 17.4874 27.6296 20.9924C27.1003 20.4549 26.5486 19.9023 25.982 19.327C28.4571 16.8212 30.9472 14.3003 33.4373 11.7794C33.4299 11.7491 33.4224 11.7188 33.415 11.6885C33.2733 11.6885 33.1391 11.6885 32.9975 11.6885C22.1573 11.6885 11.3172 11.6885 0.484599 11.6885C0.320581 11.6885 0.164018 11.6885 0 11.681C0 10.8861 0 10.0761 0 9.27361Z" fill="currentColor"/>
                            </svg>
                            <svg className="" viewBox="0 0 38 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 9.27361C2.25898 9.27361 4.5105 9.26604 6.76947 9.26604C15.4997 9.26604 24.2299 9.26604 32.9602 9.26604C33.1018 9.26604 33.2509 9.26604 33.3777 9.26604C30.8876 6.74513 28.4049 4.22423 25.9521 1.74117C26.5784 1.09769 27.1375 0.537491 27.6669 0C31.0814 3.4672 34.5556 6.98738 37.9925 10.4773C34.5482 13.9672 31.0814 17.4874 27.6296 20.9924C27.1003 20.4549 26.5486 19.9023 25.982 19.327C28.4571 16.8212 30.9472 14.3003 33.4373 11.7794C33.4299 11.7491 33.4224 11.7188 33.415 11.6885C33.2733 11.6885 33.1391 11.6885 32.9975 11.6885C22.1573 11.6885 11.3172 11.6885 0.484599 11.6885C0.320581 11.6885 0.164018 11.6885 0 11.681C0 10.8861 0 10.0761 0 9.27361Z" fill="currentColor"/>
                            </svg>
                        </div>
                    </span>
                </a>
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
