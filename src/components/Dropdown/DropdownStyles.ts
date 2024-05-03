import { FaTimes } from 'react-icons/fa';
import { Link as ScrollLink } from 'react-scroll';
import styled from '@emotion/styled';

export const SiderBar = styled.div<{ isOpen: boolean }>`
  background: #151418;
  position: fixed;
  height: 100%;
  width: 100%;
  left: 0;
  z-index: 999;
  transition: 0.3s ease-in-out;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
  top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
`;

export const CloseIcon = styled(FaTimes)`
  font-size: 2rem;
  color: #fff;
  position: absolute;
  right: 2rem;
  top: 2rem;
  cursor: pointer;
`;
export const NavMenu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .menu-item + .menu-item {
    margin-top: 2rem;
  }
`;

export const NavLink = styled(ScrollLink)`
  color: #fff;
  cursor: pointer;
  font-size: 1.7rem;
  font-weight: var(--fs-bold);

  &:hover {
    color: var(--color-gray-400);
  }
`;

export const NavBtn = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 5rem;

  a {
    font-size: 1.4rem !important;
  }
`;
