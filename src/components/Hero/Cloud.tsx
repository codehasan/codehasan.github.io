import React, { useState } from 'react';
import styled from 'styled-components';
import * as CloudIcons from './CloudIcons';

interface CloudProps {
  roll: string;
  top: string;
  pulse: string;
  size: string;
  offset: string;
}

export default function Cloud({ roll, top, pulse, size, offset }: CloudProps) {
  const [clouds] = useState([CloudIcons.C3(), CloudIcons.C4()]);

  function randomizeValue(min: number, max: number) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  return (
    <SVGContainer roll={roll} top={top} pulse={pulse} size={size} offset={offset}>
      {clouds[randomizeValue(0, clouds.length)]}
    </SVGContainer>
  );
}

export const SVGContainer = styled.div<{
  roll: string;
  top: string;
  pulse: string;
  size: string;
  offset: string;
}>`
  position: absolute;

  width: ${(props) => props.size};
  top: ${(props) => props.top};
  overflow: hidden;
  left: ${(props) => props.offset};

  animation: pulse ${(props) => props.pulse} ease-in-out infinite alternate,
    roll ${(props) => props.roll} linear forwards;

  svg {
    color: white;
  }
`;
