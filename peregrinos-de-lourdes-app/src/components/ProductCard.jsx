import React, { useState } from 'react';
import CustomButton from './CustomButton';
import { FaShoppingCart } from "react-icons/fa";

const ProductCard = ({ image, name, description, price }) => {
  // Estado para controlar se a imagem maior deve ser exibida
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Função para abrir o modal
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Função para fechar o modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className='bg-blue hover:bg-white transition-all duration-300 ease-in-out font-dm_sans text-black rounded-3xl border-[3px] border-black flex flex-col items-center p-6'>
      {/* Imagem centralizada */}
      <img 
        className='w-full h-auto max-w-[240px] mb-4 rounded-3xl border-[3px] border-black cursor-pointer transition-transform duration-300 ease-in-out transform hover:scale-105'
        src={image} 
        alt={name} 
        onClick={openModal} // Ao clicar, abre o modal
      />

      {/* Título do produto */}
      <h3 className='font-darker_grotesque text-center text-2xl font-bold mb-2'>{name}</h3>

      {/* Descrição do produto */}
      <p className='text-center text-lg text-gray-700 mb-4'>{description}</p>

      {/* Preço do produto */}
      <h3 className='text-center text-xl font-semibold mb-4'>R${price}</h3>

      {/* Botão de encomendar */}
      <CustomButton
        text={"Encomendar"}
        icon={<FaShoppingCart />}
        backgroundColor='bg-light-blue'
        size='px-12 py-4'
        hoverbackgroundColor={"hover:bg-blue"}
      />

      {/* Modal com a imagem maior */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 transition-all duration-500 ease-in-out opacity-100">
          <div className="relative max-w-full max-h-[80vh]">
            <img 
              className="max-w-full max-h-[80vh] rounded-3xl transition-transform duration-500 ease-in-out transform scale-95 hover:scale-105"
              src={image} 
              alt={name} 
            />
            <button 
              className="absolute top-2 right-2 text-white text-2xl font-bold opacity-80 hover:opacity-100 transition-all duration-300"
              onClick={closeModal} // Fechar o modal ao clicar no X
            >
              X
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductCard;
