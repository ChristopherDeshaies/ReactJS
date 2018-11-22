import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ListeContacts from './Contacts';
import FakeNews from './FakeNews';
import Alerte from "./Alerte";
import Clock from './Clock';

function MultiClock() {
    return (
    <div>
        <Clock ville='Paris' fuseauxHoraire='1' drapeau='fr'/>
        <Clock ville='New York' fuseauxHoraire='-5' drapeau='us' fakenews/>
        <Clock ville='Tokyo' fuseauxHoraire='9' drapeau='jp'/>
        <Clock ville='Moscou' fuseauxHoraire='3' drapeau='ru'/>
    </div>)
}

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
                    <li class="nav-item">
                        <Link class='nav-link' to="/horloge">Horloge</Link>
                    </li>
                </ul>
            </div>
            
            <Route exact path="/" component={ListeContacts} />
            <Route path="/fakenews" component={FakeNews} /> 
            <Route path="/alerte" component={Alerte} /> 
            <Route path="/horloge" component={MultiClock} />  
        </nav>
    </Router>
  );
}

export default MyRoute;