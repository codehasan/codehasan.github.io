import React from 'react';
import { Wrapper, StyledTags } from './TagStyles';

interface TagProps {
  tags: string[];
}

const Tags: React.FC<TagProps> = ({ tags }) => {
  return (
    <Wrapper>
      <StyledTags>
        {tags.map((tag, i) => (
          <li key={i}>{tag}</li>
        ))}
      </StyledTags>
    </Wrapper>
  );
};

export default Tags;
