import React from "react";

import Banner from "./Banner";
import AppNavbar from "./AppNavbar";

const links = [
  { text: "About", url: "/about" },
  { text: "Privacy Policy", url: "/privacy-policy" }
];

const Header = () => (
  <header id="app-header" data-sticky-container>
    <div className="app-header-banner">
      <Banner id="app-header-banner">
        <span>Bailemos Helsinki</span>
      </Banner>
    </div>
    <AppNavbar links={links} />
  </header>
);

export default Header;