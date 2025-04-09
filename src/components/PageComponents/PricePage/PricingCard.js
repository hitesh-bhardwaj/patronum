import React from 'react';
import styles from '@/styles/pricing.module.css';
import LinkButton from '@/components/Buttons/LinkButton';

const PricingCard = ({ features, category, pricingImage,price, href }) => {

  return (
    <div className={`${styles.pricingCard} fadeUp`}>
      <div className={styles.pricingImage}>
        <img src={pricingImage} alt='Price Category Image' loading='lazy' title='Patronum Pricing' />
      </div>
      <h3 className={`${styles.pricingCategory} !text-center w-full`}>{category}</h3>
      <span className={styles.hr} />
      <div className={styles.featureList}>
        <div>
        {features.map((feature, index) => (
          <h4 key={index}><span>✓</span><span className='ml-[1vw]'>{feature}</span></h4>
        ))}

        </div>
      </div>
      <span className={styles.hr} />
      <div className='flex flex-col justify-between items-center w-full lg:mt-0 mt-[5vw] gap-[1vw] md:text-[3vw] md:gap-[2vw] lg:text-[1.2vw]'>
        <p>Free for 30 days then <span className='font-bold'>{price}</span>/year/user</p>

        <LinkButton href={href} btnText="Know More" />
      </div>
    </div>
  );
};

export default PricingCard;
