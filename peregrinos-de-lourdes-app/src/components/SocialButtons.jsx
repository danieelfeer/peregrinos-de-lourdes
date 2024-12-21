import React from 'react';
import { FaInstagram, FaWhatsapp, FaFacebook, FaEnvelope } from 'react-icons/fa';

const SocialButtons = ({ socialLinks, size = 'w-8' }) => {
  return (
    <div className="flex space-x-8 justify-center">
      {socialLinks.instagram === 'on' && (
        <a 
          href="https://www.instagram.com/peregrinos_de_lourdes/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="social-link"
        >
          <FaInstagram className={`${size} h-auto text-black`} />
        </a>
      )}
      {socialLinks.whatsapp === 'on' && (
        <a 
          href="https://wa.me/5561999439655" 
          target="_blank" 
          rel="noopener noreferrer"
          className="social-link"
        >
          <FaWhatsapp className={`${size} h-auto text-black`} />
        </a>
      )}
      {socialLinks.facebook === 'on' && (
        <a 
          href="https://www.facebook.com/profile.php?id=61559487751408" 
          target="_blank" 
          rel="noopener noreferrer"
          className="social-link"
        >
          <FaFacebook className={`${size} h-auto text-black`} />
        </a>
      )}
      {socialLinks.gmail === 'on' && (
        <a 
          href="mailto:jmjpnsl.portugal@gmail.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="social-link"
        >
          <FaEnvelope className={`${size} h-auto text-black`} />
        </a>
      )}
    </div>
  );
};

export default SocialButtons;
