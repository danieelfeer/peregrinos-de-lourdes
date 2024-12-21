import React from 'react';
import CustomButton from './CustomButton';

const TitleWithText = ({ title, text, link }) => {
  return (
    <div className="flex lg:flex-row flex-col lg:items-start md:items-center items-start justify-between gap-10 py-16">
      {/* Título */}
      <h1 className="font-darker_grotesque font-bold text-4xl lg:text-[5rem] leading-[0.8] lg:text-left md:text-center text-left w-80">
        {title}
      </h1>
      
      {/* Texto */}
      <div className="lg:w-[34rem] md:w-[34rem] w-auto font-dm_sans text-lg text-text-light flex flex-col items-center justify-center">
        <p className='pb-10'>{text}</p>
        < CustomButton text={"Como posso ajudar?"} textColor='text-white' backgroundColor='bg-black' hoverTextColor='hover:text-black' hoverbackgroundColor='hover:bg-white no-he' link={link} target={'_self'}/>
      </div>

    </div>
  );
};

export default TitleWithText;
