import React from 'react';
import { FaInstagram, FaWhatsapp, FaFacebook, FaEnvelope } from 'react-icons/fa'; // Adicionando o ícone do Gmail

const SocialButtons = ({ socialLinks, size = 'w-8' }) => {
  return (
    <div className="flex space-x-8 justify-center">
      {socialLinks.instagram === 'on' && (
        <a 
          href="https://instagram.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="social-link"
        >
          <FaInstagram className={`${size} h-auto text-black`} />
        </a>
      )}
      {socialLinks.whatsapp === 'on' && (
        <a 
          href="https://wa.me" 
          target="_blank" 
          rel="noopener noreferrer"
          className="social-link"
        >
          <FaWhatsapp className={`${size} h-auto text-black`} />
        </a>
      )}
      {socialLinks.facebook === 'on' && (
        <a 
          href="https://facebook.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="social-link"
        >
          <FaFacebook className={`${size} h-auto text-black`} />
        </a>
      )}
      {socialLinks.gmail === 'on' && ( // Adicionando a lógica para o Gmail
        <a 
          href="mailto:example@gmail.com" // Link do Gmail para enviar email
          target="_blank" 
          rel="noopener noreferrer"
          className="social-link"
        >
          <FaEnvelope className={`${size} h-auto text-black`} /> {/* Ícone do Gmail */}
        </a>
      )}
    </div>
  );
};

export default SocialButtons;
