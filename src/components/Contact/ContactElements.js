import styled from '@emotion/styled';

export const ContactWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 2rem;
  margin-bottom: 3rem;

  > form {
    flex: 1;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const EmailSection = styled.div`
  margin-right: 2rem;

  > img {
    max-width: 200px;
    width: 100%;
    height: auto;
    margin: auto;
  }

  > span {
    display: block;
    width: fit-content;
    font-size: 1.5rem;
    font-weight: var(--fs-bold);
    margin-bottom: 1rem;

    p {
      width: 30%;
      height: 3px;
      border-radius: var(--br-normal);
      background-color: var(--primary-color);
    }
  }

  .info-section {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 1rem;

    svg {
      width: 2rem;
      height: 2rem;
    }
  }

  .info-content {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    gap: 0.5rem;

    > span:first-of-type {
      font-size: 1.1rem;
      font-weight: var(--fs-bold);
    }

    > span:last-of-type {
      font-size: 1rem;
      font-weight: var(--fs-regular);
    }
  }
`;

export const Header = styled.h1`
  margin-bottom: 2rem;
`;

export const Form = styled.form`
  width: 100%;

  input,
  textarea {
    display: block;
    width: 100%;
    background: #f3f3f3;
    border: 2px solid #f3f3f3;
    border-radius: var(--br-normal);
    padding: 0.9rem 1rem;
    margin-bottom: 1rem;

    font-family: var(--ff-text);
    font-size: 1rem;
    font-weight: var(--fs-regular);

    transition-property: background, border;
    transition-duration: 0.2s;
    transition-timing-function: ease-in-out;

    &::placeholder {
      color: #6c757d;
      opacity: 1;
    }

    &:active,
    &:focus {
      outline: none;
      box-shadow: none;
      border-color: var(--secondary-color);
      background: var(--background-color-bottom);
    }
  }

  textarea {
    font-family: inherit;
    min-height: 10rem;
  }

  .form-buttons {
    display: flex;
    gap: 1rem;

    * {
      flex: 1;
      margin: 0;
    }
  }
`;
