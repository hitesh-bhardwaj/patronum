import React, { useState } from 'react';
import PricingCard from './PricingCard';

const Pricing = () => {

    const pricingInfo = {
        education: {
            features: ['Feature 1', 'Feature 2', 'Feature 3'],
            price: 10 // This is the monthly price
        },
        nonProfit: {
            features: ['Feature A', 'Feature B', 'Feature C'],
            price: 15
        },
        business: {
            features: ['Feature X', 'Feature Y', 'Feature Z'],
            price: 20
        }
    };

    return (
        <>
            <section id='pricing'>
                <div className='container'>
                    <div className='content'>
                        <h3 className='title-4xl mb-[4vw]'>Plans & Pricing</h3>
                        <div className="pricing-container">
                            <PricingCard 
                                category="Education" 
                                features={pricingInfo.education.features} 
                                price={pricingInfo.education.price} 
                            />
                            <PricingCard 
                                category="Non-Profit" 
                                features={pricingInfo.nonProfit.features} 
                                price={pricingInfo.nonProfit.price} 
                            />
                            <PricingCard 
                                category="Business" 
                                features={pricingInfo.business.features} 
                                price={pricingInfo.business.price} 
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Pricing;
