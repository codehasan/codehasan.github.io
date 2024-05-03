import styled, { css } from 'styled-components';

const SkeletonAnimation = css`
  animation: skeleton-loading 1s linear infinite alternate;

  @keyframes skeleton-loading {
    0% {
      background-color: hsl(200, 20%, 80%);
    }
    100% {
      background-color: hsl(200, 20%, 95%);
    }
  }
`;

export const Image = styled.img<{ loading: 'lazy'; decoding: 'async' }>`
  ${SkeletonAnimation}
`;
