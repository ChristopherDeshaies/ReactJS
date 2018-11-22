import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Clock from './Clock';
import * as serviceWorker from './serviceWorker';


function MultiClock() {
    return (
    <div>
        <Clock ville='Paris' fuseauxHoraire='1' drapeau='fr'/>
        <Clock ville='New York' fuseauxHoraire='-5' drapeau='us' fakenews/>
        <Clock ville='Tokyo' fuseauxHoraire='9' drapeau='jp'/>
        <Clock ville='Moscou' fuseauxHoraire='3' drapeau='ru'/>
    </div>)
}

ReactDOM.render(<MultiClock />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
