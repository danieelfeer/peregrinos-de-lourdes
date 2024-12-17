import React from 'react';
import DefaultHeader from '../components/DefaultHeader';
import { FaHandshakeSimple } from 'react-icons/fa6';
import SocialButtons from '../components/SocialButtons';
import ProductCardsContainer from '../components/ProductCardsContainer';
import TitleWithtext from "../components/TitleWithText";

function Works() {
  return (
    <>
      <DefaultHeader
        imageSrc="/jovens-rodizio-de-pizza.png" // Caminho correto da imagem
        title="Trabalhos"
        icon={FaHandshakeSimple} // Passando o ícone de coração
      />
      <main className='pt-0'>
        <div className='flex flex-col justify-center items-center'>
          <h2 className='font-darker_grotesque font-extrabold text-4xl lg:text-[5rem] text-[3rem] leading-[0.8] lg:text-center text-left lg:w-[40rem] w-auto'>
            Acompanhe nossos eventos em nossas redes sociais!
          </h2>
          <div className='flex lg:py-20 py-16'>
            <SocialButtons socialLinks={{ instagram: 'on', whatsapp: 'on', gmail: 'on', facebook: 'on' }} />
          </div>
        </div>

        <h2 className="font-darker_grotesque text-left text-5xl font-bold">
          Nossa Loja
        </h2>

        {/* Aqui chamamos o novo container com os cards de produto */}
        <ProductCardsContainer />

        <TitleWithtext title={"Seja um Colaborador!"} text={"Após as missas, vendemos doces, comidas, bebidas, materiais religiosos e divulgamos nossos próximos eventos. Caso queira ajudar nas vendas, fazendo a doação de produtos, será muito bem-vindo! Sua contribuição é essencial para nossos projetos."}/>
      </main>
    </>
  );
}

export default Works;
