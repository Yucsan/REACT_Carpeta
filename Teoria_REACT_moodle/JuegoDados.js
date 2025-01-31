import React, { Component } from 'react';
import './Dado.css';

export default class Dado extends Component {
    constructor(props) {
        super(props);
        this.state = {
            jugadores: 0,
            numero: '',
            nombre_jugadores: [],
            puntos: [[0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0]],
            ronda: 0
        };
        this.lanzaDado = this.lanzaDado.bind(this);
        this.asignaJugadores = this.asignaJugadores.bind(this);
        this.preguntaNombres = this.preguntaNombres.bind(this);
        this.muestraGanador = this.muestraGanador.bind(this);
    }

    asignaJugadores(event) {
        this.setState({ jugadores: event.target.value });
    }
    preguntaNombres() {
        const nuevosJugadores = [];

        for (let i = 1; i <= this.state.jugadores; i++) {
            let nombre_jug = prompt(`Introduce el nombre de del Jugador ${i}`, `Jugador ${i}`);
            nuevosJugadores.push(nombre_jug);
        }

        this.setState({ nombre_jugadores: nuevosJugadores })
        console.log("array", this.state.nombre_jugadores);
    }

    lanzaDado(event) {
        if (this.state.nombre_jugadores.length <= 1) {
            alert("Debes asignar los jugadores");
        } else {
            const nuevosPuntos = this.state.puntos;

            for (let i = 0; i < this.state.jugadores; i++) {
                const num_aleatorio = Math.floor(Math.random() * 6 + 1);
                nuevosPuntos[i][this.state.ronda] = num_aleatorio;
                const sumaPuntos = nuevosPuntos[i][5] + num_aleatorio;
                nuevosPuntos[i][5] = sumaPuntos;
                nuevosPuntos[i][6] = (sumaPuntos/(this.state.ronda+1)).toFixed(2);
            }

            this.setState({
                puntos: nuevosPuntos,
                ronda: this.state.ronda + 1
            });
        }
    }


    muestraGanador(event) {
        let mayorPuntuacion = 0;
        let ganador = "";

        for (let i = 0; i < this.state.jugadores; i++) {
            const puntuacionTotal = this.state.puntos[i][5];
            console.log("Puntos", puntuacionTotal);
            if (puntuacionTotal > mayorPuntuacion) {
                mayorPuntuacion = puntuacionTotal;
                ganador = this.state.nombre_jugadores[i];
            }
        }

        alert(`El ganador es ${ganador} con ${mayorPuntuacion} puntos.`);
    }
    render() {
        return (
            <div>
                <p>
                    <select value={this.state.jugadores} onChange={this.asignaJugadores}>
                        <option selected>- Jugadores -</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                    </select>
                    <button onClick={this.preguntaNombres} disabled={this.state.jugadores === 0}>Comenzar partida</button>
                    <button onClick={this.lanzaDado} disabled={this.state.ronda === 5 || this.state.nombre_jugadores.length === 0}>Tirar dados</button>
                    <button onClick={this.muestraGanador} disabled={this.state.ronda != 5 || this.state.nombre_jugadores.length === 0}>Ver ganador</button>
                </p>
                <table>
                    <tr>
                        <th>Jugador</th>
                        <th>RONDA 1</th>
                        <th>RONDA 2</th>
                        <th>RONDA 3</th>
                        <th>RONDA 4</th>
                        <th>RONDA 5</th>
                        <th>TOTAL</th>
                        <th>MEDIA</th>
                    </tr>

                    { this.state.nombre_jugadores.map((jugador, index) => (
                        <tr>
                            <td key={index}>{jugador}</td>
                            {this.state.puntos[index].map((punto, puntoIndex) => (
                                <td key={puntoIndex}>{punto}</td>
                            ))}
                        </tr>
                    ))}
                </table>
            </div>
        );
    }
}