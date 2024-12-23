import React, { useState } from 'react';
import { Turn as Hamburger } from 'hamburger-react';
import { Link } from 'react-router-dom'; // Importando o Link do react-router-dom
import SocialButtons from './SocialButtons';

const NavMenu = () => {

  const [isOpen, setOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('/'); // Estado para armazenar o link ativo

  const toggleMenu = () => {
    setOpen(!isOpen);
  };

  const handleLinkClick = (link) => {
    setActiveLink(link);
    setOpen(false); // Fechar o menu após clicar no link
    window.scrollTo(0, 0); // Rolar para o topo da página
  };

  return (
    <div>
      {/* Botão para abrir/fechar o menu */}
      <div className='fixed top-0 right-0 z-50 p-7'>
        <div
          onClick={toggleMenu}
          className='rounded-full shadow flex items-center bg-white cursor-pointer p-1'
        >
          <span className='inline-block m-2 font-darker_grotesque uppercase font-bold'>
            {isOpen ? 'Fechar' : 'Menu'}
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

      {/* Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-white z-40 flex flex-col justify-center items-center text-center transition-all duration-500 ease-in-out transform ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <ul className='flex flex-col items-center gap-7 font-dm_sans font-semibold space-y-4 lg:text-7xl text-5xl'>
          <li>
            <Link
              to="//"
              className={`text-black hover:text-red-blood flex items-center ${activeLink === '/' ? 'text-red-blood' : ''}`}
              onClick={() => handleLinkClick('/peregrinos-de-lourdes/')}
            >
              {activeLink === '/' && <img src="./cruz-vermelha.svg" alt="Ícone Home" className="mr-2 w-10 h-10" />}
              Início
            </Link>
          </li>
          <li>
            <Link
              to="/trabalhos"
              className={`text-black hover:text-red-blood flex items-center ${activeLink === '/trabalhos' ? 'text-red-blood' : ''}`}
              onClick={() => handleLinkClick('/trabalhos')}
            >
              {activeLink === '/trabalhos' && <img src="./cruz-vermelha.svg" alt="Ícone Trabalhos" className="mr-2 w-10 h-10" />}
              Trabalhos
            </Link>
          </li>
          <li>
            <Link
              to="/peregrinacoes"
              className={`text-black hover:text-red-blood flex items-center ${activeLink === '/peregrinacoes' ? 'text-red-blood' : ''}`}
              onClick={() => handleLinkClick('/peregrinacoes')}
            >
              {activeLink === '/peregrinacoes' && <img src="./cruz-vermelha.svg" alt="Ícone Peregrinações" className="mr-2 w-10 h-10" />}
              Peregrinações
            </Link>
          </li>
          <li>
            <Link
              to="/sobre"
              className={`text-black hover:text-red-blood flex items-center ${activeLink === '/sobre' ? 'text-red-blood' : ''}`}
              onClick={() => handleLinkClick('/sobre')}
            >
              {activeLink === '/sobre' && <img src="./cruz-vermelha.svg" alt="Ícone Sobre" className="mr-2 w-10 h-10" />}
              Sobre Nós
            </Link>
          </li>
          <li>
            <Link
              to="/contribuir"
              className={`text-black hover:text-red-blood flex items-center ${activeLink === '/contribuir' ? 'text-red-blood' : ''}`}
              onClick={() => handleLinkClick('/contribuir')}
            >
              {activeLink === '/contribuir' && <img src="./cruz-vermelha.svg" alt="Ícone Contribuir" className="mr-2 w-10 h-10" />}
              Seja um Apoiador
            </Link>
          </li>
          <li>
            <SocialButtons socialLinks={{ instagram: 'on', whatsapp: 'on', facebook: 'on', gmail: 'on' }} size='w-7' />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavMenu;
