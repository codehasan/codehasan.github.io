import React from 'react';
import { Link } from 'react-scroll';
import SocialLinks from '../Social/SocialLinks';
import {
  StyledFooter,
  FooterContents,
  TitleSection,
  LinksSection,
  SocialSection,
} from './FooterStyles';

function Footer() {
  return (
    <StyledFooter id="footer-base">
      <FooterContents>
        <TitleSection>
          <a href="/">Ratul Hasan</a>
          <div>© {new Date().getFullYear()}, Built and designed by Ratul Hasan</div>
        </TitleSection>
        <LinksSection>
          <div className="heading">Links</div>
          <div className="links">
            <Link to="projects">Projects</Link>
            <Link to="about">About</Link>
            <Link to="contact">Contact</Link>
          </div>
        </LinksSection>
        <SocialSection>
          <div className="heading">Get in touch</div>
          <SocialLinks />
        </SocialSection>
      </FooterContents>
    </StyledFooter>
  );
}

export default Footer;
