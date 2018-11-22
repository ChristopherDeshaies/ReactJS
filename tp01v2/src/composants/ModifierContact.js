import React, { Component } from 'react';
import Contact from '../classes/Contact';

class ModifierContact extends Component {

    constructor(props){
        super(props);
        this.state = {
            id:this.props.contact.id,
            first:this.props.contact.first,
            last:this.props.contact.last,
            adresse:this.props.contact.adresse,
            city:this.props.contact.city,
            zip:this.props.contact.zip,
            followed:this.props.contact.followed
        }
        this.modifierC = this.modifierC.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        let id=this.state.id;
        let first=this.state.first;
        let last=this.state.last;
        let adresse=this.state.adresse;
        let city=this.state.city;
        let zip=this.state.zip;
        let followed=this.state.followed;

        /**
         * TODO : avec des if
         */
        /* switch(e.target.name){
            case 'last':
                last = e.target.value;
             
            case 'first':
                first = e.target.value;
             
            case 'id':
                id = parseInt(e.target.value);
            
            case 'adresse':
                adresse = e.target.value;
             
            case 'city':
                city = e.target.city;
            case 'zip':
                zip = e.target.zip;
              
            case 'followed':
                followed = e.target.followed;
             
        } */

        this.setState({ id:id, last:last, first:first, adresse:adresse, city:city, zip:zip, followed:followed});
    }

    modifierC() {
        this.props.modifier(this.props.indice, new Contact(this.state.id,this.state.first,this.state.last,this.state.adresse,this.state.city,this.state.zip,this.state.followed));
    }

    render() {
        return (
            <form>
                <label>Détails du Contact :</label>
                <div className="form-group">
                    <label>ID</label>
                    <input name="id" type="text" value={this.state.id} className="form-control" onChange={this.handleChange}/>
                </div>
                <div className="form-group">
                    <label>LastNameContact</label>
                    <input name="last" type="text" value={this.state.last} className="form-control" onChange={this.handleChange}/>
                </div>
                <div className="form-group">
                    <label>FirstNameContact</label>
                    <input name="first" type="text" value={this.state.first} className="form-control" onChange={this.handleChange}/>
                </div>
                <div className="form-group">
                    <label>AddressContact</label>
                    <input name="adresse" type="text" value={this.state.adresse} className="form-control" onChange={this.handleChange}/>
                </div>
                <div className="form-group">
                    <label>City</label>
                    <input name="city" type="text" value={this.state.city} className="form-control" onChange={this.handleChange}/>
                </div>
                <div className="form-group">
                    <label>ZIP</label>
                    <input name="zip" type="text" value={this.state.zip} className="form-control" onChange={this.handleChange}/>
                </div>
                <div className="form-group">
                    <label>Followed</label>
                    <input name="followed" type="text" value={this.state.followed} className="form-control" onChange={this.handleChange}/>
                </div>
                <button class='btn btn-primary' onClick={this.modifierC}>Valider</button>
            </form>
        );
    }
}

export default ModifierContact;