import logo from "./logo.svg";
import "./App.css";
import React, { Component } from "react";
import Ejercicio1 from "./ejercicios/Ejercicio1.js";
import Ejercicio2 from "./ejercicios/Ejercicio2.js";
import Ejercicio3 from "./ejercicios/Ejercicio3.js";
import Ejercicio4 from "./ejercicios/Ejercicio4.js";
import Ejercicio5 from "./ejercicios/Ejercicio5.js";
import Ejercicio6 from "./ejercicios/Ejercicio6.js";

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
        return <Ejercicio1/>;
        
      case "ejercicio2":
        console.log("Cargando Ejercicio 2");
        return <Ejercicio2/>;
        
      case "ejercicio3":
        console.log("Cargando Ejerjkcicio 1");
        return <Ejercicio3/>;
       
      case "ejercicio4":
        console.log("Cargando Ejercicḉñçio 1");
        return <Ejercicio4/>;
       
      case "ejercicio5":
        console.log("Carhjgando Ejercicio 1");
        return <Ejercicio5/>;
        
      case "ejercicio6":
        return <Ejercicio6/>;
      
    }
    console.log("Asignado:", asignado);
    return (
      
      <div className="App">
        <header className="App-header">

          <h2>Boletín 1 - React</h2>
          <img src={logo} className="App-logo" alt="logo" />
          <button onClick={() => this.cambiaEj("ejercicio1")}>
            Ejercicio 1
          </button>
          <button onClick={() => this.cambiaEj("ejercicio2")}>
            Ejercicio 2
          </button>
          <button onClick={() => this.cambiaEj("ejercicio3")}>
            Ejercicio 3
          </button>
          <button onClick={() => this.cambiaEj("ejercicio4")}>
            Ejercicio 4
          </button>
          <button onClick={() => this.cambiaEj("ejercicio5")}>
            Ejercicio 5
          </button>
          <button onClick={() => this.cambiaEj("ejercicio6")}>
            Ejercicio 6
          </button>
        </header>
      </div>
    );
  }
}
export default App;