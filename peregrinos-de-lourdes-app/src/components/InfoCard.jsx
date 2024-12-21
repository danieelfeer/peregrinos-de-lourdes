import React from 'react';
import CustomButton from './CustomButton'; 

const InfoCard = ({ title, description, image, link, buttonText, size, icon, target}) => {
  return (
    <div className={`relative ${size} m-4 rounded-3xl overflow-hidden shadow-lg border-4 border-black`}>
      {/* Imagem de fundo */}
      <div
        className="absolute top-0 left-0 w-full h-full"
        style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      ></div>

      {/* Camada escura (aplicando filtro de escurecimento) */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-70" style={{ filter: 'brightness(0.5)' }}></div>

      <div className="relative z-10 p-6">
        <h3 className="font-darker_grotesque text-4xl font-bold text-white mb-4">{title}</h3>
        <p className="font-dm_sans text-lg text-white opacity-80 lg:mb-6 mb-14">{description}</p>
      </div>

      {/* Botão centralizado no canto inferior */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
        <CustomButton 
          link={link} 
          target={target}
          text={buttonText} 
          backgroundColor="bg-white" 
          hoverbackgroundColor="hover:bg-blue" 
          textColor="text-black"
          hoverTextColor="hover:text-black"
          icon={icon}
        />
      </div>
      
    </div>
  );
};

export default InfoCard;
