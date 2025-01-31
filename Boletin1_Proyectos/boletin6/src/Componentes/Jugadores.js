import React, { Component } from 'react';

export default class Jugadores extends Component {
  state = {
    participantes: 0,
    nombres: [],
  };

  // Actualiza el número de participantes
  handleCantiJuga = (e) => {
    const participantes = parseInt(e.target.value) || 0;
    this.setState({
      participantes,
      nombres: Array(participantes).fill(""),
    });
  };

  // Actualiza los nombres de los jugadores
  handleNombreChange = (index, e) => {
    const nuevosNombres = [...this.state.nombres];
    nuevosNombres[index] = e.target.value;
    this.setState({ nombres: nuevosNombres });
  };
  // se hace una copia del array, se ingresan los datos y luego se reemplaza el array completo con el nuevo LO MEJOR

  // Enviar los datos de jugadores a App
  guardarJugadores = () => {
    const { nombres } = this.state; // destructuracion de valores JS explicado al final
    this.props.onGuardarJugadores(nombres); 
  };     // finalmente esta llamando a guardarJugadores = (jugadores) => { de la clase App.js

  muestraInputs = () => {
    return this.state.nombres.map((nombre, index) => (
      <div key={index}>
        <input
          type="text"
          placeholder={`Jugador ${index + 1}`}
          value={nombre}
          onChange={(e) => this.handleNombreChange(index, e)}
        />
      </div>
    ));
  };

  render() {
    return (
      <div>
        <h2>Configurar Jugadores</h2>

        <input type="number" placeholder="Nº jugadores" onChange={this.handleCantiJuga} />

        {this.muestraInputs()}

        <button onClick={this.guardarJugadores}>Guardar Jugadores</button>
      </div>
    );
  }
}


/*
const { nombres } = this.state; == const nombres = this.state.nombres;

La desestructuración simplemente permite escribir esto de forma más compacta y legible.
En este caso, this.state es el estado del componente, definido como:

state = {
  participantes: 0,
  nombres: [],
};

Esto significa que this.state es un objeto con las propiedades:

    participantes
    nombres

Cuando haces:

const { nombres } = this.state;

Estás diciendo: "Extrae la propiedad nombres de this.state y guárdala en una variable local llamada nombres".
*/



/* Explicación función map   

 El método map() no solo realiza una transformación en cada elemento de un array, sino que también recorre el array completo.
En este caso específico, this.state.nombres.map((nombre, index) => { ... }) hace lo siguiente:

Recorre el array nombres:
  Toma cada elemento del array nombres (almacenado en el estado de tu componente).
  Asigna el valor actual del elemento a la variable nombre.
  Asigna la posición del elemento dentro del array a la variable index.

Transforma cada elemento:
  Por cada elemento del array, crea un nuevo <div> con un <input> que tiene propiedades dinámicas:
    value={nombre}: Establece nombres.
    placeholder={Jugador ${index + 1}}: placeholder con índice del jugador.
    onChange={(e) => this.handleNombreChange(index, e)}: Maneja los cambios en el input, llamando a handleNombreChange para actualizar el estado.

  Retorna un nuevo array:
      map() devuelve un nuevo array que contiene los <div> generados con los <input> correspondientes.

Esto significa que sí, hace el recorrido del array, y mientras recorre, crea elementos transformados (los inputs) según el contenido de nombres.
Por ejemplo, si this.state.nombres tiene el siguiente valor:

['Juan', 'Pedro', 'Maria']

La ejecución de map() generará un array de JSX como este:

[
  <div key={0}>
    <input
      type="text"
      placeholder="Jugador 1"
      value="Juan"
      onChange={(e) => this.handleNombreChange(0, e)}
    />
  </div>,
  <div key={1}>
    <input
      type="text"
      placeholder="Jugador 2"
      value="Pedro"
      onChange={(e) => this.handleNombreChange(1, e)}
    />
  </div>,
  <div key={2}>
    <input
      type="text"
      placeholder="Jugador 3"
      value="Maria"
      onChange={(e) => this.handleNombreChange(2, e)}
    />
  </div>
]

Resumiendo:

    map() recorre todo el array.
    En cada iteración, genera un nuevo elemento basado en el contenido actual.
    Retorna un nuevo array transformado (en este caso, un array de JSX).


*/ 
