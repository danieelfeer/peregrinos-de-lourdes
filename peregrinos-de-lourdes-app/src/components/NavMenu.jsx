import React, { useState } from 'react';
import { Turn as Hamburger } from 'hamburger-react';
import SocialButtons from './SocialButtons';

const NavMenu = () => {
  const [isOpen, setOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('/'); // Estado para armazenar o link ativo

  // Função para alternar o estado do menu
  const toggleMenu = () => {
    setOpen(!isOpen);
  };

  // Função para marcar o link como ativo
  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <div>
      {/* Botão para abrir/fechar o menu */}
      <div className='fixed top-0 right-0 z-50 p-7'>
        <div
          onClick={toggleMenu} // Alterna o estado do menu
          className='rounded-full shadow flex items-center bg-white cursor-pointer p-1'
        >
          <span className='inline-block m-2 font-darker_grotesque uppercase font-bold'>
            {isOpen ? 'Fechar' : 'Menu'} {/* Texto muda entre "Menu" e "Fechar" */}
          </span>
          <Hamburger
            color='#000'
            toggled={isOpen}
            size='32'
            rounded
            toggle={setOpen}
          />
        </div>
      </div>

      {/* Menu - Tela branca com links */}
      {isOpen && (
        <div className='fixed top-0 left-0 w-full h-full bg-white z-40 flex flex-col justify-center items-center text-center'>
          <ul className='flex flex-col items-center gap-7 font-dm_sans font-semibold space-y-4 lg:text-7xl text-5xl'>
            <li>
              <a
                href="/"
                className={`text-black hover:text-red-blood flex items-center ${activeLink === '/' ? 'text-red-blood' : ''}`}
                onClick={() => handleLinkClick('/')} // Marca o link como ativo
              >
                {activeLink === '/' && <img src="/cruz-vermelha.svg" alt="Ícone Home" className="mr-2 w-12" />}
                Início
              </a>
            </li>
            <li>
              <a
                href="/trabalhos"
                className={`text-black hover:text-red-blood flex items-center ${activeLink === '/trabalhos' ? 'text-red-blood' : ''}`}
                onClick={() => handleLinkClick('/trabalhos')} // Marca o link como ativo
              >
                {activeLink === '/trabalhos' && <img src="/cruz-vermelha.svg" alt="Ícone Trabalhos" className="mr-2 w-6 h-6" />}
                Trabalhos
              </a>
            </li>
            <li>
              <a
                href="/peregrinacoes"
                className={`text-black hover:text-red-blood flex items-center ${activeLink === '/peregrinacoes' ? 'text-red-blood' : ''}`}
                onClick={() => handleLinkClick('/peregrinacoes')} // Marca o link como ativo
              >
                {activeLink === '/peregrinacoes' && <img src="/cruz-vermelha.svg" alt="Ícone Peregrinações" className="mr-2 w-6 h-6" />}
                Peregrinações
              </a>
            </li>
            <li>
              <a
                href="/sobre"
                className={`text-black hover:text-red-blood flex items-center ${activeLink === '/sobre' ? 'text-red-blood' : ''}`}
                onClick={() => handleLinkClick('/sobre')} // Marca o link como ativo
              >
                {activeLink === '/sobre' && <img src="/cruz-vermelha.svg" alt="Ícone Sobre" className="mr-2 w-6 h-6" />}
                Sobre Nós
              </a>
            </li>
            <li>
              <a
                href="/contribuir"
                className={`text-black hover:text-red-blood flex items-center ${activeLink === '/contribuir' ? 'text-red-blood' : ''}`}
                onClick={() => handleLinkClick('/contribuir')} // Marca o link como ativo
              >
                {activeLink === '/contribuir' && <img src="/cruz-vermelha.svg" alt="Ícone Contribuir" className="mr-2 w-6 h-6" />}
                Seja um Apoiador
              </a>
            </li>
            <li>
                <SocialButtons socialLinks={{instagram: 'on', whatsapp: 'on', facebook: 'on', gmail: 'on'}} size='w-7'/>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default NavMenu;
