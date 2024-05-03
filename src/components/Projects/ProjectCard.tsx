import React from 'react';
import { ProjectList } from '../../data/ProjectData';
import {
  Card,
  CardLeft,
  CardRight,
  TechCardContainer,
  TechCard,
  BtnGroup,
} from './ProjectCardStyles';
import { Button } from '../Button/Button';

const ProjectCard: React.FC = () => {
  return (
    <>
      {ProjectList.map((list, index) => (
        <Card key={index}>
          <CardLeft>
            <img src={list.img} alt={list.title} />
          </CardLeft>
          <CardRight>
            <h4>{list.title}</h4>
            <p>{list.description}</p>
            <TechCardContainer>
              {list.techStack.map((tech, index) => (
                <TechCard key={index}>{tech}</TechCard>
              ))}
            </TechCardContainer>
            <BtnGroup>
              {list.github && (
                <a href={list.github} target="_blank" rel="noopener noreferrer">
                  <Button style={{ marginRight: '1rem' }}>Github</Button>
                </a>
              )}
              {list.liveDemo && (
                <a href={list.liveDemo} target="_blank" rel="noopener noreferrer">
                  <Button primary>Demo ➜</Button>
                </a>
              )}
            </BtnGroup>
          </CardRight>
        </Card>
      ))}
    </>
  );
};

export default ProjectCard;
