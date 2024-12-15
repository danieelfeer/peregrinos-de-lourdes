import React from "react";

const HomeHeader = () => {
  return (
    <div className="relative w-full">
      {/* Div para a imagem e camada escura */}
      <div className="relative w-full h-[90vh]">
        <img
          className="w-full h-full object-cover object-top"
          src="/nossa-senhora-de-lourdes-compressed.png" // Caminho correto
          alt="Nossa Senhora de Lourdes"
        />
        {/* Camada escura e título centralizado */}
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 flex flex-col justify-end items-center pb-20">
          {/* Logo (imagem e texto) dentro de uma div envolvente */}
          <div className="flex flex-col justify-center items-center">
            {/* Ícone (imagem) com tamanho responsivo */}
            <div className="relative mb-4 w-full flex justify-end">
              <img
                className="w-[50%] sm:w-[30%] md:w-[25%] lg:w-[20%]" // Responsividade para a imagem
                src="../../public/pnsl-logo-white.svg"
                alt="logo"
              />
            </div>

            {/* Título com "Lourdes" em azul */}
            <span className="font-darker_grotesque text-white text-[4rem] sm:text-[6.5rem] md:text-[8rem] lg:text-[12rem] font-black text-center leading-[0.8]">
              <span>Peregrinos</span>
              <br />
              <span>de </span>
              <span className="text-blue">Lourdes</span>
            </span>
          </div>
        </div>
      </div>

      {/* Div para o ícone abaixo do título */}
      <div className="flex justify-center pt-6 h-[10vh]">
        <div className="w-10">
          <img src="../../public/pnsl-logo.svg" alt="logo" />
        </div>
      </div>
    </div>
  );
};

export default HomeHeader;
