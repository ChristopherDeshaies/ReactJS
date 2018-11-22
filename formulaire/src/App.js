import React, { Component } from 'react';
import './App.css';
import { Form, Button, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
class App extends Component {
  
  constructor(props) {
    super(props);   
    this.state = {
      nom:'',
      prenom:''
    }
    this.handleChange = this.handleChange.bind(this);
    this.submitFormulaire = this.submitFormulaire.bind(this);
  }

  submitFormulaire(e) {
    alert("Bonjour, Monsieur "+this.state.nom+" "+this.state.prenom+" vous êtes le meilleur");
    e.preventDefault();
  }

  getValidationState() {
    const ln = this.state.nom.toString().length;
    const lp = this.state.prenom.toString().length;
    if (ln > 0 && lp > 0) return 'success';
    else return null;
  }

  handleChange(e) {
    console.log(e.target.name);
    
    let nom = this.state.nom;
    let prenom = this.state.prenom;

    if(e.target.name==="nom"){
      nom = e.target.value;
      prenom = this.state.prenom;
    }else if(e.target.name==="prenom"){
      nom = this.state.nom;
      prenom = e.target.value;
    }
    this.setState({ nom:nom, prenom:prenom});
  }


  

  render() {
    //validationState={this.getValidationState()}
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Formulaire
          </p>
        </header>
        <body>
          <Form inline>
            <FormGroup validationState={this.getValidationState()}>
              <ControlLabel>Votre nom:</ControlLabel>
              <FormControl
                name="nom"
                type="text"
                value={this.state.nom}
                placeholder="Entrer votre nom ..."
                onChange={this.handleChange}
              />
            
              <ControlLabel>Votre prénom:</ControlLabel>
              <FormControl
               name="prenom"
                type="text"
                value={this.state.prenom}
                placeholder="Entrer votre prénom ..."
                onChange={this.handleChange}
              />
               <Button onClick={this.submitFormulaire}>Valider</Button>
               <button className="btn btn-success" onClick={this.submitFormulaire}>Valider 2</button>
            </FormGroup>
           
          </Form>
        </body>
      </div>
    );
  }
}

export default App;
