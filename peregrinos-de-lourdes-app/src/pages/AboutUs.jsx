import React, { useEffect, useState, useRef } from 'react';
import DefaultHeader from '../components/DefaultHeader';
import { LuHeartHandshake } from "react-icons/lu";
import SocialButtons from '../components/SocialButtons';
import ProductCardsContainer from '../components/ProductCardsContainer';
import TitleWithtext from "../components/TitleWithText";

function AboutUs() {
  const [isLoaded, setIsLoaded] = useState(false);
  const lineRef = useRef(null); // Ref para a linha de destaque

  // Usando Intersection Observer para detectar quando a linha entra na tela
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsLoaded(true); // Ativa a animação quando a linha entra na tela
        }
      },
      {
        threshold: 0.5, // Ativa quando 50% do elemento estiver visível
      }
    );

    if (lineRef.current) {
      observer.observe(lineRef.current); // Observa o elemento
    }

    // Cleanup: Desconecta o observer quando o componente for desmontado
    return () => {
      if (lineRef.current) {
        observer.unobserve(lineRef.current);
      }
    };
  }, []);

  return (
    <>
      <DefaultHeader
        imageSrc="../../public/comunidade-1.png" // Caminho correto da imagem
        title="Sobre Nós"
        icon={''}
        svgImage1={"../../public/pnsl-logo.svg"}
        svgImage2={"../../public/virgem.svg"}
      />
      <main className='pt-0'>
        <div className="flex lg:flex-row flex-col lg:items-start md:items-center items-start justify-between gap-10 py-10">
          {/* Título */}
          <h1 className="font-darker_grotesque font-bold text-6xl lg:text-[7rem] leading-[0.8] lg:text-left md:text-center text-left w-80">
            Nossa História
            {/* Linha de destaque com animação */}
            <div 
              ref={lineRef} // Adiciona a ref à linha
              className={`bg-black mt-10 h-2 transition-all duration-700 
                          ${isLoaded ? 'w-[27rem]' : 'w-0'} 
                          hidden sm:block`} // A linha fica oculta em telas menores
            ></div>
          </h1>
      
          {/* Texto */}
          <div className="lg:w-[34rem] md:w-[34rem] w-auto font-dm_sans text-lg text-text-light flex flex-col items-center lg:justify-center text-justify">
            <p className='pb-10'>
              Somos um grupo de 12 jovens da Comunidade 1 do Caminho Neocatecumenal, da Paróquia Nossa Senhora de Lourdes. Desde 2021 trabalhamos juntos para arrecadar fundos e participar de peregrinações que fortalecem nossa fé e vocação.
              <br /><br />
              Em 2022, tivemos a bênção de participar do Encontro Vocacional em Fortaleza, CE. Em 2023, vivemos a experiência da Jornada Mundial da Juventude (JMJ) em Portugal, e também estivemos em Aparecida para celebrar os 50 anos do Caminho Neocatecumenal no Brasil.
              <br /><br />
              Nosso compromisso é continuar crescendo em espiritualidade, união e serviço, sempre buscando mais proximidade com Deus e com a Igreja. Que Nossa Senhora de Lourdes nos acompanhe em nossa caminhada de fé e fraternidade.
            </p>
          </div>
          
        </div>
        <div className='flex flex-col items-center'>    
            <img src="../../public/comunidade-1.png" alt="comunidade 1" />
            <p className='font-dm_sans'>Comunidade 1 - Paróquia Nossa Senhora de Lourdes</p>
        </div>
      </main>
    </>
  );
}

export default AboutUs;
