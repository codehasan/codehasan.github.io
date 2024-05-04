import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope, FaTwitter } from 'react-icons/fa';
import { SocialIconSection } from './SocialLinksStyles';
import { socialLinks } from '../../data/SocialLinks';

const SocialLinks: React.FC = () => {
  return (
    <SocialIconSection>
      <a href={socialLinks.github} target="_blank" rel="noopener noreferrer">
        <FaGithub />
      </a>
      <a href={socialLinks.linkedIn} target="_blank" rel="noopener noreferrer">
        <FaLinkedin />
      </a>
      <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer">
        <FaTwitter />
      </a>
      <a href={'mailto:' + socialLinks.gmail} target="_blank" rel="noopener noreferrer">
        <FaEnvelope />
      </a>
    </SocialIconSection>
  );
};

export default SocialLinks;
