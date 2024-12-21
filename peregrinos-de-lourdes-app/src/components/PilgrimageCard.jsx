import React from "react";
import Emoji from 'react-ios-emojis';

const PilgrimageCard = ({ image, year, emojiCountry, city, description, link, target = '_blank'}) => {
  return (
    <a
      href={link} // Aqui você define o link de destino
      target={target} // Abre o link em uma nova aba
      rel="noopener noreferrer" // Melhor prática de segurança ao abrir links externos
      className="rounded-3xl overflow-hidden shadow-lg cursor-pointer transition-all transform hover:scale-105"
    >
      <div className="relative group">
        {/* Imagem de fundo */}
        <img
          className="w-full h-56 object-cover duration-300"
          src={image}
          alt={"imagem de " + city}
        />
        
        {/* Camada escura sobre a imagem */}
        <div className="absolute inset-0 bg-black opacity-65 group-hover:opacity-0 transition-opacity duration-300"></div>

        {/* Conteúdo do texto dentro da imagem */}
        <div className="absolute inset-0 flex flex-col justify-between items-center text-white text-center lg:p-10 p-5">
          <div className="flex justify-between items-center w-full">
            <div className="flex justify-center items-center bg-white p-2 rounded-full border-4 border-black">
              <Emoji name={emojiCountry} height={'2.5em'} />
            </div>
            <p className="font-dm_sans sm:text-base lg:text-xl">{year}</p>
          </div>
          <div>
            <div className="font-darker_grotesque font-bold lg:text-5xl md:text-5xl text-4xl  mb-2">{city}</div>
            <p className="font-dm_sans sm:text-base lg:text-xl opacity-85">
              {description}
            </p>
          </div>
        </div>
      </div>
    </a>
  );
};

export default PilgrimageCard;
