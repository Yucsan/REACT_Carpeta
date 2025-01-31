import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      nombres:[],
      jugadores: 0,
      tablero2: [],
      tablero: [["nombre1",0,0,0,0,0,0],["nombre2",0,0,0,0,0,0],["nombre3",0,0,0,0,0,0],["nombre4",0,0,0,0,0,0]],
      puntaje: [0,0,0,0,0,0],
      tiradas: 0,
      fin: false,
      ganadores:[]
     }
  }

  actualizarJugadores=(e)=>{
    this.setState({
      jugadores: e.target.value
    })
  }

  pedirNombres =()=>{

    var nuevostablero = []
    var modelo = ["nombre1",0,0,0,0,0,0]

    var aux = "";
    for(var i=0; i<this.state.jugadores; i++ ){
      aux = prompt(`nombre jugador ${i}`,`Jugador${i+1}`);

      if(aux){
        modelo[0]=aux
        nuevostablero.push(modelo)
      }
      modelo = ["nombre1",0,0,0,0,0,0]
    }

    this.setState({
      tablero2: nuevostablero
    })
  }

  lanzarDados=()=>{

    var tirada = this.state.tiradas
    var nuevoTablero = []
    var aux = 0;
    var modelo = []
    var puntaje = 0;
    var media = 0;


    if (tirada < 5){
      for(var i=0; i<this.state.jugadores; i++ ){
        modelo = this.state.tablero2[i]
        aux = Math.floor(Math.random()*6)+1
        modelo[tirada+1] = aux
        puntaje = modelo[6]+aux
        modelo[6] = puntaje
        nuevoTablero.push(modelo)
        if (tirada !== 0)
          media = (puntaje/tirada).toFixed(2)
        else
          media = puntaje
        modelo[7]=media
      }
  
      this.setState({
        tiradas: this.state.tiradas+1,
        tablero2: nuevoTablero
      })
    }else{
      this.fin()
    }

  }

  fin=()=>{
    var valores = this.state.tablero2
    var puntajesFinales =[]
    //let puntajesFinales = valores.map(fila => fila[6]); // Extraer puntuaciones finales
    for(var i=0; i<valores.length; i++){
      puntajesFinales.push(valores[i][6]);
    }

    let max = Math.max(...puntajesFinales); // Encuentra el valor máximo
    let maxValues = puntajesFinales.filter(num => num === max); // Filtra todas las ocurrencias del máximo
  
    // Obtener los ganadores
    let ganadores = valores.map((fila, index) => ({ nombre: fila[0], puntaje: fila[6], indice: index }))
      .filter(jugador => jugador.puntaje === max);

    this.setState({
      fin: true,
      ganadores: ganadores
    });
  }

  render() { 
    return ( 
      <div className="App">
      <header className="App-header">
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
            <th>Puntos T5</th>
            <th>Puntuacion</th>
            <th>Media</th>
          </tr>

            {this.state.tablero2.map( (fila, i)=> (
              <tr key={i}>
                {fila.map( (dato,inx)=>(
                    <td key={inx}>{dato}</td>
                  ))}
              </tr>  
            ))}

            {this.state.fin && 
              <div>
                <h2>Ganador(es):</h2>
                {this.state.ganadores.map((ganador, i)=>(
                  <div key={i}>{ganador.nombre} con {ganador.puntaje} puntos</div>
                ))}
              </div>
            
            }
          </tbody>
        </table>
       
        
 
      </header>
    </div>
     );
  }
}
export default App;
