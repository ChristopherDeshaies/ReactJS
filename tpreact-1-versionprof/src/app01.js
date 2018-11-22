import React from "react";
//npm install react-router-dom
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ListeContacts from './composant/ListeContacts';

function Home(props) {
  
    return <h1>HOME </h1>
  
}

function About(props) {
  
  return <h1>About ... </h1>

}


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
            <Link class="nav-link" to="/Contact">Mes Contacts</Link>
          </li>
        </ul>
        </div>
        <hr />

        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/Contact" component={ListeContacts} />
      </nav>
    </Router>
  );
}

export default MonRoute;