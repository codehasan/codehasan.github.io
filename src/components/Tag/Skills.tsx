import React from 'react';
import { Wrapper, StyledTags } from './TagStyles';

// cms: Content Management System
const skills = [
  { name: 'Solidity', type: 'backend' },
  { name: 'Foundry', type: 'backend' },
  { name: 'Typescript', type: 'backend' },
  { name: 'React', type: 'frontend' },
  { name: 'Node.js', type: 'backend' },
  { name: 'HTML', type: 'frontend' },
  { name: 'CSS', type: 'frontend' },
  { name: 'Next.js', type: 'frontend' },
  { name: 'Hardhat', type: 'tools' },
];

export default function Skills() {
  return (
    <Wrapper>
      <StyledTags>
        {skills.map((skill, i) => (
          <li key={i} className={skill.type}>
            {skill.name}
          </li>
        ))}
      </StyledTags>
    </Wrapper>
  );
}
