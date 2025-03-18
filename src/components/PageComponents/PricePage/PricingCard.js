import React, { useEffect, useState } from 'react';
import styles from '@/styles/pricing.module.css';
import LinkButton from '@/components/Buttons/LinkButton';

const PricingCard = ({ features, category, pricingImage, href }) => {

  return (
    <div className={`${styles.pricingCard} fadeUp`}>
      <div className={styles.pricingImage}>
        <img src={pricingImage} alt='Price Category Image' loading='lazy' title='Patronum Pricing' />
      </div>
      <h3 className={styles.pricingCategory}>{category}</h3>
      <span className={styles.hr} />
      <div className={styles.featureList}>
        {features.map((feature, index) => (
          <h4 key={index}><span>✓</span><span>{feature}</span></h4>
        ))}
      </div>
      <span className={styles.hr} />
      <div className='flex justify-between items-center w-full lg:mt-0 mt-[5vw]'>
        <LinkButton href={href} btnText="Know More" />
      </div>
    </div>
  );
};

export default PricingCard;
