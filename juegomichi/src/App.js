import React from 'react';
import './App.css';
import Sumita from './Componentes/CountClase';

function App() {

  const[count, setCount]= React.useState(0);
  
  const increment=() => setCount(count+1);
  const decrement=() => setCount(count-1);


  return (
    <div className="App">
      <header className="App-header">

          <Sumita/>

        <h1>{count}</h1>
        <button onClick={increment}>increment</button>
        <button onClick={decrement}>increment</button>

     
      </header>
    </div>
  );
}

export default App;
