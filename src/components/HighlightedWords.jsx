import React from 'react';
import styled from 'styled-components';

const Highlight = styled.div`
  position: relative;
  width: fit-content;
  z-index: 100;
  display: inline-block;
  margin-right: 1rem;

  > div:nth-child(2) {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 40%;
    transition: width 0.4s ease-in-out;
    transform: translateX(0.25rem);
    background: var(--primary-color);
    z-index: -100;
  }

  @keyframes sw {
    from {
      width: 100%;
    }

    50% {
      width: 33%;
    }

    to {
      width: 100%;
    }
  }

  &:hover > div:nth-child(2) {
    animation: sw 0.4s ease-in-out;
  }
`;

export function HighlightedWords({ title }) {
  return title.split(' ').map((text, i) => {
    if (text.includes('**')) {
      const reg = /\*/g;

      return (
        <Highlight key={`highlightwords-${i}`}>
          <div>{text.replace(reg, '')}</div>
          <div></div>
        </Highlight>
      );
    }
    return <div key={`highlightwords-${i}`}>{text}</div>;
  });
}
