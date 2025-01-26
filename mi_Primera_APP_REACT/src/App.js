//imrc
import React, { Component } from 'react'; // para la class
import logo from './logo.svg';
import './App.css';
import HelloComponent  from './Componenentes/HelloComponent';
import InputComponent from './Componenentes/InputComponent';

// recuerda que App es un componente Statefull en este ejemlo
// y se comunica con sus hijos mediantes props -- propiedades
class App extends Component {

  constructor(){
    super()
    this.state={
      name: 'Sin Nombre'
    }
  }

  render(){
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

                        {/* envio de parametro a componente */}
        <HelloComponent nombre={this.state.name}></HelloComponent>
        <InputComponent nombre={this.state.name} cambiarNombre={this.changeName} />
        {/* <input value={this.state.name} onChange={this.changeName}></input> */}


      </header>
    </div>
  );
}

changeName=(event)=>{
  this.setState({
    name: event.target.value
  })
}





}
export default App;

//-----------------------------

/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <HelloComponent></HelloComponent>
        
      </header>
    </div>
  );
}

export default App;
*/
