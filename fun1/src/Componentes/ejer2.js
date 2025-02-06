import React, { useState } from 'react';

function Ejer2({ manejarDia }) {
  const [dia, setDia] = useState("sin seleccion");

  const getDia = (e) => {
    const diaSeleccionado = e.target.value;
    setDia(diaSeleccionado);
    
    // Llamamos a la función pasar como prop para actualizar el estado en el componente padre
    manejarDia(diaSeleccionado);
  };

  return (
    <div>
      <h2>{dia}</h2>

      <label htmlFor="dias">Escoge 1 día</label>
      <select name="dias" id="dias" onChange={getDia}>
        <option value="Lunes">Lunes</option>
        <option value="Martes">Martes</option>
        <option value="Miercoles">Miércoles</option>
        <option value="Jueves">Jueves</option>
        <option value="Viernes">Viernes</option>
        <option value="Sabado">Sábado</option>
        <option value="Domingo">Domingo</option>
      </select>
    </div>
  );
}

export default Ejer2;
