import React from "react";
import PropTypes from "prop-types"

import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

const AppNavbar = ({ links }) => (
  <Navbar color="light" light>
    <NavbarBrand href="/">BailemosHelsinki</NavbarBrand>
    <Nav>
      {links && links.map(({ text, url }) => <NavItem>
        <NavLink href={url}>{text}</NavLink>
      </NavItem>)}
    </Nav>
  </Navbar>
);

export default AppNavbar;

AppNavbar.propTypes = {
  links: PropTypes.array
};