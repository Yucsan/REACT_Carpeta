import React, { Component } from 'react';


class Ejercicio2 extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 

        const {cambiaEj} = this.props

        return ( 
            <div>
                <div>Ejercicio2</div>
                <button onClick = {()=> cambiaEj("") }>
                    Volver al Home
                </button>
            </div> 
         );
    }
}
 


export default Ejercicio2;