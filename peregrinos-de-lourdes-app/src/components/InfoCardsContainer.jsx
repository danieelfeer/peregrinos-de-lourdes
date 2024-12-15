import React from 'react';
import InfoCard from './InfoCard'; // Seu componente de card

const InfoCardsContainer = () => {
  // Dados dos cards
  const cardsData = [
    { title: 'Card 1', description: 'Descrição do card 1', image: '../../public/icone-sagrada-familia.png', link: '#', buttonText: 'Saiba mais', size: 'w-[300px] h-96'},
    { title: 'Card 2', description: 'Descrição do card 2', image: '../../public/virgem-do-silencio.png', link: '#', buttonText: 'Saiba mais', size: 'w-[300px] h-96' },
    { title: 'Card 3', description: 'Descrição do card 3', image: '../../public/icone-cristo-ressucitado.png', link: '#', buttonText: 'Saiba mais', size: 'w-[300px] h-96'},
    // Adicione mais cards aqui, se necessário
  ];

  return (
    <div className="flex overflow-x-auto py-16 space-x-4 ">
      {cardsData.map((card, index) => (
        <div className="flex-shrink-0 min-w-[300px]" key={index}>
          <InfoCard
            title={card.title}
            description={card.description}
            image={card.image}
            link={card.link}
            buttonText={card.buttonText}
            size={card.size} 
          />
        </div>
      ))}
    </div>
  );
};

export default InfoCardsContainer;
