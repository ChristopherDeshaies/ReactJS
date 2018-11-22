import React, { Component } from 'react';
import FicheContact from './FicheContact';
import AjoutContact from './AjoutContact';
import Contact from '../classes/contact';

class ListeContacts extends Component {
  tabcontacts; // Tableau de contacts
  contactselected; //Contact sélectionné
  bajout = false;
  maxcontact = 10; //Max de contact

  constructor(props) {
    super(props);
    this.selectedContact = this.selectedContact.bind(this);
    //this.ajout = this.ajout.bind(this);
    this.getCreateTab();
    this.state = {
        selectContact:undefined,
        tabcontacts:this.tabcontacts,
        bajout:false,
        bliste:true
    }
  }

  selectedContact(event) {
    //this.contactselected = this.tabcontacts[event.target.id];
    
    this.contactselected = this.tabcontacts.filter(
        (contact) => contact.IdContact == event.target.id)[0];
 
     this.setState({selectContact:this.contactselected});
    
  }
  
  ajout =(e)=> {
      this.bajout = !this.state.bajout;
      this.bliste = !this.state.bliste
      this.setState({bajout:this.bajout,bliste:this.bliste})
  }

  ajoutC =(e,contact)=> {
    console.log("Test");
    let tabC = this.state.tabcontacts;
    this.bajout = !this.state.bajout;
    this.bliste = true;
    if(contact !== undefined && contact !== null){
        tabC.push(contact);
    }
    this.setState({bajout:this.bajout,bliste:this.bliste,tabcontacts:tabC})
}


  reset() {
    this.contactselected = undefined;
    this.setState({selectContact:this.contactselected})
  }

  getFicheDetail() {
      return (
          <div>
        <h3>{this.state.selectContact.FirstNameContact} {this.state.selectContact.LastNameContact}</h3>
        <h3>{this.state.selectContact.AddressContact}</h3>
        <h3>{this.state.selectContact.ZIPContact} {this.state.selectContact.CityContact}</h3>
        </div>
      )
  }

  getCreateTab()
  {
      
      this.tabcontacts = [];
      for(let i=0;i<this.maxcontact;i++)
      {
        let ocontacts = new Contact();
        ocontacts.IdContact = i;
        ocontacts.AddressContact = `${i} rue principale`;
        ocontacts.ZIPContact = "59000";
        ocontacts.CityContact = "Lille";
        ocontacts.LastNameContact = `DUPOND ${i}`;
        ocontacts.FirstNameContact = "Jean";
        if((i/2) === 0)
            ocontacts.FollowedContact = false;
        else
            ocontacts.FollowedContact = true;
        this.tabcontacts.push(ocontacts);
      }
  }

  getAfficheListe() {
      return this.state.tabcontacts.map((contact)=>
      <tr><td><a href="#" id={contact.IdContact} onClick={this.selectedContact}>{contact.IdContact}</a></td>
      <td>{contact.LastNameContact}</td>
      <td>{contact.FirstNameContact}</td>
      </tr>);
  }
  componentWillReceiveProps(nextProps) {
   /* this.setState({selectContact:undefined,tabcontacts:nextProps.tabcontacts}
    )*/
   }
   /**
    *  <AjoutContact 
                    tabcontacts={this.state.tabcontacts} 
                    refresh={moncomposant}
                    />
    */
    render() {
        //let moncomposant = this;
        return (
            <div>
                <button class="btn btn-success" onClick={(e)=>this.reset()}>Reset</button>
                &nbsp;&nbsp;&nbsp;
                <button class="btn btn-success" onClick={this.ajout}>Ajout</button>
                <div>
                {this.state.bajout  && 
                    <AjoutContact refresh={this.ajoutC}     />
                }
                </div>
                {this.state.bliste  && 
                <table class="table">
                <thead class="thead-dark">
                    <tr>
                    <th scope="col">N° de contact</th>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    </tr>
                </thead>
                <tbody>
                {this.getAfficheListe()}
                </tbody>
                </table>
                }
                {this.state.selectContact !== undefined && 
                <div class="panel panel-default"><h2>Fiche Sélectionnée : </h2>
                 <FicheContact contactselected={this.state.selectContact}  />
                  </div> }
                  
            </div>
        );
    }
}
//{this.getFicheDetail()} V1.0
export default ListeContacts;