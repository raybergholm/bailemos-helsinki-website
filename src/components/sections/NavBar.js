import React from "react";
import PropTypes from "prop-types"

import { Nav, NavItem, NavLink } from 'reactstrap';

const NavBar = ({ links }) => (
  <Nav>
    {links && links.map(({ text, url }) => <NavItem>
      <NavLink href={url}>{text}</NavLink>
    </NavItem>)}
  </Nav>
);

export default NavBar;

NavBar.propTypes = {
  links: PropTypes.array
};