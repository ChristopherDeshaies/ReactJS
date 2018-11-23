import React, { Component } from 'react';
import '../style/Tour.css';
import '../style/bootstrap.min.css';

class Tour extends Component {

    constructor(props){
        super(props);
    }

    styleDisque(taille){
        let twidth = (taille*150)+'px';
        return {
            width: twidth,
            height:'100px',
            backgroundColor: 'aquamarine',
            marginTop: '10px',
            marginLeft: 'auto',
            marginRight: 'auto',
            textAlign: 'center' 
        }
    }

    getTour(){
        return (<div className='flex-column'> {this.props.tour.map(
            (disque) => <div style={this.styleDisque(disque.taille)} >{disque.taille}</div>
        )} </div>)
    }

    render() {
        let mHeight= (this.props.nbDisque*110)+'px';
        let styleTour = {
            minHeight: mHeight,
            marginTop: '10px'
        }
        let styleSocle = {
            width:(this.props.nbDisque*152)+'px',
            height: '100px',
            backgroundColor: 'saddlebrown'
        }
        return (
            <div>
                <div style={styleTour} className='d-flex align-items-end'>{this.getTour()}</div> 
                <div style={styleSocle}></div>   
            </div>
        );
    }
}

export default Tour;