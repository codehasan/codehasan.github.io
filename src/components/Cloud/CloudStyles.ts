import styled from 'styled-components';

export const SVGContainer = styled.div<{
  $roll: string;
  $top: string;
  $pulse: string;
  $size: string;
  $offset: string;
}>`
  position: absolute;

  width: ${(props) => props.$size};
  top: ${(props) => props.$top};
  overflow: hidden;
  left: ${(props) => props.$offset};

  animation: pulse ${(props) => props.$pulse} ease-in-out infinite alternate,
    roll ${(props) => props.$roll} linear forwards;

  svg {
    color: white;
  }
`;
