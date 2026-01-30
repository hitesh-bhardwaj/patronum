import React from 'react';
import LinkButton from '@/components/Buttons/LinkButton';

const PricingCard = ({ features, category, pricingImage,price, href }) => {

  return (
    <div className={` fadeUp bg-[#FDFDFD] w-full flex flex-col items-start border border-[#e8e8e8] rounded-[16px] px-[10%] py-[14%] mb-[10vw] lg:mb-0`}>
      <div className={` w-full lg:h-[9vw] flex justify-center lg:mb-[1.8vw] text-center h-[35vw] mb-[6vw]`}>
        <img src={pricingImage} alt='Price Category Image' loading='lazy' title='Patronum Pricing' className='w-full h-full'/>
      </div>
      <h3 className={`!text-center w-full text-primary lg:text-[2vw] text-[7vw] mb-[4vw] lg:mb-0`}>{category}</h3>
      <span className={` h-[1px] w-full block bg-[#C5C5C5] m-[1.8vw]`} />
      <div className={` h-full`}>
        <div>
        {features.map((feature, index) => (
          <h4 key={index}><span className='ml-[1vw] text-[#2A2A2A] lg:text-[1.25vw] leading-[2.5] text-[4.5vw] gap-[2vw] lg:gap-0 md:gap-0'>✓</span><span className='ml-[1vw] text-[#2A2A2A] lg:text-[1.25vw] leading-[2.5] text-[4.5vw] gap-[2vw] lg:gap-0 md:gap-0'>{feature}</span></h4>
        ))}

        </div>
      </div>
      <span className={`h-[1px] w-full block bg-[#C5C5C5] m-[1.8vw]`} />
      <div className='flex flex-col justify-between items-center w-full lg:mt-0 mt-[5vw] gap-[1vw] md:text-[3vw] md:gap-[2vw] lg:text-[1.2vw]'>
        <p>Free for 30 days then <span className='font-bold'>{price}</span>/year/user</p>

        <LinkButton href={href} btnText="Know More" />
      </div>
    </div>
  );
};

export default PricingCard;
