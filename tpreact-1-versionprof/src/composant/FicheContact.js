import React, { Component } from 'react';
import Contact from '../classes/contact';

class FicheContact extends Component {
    contactselected; //Contact sélectionné
    constructor(props) {
        super(props);
        if(this.props.contactselected !== undefined)
            this.contactselected = this.props.contactselected;
        else
            this.contactselected = new Contact();
        this.state = {selectContact:this.contactselected}
        console.log(this.props.contactselected);

    }

    componentWillMount() {

    }

    componentDidMount() {

    }

    componentWillReceiveProps(nextProps) {
        this.setState({selectContact:nextProps.contactselected})
    }

    

    componentWillUpdate(nextProps, nextState) {

    }

    componentDidUpdate(prevProps, prevState) {

    }

    componentWillUnmount() {

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

    render() {
        return (
            <div>
                {this.getFicheDetail()}
            </div>
        );
    }
}



export default FicheContact;