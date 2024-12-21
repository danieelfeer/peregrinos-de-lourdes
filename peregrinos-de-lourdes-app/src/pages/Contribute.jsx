import React from 'react';
import DefaultHeader from '../components/DefaultHeader';
import { BiDonateHeart } from "react-icons/bi";
import { FaHeart } from "react-icons/fa";
import { IoGiftSharp } from "react-icons/io5";
import IconCard from '../components/IconCard';

function Contribute() {
  return (
    <>
        <DefaultHeader
        imageSrc={"public/peregrinacoes.png"}
        title={"Contruibuir"}
        icon={BiDonateHeart}
        />
      <main className='pt-0'>
        <h2 className='font-darker_grotesque font-bold lg:text-6xl md:text-6xl text-[3.5rem] flex items-center pb-5'>Nos Apoie</h2>
        <div className='flex lg:flex-row flex-col gap-10'>
            <IconCard  
                icon={<BiDonateHeart/>}
                title={"Doações"}
                description={"Sua contribuição faz toda a diferença! Com a sua ajuda, podemos continuar nossa missão e levar mais jovens a viver essa jornada de fé."}
                link={'https://wa.me/5561999439655'}
                buttonText={'Fazer doação'}
            />

            <IconCard 
              icon={<FaHeart/>}
              title={'Seja um Voluntário'}
              description={'Junte-se ao nosso time de voluntários e ajude a fazer a diferença! Se você tem vontade de colaborar, dedicar seu tempo e dar o melhor de si, venha fazer parte dessa missão.'}
              buttonText={'Ser voluntário'}
              link={'https://wa.me/5561999439655'}
            />

            <IconCard
              icon={<IoGiftSharp />}
              title={'Apadrinhe um Jovem'}
              description={'Seja um padrinho ou madrinha de um jovem peregrino! Com o seu apoio, podemos proporcionar mais oportunidades de crescimento, fé e convivência. Juntos, podemos transformar a vida de muitos!'}
              buttonText={'Apadrinhar'}
              link={'https://wa.me/5561999439655'}
            />
        </div>
      </main>
    </>
  );
}

export default Contribute;
