import React, { Component } from 'react';
import fake from '../img/fakenews.jpg';

class FakeNews extends Component {
    render() {
        return (
            <div className="container">
               <img src={fake} /> 
            </div>
        );
    }
}

export default FakeNews;