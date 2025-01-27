import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    participantes: 0,
    nombres: [],
  };

  // Actualiza el número de participantes
  handlePart = (e) => {
    const participantes = parseInt(e.target.value) || 0;
    this.setState({
      participantes,
      nombres: Array(participantes).fill(""), // Crear un array vacío para los nombres
    });
  };

  // Actualiza el nombre en el índice correspondiente
  handleNombre = (index, value) => {
    this.setState((estadoPrevio) => {
      const nombres = [...estadoPrevio.nombres];
      nombres[index] = value;
      return { nombres };
    });
  };

  // Método para imprimir los nombres
  crearP = () => {
    console.log("Nombres:", this.state.nombres);
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* Input para número de participantes */}
          <input
            type="number"
            onChange={this.handlePart}
            placeholder="Número de participantes"
          />
          <button onClick={this.crearP}>Crear Participantes</button>

          { this.state.nombres.map((nombre, index) => (
            <div key={index}>
              <input type="text" placeholder={`Participante ${index + 1}`}
                value={nombre}
                onChange={(e) => this.handleNombre(index, e.target.value)} />
            </div> 
            )) 
          }

        </header>
      </div>
    );
  }
}

export default App;


//-------------- EXPLICACIÓN .map()  


const numeros = [1, 2, 3];
const cuadrados = numeros.map((numero) => numero * numero);

console.log(cuadrados); // Resultado: [1, 4, 9]
/*
Qué ocurre aquí:
.map() toma cada número del array numeros.
Lo transforma aplicando la función (numero) => numero * numero (multiplica el número por sí mismo).
Devuelve un nuevo array: [1, 4, 9].*/