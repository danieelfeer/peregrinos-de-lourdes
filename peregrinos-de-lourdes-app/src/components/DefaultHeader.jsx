import React from 'react';
import { FaPizzaSlice } from 'react-icons/fa'; 

const DefaultHeader = ({ title, imageSrc, icon }) => {
  return (
    <div className="relative w-full">

      {/* Div para a imagem e camada escura */}
      <div className="relative w-full h-[40vh]">
        <img
          className="w-full h-full object-cover object-top"
          src={imageSrc} // Caminho correto
          alt={title}
        />

        {/* Camada escura e título centralizado */}
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 flex flex-col justify-end items-center pb-10">
          
          {/* Título */}
          <div className="flex flex-col justify-center items-center">
            <h1 className="font-darker_grotesque text-white text-[4rem] sm:text-[6.5rem] md:text-[8rem] lg:text-[12rem] font-extrabold text-center leading-[0.8]">
              {title}
            </h1>
          </div>  
        </div>
      </div>

      {/* Div para o ícone abaixo do título */}
      <div className="flex justify-center items-center h-[10vh]">
        <div className="text-black text-6xl">
          {/* Aqui usamos o ícone do react-icons */}
          {icon ? React.createElement(icon) : <FaPizzaSlice />} {/* Exemplo usando o ícone FaPizzaSlice */}
        </div>
      </div>
    </div>
  );
};

export default DefaultHeader;
