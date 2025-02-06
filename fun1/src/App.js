import './App.css';
import React, { useState } from 'react';
import Ejer2 from './Componentes/ejer2';

function App() {
  const [suma, setSuma] = useState(0);
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [diaSeleccionado, setDiaSeleccionado] = useState("sin seleccion");

  const opera = () => setSuma(parseFloat(num1) + parseFloat(num2));
  const getNum1 = (e) => setNum1(e.target.value);
  const getNum2 = (e) => setNum2(e.target.value);

  // Función para manejar el día seleccionado en el componente padre
  const manejarDia = (dia) => {
    setDiaSeleccionado(dia);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h2>{suma}</h2>
        <input type="number" onChange={getNum1} placeholder="num1"></input>
        <input type="number" onChange={getNum2} placeholder="num2"></input>
        <button onClick={opera}>suma</button>

        <h2>{diaSeleccionado}</h2> {/* Mostrar el día seleccionado aquí */}

        {/* Pasamos la función manejarDia como prop al componente hijo */}
        <Ejer2 manejarDia={manejarDia} />
      </header>
    </div>
  );
}

export default App;
