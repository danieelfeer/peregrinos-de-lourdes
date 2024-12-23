import React from 'react';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate

const CustomButton = ({ 
  link, 
  target = '_blank', // Default é _blank para links externos
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
    // Verifica se o link é externo (começa com http:// ou https://)
    if (link.startsWith('http://') || link.startsWith('https://')) {
      if (target === '_blank') {
        // Abre o link externo em uma nova aba
        window.open(link, '_blank');
      } else {
        // Abre o link externo na mesma aba
        window.location.href = link;
      }
    } else {
      // Link interno: rola até o topo e navega
      window.scrollTo(0, 0); // Rola até o topo da página
      navigate(link); // Navega para o link interno
    }
  };

  return (
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
