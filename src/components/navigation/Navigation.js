import React from 'react';
import { NavLink } from 'react-router-dom';
import { Nav, NavItem, Avatar } from 'components/navigation/NavigationStyles';
import { useSelector } from 'react-redux';

const Navigation = () => {
  const user = useSelector(state => state.auth.user);
  const loading = useSelector(state => state.auth.loading);

  return (
    !loading && (
      <Nav>
        <NavItem>
          <NavLink to="/">Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/avatar-generator">Generator</NavLink>
        </NavItem>
        {!loading && user && (
          <NavItem>
            <NavLink to="/avatar-generator">
              <Avatar src={user.profile_image_url_https} alt={user.name} />
            </NavLink>
            <p>{user.name}</p>
          </NavItem>
        )}
      </Nav>
    )
  );
};

export default Navigation;
