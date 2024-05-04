import React from 'react';
import { ImageFull, Img, Bio, Section, FeatureContainer } from './AboutStyles';
import Skills from '../Tag/Skills';
import HighlightedWords from '../Text/HighlightedWords';
import { aboutMe } from '../../data/AboutData';

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
            <Img alt={aboutMe.portrait.alt} src={aboutMe.portrait.src} />
          </ImageFull>

          <div id="bioText">
            <Skills />
            <Feature header={aboutMe.header} body={aboutMe.bio} />
          </div>
        </div>
      </Bio>
    </Section>
  );
};

export default About;
