import React, { useEffect, useState, useRef } from 'react';
import InfoCard from './InfoCard'; 
import { FaExternalLinkAlt } from "react-icons/fa";

const PeregrinationCountdown = () => {
  // Data da próxima peregrinação
  const nextPilgrimageDate = new Date('2025-07-28'); // Ajuste conforme necessário
  
  // Estado para armazenar o número de dias restantes
  const [daysRemaining, setDaysRemaining] = useState(0);
  const [counting, setCounting] = useState(false);
  
  // Referência para a seção
  const sectionRef = useRef(null);

  // Função para calcular a contagem regressiva
  const calculateDaysRemaining = () => {
    const today = new Date();
    const timeDifference = nextPilgrimageDate - today;
    const days = Math.ceil(timeDifference / (1000 * 3600 * 24)); // Convertendo de milissegundos para dias
    return days;
  };

  // Função para iniciar a animação de contagem
  const countUp = () => {
    const target = calculateDaysRemaining();
    let current = 0;
    
    const animate = () => {
      if (current < target) {
        current++;
        setDaysRemaining(current);
        requestAnimationFrame(animate); // Continuação da animação
      }
    };
    animate();
  };

  // Verifica quando a seção entra no viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !counting) {
          setCounting(true);
          countUp(); // Inicia a contagem
        }
      },
      { threshold: 0.2 } // Inicia quando 20% da seção estiver visível
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [counting]);

  // Dados dos cards
  const cardsData = [
    {
      title: 'Jornada Jubilar em Roma',
      description:
        'O Jubileu é um ano especial na Igreja Católica, dedicado ao perdão, à misericórdia e à renovação espiritual. Durante esse período, os fiéis têm a oportunidade de receber indulgências. Um dos principais símbolos do Jubileu é a Porta Santa, uma porta especial nas basílicas, como a de São Pedro em Roma, que é aberta apenas durante o Ano Santo. Atravessar essa porta representa uma jornada de fé e um convite ao encontro com a graça de Deus.',
      image: 'public/rome-image.png', // Aqui é a imagem do card
      link: 'https://www.iubilaeum2025.va/pt.html',
      buttonText: 'Saiba mais',
      size: 'lg:w-[800px] w-[90vw] lg:h-[500px] h-auto lg:p-10 md:p-10 py-10 ', // Tamanho do card
    },
  ];

  return (
    <div className="relative max-w-6xl mx-auto px-6 py-12 text-center text-white" ref={sectionRef}>
      {/* Título */}
      <h2 className="font-darker_grotesque lg:text-8xl text-6xl font-bold mb-4">Está Chegando!</h2>

      {/* Texto explicativo */}
      <p className="font-dm_sans text-xl mb-6 opacity-80">
        Falta pouco tempo para o Jubileu dos Jovens em Roma 🇮🇹
      </p>

      {/* Contagem regressiva */}
      <div className="font-dm_sans text-9xl font-bold text-yellow-600 mb-6">
        {daysRemaining}
        <div className="text-xl font-medium italic">
          {daysRemaining === 1 ? 'dia' : 'dias'}
        </div>
      </div>

      {/* Substituindo a imagem com o card e centralizando */}
      <div className="flex justify-center items-center mb-12">
        {cardsData.map((card, index) => (
          <div key={index} className="flex justify-center text-left">
            <InfoCard
              title={card.title}
              description={card.description}
              image={card.image}
              link={card.link}
              buttonText={card.buttonText}
              size={card.size}
              icon={<FaExternalLinkAlt/>}
            />
          </div>
        ))}
      </div>

      {/* Cruz Branca, centralizada */}
      <div className="flex justify-center">
        <img className="py-20 w-16" src="public/cruz-branca.svg" alt="Cruz Branca" />
      </div>
    </div>
  );
};

export default PeregrinationCountdown;
