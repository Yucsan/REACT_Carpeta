import React, { Component } from 'react';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    producto: "Sin selección",
    precio: 0,
    cantidad: 0,
    muestra: false
  }
  handleRecoge = (e) => {

    var { id, value } = e.target;
    this.setState({
      [id]: value
    })
  }

  handleMuestra = (e) => {

    e.preventDefault(); // Evitar comportamiento por defecto

    if (!this.muestra) {
      document.querySelector('.muestraFactura').style.display = 'block';
      this.muestra = !this.muestra;
    } else {
      document.querySelector('.muestraFactura').style.display = 'none';
      this.muestra = !this.muestra;
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">


          <form className='formulario' >
            <label>Elije producto</label>
            <select id="producto" onChange={this.handleRecoge} >
              <option value="leche">leche</option>
              <option value="pan">pan</option>
              <option value="pescado">pescado</option>
              <option value="paneton">paneton</option>
            </select>
            <input id="cantidad" type="number" value={this.state.cantidad} onChange={this.handleRecoge} />
            <input id="precio" type="number" value={this.state.precio} onChange={this.handleRecoge} />

            <button type="button" onClick={this.handleMuestra} >ver Factura</button>

          </form>

          <div className='muestraFactura'>
            <div>producto: {this.state.producto}</div>
            <div>cantidad: {this.state.precio}</div>
            <div>precio: {this.state.cantidad}</div>
            <strong>Total: {this.state.cantidad * this.state.precio}€</strong>
          </div>

        </header>
      </div>

    );
  }
}

export default App;
