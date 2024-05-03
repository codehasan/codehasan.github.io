import React from 'react';
import { ImageFull, Img, Bio, Section, FeatureContainer } from './AboutStyles';
import Skills from '../Tag/Skills';
import HighlightedWords from '../Text/HighlightedWords';

interface FeatureProps {
  header: string;
  body: string;
}

export const Feature: React.FC<FeatureProps> = ({ header, body }) => {
  return (
    <FeatureContainer>
      <h3 className="text-xl">{header}</h3>
      <p>{body}</p>
    </FeatureContainer>
  );
};

const About: React.FC = () => {
  return (
    <Section id="about">
      <Bio>
        <div id="bioContainer">
          <h1 style={{ height: '3rem' }}>
            <HighlightedWords title={'My **Skills**'} />
          </h1>
          <ImageFull id="bioImage">
            <Img alt={'A picture of Ratul'} src={'/img/portrait.jpg'} />
          </ImageFull>

          <div id="bioText">
            <Skills />
            <Feature
              header={'I love building stuff 📱'}
              body={
                'I started playing with computers when I was 11 years-old. Since then I have been tinkering with all sorts of technologies that in some way or another led me to work on music, photography, sound engineering, electric engineering, automation, video production, feature film post-production, VR games, and 3D sound.'
              }
            />
          </div>
        </div>
      </Bio>
    </Section>
  );
};

export default About;
