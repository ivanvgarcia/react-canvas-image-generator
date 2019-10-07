import React, { useState, useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import {
  Nav,
  StyledNavLink,
  NavItem,
  Avatar
} from 'components/navigation/NavigationStyles';
import SelectLanguage from 'components/selectLanguage/SelectLanguage';
import { ReactComponent as MenuIcon } from 'components/svgs/menu.svg';
import { ReactComponent as HomeIcon } from 'components/svgs/home.svg';
import { ReactComponent as AvatarIcon } from 'components/svgs/avatar.svg';
import { ReactComponent as CloseMenuIcon } from 'components/svgs/close.svg';

const Navigation = () => {
  const navRef = useRef();
  const user = useSelector(state => state.auth.user);
  const loading = useSelector(state => state.auth.loading);
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  const { t } = useTranslation();

  const [open, setOpen] = useState(false);

  const authLinks = () => (
    <NavItem>
      <StyledNavLink to="/dashboard">
        <Avatar src={user.profile_image_url_https} alt={user.name} />
        {user.name}
      </StyledNavLink>
    </NavItem>
  );

  const handleClickOutside = event => {
    if (!navRef.current.contains(event.target)) {
      setOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <Nav ref={navRef}>
      {open ? (
        <div>
          <NavItem>
            <CloseMenuIcon onClick={() => setOpen(false)} />
          </NavItem>
          <NavItem>
            <StyledNavLink to="/">
              <HomeIcon />
              {t('nav.home')}
            </StyledNavLink>
          </NavItem>
          <NavItem>
            <StyledNavLink to="/avatar-generator">
              <AvatarIcon />
              {t('nav.generator')}
            </StyledNavLink>
          </NavItem>
          {!loading && <>{isAuthenticated && authLinks()}</>}
          <NavItem>
            <SelectLanguage />
          </NavItem>
        </div>
      ) : (
        <div>
        <NavItem>
          <MenuIcon onClick={() => setOpen(true)} />
        </NavItem>
        </div>
      )}
    </Nav>
  );
};

export default Navigation;
