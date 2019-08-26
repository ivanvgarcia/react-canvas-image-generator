import styled from 'styled-components';

export const Nav = styled.ul`
  position: fixed;
  top: 10px;
  right: 10px;
  padding: 0;
  display: flex;
`;

export const NavItem = styled.li`
  list-style: none;
  text-decoration: none;
  a {
    color: white;
    margin: 0 10px;
    text-decoration: none;
    font-weight: bold;
    transition: opacity 0.2s linear;
  }
  a:hover {
    opacity: 0.8;
  }
`;
