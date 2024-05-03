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

function ProjectCard() {
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
                <a
                  className="btn btn-secondary"
                  href={list.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github
                </a>
              )}
              {list.liveDemo && (
                <a
                  className="btn btn-primary"
                  href={list.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Demo ➜
                </a>
              )}
            </BtnGroup>
          </CardRight>
        </Card>
      ))}
    </>
  );
}

export default ProjectCard;
