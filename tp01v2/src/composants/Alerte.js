import React, { Component } from 'react';

class Alerte extends Component {

    constructor(props){
        super(props);
        this.pseudo = React.createRef();
        this.declenchement = this.declenchement.bind(this);
    }

    declenchement(e) {
        alert('Alerte aux noeud noeud !! ' + this.pseudo.current.value + ' est le meilleur !');
        e.preventdefault();
    }

    render() {
        return (
            <form onSubmit={this.declenchement}>
                <div class="form-group">
                    <label>Pseudo:
                    <input type="text" class="form-control" ref={this.pseudo} />
                    </label>
                </div>
                    <input type="submit" value="Alerte" class="btn btn-primary" />
                
            </form>
        );
    }
}

export default Alerte;