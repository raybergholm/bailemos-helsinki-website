import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import MainPage from "./components/pages/MainPage";
import AboutPage from "./components/pages/AboutPage";
import PrivacyPolicyPage from "./components/pages/PrivacyPolicyPage";

import MessengerBlurbPage from "./components/pages/MessengerBlurbPage";

import { APP_PATHS } from "./appConfig";

const AppRouter = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path={APP_PATHS.Root} component={MainPage} />
      <Route exact path={APP_PATHS.About} component={AboutPage} />
      <Route path={APP_PATHS.PrivacyPolicy} component={PrivacyPolicyPage} />
      <Route path={APP_PATHS.Plugins.Messenger} component={MessengerBlurbPage} />
      <Redirect path="*" to={APP_PATHS.Root} />
    </Switch>
  </BrowserRouter>
);

export default AppRouter;