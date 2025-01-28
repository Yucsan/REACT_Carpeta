import React, { Component } from 'react';

import './App.css';

class App extends Component {

  state = { 
    operacion: ""
   }

  handleNum = (e) =>{
    this.setState({ operacion: this.state.operacion + e.target.innerText})
  }

  handleCe = (e) =>{
    this.setState({ operacion: ''})
  }

  handleResultado = () =>{
    this.setState({ operacion:  eval(this.state.operacion) })
  }

  render() { 
    return ( 
      <div className="App">
         <header className="App-header">
              <h1>Calculadora</h1>
              <div className='contenedor'>
                <input type="text" value={ this.state.operacion } />
                <div className='ce_izquierda'>
              
                  <button onClick={this.handleCe} >CE</button>
                </div>
                <div>
                  <button onClick={this.handleNum} >1</button>
                  <button onClick={this.handleNum} >2</button>
                  <button onClick={this.handleNum} >3</button>
                  <button onClick={this.handleNum} >/</button>
                </div>
                <div>
                  <button onClick={this.handleNum} >4</button>
                  <button onClick={this.handleNum} >5</button>
                  <button onClick={this.handleNum} >6</button>
                  <button onClick={this.handleNum} >*</button>
                </div>
                <div>
                  <button onClick={this.handleNum} >7</button>
                  <button onClick={this.handleNum} >8</button>
                  <button onClick={this.handleNum} >9</button>
                  <button onClick={this.handleNum} >-</button>
                </div>
                <div className='bajos'>
                  <button onClick={this.handleNum} >.</button>
                  <button onClick={this.handleNum} >0</button>
                  <button onClick={this.handleResultado} >=</button>
                  <button onClick={this.handleNum} >+</button>
                </div>
              </div>
         </header>
      </div>
     );
  }
}
 
export default App;

