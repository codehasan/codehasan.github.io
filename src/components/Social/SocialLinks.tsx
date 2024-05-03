import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope, FaTwitter } from 'react-icons/fa';
import { SocialIconSection } from './SocialLinksStyles';

const SocialLinks: React.FC = () => {
  return (
    <SocialIconSection>
      <a href="https://github.com/codehasan" target="_blank" rel="noopener noreferrer">
        <FaGithub />
      </a>
      <a href="https://www.linkedin.com/in/codehasan" target="_blank" rel="noopener noreferrer">
        <FaLinkedin />
      </a>
      <a href="https://x.com/code_hasan" target="_blank" rel="noopener noreferrer">
        <FaTwitter />
      </a>
      <a href="mailto:ratul.hasan.rahat.bd@gmail.com" target="_blank" rel="noopener noreferrer">
        <FaEnvelope />
      </a>
    </SocialIconSection>
  );
};

export default SocialLinks;
