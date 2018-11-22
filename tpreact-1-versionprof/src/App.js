import React, { Component } from 'react';
import ListeContacts from './composant/ListeContacts'

import './App.css';


class App extends Component {
  message='App';
  constructor(props) {
    super(props);
    this.state = {message:''};
 
  }

  setprops(value)
  {

    this.message = value;
  }
  
 
  
  render() {
   
    return (
      <div className="App">
      
       <ListeContacts />
      </div>
    );
  }
}

export default App;
