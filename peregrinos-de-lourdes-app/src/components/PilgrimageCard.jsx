import React from "react";
import Emoji from 'react-ios-emojis';
import { Link } from 'react-router-dom'; // Importando o Link do react-router-dom

const PilgrimageCard = ({ image, year, emojiCountry, city, description, link, target = '_blank' }) => {

  // Função para tratar navegação em nova aba se necessário
  const handleLinkClick = (e, link, target) => {
    // Verifica se o link é externo
    if (link.startsWith('http://') || link.startsWith('https://')) {
      if (target === '_blank') {
        // Comportamento para abrir link externo em nova aba
        e.preventDefault(); // Evita navegação padrão
        window.open(link, '_blank');
      } else {
        // Comportamento para abrir link externo na mesma aba
        window.location.href = link;
      }
    } else {
      // Link interno: rola até o topo e navega
      window.scrollTo(0, 0); // Rola até o topo da página
    }
  };

  // Se o link for interno (não começa com http:// ou https://), usa o Link do react-router-dom
  const isExternalLink = link.startsWith('http://') || link.startsWith('https://');

  return (
    isExternalLink ? (
      <a
        href={link} 
        target={target} 
        rel="noopener noreferrer"
        className="rounded-3xl overflow-hidden shadow-lg cursor-pointer transition-all transform hover:scale-105"
        onClick={(e) => handleLinkClick(e, link, target)} // Chama a função para abrir nova aba se necessário
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
    ) : (
      <Link
        to={link} // Usamos 'to' para navegação interna
        className="rounded-3xl overflow-hidden shadow-lg cursor-pointer transition-all transform hover:scale-105"
        onClick={(e) => handleLinkClick(e, link, target)} // Chama a função para rolar até o topo e navegar
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
      </Link>
    )
  );
};

export default PilgrimageCard;
