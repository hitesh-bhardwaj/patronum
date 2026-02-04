import React, { useEffect, useState, useRef } from 'react';

const PriceDropDown = ({ options, onChange, value }) => {
  const dropdownRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleSelectOption = (option) => {
    onChange(option);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div ref={dropdownRef} className="relative lg:w-[7vw] w-[25vw]">
      <div className={`${isOpen ? 'open border-[#eeeeee]' : ''} cursor-pointer lg:px-[1vw] lg:py-[1vw] border border-[#eeeeee] lg:rounded-[2vw] bg-[#ffffff] flex justify-between items-center text-text-head lg:font-medium aeonik lg:text-[1vw] transition-all duration-300 leading-[1] text-[3.7vw] font-normal rounded-[10vw] px-[2.5vw] py-[3vw]`} onClick={handleToggle} >
        {value}
        <span className={` ${isOpen ? 'open rotate-180' : ''} transition-all duration-300 z-[100]`}>
          <svg width="13" height="8" viewBox="0 0 13 8" fill="none" xmlns="http://www.w3.org/2000/svg" className='lg:w-[0.7vw] lg:h-[0.7vw] w-[2.5vw] h-[2.5vw]'>
            <path d="M1 1L6.5 6.5L12 1" stroke="#1069df" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </span>
      </div>
        <div aria-hidden="true" className={`transition-all duration-300 absolute top-0 left-0 w-full bg-[#fff] border border-[#EEEEEE] lg:rounded-[1.6vw] z-[9] overflow-hidden text-text-head lg:text-[1vw] lg:font-medium text-[3.7vw] font-normal rounded-[4vw] ${isOpen ? 'translate-y-0 opacity-100 visible' : 'opacity-0 translate-y-[5px] invisible'}`}>
          {options.map((option, index) => (
            <div
              key={index}
              className="lg:px-[0.8vw] lg:py-[1vw] hover:bg-[#f0f0f0] px-[2vw] py-[3vw]"
              onClick={() => handleSelectOption(option)}
            >
              {option}
            </div>
          ))}
        </div>
    </div>
  );
};

export default PriceDropDown;