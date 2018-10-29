import React, { Component } from 'react';
import './App.css';

import AppRouter from "./AppRouter";

import PageTemplate from "./components/PageTemplate";

class App extends Component {
  render() {
    return (
      <div className="app">
        <PageTemplate>
          <AppRouter />
        </PageTemplate>
      </div>
    );
  }
}

export default App;
