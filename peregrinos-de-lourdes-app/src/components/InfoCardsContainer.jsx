import React from 'react';
import InfoCard from './InfoCard';
import { FaExternalLinkAlt } from "react-icons/fa";

const InfoCardsContainer = () => {
  // Dados dos cards
  const cardsData = [
    { title: 'Peregrinações', description: 'Dê uma olhada nos lugares em que já peregrinamos!', image: './icone-sagrada-familia.png', link: '/peregrinacoes', buttonText: 'Saiba mais', size: 'w-[300px] h-96'},
    { title: 'Nossos Trabalhos', description: 'Fique de olho no que estamos trablhando! Não perca, pois sempre vem novidades muito boas!', image: './virgem-do-silencio.png', link: '/trabalhos', buttonText: 'Saiba mais', size: 'w-[300px] h-96' },
    { title: 'Nossa História', description: 'Conheça nossa missão e nossa história!', image: './icone-cristo-ressucitado.png', link: '/sobre', buttonText: 'Saiba mais', size: 'w-[300px] h-96'},
    // Adicione mais cards aqui, se necessário
  ];

  return (
    <div className="flex overflow-x-auto py-5 space-x-4 ">
      {cardsData.map((card, index) => (
        <div className="flex-shrink-0 min-w-[300px]" key={index}>
          <InfoCard
            title={card.title}
            description={card.description}
            image={card.image}
            link={card.link}
            buttonText={card.buttonText}
            size={card.size} 
            target={'_self'}
          />
        </div>
      ))}
    </div>
  );
};

export default InfoCardsContainer;
