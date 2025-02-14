import React, { Component } from 'react';
import './App.css';

export default class Ejercicio1 extends Component {
  state = {
    resultado: 0,
    numerito1: 0,
    numerito2: 0
  }

  recogeInput = (e) => {
    var { id, value } = e.target;
    this.setState({
      [id]: Number(value) // los input devuelven cadenas
    });
  };

  suma = () => {
    var { numerito1, numerito2 } = this.state;
    this.setState({
      resultado: numerito1 + numerito2
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h3>Ejercicio Boletin 1 </h3>

          <div>sumando1</div>
          <input id="numerito1" type="number" value={this.state.numerito1} onChange={this.recogeInput} />
          <div>sumando2</div>
          <input id="numerito2" type="number" value={this.state.numerito2} onChange={this.recogeInput} />

          <h1>{this.state.resultado} </h1>
          <button onClick={this.suma} > Suma </button>
        </header>
      </div>
    );
  }


}
