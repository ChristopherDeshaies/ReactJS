import React, { Component } from 'react';
import Contact from '../classes/Contact';

class AjouterContact extends Component {

    constructor(props){
        super(props);
        this.state = {
            id: 0,
            first: '',
            last: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.ajouter = this.ajouter.bind(this);
    }

    handleChange(e) {

        let id=this.state.id;
        let first=this.state.first;
        let last=this.state.last;

        if(e.target.name==="last"){
            id = this.state.id;
            last = e.target.value;
            first = this.state.first;
        }else if(e.target.name==="first"){
            id = this.state.id;
            last = this.state.last;
            first =e.target.value;
        }else if(e.target.name==="id"){
            id = e.target.value;
            last = this.state.last;
            first = this.state.first;
        }

        this.setState({ id:id, last:last, first:first});
    }

    ajouter() {
        this.props.ajouter(this.state.id,this.state.first,this.state.last);
    }

    render() {
/*         console.log(this.props);
        console.log(this.state); */
        return (
            <tr>
                <td>
                    <input type="text" name="id" onChange={this.handleChange}/>
                </td>
                <td>
                    <input type="text" name="last" onChange={this.handleChange}/>
                </td>
                <td>
                    <input type="text" name="first" onChange={this.handleChange}/>
                </td>
                <td>
                    <button onClick={this.ajouter} className='btn btn-success'>Ajouter</button>
                </td>
            </tr>
        );
    }
}

export default AjouterContact;