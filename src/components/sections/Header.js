import React from "react";

import Banner from "./Banner";
import AppNavbar from "./AppNavbar";

import { NAVBAR_CONFIG } from "../../appConfig";

const Header = () => (
  <header id="app-header" data-sticky-container>
    <div className="app-header-banner">
      <Banner id="app-header-banner">
        <span>Bailemos Helsinki</span>
      </Banner>
    </div>
    <AppNavbar items={NAVBAR_CONFIG} />
  </header>
);

export default Header;