import React, { Component } from "react";
import { Router, Location } from "@reach/router";
import posed, { PoseGroup } from "react-pose";
import Home from "./views/Home";
import About from "./views/About";
import Projects from "./views/Projects";
import Contact from "./views/Contact";

const RouteContainer = posed.div({
  enter: {
    opacity: 1,
    transition: {
      duration: 100
    }
  },
  exit: { opacity: 0 }
});

const PosedRouter = ({ children }) => (
  <Location>
    {({ location }) => (
      <PoseGroup>
        <RouteContainer key={location.key}>
          <Router location={location}>{children}</Router>
        </RouteContainer>
      </PoseGroup>
    )}
  </Location>
);

class App extends Component {
  render() {
    return (
      <>
        <Home />
        <PosedRouter>
          <About path="/about" />
          <Projects path="/projects" />
          <Contact path="/contact" />
        </PosedRouter>
      </>
    );
  }
}

export default App;
