import React from 'react';
import { Highlight } from './HighlightedWordStyles';

interface HighlightProps {
  title: string;
}

function HighlightedWords({ title }: HighlightProps) {
  return title.split(' ').map((text, i) => {
    if (text.includes('**')) {
      return (
        <Highlight key={i}>
          <div>{text.replace('**', '')}</div>
          <div></div>
        </Highlight>
      );
    }
    return <span key={i}>{text}</span>;
  });
}

export default HighlightedWords;
