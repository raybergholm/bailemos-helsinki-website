import React from "react";
import PropTypes from "prop-types"

import { Navbar, NavbarBrand, Nav, NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

import { APP_PATHS } from "../../appConfig";


const generateSimpleLink = ({ text, url }) => (
  <NavItem>
    <NavLink href={url}>{text}</NavLink>
  </NavItem>
);

const generateDropdown = ({ text, items }) => (
  <UncontrolledDropdown nav inNavbar>
    <DropdownToggle nav caret>
      {text}
    </DropdownToggle>
    <DropdownMenu right>
      {items.map((entry) => (
        <DropdownItem>
          {generateSimpleLink(entry)}
        </DropdownItem>
      ))}
    </DropdownMenu>
  </UncontrolledDropdown>
);

const AppNavbar = ({ items }) => (
  <Navbar color="light" light>
    <NavbarBrand href={APP_PATHS.Root}>BailemosHelsinki</NavbarBrand>
    <Nav>
      {items && items.map(({ type, ...entry }) => {
        switch (type) {
          case "link":
            return generateSimpleLink(entry);
          case "dropdown":
            return generateDropdown(entry);
          default:
            return null;
        }
      })}
    </Nav>
  </Navbar>
);

export default AppNavbar;

AppNavbar.propTypes = {
  links: PropTypes.array
};