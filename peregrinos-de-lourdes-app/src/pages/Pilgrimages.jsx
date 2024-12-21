import React from 'react';
import DefaultHeader from '../components/DefaultHeader';
import { FaRegMap } from "react-icons/fa6";
import PilgrimageCard from "../components/PilgrimageCard";

import Emoji from 'react-ios-emojis';

function Pilgrimages() {
  return (
    <>
        <DefaultHeader
        imageSrc={"../../public/peregrinacoes.png"}
        title={"Peregrinações"}
        icon={FaRegMap}
        />
      <main className='pt-0'>
        <h2 className='font-darker_grotesque font-bold lg:text-6xl md:text-6xl text-[3.5rem] flex items-center pb-5'>Peregirnações</h2>
        <div className='flex flex-col gap-10'>
            <PilgrimageCard 
                year={"2024"}
                emojiCountry={'flagBrazil'}
                image={"https://arquidioceselondrina.com.br/wp-content/uploads/2024/07/caminho-neocatecumenal-celebra-50-anos-no-brasil-750x350.jpg"}
                city={"Aparecida-SP"}
                description={"Celebração dos 50 anos do Caminho Neocatecumentl no Brasil"}
                link={'https://www.instagram.com/p/C9kbqE3x_kV/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=='}
            />

            <PilgrimageCard 
                year={"2023"}
                emojiCountry={'flagPortugal'}
                image={"https://i0.wp.com/smartencyclopedia.eu/wp-content/uploads/2023/08/53086242827_af8ceb7334_o-site.jpg"}
                city={"Lisboa, Portugal"}
                description={"Jornada Mundial da Juventude (JMJ) 2023"}
                link={'https://www.instagram.com/p/CwFebX4Akmk/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=='}
            />

            <PilgrimageCard 
                year={"2022"}
                emojiCountry={'flagBrazil'}
                image={"../../public/pilgrimages/encontro-fortaleza.jpg"}
                city={"Fortaleza-CE"}
                description={"Encontro Vocacional Regional"}
                link={'https://www.instagram.com/p/CgsrEf9t57b/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=='}
            />

        </div>
        <h2 className='font-darker_grotesque font-bold lg:text-6xl md:text-6xl text-[3.5rem] flex items-center pb-5 pt-20'>Em breve...</h2>
        <div className='flex flex-col gap-10'>
            <PilgrimageCard 
                year={"2025"}
                emojiCountry={'flagItaly'}
                image={"../../public/rome-image.png"}
                city={"Roma, Itália"}
                description={"Ano Jubilar"}
                link={'/#contagem_regressiva'}
                target={'_self'}
            />

            <PilgrimageCard 
                year={"2027"}
                emojiCountry={'flagSouthKorea'}
                image={"https://img.cancaonova.com/cnimages/canais/uploads/sites/11/2024/09/logotipo-jmj-seul-2027-_-foto-reproducao-vatican-news-youtube.png"}
                city={"Seoul, Koréia do Sul"}
                description={"Jornada Mundial da Juventude (JMJ) 2027"}
                link={'/contribuir'}
                target={'_self'}
            />

        </div>
      </main>
    </>
  );
}

export default Pilgrimages;
