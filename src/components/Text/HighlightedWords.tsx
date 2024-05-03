import React from 'react';
import { Highlight } from './HighlightedWordStyles';

interface HighlightProps {
  title: string;
}

const regex = /\*/g;

const HighlightedWords: React.FC<HighlightProps> = ({ title }) => {
  return title.split(' ').map((text, i) => {
    if (text.includes('**')) {
      return (
        <Highlight key={i}>
          <div>{text.replace(regex, '')}</div>
          <div></div>
        </Highlight>
      );
    }
    return <div key={i}>{text}</div>;
  });
};

export default HighlightedWords;
