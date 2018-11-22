import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

/**
 * On fait le lien entre l'id de la page index.html et notre composant ReactJS crée : App
 * Utiliser par une balise ouvrante et autofermante
 * <App />
 * <App name="Germain Christophe"/>
 * name est une propriété (dont le nom est personnalisé)
 * name n'est pas un mot réservé
 */
ReactDOM.render(<App name="Je suis le meilleur" count="3" hauteur="10"/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
