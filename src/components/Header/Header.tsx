import React, { useState } from 'react';
import Dropdown from '../Dropdown/Dropdown';
import { Nav, Logo, NavLink, Bars, NavMenu, NavBtn } from './HeaderStyles';
import { Button } from '../Button/Button';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <div className="Container" style={{ padding: 0 }}>
        <Nav>
          <Logo to="/">
            <a href="/">
              <img src="/blocks.png" alt="logo" />
            </a>
          </Logo>
          <NavMenu>
            <NavLink className="menu-item" to="projects">
              Projects
            </NavLink>
            <NavLink className="menu-item" to="about">
              About
            </NavLink>
            <NavLink className="menu-item" to="contact">
              Contact
            </NavLink>
          </NavMenu>
          <NavBtn>
            <a href="https://linkedin.com/in/codehasan" target="_blank" rel="noopener noreferrer">
              <Button primary>Resume</Button>
            </a>
          </NavBtn>
          <Bars onClick={toggle} />
        </Nav>
      </div>
    </>
  );
};

export default Header;
