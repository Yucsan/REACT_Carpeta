
class App extends Component {

    state = { 
    participantes: 0,
    nombres: [],
   };
  

   // Actualiza el número de participantes
  handlePart = (e) => {
    const participantes = parseInt(e.target.value) || 0; // Convierte a número, asegura que no sea NaN
    this.setState({
      participantes,
      nombres: Array(participantes).fill(""), // Rellena el array de nombres con valores vacíos
    });
  };

  // Maneja el cambio de texto de cada input dinámico
  handleNombreChange = (index, e) => {
    const nuevosNombres = [...this.state.nombres]; // Copia del array actual
    nuevosNombres[index] = e.target.value; // Actualiza el valor en la posición del índice
    this.setState({ nombres: nuevosNombres }); // Actualiza el estado
  };

  // Genera los inputs dinámicos
  renderInputs = () => {
    const { participantes, nombres } = this.state;

    return Array.from({ length: participantes }, (_, index) => (
      <div key={index}>
        <input
          type="text"
          placeholder={`Participante ${index + 1}`}
          value={nombres[index]} // Vincula cada input con el valor del array
          onChange={(e) => this.handleNombreChange(index, e)} // Maneja el cambio
        />
      </div>
    ));
  };

  // Imprime el array de nombres en la consola
  crearP = () => {
    console.log("Nombres de participantes:", this.state.nombres);
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <input
            type="number"
            onChange={this.handlePart}
            placeholder="Número de participantes"
          />
          <button onClick={this.crearP}>Crear Participantes</button>

          {/* Renderiza los inputs dinámicos */}
          {this.renderInputs()}
        </header>
      </div>
    );
  }
}
 
export default App;