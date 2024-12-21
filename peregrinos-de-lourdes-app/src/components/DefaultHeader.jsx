import React from 'react';

const DefaultHeader = ({ title, imageSrc, icon, svgImage1, svgImage2 }) => {
  return (
    <div className="relative w-full">
      {/* Div para a imagem e camada escura com cantos arredondados */}
      <div className="relative w-full h-[90vh] rounded-b-[6.5rem] overflow-hidden">
        <img
          className="w-full h-full object-cover object-center rounded-b-lg"
          src={imageSrc}
          alt={title}
        />

        {/* Camada escura e título centralizado */}
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-75 flex flex-col items-center justify-end">
          {/* Título */}
          <h1 className="font-bebasNeue font-extrabold text-white text-[18vw] sm:text-[50vw] md:text-[40vw] lg:text-[15vw]">
            {title}
          </h1>
        </div>
      </div>

      {/* Div para o ícone ou imagens SVG */}
      <div className="flex justify-center items-center h-[10vh] gap-4">
        {/* Caso o ícone esteja definido, exibe o ícone */}
        {icon && (
          <div className="text-black text-6xl">
            {React.createElement(icon)}
          </div>
        )}

        {/* Caso as duas imagens SVG sejam fornecidas, exibe elas com a linha de separação */}
        {(svgImage1 && svgImage2) && (
          <>
            <img src={svgImage1} alt="SVG Image 1" className="h-14" />
            <div className="h-12 w-px bg-black mx-4" />
            <img src={svgImage2} alt="SVG Image 2" className="h-20" />
          </>
        )}

        {/* Caso apenas uma imagem SVG seja fornecida, exibe ela sem a linha */}
        {svgImage1 && !svgImage2 && (
          <img src={svgImage1} alt="SVG Image 1" className="h-12" />
        )}

        {svgImage2 && !svgImage1 && (
          <img src={svgImage2} alt="SVG Image 2" className="h-12" />
        )}
      </div>
    </div>
  );
};

export default DefaultHeader;
