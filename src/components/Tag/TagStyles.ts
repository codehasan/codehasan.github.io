import styled from 'styled-components';

export const Tags = styled.ul`
  display: flex;
  justify-content: flex-start;
  grid-area: tags;
  flex-wrap: wrap;
  white-space: nowrap;

  li {
    list-style: none;
    background: var(--background-color-top);
    color: white;
    padding: 0.25rem 0.7rem;
    margin: 0 0.25rem 1rem 0;
    font-size: 0.8rem;
    font-weight: var(--fs-bold);
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media only screen and (min-width: 768px) {
    padding-right: 4rem;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 2rem;

  > div {
    padding: 0 1rem 0 0;
  }
`;

export const StyledTags = styled(Tags)`
  width: 100%;
  justify-content: center !important;

  @media only screen and (min-width: 768px) {
    padding-right: 0;
    max-width: 100%;
    width: 100%;
    justify-content: flex-start !important;
  }

  @media only screen and (min-width: 1024px) {
    max-width: 100%;
  }

  li {
    position: relative;
    font-size: 1rem;
  }
`;
