import styled from 'styled-components';

export const Highlight = styled.span`
  position: relative;
  width: fit-content;
  z-index: 100;
  margin-right: 1rem;

  > div:last-of-type {
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

  &:hover > div:last-of-type {
    animation: sw 0.4s ease-in-out;
  }
`;
