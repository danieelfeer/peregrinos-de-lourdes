import React from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Importe useNavigate e Link

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
  const navigate = useNavigate(); // Hook de navegação

  // Função de clique para rolar até o topo e navegar
  const handleClick = (event) => {
    window.scrollTo(0, 0); // Rola até o topo da página
    navigate(link); // Navega para o link
  };

  return (
    // Use Link para navegação interna ao invés de <a>
    <button
      onClick={handleClick} // Chama handleClick ao clicar no botão
      className={`group ${backgroundColor} ${borderColor} ${textColor} ${size} rounded-full border-2 font-darker_grotesque font-bold uppercase text-center inline-flex items-center justify-center ${hoverbackgroundColor} ${hoverTextColor} transition-all duration-300 ease-in-out cursor-pointer`}
    >
      <div className={`flex flex-row items-center gap-3 text-lg px-6 py-3 ${textColor} ${hoverTextColor} `}>
        {text}{icon}
      </div>
    </button>
  );
};

export default CustomButton;
