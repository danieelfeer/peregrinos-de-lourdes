import React from 'react';
import SocialButtons from './SocialButtons';

const Welcome = () => {
  return (
    <div className="flex flex-col lg:flex-row sm:flex-col items-center justify-between pb-8 gap-14">
      {/* Seção à esquerda (Título, Emoji e Texto) */}
      <div className="flex flex-col items-center max-w-2xl">
        <h1 className="font-darker_grotesque font-bold lg:text-6xl md:text-6xl text-[3.5rem] flex items-center">
          Bem-Vindo(a)! 
          <img 
            className="lg:w-14 w-10 ml-3" 
            src="https://em-content.zobj.net/source/apple/391/waving-hand_1f44b.png" 
            alt="Emoji mão acenando" 
          />
        </h1>
        
        <p className="font-dm_sans text-lg mt-4 text-text-light text-center lg:w-[27rem] md:w-[30rem] w-auto py-4">
          Olá! Somos um grupo de jovens peregrinos da Igreja Católica, levando o evangelho para todos os cantos do mundo e fortalecendo nossa fé em cada jornada. Neste site, você vai conhecer um pouco mais sobre nossa missão e como fazemos isso acontecer. Seja bem-vindo!
        </p>
        
        {/* Componente das redes sociais */}
        <div className="mt-6">
          <SocialButtons socialLinks={{ instagram: 'on', whatsapp: 'on', gmail: 'on' }} size='w-5' />
        </div>
      </div>

      {/* Seção à direita (Imagem) */}
      <div>
        <img 
          className="w-[30rem] h-auto rounded-3xl shadow-lg" 
          src="./jovens-rodizio-de-pizza.png" 
          alt="Foto dos Jovens" 
        />
      </div>
    </div>
  );
};

export default Welcome;
