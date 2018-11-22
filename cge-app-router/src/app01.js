import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import About from './about';
import Home from './home';
import Contact from './contact';

function MonRoute() {
  return (
    <Router>
      <nav  class="navbar navbar-default">
      <div class="container-fluid">
        <ul class="nav navbar-nav">
          <li class="nav-item">
            <Link class="nav-link" to="/">Home</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/about">About</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/Contact">Contact</Link>
          </li>
        </ul>
        </div>
        <hr />

        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/Contact" component={Contact} />
      </nav>
    </Router>
  );
}

export default MonRoute;