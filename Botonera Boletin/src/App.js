
import React, { Component } from "react";
import Ejercicio1 from "./Componentes/Ejercicio1.js";
import Ejercicio2 from "./Componentes/Ejercicio2.js";
import "./App.css";


class App extends Component {
  constructor() {
    super();
    this.state = {
      ejercicioSele: ""
    };
  }

  cambiaEj = (ejercicio) => {
    this.setState({ ejercicioSele: ejercicio });
    this.forceUpdate();
  };

  render() {

    const { ejercicioSele } = this.state;
    let asignado;

    switch (ejercicioSele) {
      case "ejercicio1":
        console.log("Cargando Ejercicio 1");
        return <Ejercicio1 cambiaEj={this.cambiaEj} />;

      case "ejercicio2":
        console.log("Cargando Ejercicio 2");
        return <Ejercicio2 cambiaEj={this.cambiaEj}/>;

    }

    console.log("Asignado:", asignado);
    return (

      <div className="App">
        <header className="App-header">

          <h2>Boletín 1 - React</h2>
          
          <button onClick={() => this.cambiaEj("ejercicio1")}>
            Ejercicio 1
          </button>
          <button onClick={() => this.cambiaEj("ejercicio2")}>
            Ejercicio 2
          </button>

        </header>
      </div>
    );
  }
}
export default App;