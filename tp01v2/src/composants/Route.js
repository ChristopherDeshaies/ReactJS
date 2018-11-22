import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ListeContacts from './Contacts';
import FakeNews from './FakeNews';
import Alerte from "./Alerte";

function MyRoute() {
  return (
    <Router>
        <nav class=''>
            <div class="navbar navbar-expand-lg navbar-dark bg-dark">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <Link class='nav-link' to="/">Contacts</Link>
                    </li>
                    <li class="nav-item">
                        <Link class='nav-link' to="/fakenews">FakeNews</Link>
                    </li>
                    <li class="nav-item">
                        <Link class='nav-link' to="/alerte">Alerte</Link>
                    </li>
                </ul>
            </div>
            
            <Route exact path="/" component={ListeContacts} class='col-12'/>
            <Route path="/fakenews" component={FakeNews} /> 
            <Route path="/alerte" component={Alerte} />  
        </nav>
    </Router>
  );
}

export default MyRoute;