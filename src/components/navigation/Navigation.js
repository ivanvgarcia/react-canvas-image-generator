import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { Nav, NavItem, Avatar } from 'components/navigation/NavigationStyles';
import SelectLanguage from 'components/selectLanguage/SelectLanguage';

const Navigation = () => {
  const user = useSelector(state => state.auth.user);
  const loading = useSelector(state => state.auth.loading);
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  const { t } = useTranslation();

  const [open, setOpen] = useState(false);

  const authLinks = () => (
    <NavItem>
      <NavLink to="/avatar-generator">
        <Avatar src={user.profile_image_url_https} alt={user.name} />
      </NavLink>
      <p>{user.name}</p>
    </NavItem>
  );

  return (
    <Nav>
      {open ? (
        <>
          <NavItem>
            <p onClick={() => setOpen(false)}>Close</p>
          </NavItem>
          <NavItem>
            <NavLink to="/">{t('nav.home')}</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/avatar-generator">{t('nav.generator')}</NavLink>
          </NavItem>
          {!loading && <>{isAuthenticated && authLinks()}</>}
          <NavItem>
            <SelectLanguage />
          </NavItem>
        </>
      ) : (
        <NavItem>
          <p onClick={() => setOpen(true)}>Open</p>
        </NavItem>
      )}
    </Nav>
  );
};

export default Navigation;
