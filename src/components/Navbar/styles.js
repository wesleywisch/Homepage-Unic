import styled, { css } from "styled-components/macro";
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';

export const Nav = styled.nav`
  height: 4rem;
  background: red;
  display: flex;
  justify-content: space-between;
  padding: 1rem 2rem;
  z-index: 9;
  position: fixed;
  width: 100%;
`;

export const NavLink = css`
  color: var(--white);
  display: flex;
  align-items: center;
  padding: 0 1rem;
  height: 100%;
`;

export const Logo = styled(Link)`
  ${NavLink};
  font-style: italic;
`;

export const MenuBars = styled(FaBars)`
  display: none;

  @media screen and (max-width: 768px){
    display: block;
    height: 30px;
    width: 30px;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -48px;

  @media screen and (max-width: 768px){
    display: none;
  }
`;

export const NavMenuLinks = styled(Link)`
  ${NavLink}
`;

export const NavBtn = styled.div`
  display: flex;
  align-items: center;
  margin-right: 1.5rem;

  @media screen and (max-width: 768px){
    display: none;
  }
`;

export const Button = styled(Link)`
  background: ${({ primary }) => ( primary ? '#000d1a' : 'cd853f' )};
  white-space: nowrap;
  outline: none;
  border: none;
  min-width: 6.25rem;
  max-width: 12.5rem;
  transition: 0.3s;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${({ big }) => ( big ? '1rem 2.5rem' : '0.875rem 1.5rem' )};
  color: ${({ primary }) => ( primary ? '#fff' : '#000d1a' )};
  font-size: ${({ big }) => ( big ? '1.25rem' : '0.875rem' )};

  &:hover{
    transform: translateY(-2px);
  }
`;