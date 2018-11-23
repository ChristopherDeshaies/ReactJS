import React, { Component } from 'react';
import Plateau from '../classes/Plateau';
import Disque from '../classes/Disque';
import Tour from './Tour';
import '../style/ToursHanoï.css';

class ToursHanoï extends Component {

    constructor(props){
        super(props); 
        const nbEtage=3;
        this.state = {
            plateau:this.initPlateau(nbEtage),
            nbEtage:nbEtage
        }
        this.nextTour=this.nextTour.bind(this);
        this.precTour=this.precTour.bind(this);
        this.jouer=this.jouer.bind(this);
    }

    initPlateau( nbDisque ){
        let plateau = new Plateau();
        plateau.tour[0] = [];
        plateau.tour[1] = [];
        plateau.tour[2] = [];
        for(let i = 0; i<nbDisque; i++){
            plateau.tour[0].push(new Disque(i,nbDisque-i));
        }
        plateau.tour[0]=plateau.tour[0].reverse();
        return plateau;
    }

    affichagePlateau(){
        return (
            <div className='d-flex'>
                <Tour id='tour1' className='col-sm' tour={this.state.plateau.tour[0]} nbDisque={this.state.nbEtage}/>
                <Tour id='tour2' className='col-sm' tour={this.state.plateau.tour[1]} nbDisque={this.state.nbEtage}/>
                <Tour id='tour3' className='col-sm' tour={this.state.plateau.tour[2]} nbDisque={this.state.nbEtage}/>
            </div>
        );
    }

    jouer(){
        this.nextTour(this.state.nbEtage-1,this.state.plateau.tour[0],this.state.plateau.tour[1],this.state.plateau.tour[2]);
    }

    nextTour(n,tour1,tour2,tour3){
        if(n==1){console.log('titi');
            let disqueCurrent = tour1[0];
            tour2.reverse().push(disqueCurrent);
            tour2.reverse();
            tour1.reverse().pop();
            tour1.reverse();
            let newPlateau = new Plateau();
            newPlateau.tour = {tour1,tour2,tour3};
            console.log(newPlateau);
            this.setState({
               plateau:newPlateau
            });
        }else{console.log('toto');
            this.nextTour(n-1, tour1, tour2, tour3);
            let disqueCurrent = tour2[0];
            tour3.reverse().push(disqueCurrent);
            tour3.reverse();
            tour2.reverse().pop();
            tour2.reverse();
            let newPlateau = new Plateau();
            newPlateau.tour = {tour1,tour2,tour3};console.log(newPlateau);
            this.setState({
                plateau:newPlateau
             });
            this.nextTour(n-1, tour3, tour2, tour1);
        }
        /* if(this.state.plateau.tour[1].length<=0){
            let disqueCurrent = this.state.plateau.tour[0][0];
            this.state.plateau.tour[1].reverse().push(disqueCurrent);
            this.state.plateau.tour[1].reverse();
            this.state.plateau.tour[0].reverse().pop();
            this.state.plateau.tour[0].reverse();
            this.setState({plateau:this.state.plateau});

        }else if(this.state.plateau.tour[2].length<=0){
            let disqueCurrent = this.state.plateau.tour[1][0];
            this.state.plateau.tour[2].reverse().push(disqueCurrent);
            this.state.plateau.tour[2].reverse();
            this.state.plateau.tour[1].reverse().pop();
            this.state.plateau.tour[1].reverse();
            this.setState({plateau:this.state.plateau});

        }else if(parseInt(this.state.plateau.tour[2][0].taille) < parseInt(this.state.plateau.tour[1][0].taille)){
            let disqueCurrent = this.state.plateau.tour[2][0];
            this.state.plateau.tour[1].reverse().push(disqueCurrent);
            this.state.plateau.tour[1].reverse();
            this.state.plateau.tour[2].reverse().pop();
            this.state.plateau.tour[2].reverse();
            this.setState({plateau:this.state.plateau});

        }else if(parseInt(this.state.plateau.tour[2][0].taille) > parseInt(this.state.plateau.tour[1][0].taille)){
            let disqueCurrent = this.state.plateau.tour[1][0];
            this.state.plateau.tour[2].reverse().push(disqueCurrent);
            this.state.plateau.tour[2].reverse();
            this.state.plateau.tour[1].reverse().pop();
            this.state.plateau.tour[1].reverse();
            this.setState({plateau:this.state.plateau});

        }else if(parseInt(this.state.plateau.tour[1][0].taille) < parseInt(this.state.plateau.tour[0][0].taille)){
            let disqueCurrent = this.state.plateau.tour[1][0];
            this.state.plateau.tour[0].reverse().push(disqueCurrent);
            this.state.plateau.tour[0].reverse();
            this.state.plateau.tour[1].reverse().pop();
            this.state.plateau.tour[1].reverse();
            this.setState({plateau:this.state.plateau});
        } */
    }

    precTour(){
        let disqueCurrent = this.state.plateau.tour[1][0];
        this.state.plateau.tour[0].reverse().push(disqueCurrent);
        this.state.plateau.tour[0].reverse();
        this.state.plateau.tour[1].reverse().pop();
        this.state.plateau.tour[1].reverse();
        this.setState({plateau:this.state.plateau});
    }

    render() {

        return (
            <div>
                {this.affichagePlateau()}
                <div>
                    <button onClick={this.precTour}>Prec</button>
                    <button onClick={this.jouer}>Next</button>
                </div>
            </div>
        );
    }
}

export default ToursHanoï;