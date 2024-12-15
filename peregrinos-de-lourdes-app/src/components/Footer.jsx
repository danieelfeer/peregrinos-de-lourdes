import React from 'react';

const Footer = () => {
  return (
    <footer className="flex flex-col align-middle justify-center gap-11 border-t-2 border-black">
      <div className="flex flex-col sm:flex-row sm:justify-around gap-10 lg:py-14 py-7 lg:px-4 px-4 sm:p-6">
        <div className='footer-col'>
          <div className='w-20'>
            <img src="../../public/pnsl-logo.svg" alt="logo" />
          </div>
        </div>

        <div className='footer-col'>
          <h4 className='footer-title'>Fale Conosco</h4>
          <p className='uppercase'>Paróquia Nossa Senhora de Lourdes</p>
          <p>St. G Norte - Taguatinga, Brasília - DF</p>
          <a href="mailto:">jmjpnsl.portugal@gmail.com</a>
          <a href="tel:+55">(61) 9 9999-9999</a>
        </div>

        <div className="footer-col">
          <h4 className='footer-title'>Links</h4>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            Facebook
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            Twitter
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            Instagram
          </a>
        </div>

        <div className="footer-col">
          <h4 className='footer-title'>Media</h4>
          <a href="https://www.instagram.com/neocat_pnsl" target="_blank" rel="instagram">
            Instagram
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            Facebook
          </a>
        </div>
      </div>
      <p className='text-text-dark text-center font-darker_grotesque font-semibold h-20'>&copy; Desenvolvido com 🩵 por nós</p>
    </footer>
  );
};

export default Footer;
