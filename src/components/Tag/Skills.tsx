import React from 'react';
import { Wrapper, StyledTags } from './TagStyles';
import { aboutMe } from '../../data/AboutData';

const Skills: React.FC = () => {
  return (
    <Wrapper>
      <StyledTags>
        {aboutMe.skills.map((skill, i) => (
          <li key={i} className={skill.type}>
            {skill.name}
          </li>
        ))}
      </StyledTags>
    </Wrapper>
  );
};

export default Skills;
