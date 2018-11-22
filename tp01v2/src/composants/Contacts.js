import React, { Component } from 'react';
import Contact from '../classes/Contact';
import FicheContact from './FicheContact';
import AjouterContact from './AjouterContact';

class ListeContacts extends Component {

    constructor(props){
        super(props);
        this.state = {
            listContact : this.initTableau(),
            details : null        
        };
        this.detailContact = this.detailContact.bind(this);
        this.ajouterContact = this.ajouterContact.bind(this);
        this.hiddenDetail = true;
    }

    initTableau(){
        let tab = [];
        for(let i=0; i<10; i++){
            tab[i]= new Contact(i,"Super_"+i,"React_"+i,i+" rue de la Tourterelle","59879","Maybe","Curly");
        }
        return tab;
    }

    detailContact(e){
        var focus = e.target;
        if(this.state.details){
            if(focus.value === this.state.details.id || this.hiddenDetail){
                this.hiddenDetail = !this.hiddenDetail;
            }
            this.setState({
                details:new Contact(
                    focus.value,
                    this.state.listContact[focus.value].last,
                    this.state.listContact[focus.value].first,
                    this.state.listContact[focus.value].adresse,
                    this.state.listContact[focus.value].city,
                    this.state.listContact[focus.value].zip,
                    this.state.listContact[focus.value].followed,
                ),
                id:this.state.details.id,
                last:this.state.details.last,
                first:this.state.details.first,
                adresse:this.state.details.adresse,
                city:this.state.details.city,
                zip:this.state.details.zip,
                followed:this.state.details.followed
            });
        }else{
            this.setState({
                details:this.state.listContact[0]}, ()=>{
                    if(focus.value === this.state.details.id || this.hiddenDetail){
                        this.hiddenDetail = !this.hiddenDetail;
                    }
                    this.setState({
                        details:new Contact(
                            focus.value,
                            this.state.listContact[focus.value].last,
                            this.state.listContact[focus.value].first,
                            this.state.listContact[focus.value].adresse,
                            this.state.listContact[focus.value].city,
                            this.state.listContact[focus.value].zip,
                            this.state.listContact[focus.value].followed,
                        ),
                        id:this.state.details.id,
                        last:this.state.details.last,
                        first:this.state.details.first,
                        adresse:this.state.details.adresse,
                        city:this.state.details.city,
                        zip:this.state.details.zip,
                        followed:this.state.details.followed
                    });
                }
            ) 
        }   
    }

    ajouterContact(id,first,last){
        this.state.listContact.push(new Contact(parseInt(id),first,last,'','','',''));
        this.refresh();
    }

    refresh() {
        this.setState({listContact:this.state.listContact})
    }

    getListContact() {
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>IdContact</th>
                        <th>LastNameContact</th>
                        <th>FirstNameContact</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <AjouterContact ajouter={this.ajouterContact} list={this.state.listContact}/>
                    {
                        this.state.listContact.map(
                            (contact, i) => {
                                return (
                                <tr key={i}>
                                    <td>{contact.id}</td>
                                    <td>{contact.last}</td>
                                    <td>{contact.first}</td>
                                    <td><button onClick={this.detailContact} value={contact.id} className='btn btn-primary'>Détails</button></td>
                                </tr>
                                );
                            }
                        )
                    }
                </tbody>
            </table>
        );
    }

    render() {
        return (
            <div>
                {this.getListContact()}
                <div>
                    { this.hiddenDetail===false &&
                     <FicheContact contact={ this.state.details!==null ? this.state.details : ''}/>
                    }  
                </div>
                <div>
                    
                </div>
            </div>
        );
    }
}

export default ListeContacts;