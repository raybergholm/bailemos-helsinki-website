import React from "react";
import PropTypes from "prop-types";

import Header from "./sections/Header";
import Footer from "./sections/Footer";

const Page = ({ children }) => (
  <div>
    <Header />
    <main className="app-body">
      {children}
    </main>
    <Footer />
  </div>
);

export default Page;

Page.propTypes = {
  children: PropTypes.element
};