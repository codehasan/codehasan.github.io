import React, { useMemo } from 'react';
import Cloud from './Cloud';
import styled from '@emotion/styled';

const CloudContainer = styled.div`
  width: 100%;
  overflow-x: clip;
  opacity: 0.4;
  position: absolute;
  top: 0;
  left: 0;
`;

interface MakeCloudProps {
  cloudCount: number;
}

const MakeClouds: React.FC<MakeCloudProps> = ({ cloudCount }) => {
  const randomizeValue = (min: number, max: number) => {
    return Math.random() * (max - min) + min;
  };

  const cloudsArray = useMemo(() => {
    return Array.from({ length: cloudCount }, (_, i) => i).map((i) => {
      return (
        <Cloud
          key={`cloud-${i}`}
          roll={`${randomizeValue(120, 300)}s`}
          top={`${randomizeValue(12, 90)}vh`}
          pulse={`${randomizeValue(7, 12)}s`}
          size={`${randomizeValue(0.5, 7)}rem`}
          offset={`${randomizeValue(-10, 90)}vw`}
        />
      );
    });
  }, [cloudCount]);

  return <CloudContainer>{cloudsArray}</CloudContainer>;
};

export default MakeClouds;
