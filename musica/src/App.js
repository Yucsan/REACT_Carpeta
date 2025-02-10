import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';

function App() {

  const[artista, setArtista] = useState('');
  const[titulo, setTitulo] = useState('');

  // si quiero que sea de 2 dimensiones
  const [tabla, setTabla] = useState([[]]); // array de 2 dimensiones vacío
  const [art, setArt] = useState('');
  const [lyr, setLetra] = useState('');

  const getArtista = (e) => setArtista(e.target.value);
  const getTitulo = (e) => setTitulo(e.target.value);

  const getArt =(e) => setArt(tabla[0][1])
  const getLetra =(e) => setLetra(tabla[1][1])

  const misDatos =(artista, titulo)=>{

    console.log(`https://api.lyrics.ovh/v1/${artista}/${titulo}`)

    fetch(`https://api.lyrics.ovh/v1/${artista}/${titulo}`)
    .then(response => response.json())
    .then(data => console.log(data))

    setTabla( [[tabla[0][1] = artista], [tabla[1][1] = titulo]] );
    console.log(tabla);

  }

  return (
    <div className="App">
      <header className="App-header">
        
        <input type="text" placeholder="Artista" onChange={getArtista}/>
        <input type="text" placeholder="Titulo" onChange={getTitulo}/>
        <button onClick={()=>misDatos(artista, titulo)}>Buscar</button> 
        <img src={logo} className="App-logo" alt="logo" />


      </header>
    </div>
  );
}

export default App;
