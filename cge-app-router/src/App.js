import React, { Component } from 'react';

import logo from './logo.svg';
import './App.css';


class App extends Component {
  resultat =""; //Variable Globale de la classe
  gcount =0;
  prenom ="";
  nom = "";
  message = [];
  afficheResult ;
 /**
  * 
  * @param {*} props propriété à récupérer pour tout initialiser
  * dans le constructeur.
  */
  constructor (props) {
    super(props);
    this.state = {
      value: false
    };

    /**Gestion des événements */
    // this.onChange = this.onChange.bind(this);
    this.handleChangeN = this.handleChangeN.bind(this);
    this.handleChangeP = this.handleChangeP.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    if(this.props.count !== undefined)
      this.gcount = this.props.count;
    else
      this.gcount = 0;
      this.message.push("test");
      this.afficheResult = this.getMessage();
  }

  /**
   * 
   * @param {*} event 
   */
  /**
  onChange (event) {
    this.setState({
      value: event.target.value
    })
  }
  */
/**
 * 
 * @param {*} event 
 */
  handleChangeN(event) {
    
    console.log(event.target.value);
    if(event.target.value !== '')    {
      this.nom = event.target.value;
      this.message.push(event.target.value);
      this.afficheResult = this.getMessage();
      this.setState({value: true});
      
    }
  }
  handleChangeP(event) {
    if(event.target.value !== '')    {
     this.prenom = event.target.value;
     this.message.push(event.target.value);
     this.afficheResult = this.getMessage();
     this.setState({value: true});
    }
  }
/**
 * 
 * @param {*} event 
 */
  handleSubmit(event) {
  
    if(this.state.value === true)  
    {
      event.preventDefault();
    }
    else
      event.preventDefault(false);
    this.afficheResult = this.getMessage();
  }
 
  getMessage() { 
    return this.message.map((element)=><p>{element}</p>)}

  boucle01() { //Méthode de la classe
    let index = 0;
    let tab = ['un', 'deux', 'trois'];

    while (tab[index]) {
    console.log('index:', index, 'valeur:', tab[index]);
    this.resultat += `Index : ${index} Valeur: ${tab[index]} \n`;
    index++;
    }
  }
  //Fin de méthode

  boucle02() {
    let tab = ['un', 'deux', 'trois'];

    for (let index = 0; tab[index]; index++) {
    console.log('index:', index, 'valeur:', tab[index]);
    }
  //Retourne pour le render
   if(this.gcount>tab.length) this.gcount = tab.length;
   return tab[this.gcount-1];
  
 }
boucle03() {
    let tab = ['un', 'deux', 'trois'];
    return tab.map((element)=>
      <li>{element}</li>
    )
}
boucle04()  {
    let tabs = ['un', 'deux', 'trois'];
   return tabs;
}
  render() {
    
    return (
      <div className="App">
       
        <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input id="lastname" type="text" 
          value={this.nom} 
          onChange={this.handleChangeN} />
        </label>
        <label>
          Prénom:
          <input id="firstname" type="text" 
          value={this.prenom} 
          onChange={this.handleChangeP} />
        </label>
        <input type="submit" value="Submit" />
        <label>{this.prenom}</label>
      </form>
      {this.afficheResult}
      </div>
   
    );
  }
}

/**
 * <h1>{this.props.name}</h1> 
       <h2>{this.resultat}</h2>
       <h3>Résultat : {this.boucle02()}</h3> 
       <div>{afficheTab}</div> 
        <div>
          <ul>
            {this.boucle03()}
          </ul>
        </div>
 */
export default App;
