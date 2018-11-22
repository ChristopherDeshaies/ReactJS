import React, { Component } from 'react';
import logo from './Fuuma_Shuriken.svg';
import './App.css';

class App extends Component {

  count = this.props.count;
  resultat = ""; //Var Glo de la classe

  boucle01(){ //Méthode de la classe
    let index=0;
    let tab = ['un','deux','trois'];

    while(tab[index]){
      console.log('index:',index, 'valeur:', tab[index]);
      this.resultat += `Index : ${index} Valeur: ${tab[index]} \n`;
      index++;
    }
  }

  boucle02(){
    let tab = ['un','deux','trois','quatre'];
    console.log('count:',this.count, 'valeur:', tab[this.count]);
    this.resultat = 'count:'+this.count+' valeur:'+tab[this.count];
    /* for(let index=0; tab[index];index++)
      console.log('index:',index, 'valeur:', tab[index]); */
  }

  boucle03(){
    let tab = ['un','deux','trois'];
    tab.forEach(function (element, index) {
      console.log('index:',index, 'valeur:', element);
    });
  }

  boucle04(){
    let tabs = ['un','deux','trois'];
    for(let tab of tabs){
      console.log('valeur:', tab);
    }
  }
  
  sapinPlein(hauteur) {
    let brancheGauche = this.sapinBrancheGauchePlein(hauteur);
    let brancheDroite = this.sapinBrancheDroitePlein(hauteur);

    let varSapinPlein = new Array();
    for(let i = 0; i<hauteur;i++){
      varSapinPlein.push(`${brancheGauche[i]}*${brancheDroite[i]}`);
    }

    return varSapinPlein;
  }


sapinBrancheGauchePlein(hauteur){
    let ligneSapinGauche = [hauteur];
    for(let i=0;i<hauteur;i++){
        ligneSapinGauche[i]=``;
        for(let j=0;j<hauteur-1;j++){
            if(i+j<hauteur-1){
                ligneSapinGauche[i]+=`--`;
            }else{
                ligneSapinGauche[i]+=`*-`;
            }
        }
    }

    return ligneSapinGauche;
}


sapinBrancheDroitePlein(hauteur){
    let ligneSapinDroite = [hauteur];
    for(let i=0;i<hauteur;i++){
        ligneSapinDroite[i]=``;
        for(let j=0;j<hauteur-1;j++){
            if(j<i){
                ligneSapinDroite[i]+=`-*`;
            }else{
                ligneSapinDroite[i]+=`--`;
            }
        }
    }

    return ligneSapinDroite;
}


sapinVide(hauteur) {
    let brancheGauche = this.sapinBrancheGaucheVide(hauteur);
    let brancheDroite = this.sapinBrancheDroiteVide(hauteur);

    let varSapinVide = new Array();
    for(let i = 0; i<hauteur;i++){
        if(i===0 || i===hauteur-1){
          varSapinVide.push(`${brancheGauche[i]}*${brancheDroite[i]}`);
        }else{
          varSapinVide.push(`${brancheGauche[i]}-${brancheDroite[i]}`);
        }
    }

    return varSapinVide;
}


sapinBrancheGaucheVide(hauteur){
    let ligneSapinGauche = [hauteur];
    for(let i=0;i<hauteur;i++){
        ligneSapinGauche[i]="";
        for(let j=0;j<hauteur-1;j++){
            if(i===hauteur-1){
                ligneSapinGauche[i]+="*-";
            }else{
                if(i>0 && i+j==hauteur-1){
                    ligneSapinGauche[i]+="*-";
                }else{
                    ligneSapinGauche[i]+="--";
                }
            }
        }
    }

    return ligneSapinGauche;
}


sapinBrancheDroiteVide(hauteur){
    let ligneSapinDroite = [hauteur];
    let sommeIJ=1;
    for(let i=0;i<hauteur;i++){
        ligneSapinDroite[i]="";
        for(let j=0;j<hauteur-1;j++){
            if(i===hauteur-1){
                ligneSapinDroite[i]+="-*";
            }else{
                if(i>0 && (i+j)===sommeIJ){
                    ligneSapinDroite[i]+="-*";
                }else{ 
                    ligneSapinDroite[i]+="--";
                }
            }
        }
        if(i>0){
            sommeIJ=sommeIJ+2;
        }
    }
    return ligneSapinDroite;
}


sapinCouche(largueur){
    let brancheHaut = this.sapinBrancheHaut(largueur);
    let brancheBas = this.sapinBrancheBas(largueur);

    let varSapinCouche = Array();
    for(let i = 0; i<brancheHaut.length;i++){
      varSapinCouche.push(`${brancheHaut[i]}`);
    }
    let tmpLigneSapin="";
    for(let i = 0; i<largueur;i++){
      tmpLigneSapin+=`* `;  
    }
    varSapinCouche.push(tmpLigneSapin);

    for(let i = 0; i<brancheBas.length;i++){
      varSapinCouche.push(`${brancheBas[i]}`);
    }

    return varSapinCouche;
}

sapinBrancheHaut(largueur){
    let ligneSapinHaut = [largueur-1];
    let cpt=1;
    for(let i=0; i<largueur-1; i++){
        ligneSapinHaut[i]="";
        for(let j=0; j<largueur; j++){
            if(j<cpt){
                ligneSapinHaut[i]+="* ";
            }
        }
        cpt++;
    }

    return ligneSapinHaut;
}

sapinBrancheBas(largueur){
    let ligneSapinBas = [largueur-1];
    let cpt=largueur-1;
    for(let i=0; i<largueur-1; i++){
        ligneSapinBas[i]="";
        for(let j=0; j<largueur; j++){
            if(j<cpt){
                ligneSapinBas[i]+="* ";
            }
        }
        cpt--;
    }

    return ligneSapinBas;
}

render() {
    this.boucle01();
    this.boucle02();
    const affichageSapinPlein = this.sapinPlein(this.props.hauteur).map(
        (element) => <p>{element}</p>
    );
    const affichageSapinVide = this.sapinVide(this.props.hauteur).map(
        (element) => <p>{element}</p>
    );
    const affichageSapinCouche = this.sapinCouche(this.props.hauteur).map(
        (element) => <p>{element}</p> 
    );

    return (
      <div className="App">
        <h1>{this.props.name}</h1>
        <h2>{this.resultat}</h2>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <table>
            <thead>
              <tr>
                <th>Questions</th>
                <th>Réponses</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Qui est en CDI ?</td>
                <td>TOI !</td>
              </tr>
              <tr>
                <td>Qui est le meilleur ?</td>
                <td>TOI !</td>
              </tr>
              <tr>
                <td>Qui attrape la grosse tête ?</td>
                <td>TOI !!</td>
              </tr>
            </tbody>
          </table>
        </header>
        <body>
          <div>
            <h2>Exo 3 - Sapin</h2>
            <div id="sapinplein" class="sapin">
                <h3>Sapin Plein</h3>
                {affichageSapinPlein}
            </div>
            <div id="sapinvide" class="sapin">
                <h3>Sapin Vide</h3>
                {affichageSapinVide}
            </div>
            <div id="sapincouche" class="sapin">
                <h3>Sapin Couché</h3>
                {affichageSapinCouche}
            </div>
          </div>
        </body>
      </div>
    );
  }
}

export default App;
