import LinkButton from '@/components/Buttons/LinkButton';
import React, { useEffect, useState } from 'react';

const PricingCard = ({ category, isAnnual, selectedCurrency, pricingImage }) => {

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
    <div className="pricing-card">
      <div className='pricing-image'>
        <img width="245" height="190" src={pricingImage} alt='Price Category Image' loading='lazy' title='Patronum Pricing' />
      </div>
      <h4 className='pricing-category'>{category}</h4>
      <p className='pricing-price'>
        <span className='currency'>{getCurrencySymbol(selectedCurrency)} </span>
        <span className='price'>{isAnnual ? prices[category][selectedCurrency].annual : prices[category][selectedCurrency].monthly}</span>
      </p>
      <p className='pricing-type'>{`User ${isAnnual ? '/ Year' : '/ Month'}`}</p>
      <div className='pricing-link'>
        <LinkButton href="pricing" btnText="Get Started" />
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
