import React, { Component } from 'react';
import Jugadores from "./Componentes/Jugadores"; // Importa el componente Jugadores
import Juego from "./Componentes/Juego"; // Importa el componente del juego
import "./App.css";

class App extends Component {
  state = {
    jugadores: [], // Aquí guardaremos los nombres de los jugadores
  };

  // Callback para recibir los jugadores desde el componente Jugadores
  guardarJugadores = (jugadores) => {
    this.setState({ jugadores }); // Almacena los jugadores en el estado
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Juego de Dados</h1>

          {/* Muestra el componente Jugadores */}
          <Jugadores onGuardarJugadores={this.guardarJugadores} />

          {/* Muestra el componente Juego solo si hay jugadores */}
          {this.state.jugadores.length > 0 && (
            <Juego jugadores={this.state.jugadores} />
          )}
          
        </header>
      </div>
    );
  }
}

export default App;

