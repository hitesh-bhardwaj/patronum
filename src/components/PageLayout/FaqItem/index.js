import React from 'react';

const FaqItem = ({ item, index, isOpen, toggleAccordion }) => {
    return (
        <>
            <div onClick={() => toggleAccordion(index)} className={`faq-item scaleAnim ${isOpen ? 'open' : ''}`} key={index}>
                <div className="faq-item-content features">
                    <div className='faq-number'>
                        <span className='aeonik'>
                            {item.id}
                        </span>
                    </div>
                    <div className='faq-main-content'>
                        <h6 className="title-2xl pb-2">
                            {item.title}
                        </h6>
                        <div className="faq-content">
                            <p className="content-p my-6">
                                <span>{item.content}</span>
                            </p>
                        </div>
                    </div>
                </div>
                <div className='faq-arrow'>
                    <img height="15" width="15" src="/assets/icons/faq-arrow.svg" alt='arrow icon'/>
                </div>
            </div>
            <span className='h-[1px] bg-[#1a1a1a] w-full lineDraw block'/>
        </>
    );
}

export default FaqItem;
