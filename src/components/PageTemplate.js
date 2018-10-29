import React from "react";
import PropTypes from "prop-types";

import Header from "./sections/Header";
import Footer from "./sections/Footer";

const Page = ({ children }) => (
  <div>
    <Header />
    <div className="app-body">
      {children}
    </div>
    <Footer />
  </div>
);

export default Page;

Page.propTypes = {
  children: PropTypes.element
};