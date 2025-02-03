import React, { Component } from 'react';
 
 class Sumita extends Component {
    constructor(props) {
        super(props)
        this.state = { 
            numero: 0,
         }
        
    }

    incremente=()=>{
        let aux = this.state.numero+1
        this.setState({numero: aux})
    }

    render() { 
        return ( 
            <div>
                {this.state.numero}
                <button onClick={this.incremente}>suma</button>
            </div>
         );
    }
 }
  

 

 export default Sumita;