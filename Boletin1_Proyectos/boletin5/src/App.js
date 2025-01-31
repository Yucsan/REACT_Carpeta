import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
  }
  state = { 
    recoge: 4
   }

   asigna = ()=> {
    const dado = Number(Math.floor(Math.random()*6)+1);
    this.setState({
      recoge: dado
    });
   }

   render() { 
    return ( 
    <div className="App">
      <header className="App-header">
        <div>dado: {this.state.recoge}</div>
          <button onClick={this.asigna} >genera</button>
      </header>
    </div> 
    );
  }




}
 
export default App;
