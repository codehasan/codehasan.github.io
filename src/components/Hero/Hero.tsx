import React from 'react';
import Header from '../Header/Header';
import { HeroContainer, HeroWrapper, HeroText, HeroSection } from './HeroStyles';
import SocialLinks from '../Social/SocialLinks';
import MakeClouds from '../Cloud/MakeClouds';
import HighlightedWords from '../Text/HighlightedWords';

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
                <HighlightedWords title={"Hi, I'm Ratul | **Blockchain** **Developer**"} />
              </h1>
              <SocialLinks />
              <p>
                I love exploring and creating 🚀 I'm a lifelong learner 🎓 and I might have a thing
                for traditional Neapolitan Pizza 🍕
              </p>
            </HeroText>
          </HeroSection>
        </HeroWrapper>
      </HeroContainer>
    </main>
  );
};

export default Hero;
