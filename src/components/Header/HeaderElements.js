import { FaBars } from 'react-icons/fa';
import { Link as ScrollLink } from 'react-scroll';
import styled from '@emotion/styled';

export const Nav = styled.nav`
  background: var(--background-color-top);
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 10;
`;

export const NavLink = styled(ScrollLink)`
  color: white;
  display: flex;
  font-size: 1.2rem;
  align-items: center;
  height: 100%;
  cursor: pointer;
  font-weight: var(--fs-bold);
  filter: brightness(0.9);

  &:hover {
    color: var(--color-gray-400);
  }
`;

export const Logo = styled.div`
  img {
    width: 47px;
    height: 47px;
  }
`;

export const Bars = styled(FaBars)`
  display: none;
  color: #fff;
  font-size: 1.8rem;
  cursor: pointer;
  @media screen and (max-width: 768px) {
    display: block;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  .menu-item + .menu-item {
    margin-left: 4rem;
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtn = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;

  a {
    font-size: 1.1rem !important;
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
