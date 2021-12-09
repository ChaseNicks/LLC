import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bulma/css/bulma.css";


import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NoMatch from "./pages/NoMatch";
import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";


function App() {
  return (
      <Router>
        <div>
            <Navbar />
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>

              <Route exact path="/home">
                <Home />
              </Route>

              <Route exact path="/services">
                <Services />
              </Route>

              <Route exact path="/about">
                <About />
              </Route>

              <Route exact path="/contact">
                <Contact />
              </Route>

              <Route component={NoMatch} />
            </Switch>
        </div>
      </Router>
  );
}

export default App;
