import React from 'react';
import { SiderBar, CloseIcon, NavMenu, NavLink, NavBtn } from './DropdownStyles';

interface DropdownProps {
  isOpen: boolean;
  toggle: () => void;
}

const Dropdown: React.FC<DropdownProps> = ({ isOpen, toggle }) => {
  return (
    <SiderBar isOpen={isOpen} onClick={toggle}>
      <CloseIcon onClick={toggle} />
      <NavMenu>
        <NavLink onClick={toggle} className="menu-item" to="projects">
          Projects
        </NavLink>
        <NavLink onClick={toggle} className="menu-item" to="about">
          About
        </NavLink>
        <NavLink onClick={toggle} className="menu-item" to="contact">
          Contact
        </NavLink>
      </NavMenu>
      <NavBtn onClick={toggle}>
        <a
          className="btn btn-primary"
          href="https://linkedin.com/in/pedro-sales-muniz"
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume
        </a>
      </NavBtn>
    </SiderBar>
  );
};

export default Dropdown;
