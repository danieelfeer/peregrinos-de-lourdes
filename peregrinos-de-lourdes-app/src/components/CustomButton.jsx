import React from 'react';

const CustomButton = ({ 
  link, 
  target,
  text, 
  backgroundColor = 'bg-light-blue',  
  borderColor = 'border-black',    
  textColor = 'text-text-darker',
  hoverbackgroundColor,
  hoverTextColor,           
  size = '',                 
  icon, // Parâmetro para o ícone
}) => {
  return (
    <a
      href={link} 
      target={target} 
      rel="noopener noreferrer"
      className={`group ${backgroundColor} ${borderColor} ${textColor} ${size} rounded-full border-2 font-darker_grotesque font-bold uppercase text-center inline-flex items-center justify-center ${hoverbackgroundColor} ${hoverTextColor} transition-all duration-300 ease-in-out cursor-pointer`}
    >
      <div className={`flex flex-row items-center gap-3 text-lg px-6 py-3 ${textColor} ${hoverTextColor} `}>{text}{icon}</div>
    </a>
  );
};

export default CustomButton;
