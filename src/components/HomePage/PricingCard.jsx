import React from 'react';

const PricingCard = ({ category, features, price }) => {
    return (
        <div className="pricing-card">
            <h2>{category}</h2>
            <ul>
                {features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                ))}
            </ul>
            <p className="price">${price} / month</p>
            <button>Choose Plan</button>
        </div>
    );
};

export default PricingCard;
