import styled from 'styled-components';
import LazyImage from '../Image/LazyImage';

export const sizing = {
  paddingExterior: {
    base: '1.2rem 2rem 1.2rem',
    tablet: '3.2rem 3rem 3.2rem',
    desktop: '3.2rem 0 3.2rem',
  },
};

export const Section = styled.section`
  max-width: 1100px;
  margin: auto;
  background: var(--background-color-bottom);
  color: var(--background-color-top);

  padding: 1.2rem 2rem;

  .marquee {
    min-height: 65vh;
    h1 {
      margin-top: 25vh;
    }
    #spinner {
      position: absolute;
      top: 33%;
      left: 33%;
      margin: 0;
      z-index: 100;
      opacity: 0.5;
    }
  }

  #contactBox {
    position: relative;
    max-width: 700px;
    margin: auto;
    padding: auto 2rem;
  }
`;

export const Bio = styled.div`
  #bioContainer {
    grid-template-areas:
      'header '
      'image'
      'text';
    display: grid;
    h1 {
      grid-area: header;
      margin-bottom: 2rem;
    }
  }
  #bioText {
    grid-area: text;

    margin: auto;
  }
  #bioImage {
    padding: 0;
  }
  @media only screen and (min-width: 768px) {
    #bioContainer {
      align-items: center;
      grid-template-areas:
        'header header'
        'image text';
      grid-template-columns: 1fr 2fr;
    }
    #bioImage {
      padding: 0rem 2rem 2rem 0;
    }
  }
  @media only screen and (min-width: 1024px) {
    #bioImage {
      padding: 2rem 2rem 2rem 0;
    }
  }
`;

export const ImageFull = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 3rem 2rem;
  padding: 0;

  img {
    grid-area: image;
  }

  @media only screen and (min-width: 768px) {
    margin: 0;
    padding: 0 2rem 2rem 0;
  }
`;

export const Img = styled(LazyImage)`
  display: block;
  border-radius: 20px;
  grid-area: image;
  margin: auto;
  width: 100%;
  height: 100%;
  max-width: 100%;
  aspect-ratio: 1 / 1.22;
  object-fit: cover;
  object-position: center;
  border: 1px solid white;
`;

export const FeatureContainer = styled.div`
  h3 {
    margin-bottom: 1rem !important;
    white-space: pre;
  }
`;
