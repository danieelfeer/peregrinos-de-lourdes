import React from 'react';
import Welcome from '../components/Welcome';
import TitleWithText from '../components/TitleWithText';
import InfoCardsContainer from '../components/InfoCardsContainer';
import PreregrinationCountdown from '../components/PeregrinationCountdown';
import HomeHeader from '../components/HomeHeader';

const Home = () => {
  return (
    <div className='overflow-y-hidden'>
        <HomeHeader/>
      <main className="max-w-6xl mx-auto px-6 py-12 ">
        <Welcome />

        <TitleWithText 
          title={'Por que Ajudar os Peregrinos?'} 
          text={'Ajudar nosso grupo de peregrinos é apoiar uma jornada de fé e evangelização. Como diz a Bíblia: "Tudo o que fizerdes a um dos meus pequeninos, a mim o fizestes" (Mateus 25:40). Seu apoio nos permite espalhar o amor de Cristo, fortalecer nossa espiritualidade e levar a mensagem de esperança a mais pessoas. Cada gesto de ajuda faz nossa caminhada mais significativa e impacta vidas.'}
        />

        <h2 className="font-darker_grotesque text-center text-5xl font-bold">
          Conheça mais sobre nós!
        </h2>

        <InfoCardsContainer/>
      </main>

      <div className="bg-red-blood min-h-screen py-12">
        <PreregrinationCountdown />
      </div>
    </div>
  );
};

export default Home;
