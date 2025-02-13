import logo from './logo.svg';
import React, { useState } from 'react';
import { useEffect } from 'react';
import './App.css';

function App() {

  const[artista, setArtista] = useState('');
  const[titulo, setTitulo] = useState('');

  // si quiero que sea de 2 dimensiones
  const [tabla, setTabla] = useState([]); // array de 2 dimensiones vacío

  const getArtista = (e) => setArtista(e.target.value);
  const getTitulo = (e) => setTitulo(e.target.value);

  const misDatos =(artista, titulo)=>{

    fetch(`https://api.lyrics.ovh/v1/${artista}/${titulo}`)
    .then(response => response.json())
    .then(data => { 
      console.log(data)

    const lyrics = data.lyrics;
    console.log(lyrics)
    const nuevaTabla = [...tabla, [artista, titulo, lyrics]];
    setTabla(nuevaTabla);
  
  })
  
  }
  return (
    <div className="App">
      <header className="App-header">
        
        <input type="text" placeholder="Artista" onChange={getArtista}/>
        <input type="text" placeholder="Titulo" onChange={getTitulo}/>
        <button onClick={()=>misDatos(artista, titulo)}>Buscar</button> 
      
        <table>
          <thead>
            <tr>
              <th>Artista</th>
              <th>Titulo</th>
              <th>Letra</th>
            </tr>
          </thead>
          <tbody>
           
           {tabla.map((fila, index) => (
              <tr key={index}>
                <td>{fila[0]}</td>
                <td>{fila[1]}</td>
                <td>{fila[2]}</td>
              </tr>
            ))} 

          </tbody>
        </table>


      </header>
    </div>
  );
}


export default App;
