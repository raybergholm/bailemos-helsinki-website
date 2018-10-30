import React from "react";
import PropTypes from "prop-types"

import { Navbar, NavbarBrand, Nav, NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

import { APP_PATHS } from "../../appConfig";


const generateSimpleLink = ({ text, url }) => (
  <NavItem>
    <NavLink href={url}>{text}</NavLink>
  </NavItem>
);

const generateDropdown = (entries) => (
  <UncontrolledDropdown nav inNavbar>
    <DropdownToggle nav caret>
      Blurbs
    </DropdownToggle>
    <DropdownMenu right>
      {entries.map((entry) => (
        <DropdownItem>
          {generateSimpleLink(entry)}
        </DropdownItem>
      ))}
    </DropdownMenu>
  </UncontrolledDropdown>
);

const AppNavbar = ({ links }) => (
  <Navbar color="light" light>
    <NavbarBrand href={APP_PATHS.Root}>BailemosHelsinki</NavbarBrand>
    <Nav>
      {links && links.map((entry) => {
        return entry instanceof Array ? generateDropdown(entry) : generateSimpleLink(entry)
      })}
    </Nav>
  </Navbar>
);

export default AppNavbar;

AppNavbar.propTypes = {
  links: PropTypes.array
};