import React from 'react';
import ProjectCard from './ProjectCard';

const Projects: React.FC = () => {
  return (
    <>
      <div className="ProjectWrapper" id="projects">
        <div className="Container">
          <div className="SectionTitle">Projects</div>
          <ProjectCard />
        </div>
      </div>
    </>
  );
};

export default Projects;
