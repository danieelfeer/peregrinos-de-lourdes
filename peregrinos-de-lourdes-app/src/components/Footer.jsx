import React from 'react';

const Footer = () => {
  return (
    <footer className="flex flex-col align-middle justify-center gap-11 border-t-2 border-black text-xl">
      <div className="flex flex-col sm:flex-row sm:justify-around gap-10 lg:py-14 py-7 lg:px-4 px-4 sm:p-6">
        <div className='footer-col'>
          <div className='w-23'>
            <a href="/"><img className='w-32' src="public/pnsl-logo.svg" alt="logo" /></a>
          </div>
        </div>

        <div className='footer-col'>
          <h4 className='footer-title'>Fale Conosco</h4>
          <p className='uppercase'>Paróquia Nossa Senhora de Lourdes</p>
          <p>St. G Norte - Taguatinga, Brasília - DF</p>
          <a href="mailto:">jmjpnsl.portugal@gmail.com</a>
          <a href="tel:+55">(61)99943-9655</a>
        </div>

        <div className="footer-col">
          <h4 className='footer-title'>Links</h4>
          <a href="/" target="_self" rel="noopener noreferrer">
            Início
          </a>
          <a href="/peregrinos-de-lourdes/trabalhos" target="_self" rel="noopener noreferrer">
            Trabalhos
          </a>
          <a href="/peregrinos-de-lourdes/peregrinacoes" target="_self" rel="noopener noreferrer">
            Peregrinações
          </a>
          <a href="sobre" target="_self" rel="noopener noreferrer">
            Sobre Nós
          </a>

          <a href="/peregrinos-de-lourdes/contribuir" target="_self" rel="noopener noreferrer">
            Seja um apoiador
          </a>
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
