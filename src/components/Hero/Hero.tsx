import React from 'react';
import Header from '../Header/Header';
import { HeroContainer, HeroWrapper, HeroText, HeroSection } from './HeroStyles';
import SocialLinks from '../Social/SocialLinks';
import MakeClouds from '../Cloud/MakeClouds';
import HighlightedWords from '../Text/HighlightedWords';
import { heroDetails } from '../../data/HeroData';

const Hero: React.FC = () => {
  return (
    <main>
      <Header />
      <HeroContainer>
        <HeroWrapper>
          <HeroSection>
            <MakeClouds cloudCount={30} />
            <HeroText>
              <h1>
                <HighlightedWords title={heroDetails.heading} />
              </h1>
              <SocialLinks />
              <p>
                {heroDetails.description}
                &nbsp;
                <span>
                  <img src="/chess.png"></img>
                </span>
              </p>
            </HeroText>
          </HeroSection>
        </HeroWrapper>
      </HeroContainer>
    </main>
  );
};

export default Hero;
