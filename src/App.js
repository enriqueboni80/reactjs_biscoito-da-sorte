import React, { Component } from "react";
import imgBiscoito from "./assets/biscoito.png";
import './estilo.css'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textoFrase: 'Biscoito da sorte'
    };
    this.quebraBiscoito = this.quebraBiscoito.bind(this)

    this.frases = [
      "Siga os bons e aprenda com eles.",
      "O bom-senso vale mais do que muito conhecimento.",
      "O riso é a menor distância entre duas pessoas.",
      "Deixe de lado as preocupações e seja feliz.",
      "Realize o óbvio, pense no improvável e conquiste o impossível.",
      "Acredite em milagres, mas não dependa deles.",
      "A maior barreira para o sucesso é o medo do fracasso.",
    ];
  }

  quebraBiscoito(){
    let numeroAleatorio = Math.floor(Math.random() * this.frases.length)
    this.setState({textoFrase: `" ${this.frases[numeroAleatorio]} "`})
  }

  render() {
    return (
      <div className="container">
        <img src={imgBiscoito} className="img" alt="" />
        <Botao acaoBtn={this.quebraBiscoito} />
        <h3 className="textoFrase">{this.state.textoFrase}</h3>
      </div>
    );
  }
}

class Botao extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.acaoBtn}>Abrir biscoito</button>
      </div>
    );
  }
}

export default App;
