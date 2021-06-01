import React, { Component } from "react";
import { AnimatePresence } from "framer-motion";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//Pages
import Home from "./pages/home";
import Model from "./pages/page";
//components
import Header from "./components/header";
//Styles
import "./App.scss";

class App extends Component {
  render() {
    return (
      <Router>
        <Header />
        <Route
          render={({ location }) => (
            <AnimatePresence initial={false} exitBeforeEnter>
              <Switch location={location} key={location.pathname}>
                <Route
                  exact
                  path='/'
                  render={() => <Home />}
                />
                <Route
                  exact
                  path='/page/:id'
                  render={() => <Model />}
                />
              </Switch>
            </AnimatePresence>
          )}
        />
      </Router>
    );
  }
}

export default App;
