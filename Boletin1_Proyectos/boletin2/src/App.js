import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    dia: 'sin selecionar',
    selectedDia: '',
  }

  handleChange = (event)=>{
    this.setState({diaSeleccion: event.target.value });
  }

  render() { 
    return ( 
      <div className='App'>
        <header className="App-header">

        <div>
          <label for="dias">Escoge 1 día</label>
          <select name="dias" id="dias" onChange={this.handleChange}>
            <option value="Lunes">Lunes</option>
            <option value="Martes">Martes</option>
            <option value="Miercoles">Miercoles</option>
            <option value="Jueves">Jueves</option>
            <option value="Viernes">Viernes</option>
            <option value="Sabado">Sabado</option>
            <option value="Domingo">Domingo</option>
          </select>
        </div>
 
          <button class="boton" onClick={this.selecciona} >PRESS</button>
   
        <h2>{this.state.dia}</h2>

        </header>
      </div>
     );
  }

  selecciona = ()=>{
    
    this.setState({
      dia: this.state.diaSeleccion 
    });
  }

}
 
export default App;
