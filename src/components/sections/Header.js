import React from "react";

import Banner from "./Banner";
import NavBar from "./NavBar";

const bannerStyle = {
  height: "200px",
  fontFamily: "\"Courier New\", Courier, monospace",
  textAlign: "center",
  verticalAlign: "middle",
  lineHeight: "normal"
};

const links = [
  { text: "Main", url: "/" },
  { text: "About", url: "/about" },
  { text: "Privacy Policy", url: "/privacy-policy" }
];

const Header = () => (
  <header id="app-header" data-sticky-container>
    <Banner id="app-header-banner" style={bannerStyle}>
      <span>Bailemos Helsinki</span>
    </Banner>
    <NavBar links={links} />
  </header>
);

export default Header;