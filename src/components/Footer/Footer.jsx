import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-scroll';
import SocialLinks from '../SocialIcon/SocialLinks';

const StyledFooter = styled.footer`
  position: relative;
  padding: 2rem clamp(1rem, 7vw, 200px);
  z-index: 2;
  background-color: var(--background-color-top);
  width: 100%;
  height: fit-content;
  font-weight: var(--fs-bold);
`;

const FooterContents = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 0 2rem;
  width: 100%;
  max-width: 1100px;
  margin: 0px auto;

  .heading {
    display: block;
    color: var(--color-gray-400);
    margin-bottom: 0.8rem;
  }
`;

const TitleSection = styled.div`
  max-width: 200px;
  color: white;
  padding: 1rem 0;

  a {
    font-size: 1.4rem !important;
    line-height: 2rem !important;
    margin-bottom: 1rem !important;
    padding-bottom: 1rem !important;
  }

  div {
    font-size: 0.8rem;
    margin-top: 0.5rem;
    color: var(--color-gray-400);
    font-weight: var(--fs-regular);
  }
`;

const LinksSection = styled.div`
  width: 200px;
  padding: 1rem 0;

  .links {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;

    color: var(--primary-color);
    font-weight: var(--fs-bold);

    a {
      cursor: pointer;
    }

    a:hover {
      color: var(--secondary-color) !important;
    }
  }
`;

const SocialSection = styled.div`
  width: 200px;
  padding: 1rem 0;

  .icons {
    display: flex;
    flex-direction: row;
    font-size: 2rem;
    column-gap: 1rem;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    filter: opacity(0.8);

    color: var(--primary-color);

    a {
      cursor: pointer;
    }

    a:hover {
      color: var(--color-gray-400) !important;
    }
  }
`;

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
