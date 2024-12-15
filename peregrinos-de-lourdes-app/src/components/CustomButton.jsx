import React from 'react';

const CustomButton = ({ 
  link, 
  text, 
  backgroundColor = 'bg-light-blue',  
  borderColor = 'border-black',    
  textColor = 'text-text-darker',
  hoverbackgroundColor,
  hoverTextColor,           
  size = 'px-6 py-3',                 
}) => {
  return (
    <a
      href={link} 
      target="_blank" 
      rel="noopener noreferrer"
      className={`${backgroundColor} ${borderColor} ${textColor} ${size} rounded-full border-2 font-darker_grotesque font-bold uppercase text-center inline-block ${hoverbackgroundColor} ${hoverTextColor} transition-all duration-300 ease-in-out cursor-pointer`}
    >
      {text}
    </a>
  );
};

export default CustomButton;
