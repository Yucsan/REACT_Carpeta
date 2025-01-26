import React, { Component } from 'react';

import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
  }
  state = {
    text1: ''
  }

  handleText =(e)=>{
   
    this.setState({
      text1: e.target.value
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">

          <input type="text" onChange={ this.handleText } value={this.state.text1} />
          <input type="text" onChange={ this.handleText }  value={this.state.text1} />

        </header>
      </div>
    );
  }
}
export default App;
