import React from 'react';
import { NavLink } from 'react-router-dom';
import { Nav, NavItem } from 'components/navigation/NavigationStyles';

const Navigation = () => {
  return (
    <Nav>
      <NavItem>
        <NavLink to="/">Home</NavLink>
      </NavItem>
      <NavItem>
        <NavLink to="/avatar-generator">Generator</NavLink>
      </NavItem>
    </Nav>
  );
};

export default Navigation;
