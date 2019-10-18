import React, { useState, useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logoutUser } from 'actions/auth';
import { useTranslation } from 'react-i18next';
import {
  Nav,
  StyledNavLink,
  NavItem,
  Avatar
} from 'components/navigation/styles';
import SelectLanguage from 'components/selectLanguage/SelectLanguage';
import { ReactComponent as MenuIcon } from 'components/svgs/menu.svg';
import { ReactComponent as HomeIcon } from 'components/svgs/home.svg';
import { ReactComponent as AvatarIcon } from 'components/svgs/avatar.svg';
import { ReactComponent as CloseMenuIcon } from 'components/svgs/close.svg';
import { ReactComponent as AvatarsIcon } from 'components/svgs/avatars.svg';
import { ReactComponent as LogoutIcon } from 'components/svgs/logout.svg';

const Navigation = () => {
  const navRef = useRef();
  const dispatch = useDispatch();
  const user = useSelector(state => state.auth.user);
  const loading = useSelector(state => state.auth.loading);
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  const { t } = useTranslation();

  const [open, setOpen] = useState(false);

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  const authLinks = () => (
    <>
      <NavItem>
        <StyledNavLink to="/dashboard">
          <Avatar src={user.photo} alt={user.name} />
          {user.name}
        </StyledNavLink>
      </NavItem>

      <NavItem>
        <StyledNavLink to="/dashboard" onClick={handleLogout}>
          <LogoutIcon />
          Logout
        </StyledNavLink>
      </NavItem>
    </>
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
        <>
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
          <NavItem>
            <StyledNavLink to="/avatars">
              <AvatarsIcon />
              Avatars
            </StyledNavLink>
          </NavItem>
          {!loading && <>{isAuthenticated && authLinks()}</>}
          <NavItem>
            <SelectLanguage />
          </NavItem>
        </>
      ) : (
        <>
          <NavItem>
            <MenuIcon onClick={() => setOpen(true)} />
          </NavItem>
        </>
      )}
    </Nav>
  );
};

export default Navigation;
