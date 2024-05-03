import styled from 'styled-components';

const ButtonBase = styled.button`
  border-radius: var(--br-normal);
  cursor: pointer;
  font-family: var(--ff-button);
  font-weight: 500;
  font-size: 1rem;
  outline: none;
  box-shadow: none;
  transition: all 0.2s ease-in-out;

  &:hover {
    box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.2);
  }
`;

export const PrimaryButton = styled(ButtonBase)`
  padding: 12px 20px;
  border: none;
  color: white;
  background: var(--primary-color);

  &:hover {
    background: var(--secondary-color);
  }
`;

export const SecondaryButton = styled(ButtonBase)`
  padding: 10px 18px;
  border: 2px solid var(--primary-color);
  color: var(--background-color-top);
  background: var(--background-color-bottom);

  &:hover {
    border-color: var(--secondary-color);
  }
`;
