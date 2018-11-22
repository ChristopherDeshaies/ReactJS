import React, { Component } from 'react';

class FicheContact extends Component {

    render() {
        return (
            <form>
                <label>Détails du Contact :</label>
                <div className="form-group">
                    <label>ID</label>
                    <input name="id" type="text" value={this.props.contact.id} className="form-control" readOnly/>
                </div>
                <div className="form-group">
                    <label>LastNameContact</label>
                    <input name="last" type="text" value={this.props.contact.last} className="form-control" readOnly/>
                </div>
                <div className="form-group">
                    <label>FirstNameContact</label>
                    <input name="first" type="text" value={this.props.contact.first} className="form-control" readOnly/>
                </div>
                <div className="form-group">
                    <label>AddressContact</label>
                    <input name="adresse" type="text" value={this.props.contact.adresse} className="form-control" readOnly/>
                </div>
                <div className="form-group">
                    <label>City</label>
                    <input name="city" type="text" value={this.props.contact.city} className="form-control" readOnly/>
                </div>
                <div className="form-group">
                    <label>ZIP</label>
                    <input name="zip" type="text" value={this.props.contact.zip} className="form-control" readOnly/>
                </div>
                <div className="form-group">
                    <label>Followed</label>
                    <input name="followed" type="text" value={this.props.contact.followed} className="form-control" readOnly/>
                </div>
            </form>
        );
    }
}

export default FicheContact;