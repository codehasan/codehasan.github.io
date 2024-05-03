import React from 'react';
import { Wrapper, StyledTags } from './TagStyles';

interface TagProps {
  tags: string[];
}

export default function Tags({ tags }: TagProps) {
  return (
    <Wrapper>
      <StyledTags>
        {tags.map((tag, i) => (
          <li key={i}>{tag}</li>
        ))}
      </StyledTags>
    </Wrapper>
  );
}
