import React from "react";

import Banner from "./Banner";
import AppNavbar from "./AppNavbar";

import { APP_PATHS } from "../../appConfig";

const links = [
  { text: "About", url: APP_PATHS.About },
  { text: "Privacy Policy", url: APP_PATHS.PrivacyPolicy },
  [{ text: "Facebook Messenger Chatbot", url: APP_PATHS.Blurbs.Messenger }]
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