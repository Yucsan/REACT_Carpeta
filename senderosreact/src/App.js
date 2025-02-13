import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [tabla, setTabla] = useState([]); //Recogemos los datos en el state tabla
/*
  En el archivo package.json,hemos añadido lo siguiente al final del archivo:

    },
  "proxy": "http://172.25.9.230:8090"

}

luego en la maquina vrirtual para obtener la ip se ejecuta el comando ip a para obtener la ip de la maquina virtual
para que funcione tiene que estar corriendo el servidor en la maquina virtual
*/

  const obtenerDatos = () => {
    fetch(`/apirestSendero/sendero`)  // Hacemos la petición a la API que es un endpoint de la API
      .then(response => response.json())
      .then(data => {
        // rescatar lo datos de la respuesta
        setTabla(data); // rescata los datos de la respuesta y los guarda en la variable tabla
        //console.log(data)
      })
      .catch(error => console.error('Error al obtener los datos:', error));
  };

  console.log(tabla)
  return (
    <div >
      <h1>Datos de la API</h1>
      <button onClick={obtenerDatos}>Obtener más datos</button>
      <table id="customers">
      <thead>
        <tr>
          <th>ID</th>
          <th>Nombre</th>
          <th>Distancia</th>
        </tr>
      </thead>
      <tbody>
        {tabla.map((fila, index) => (
          <tr key={index}>
            <td>{fila.id}</td>
            <td>{fila.nombre}</td>
            <td>{fila.distancia}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
}

export default App;
