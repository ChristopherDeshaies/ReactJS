import React, { Component } from 'react';
import './Clock.css';
import fr from './fr.png';
import us from './us.png';
import jp from './jp.png';
import ru from './ru.png';
import fake from './fakenews.jpg';

class Clock extends Component {

  constructor(props){
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount(){
    this.timeID = setInterval(
      () => this.tic(), 
      1000
    );
  }

  componentWillUnmount(){
    clearInterval(this.timeID);
  }

  tic() {
    var now = new Date();
    var offset = this.props.fuseauxHoraire * 3600000;
    now.setTime(now.getTime() + offset + now.getTimezoneOffset() * 60000);
    this.setState({
      date: now
    });
  }
  

  render() {
    var drapeauStyle={};
    if(this.props.drapeau==='fr'){ 
      drapeauStyle = {
        backgroundColor: 'rgb(230,230,230)',
        backgroundImage: 'url('+fr+')',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize:'400px 200px',
        height: '200px'
      }
    }else if(this.props.drapeau==='us'){
      drapeauStyle = {
        backgroundColor: 'rgb(230,230,230)',
        backgroundImage: 'url('+us+')',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize:'400px 200px',
        height: '200px'
      }
    }else if(this.props.drapeau==='jp'){
      drapeauStyle = {
        backgroundColor: 'rgb(230,230,230)',
        backgroundImage: 'url('+jp+')',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize:'400px 200px',
        height: '200px'
      }
    }else if(this.props.drapeau==='ru'){
      drapeauStyle = {
        backgroundColor: 'rgb(230,230,230)',
        backgroundImage: 'url('+ru+')',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize:'400px 200px',
        height: '200px'
      }
    }

    const reductTailleFakeNews = {
      width:'100px',
      height:'100px'
    }

    return (
      <div className="App">
        <body>
          <h1>
            Horloge {this.props.ville}
          </h1>
          <b>{this.props.fakenews ? <img src={fake} style={reductTailleFakeNews} /> : ''}</b>
          {
            this.props.drapeau.length > 0 ?
            <div style={drapeauStyle}>
              <FormattedDate date={this.state.date} /> 
            </div> :
            ''
          }
        </body>
      </div>
    );
  }
}

function FormattedDate(props) {   
  return <h2>Il est { props.date.toLocaleTimeString()}</h2>; 
}

export default Clock;
