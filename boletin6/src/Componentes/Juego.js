import React, { Component } from "react";

export default class Juego extends Component {
  state = {
    resultados: [], // Guardará las tiradas de los jugadores
    ganador: null, // Guardará el ganador (o empate)
  };

  // Tirar dados para todos los jugadores
  jugar = () => {
    const { jugadores } = this.props;
    const resultados = jugadores.map(() =>
      Math.floor(Math.random() * 6) + 1 // Genera un número entre 1 y 6
    );

    // Determina el resultado
    const max = Math.max(...resultados); // Encuentra el número mayor
    const indicesGanadores = resultados
      .map((resultado, index) => (resultado === max ? index : null))
      .filter((index) => index !== null);

    const ganador =
      indicesGanadores.length > 1
        ? "Empate"
        : jugadores[indicesGanadores[0]];

    this.setState({ resultados, ganador });
  };

  render() {
    const { jugadores } = this.props;
    const { resultados, ganador } = this.state;

    return (
      <div>
        <h2>Juego de Dados</h2>
        <button onClick={this.jugar}>Tirar Dados</button>
        <div>
          {resultados.length > 0 &&
            jugadores.map((jugador, index) => (
              <p key={index}>
                {jugador}: {resultados[index]}
              </p>
            ))}
        </div>
        {ganador && <h3>{ganador === "Empate" ? "¡Es un empate!" : `Ganador: ${ganador}`}</h3>}
      </div>
    );
  }
}
