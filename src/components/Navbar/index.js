import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink
} from './NavbarElements';

const Navbar = () => {
  return (
    <>
      <Nav>
        <Bars />

        <NavMenu>
          <NavLink to='/' activeStyle>
            Home
          </NavLink>
          <NavLink to='/Resume' activeStyle>
            Resume
          </NavLink>
          <NavLink to='/Projects' activeStyle>
            Projects
          </NavLink>
          <NavLink to='/Hobbies' activeStyle>
            Hobbies
          </NavLink>
          <NavLink to='/About' activeStyle>
            About
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  )
}

export default Navbar;
