import styled from 'styled-components';

export const HeroContainer = styled.div`
  min-height: 75vh;
  background: var(--background-color-top);
`;

export const HeroWrapper = styled.div`
  padding: 0 clamp(1rem, 7vw, 200px);
`;

export const HeroSection = styled.section`
  max-width: 1100px;
  margin: auto;
  margin-bottom: 3rem;
  color: #ffff;
  padding: 1.2rem 2rem 1.2rem;
`;

export const HeroText = styled.div`
  min-height: 65vh;
  text-align: left;

  h1 {
    margin-top: 25vh;
    font-size: 2.5rem !important;
    color: #f6f6f6;
    font-weight: var(--fs-regular);
    max-width: 60rem;
    margin-bottom: 2rem;
  }

  p {
    font-size: 1.25rem !important;
    max-width: 30rem;
    margin-top: 2rem;
    font-weight: var(--fs-thin);
    color: #f6f6f6;
  }

  @media only screen and (min-width: 768px) {
    h1 {
      font-size: 4rem !important;
    }
  }
`;

export const Image = styled.img`
  height: 300px;
  width: auto;
`;
