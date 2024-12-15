import './App.css';
import Welcome from './components/Welcome';
import Footer from './components/Footer';
import HomeHeader from './components/HomeHeader';
import NavMenu from './components/NavMenu';
import TitleWithText from './components/TitleWithText';
import PreregrinationCountdown from './components/PeregrinationCountdown';
import InfoCardsContainer from './components/InfoCardsContainer';

const App = () => {

  return (
    <div className='overflow-y-hidden'>
      <NavMenu />
      <HomeHeader />

      {/* Section para conteúdo principal */}
      <main className="max-w-6xl mx-auto px-6 py-12 ">
        {/* Componente Welcome */}
        <Welcome />

        {/* Componente TitleWithText */}
        <TitleWithText 
          title={'Por que Ajudar os Peregrinos?'} 
          text={'Ajudar nosso grupo de peregrinos é apoiar uma jornada de fé e evangelização. Como diz a Bíblia: "Tudo o que fizerdes a um dos meus pequeninos, a mim o fizestes" (Mateus 25:40). Seu apoio nos permite espalhar o amor de Cristo, fortalecer nossa espiritualidade e levar a mensagem de esperança a mais pessoas. Cada gesto de ajuda faz nossa caminhada mais significativa e impacta vidas.'}
        />

        {/* Título sobre o InfoCardContainer */}
        <h2 className="font-darker_grotesque text-center text-5xl font-bold">
          Conheça mais sobre nós!
        </h2>

        {/* Componente InfoCardContainer */}
        <InfoCardsContainer/>
        
      </main>

      {/* Componente PreregrinationCountdown com fundo vermelho */}
      <div className="bg-red-blood min-h-screen py-12">
        <PreregrinationCountdown />
      </div>

      <Footer />
    </div>
  );
};

export default App;
