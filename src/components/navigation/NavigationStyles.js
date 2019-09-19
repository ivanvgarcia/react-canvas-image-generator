import styled from 'styled-components';

export const Nav = styled.ul`
  position: fixed;
  padding-left: 10px;
  top: 10px;
  right: 0;
  background: rgb(219, 71, 107);
  box-shadow: 0 2px 3px #000;
  display: flex;
  z-index: 999999;
  border-top-left-radius: 30px;
  border-bottom-left-radius: 30px;
`;

export const NavItem = styled.li`
  list-style: none;
  text-decoration: none;
  padding 20px;
  @media (max-width: 850px) {
    padding 5px;
  }

  a {
    color: white;
    text-decoration: none;
    font-weight: bold;
    transition: opacity 0.2s linear;
    padding: 20px 0;
    @media (max-width: 850px) {
      padding 5px;
    }
    @media (max-width: 320px) {
      font-size: .8rem;
    }
  }
  a:hover {
    opacity: 0.8;
  }
`;
