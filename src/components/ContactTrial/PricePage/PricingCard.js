import React from 'react';
import styles from '@/styles/pricing.module.css';
import LinkButton from '@/components/Buttons/LinkButton';

const PricingCard = ({ features, category, pricingImage,price, href }) => {

  return (
    <div className={` fadeUp bg-[#FDFDFD] w-full flex flex-col items-start border border-[#e8e8e8] rounded-[16px] px-[10%] py-[14%] pb-[10%]`}>
      <div className={` w-full h-[9vw] flex justify-center mb-[1.8vw] text-center `}>
        <img src={pricingImage} alt='Price Category Image' loading='lazy' title='Patronum Pricing' className='w-full h-full' />
      </div>
      <h3 className={` !text-center w-full text-[2vw] text-primary`}>{category}</h3>
      <span className={` h-[1px] w-full block bg-[#C5C5C5] my-[1.8vw] mx-0`} />
      <div className={`h-full`}>
        <div>
        {features.map((feature, index) => (
          <h4 key={index} className='text-[#2a2a2a] text-[1.25vw] leading-[2.5] flex'><span>✓</span><span className='ml-[1vw]'>{feature}</span></h4>
        ))}

        </div>
      </div>
      <span className={` h-[1px] w-full block bg-[#C5C5C5] my-[1.8vw] mx-0`} />
      <div className='flex flex-col justify-between items-center w-full lg:mt-0 mt-[5vw] gap-[1vw] md:text-[3vw] md:gap-[2vw] lg:text-[1.2vw]'>
        <p>Free for 30 days then <span className='font-bold'>{price}</span>/year/user</p>

        <LinkButton href={href} btnText="Know More" />
      </div>
    </div>
  );
};

export default PricingCard;
