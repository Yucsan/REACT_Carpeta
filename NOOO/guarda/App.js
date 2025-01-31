import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      nombres:[],
      jugadores: 0,
      puntajes2: [[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0]],
      puntaje: [0,0,0,0,0,0],
      tiradas: 0
     }
  }

  actualizarJugadores=(e)=>{
    this.setState({
      jugadores: e.target.value
    })
  }

  pedirNombres =()=>{
    var nuevosNombres = []
    var aux = "";
    for(var i=0; i<this.state.jugadores; i++ ){
      aux = prompt(`nombre jugador ${i}`,``);

      if(aux){
        nuevosNombres.push(aux)
      }else{
        nuevosNombres.push(`jugador ${i+1} `)
      }

    }
    this.setState({
        nombres: nuevosNombres
    })
  }

  lanzarDados=()=>{


    var tirada = this.state.tiradas
    var auxResultados = this.state.puntajes2
    var resultados = []
    var aux = 0;

    for(var i=0; i<this.state.jugadores; i++ ){
      aux = Math.floor(Math.random()*6)+1
    
      
      
      auxResultados[i][0]= aux
    }
    console.log("resultados")
    console.log(auxResultados)


    this.setState({
        puntajes2: auxResultados
    })

  }

  fin=()=>{
    alert("fin")
  }

  render() { 
    return ( 
      <div className="App">
      <header className="App-header">
        
        <div>PANTALLA 1</div>

        <div> {this.state.jugadores} </div>
        

        <div className='botonera'>
          <label htmlFor="cantidad" >Nº Jugadores: </label>
          <select value={this.state.jugadores} onChange={this.actualizarJugadores}  id="cantidad">
            <option selected>Elige</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
          </select>
          <button onClick={this.pedirNombres}>Selecciona</button>
         <button onClick={this.lanzarDados}>JUGAR</button>
        </div>

        <table className='tabla'>
        <tbody>
          <tr>
            <th>Jugadores</th>
            <th>Puntos T1</th>
            <th>Puntos T2</th>
            <th>Puntos T3</th>
            <th>Puntos T4</th>
            <th>Puntuacion</th>
            <th>Media</th>

          </tr>

            {this.state.nombres.map( (valor, i)=> (
              <tr>
                <td key={i}>{valor}</td>

                { this.state.puntajes2.map( (val, inx) => (
                    <td key={inx} > {val[0]} </td>
                   )) }

              </tr> 

            ))}
          </tbody>
        </table>
       
        
 
      </header>
    </div>
     );
  }
}
export default App;
