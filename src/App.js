import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


import Home from "./pages/Home";
import NoMatch from "./pages/NoMatch";
import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";



const pages = ["home", "prices", "charts", "favorites", "mobile"];

function App() {
  return (
      <Router>
        <div>
            <Navbar pages={pages} />
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>



              <Route component={NoMatch} />
            </Switch>
        </div>
      </Router>
  );
}

export default App;


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
