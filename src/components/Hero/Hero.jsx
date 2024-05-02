import React from 'react';
import Header from '../Header/Header';
import { HeroContainer, HeroWrapper, HeroText, HeroSection } from './HeroElements';
import SocialLinks from '../SocialIcon/SocialLinks';
import { MakeClouds } from './MakeClouds';
import { HighlightedWords } from '../HighlightedWords';

function Hero() {
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
}

export default Hero;
