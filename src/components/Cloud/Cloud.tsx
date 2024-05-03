import React, { useState } from 'react';
import * as CloudIcons from './CloudIcons';
import { SVGContainer } from './CloudStyles';

interface CloudProps {
  roll: string;
  top: string;
  pulse: string;
  size: string;
  offset: string;
}

const Cloud: React.FC<CloudProps> = ({ roll, top, pulse, size, offset }) => {
  const [clouds] = useState([CloudIcons.C3, CloudIcons.C4]);

  function randomizeValue(min: number, max: number) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  return (
    <SVGContainer $roll={roll} $top={top} $pulse={pulse} $size={size} $offset={offset}>
      {clouds[randomizeValue(0, clouds.length)]}
    </SVGContainer>
  );
};

export default Cloud;
