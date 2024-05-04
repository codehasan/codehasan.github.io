import React from 'react';
import { SiderBar, CloseIcon, NavMenu, NavLink, NavBtn } from './DropdownStyles';
import { Button } from '../Button/Button';
import { socialLinks } from '../../data/SocialLinks';

interface DropdownProps {
  isOpen: boolean;
  toggle: () => void;
}

const Dropdown: React.FC<DropdownProps> = ({ isOpen, toggle }) => {
  return (
    <SiderBar $open={isOpen ? 'open' : null} onClick={toggle}>
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
        <a href={socialLinks.resume} target="_blank" rel="noopener noreferrer">
          <Button primary>Resume</Button>
        </a>
      </NavBtn>
    </SiderBar>
  );
};

export default Dropdown;
