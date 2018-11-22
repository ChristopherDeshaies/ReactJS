import React, { Component } from 'react';
import Contact from '../classes/contact';



class AjoutContact extends Component {
    //tabcontacts; // Tableau de contacts
    contactselected; //Contact sélectionné
    tabname =  {
        IdContact:1,LastNameContact:2,FirstNameContact:3,
        AddressContact:4, CityContact:5,ZIPContact:6,FollowedContact:7
    }

    constructor(props) {
        super(props);
        /**
        if(this.props.tabcontacts !== undefined)
            this.tabcontacts = this.props.tabcontacts;
        else
            this.tabcontacts = [];
        this.init();
        this.state = {
            tabContact:this.tabcontacts,
            contactselected:this.contactselected
        }
        */
       this.init();
       this.state = {
        contactselected:this.contactselected
        }
    }

    init() {
        this.contactselected =new Contact();
        this.contactselected.IdContact =0;
    }
    
    saisie = (e) => {
       
        this.contactselected = this.state.contactselected;
        switch (parseInt(e.target.id))
        {
            case this.tabname.IdContact : 
                this.contactselected.IdContact = e.target.value;
                break;
            case this.tabname.FirstNameContact : 
                this.contactselected.FirstNameContact = e.target.value;
                break;
            case this.tabname.LastNameContact : 
                this.contactselected.LastNameContact = e.target.value;
                break;
            case this.tabname.CityContact : 
                this.contactselected.CityContact = e.target.value;
                break;
            case this.tabname.AddressContact : 
                this.contactselected.AddressContact = e.target.value;
                break;
            case this.tabname.FollowedContact : 
                this.contactselected.FollowedContact = e.target.value;
                break;
        }
        this.setState(
            {
                contactselected:this.contactselected
            }
        )
    }


    submit = (e) => {
        //this.tabcontacts = this.state.tabContact;
        console.log("id" +this.contactselected.IdContact);
        e.preventDefault(false);
        if(this.contactselected.IdContact === 0) return;

              
        this.props.refresh(e,this.contactselected);
        
    }

    getObjet(index) 
    {
        switch (parseInt(index))
        {
            case this.tabname.IdContact : 
                return this.contactselected.IdContact;
                
            case this.tabname.FirstNameContact : 
                return this.contactselected.FirstNameContact;
                
            case this.tabname.LastNameContact : 
                return this.contactselected.LastNameContact;
                
            case this.tabname.CityContact : 
                return this.contactselected.CityContact;
                
            case this.tabname.AddressContact : 
                return this.contactselected.AddressContact;
                
            case this.tabname.FollowedContact : 
                return this.contactselected.FollowedContact;
                
        }
    }

    getlibelle(index)
    {
        switch (parseInt(index))
        {
            case this.tabname.IdContact : 
                return "Id";
                
            case this.tabname.FirstNameContact : 
                return "Nom";
                
            case this.tabname.LastNameContact : 
                return "Prénom";;
                
            case this.tabname.CityContact : 
                return "Ville";
                
            case this.tabname.AddressContact : 
                return "Adresse";
                
            case this.tabname.FollowedContact : 
                return "Suivi";
                
        }
    }

    getrenderform() {
        let tab = [];
        for(let i=1;i<=this.tabname.FollowedContact;i++) tab.push(i);
         return tab.map((index) =>   <div class="form-group">
                    <label for={index}>{this.getlibelle(index)}</label>
                    <input onChange={this.saisie} type="text" 
                    value={this.getObjet(index)} 
                    class="form-control" id={index} 
                    placeholder={"Enter "+this.getlibelle(index)} />
                </div>);
    }

    render() {
        return (
            <div>
                <form name="monForm" novalidate 
                    onSubmit={this.submit}>
                {this.getrenderform()}

                <input type="submit" value="Ok"/>
                </form>
            </div>
        );
    }
}


export default AjoutContact;

/**
 * 
 * <div class="form-group">
                    <label for={this.tabname.IdContact}>ID</label>
                    <input onChange={this.saisie} type="text" 
                    value={this.state.contactselected.IdContact} 
                    class="form-control" id={this.tabname.IdContact} 
                    placeholder="Enter Id"/>
                </div>
                <div class="form-group">
                <label for={this.tabname.LastNameContact}>Nom</label>
                <input onChange={this.saisie} type="text" 
                value={this.state.contactselected.LastNameContact} 
                class="form-control" id={this.tabname.LastNameContact} 
                placeholder="Enter Nom"/>
                </div>
                <div class="form-group">
                <label for={this.tabname.FirstNameContact}>Prénom</label>
                <input onChange={this.saisie} type="text" 
                value={this.state.contactselected.FirstNameContact } 
                class="form-control" id={this.tabname.FirstNameContact} 
                placeholder="Enter Prénom"/>
                </div>
                
                <div class="form-group">
                <label for={this.tabname.AddressContact}>Adresse</label>
                <input onChange={this.saisie} type="text" 
                value={this.state.contactselected.AddressContact } 
                class="form-control" id={this.tabname.AddressContact} 
                placeholder="Enter Adresse"/>
                </div>
                <div class="form-group">
                <label for={this.tabname.CityContact}>Ville</label>
                <input onChange={this.saisie} type="text" 
                value={this.state.contactselected.CityContact } 
                class="form-control" id={this.tabname.CityContact} 
                placeholder="Enter ville"/>
                </div>
                <div class="form-group">
                <label for={this.tabname.ZIPContact}>Code postal</label>
                <input onChange={this.saisie} type="text" 
                value={this.state.contactselected.ZIPContact } 
                class="form-control" id={this.tabname.ZIPContact} 
                placeholder="Enter Code Postal"/>
                </div>
                <div class="form-group">
                <label for={this.tabname.FollowedContact}>A suivre</label>
                <input onChange={this.saisie} type="checkbox" 
                value={this.state.contactselected.FollowedContact } 
                class="form-control" id={this.tabname.FollowedContact}/>
                </div>
 */