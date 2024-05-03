import styled from 'styled-components';

export const SocialIconSection = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 2rem;
  column-gap: 1rem;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  filter: opacity(0.8);
  color: var(--primary-color);

  a:hover {
    color: var(--color-gray-400) !important;
  }
`;

export const Tooltip = styled.div`
  position: relative;
  display: inline-block;

  &:hover a::before {
    opacity: 1;
    transition: opacity 0.2s ease-in-out;
  }

  a::before {
    content: '${(props) => props.content}';
    font-size: 1rem;
    font-weight: var(--fs-regular);
    transform: translateX(-50%);
    background-color: #333;
    color: #fff;
    padding: 5px 10px;
    border-radius: var(--br-normal);
    position: absolute;
    top: 120%;
    left: 50%;
    opacity: 0;
    z-index: 1;
    transition: opacity 0.2s ease-in-out;
  }
`;
