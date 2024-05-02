import React, { useState } from 'react';
import styled from 'styled-components';
import * as CloudIcons from './CloudIcons';

export default function Cloud({ roll, top, pulse, size, offset }) {
  const [clouds, setClouds] = useState([CloudIcons.C3.call(), CloudIcons.C4.call()]);

  function randomizeValue(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  return (
    <SVGContainer roll={roll} top={top} pulse={pulse} size={size} offset={offset}>
      {clouds[randomizeValue(0, clouds.length)]}
    </SVGContainer>
  );
}

export const SVGContainer = styled.div`
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
