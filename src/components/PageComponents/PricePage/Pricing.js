import React from 'react';
import PricingCard from './PricingCard';
import Image from 'next/image';
import LinkButton from '@/components/Buttons/LinkButton';
import { useModal } from '@/components/Modals/ModalContext';

const Pricing = () => {
    const { openModal } = useModal();

  // Features for each category
  const features = {
    Education: [
      'Email Signature Management',
      'Google Drive Management',
      'Contact Sharing',
      'Automated File Unsharing',
      'Organizations Chart',
    ],
  
    Business: [
      'Email Signature Management',
      'Google Drive Management',
      'Contact Sharing',
      'Automated File Unsharing',
      'Organizations Chart',
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
                  Find the Plan that is right
                </span>
                <br />
                <span>
                  for You & Your Business
                </span>
              </h2>
            </div>

            <div className='pricing-main'>
              <div className='pricing-card-wrapper fadeUp !flex'>
                <PricingCard
                  category="Education & Non-Profit"
                  pricingImage='/assets/pricing/pricing-illustration-1.svg'
                  features={features.Education}
                  price={"$ 2.00"}
                  href="/pricing-for-education"
                />
               
                <PricingCard
                  category="Business"
                  pricingImage='/assets/pricing/business.svg'
                  features={features.Business}
                  price={"$ 8.00"}
                  href="/pricing-for-business"
                />
              </div>
            </div>

            <div className='pricing-head pt-[2vw]'>
              <h2 className='title-4xl text-anim'>
                <span>
                  Add-Ons
                </span>
              </h2>
            </div>

            <div className='w-full h-full lg:mt-0 mt-[8vw]'>
              <div className='border border-[#e8e8e8] bg-[#fdfdfd] h-full w-full rounded-[16px] flex fadeUp lg:pt-[4%] lg:px-[4%] lg:pb-[3%] lg:gap-[10%] lg:flex-row flex-col px-[10%] pt-[14%] pb-[10%]'>
                <div className='lg:w-[40%] relative w-full lg:h-auto h-[35vw] lg:mb-0 mb-[6vw]'>
                  <Image src="/assets/pricing/backup-pricing.svg" fill alt='Backup Image' loading='lazy' />
                </div>

                <div className="lg:w-[60%] w-full">
                  <h3 className="lg:text-[2vw] text-primary text-left text-[7vw] lg:mb-0 mb-[4vw]">Backup</h3>
                  <span className="h-[1px] w-full block bg-[#c5c5c5] my-[1.8vw]" />
                  <div className="text-head lg:text-[1.25vw] text-[4.5vw] grid lg:grid-cols-2 grid-col-1 lg:gap-y-[1.5vw] gap-[3.5vw] gap-x-[2vw] lg:py-0 py-[1.5vw]">
                    <h4 className='flex lg:gap-[1vw] gap-[2vw]'><span>✓</span><span>Best-in-Class Full Fidelity backups</span></h4>
                    <h4 className='flex lg:gap-[1vw] gap-[2vw]'><span>✓</span><span>Advanced Intelligent Ransomware Protection</span></h4>
                    <h4 className='flex lg:gap-[1vw] gap-[2vw]'><span>✓</span><span>Automated backup runs, resilient to Google API errors</span></h4>
                    <h4 className='flex lg:gap-[1vw] gap-[2vw]'><span>✓</span><span>Restore data to the same/other accounts</span></h4>
                    <h4 className='flex lg:gap-[1vw] gap-[2vw]'><span>✓</span><span>Google Workspace apps & metadata support</span></h4>
                  </div>
                  <span className="h-[1px] w-full block bg-[#c5c5c5] my-[1.8vw]" />
                  <div className='flex lg:justify-start justify-between gap-[3vw] items-baseline w-full lg:mt-0 mt-[5vw]'>
                    <p className="">
                      <span className='text-[#1a1a1a] lg:text-[1.45vw] text-[5vw] font-semibold leading-[1]'>$ 3.00</span>{" "}
                      <span className="font-[400] text-[#999] lg:text-[18px] text-[3.5vw]">/user/month</span>
                    </p>
                    <div>
                      <LinkButton
                        href={"javascript:void(0)"}
                        btnText="Get Started"
                        onClick={() => openModal('contact')}
                      />
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default Pricing;
