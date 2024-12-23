import React from 'react';
import { Link } from 'react-router-dom'; // Importe o Link do react-router-dom

const Footer = () => {
  // Função para rolar a página para o topo
  const handleLinkClick = () => {
    window.scrollTo(0, 0); // Rola para o topo da página
  };

  return (
    <footer className="flex flex-col align-middle justify-center gap-11 border-t-2 border-black text-xl">
      <div className="flex flex-col sm:flex-row sm:justify-around gap-10 lg:py-14 py-7 lg:px-4 px-4 sm:p-6">
        <div className='footer-col'>
          <div className='w-23'>
            <Link to="/" onClick={handleLinkClick}> {/* Adicionando a função handleLinkClick */}
              <img className='w-32' src="./pnsl-logo.svg" alt="logo" />
            </Link>
          </div>
        </div>

        <div className='footer-col'>
          <h4 className='footer-title'>Fale Conosco</h4>
          <p className='uppercase'>Paróquia Nossa Senhora de Lourdes</p>
          <p>St. G Norte - Taguatinga, Brasília - DF</p>
          <a href="mailto:jmjpnsl.portugal@gmail.com">jmjpnsl.portugal@gmail.com</a>
          <a href="tel:+55">(61)99943-9655</a>
        </div>

        <div className="footer-col">
          <h4 className='footer-title'>Links</h4>
          {/* Adicionando a função handleLinkClick aos links internos */}
          <Link to="//" onClick={handleLinkClick} target="_self" rel="noopener noreferrer">
            Início
          </Link>
          <Link to="/trabalhos" onClick={handleLinkClick} target="_self" rel="noopener noreferrer">
            Trabalhos
          </Link>
          <Link to="/peregrinacoes" onClick={handleLinkClick} target="_self" rel="noopener noreferrer">
            Peregrinações
          </Link>
          <Link to="/sobre" onClick={handleLinkClick} target="_self" rel="noopener noreferrer">
            Sobre Nós
          </Link>
          <Link to="/contribuir" onClick={handleLinkClick} target="_self" rel="noopener noreferrer">
            Seja um apoiador
          </Link>
        </div>

        <div className="footer-col">
          <h4 className='footer-title'>Mídia</h4>
          <a href="https://www.instagram.com/peregrinos_de_lourdes/" target="_blank" rel="instagram">
            Instagram
          </a>
          <a href="https://www.facebook.com/profile.php?id=61559487751408" target="_blank" rel="noopener noreferrer">
            Facebook
          </a>
        </div>
      </div>
      <p className='text-text-dark text-center font-darker_grotesque font-semibold h-20'>&copy; Desenvolvido com 🩵 por nós</p>
    </footer>
  );
};

export default Footer;
