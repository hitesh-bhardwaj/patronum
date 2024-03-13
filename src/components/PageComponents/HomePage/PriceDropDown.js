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
    <div ref={dropdownRef} className="custom-dropdown">
      <div className={`selected-option  ${isOpen ? 'open' : ''}`} onClick={handleToggle}>
        {value}
        <span className={`arrow ${isOpen ? 'open' : ''}`}>
          <svg width="13" height="8" viewBox="0 0 13 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1L6.5 6.5L12 1" stroke="#1069df" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </span>
      </div>
        <div aria-hidden="true" className={`options transition-all duration-300 ${isOpen ? 'translate-y-0 opacity-100 visible' : 'opacity-0 translate-y-[5px] invisible'}`}>
          {options.map((option, index) => (
            <div
              key={index}
              className="option"
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