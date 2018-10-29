import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import MainPage from "./components/pages/MainPage";
import AboutPage from "./components/pages/AboutPage";
import PrivacyPolicyPage from "./components/pages/PrivacyPolicyPage";

const AppRouter = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={MainPage} />
      <Route exact path="/about" component={AboutPage} />
      <Route path="/privacy-policy" component={PrivacyPolicyPage} />
      <Redirect path="*" to="/" />
    </Switch>
  </BrowserRouter>
);

export default AppRouter;