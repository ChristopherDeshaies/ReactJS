import React, { Component } from 'react';
import pika from '../img/pikachu.png';
import '../style/Animation.css';
class Animation extends Component {
    render() {
        return (
            <div className="container" class='foret'>
               <img class='anime-img' src={pika} /> 
            </div>
        );
    }
}

export default Animation;