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
  icon, // Parâmetro para o ícone
}) => {
  return (
    <a
      href={link} 
      target="_blank" 
      rel="noopener noreferrer"
      className={`${backgroundColor} ${borderColor} ${textColor} ${size} rounded-full border-2 font-darker_grotesque font-bold uppercase text-center inline-flex items-center justify-center ${hoverbackgroundColor} ${hoverTextColor} transition-all duration-300 ease-in-out cursor-pointer`}
    >
      {text}
      
      {/* Condicionalmente renderiza o ícone à direita do texto */}
      {icon && <span className="ml-2">{icon}</span>} {/* Espaço à esquerda do ícone */}
    </a>
  );
};

export default CustomButton;
