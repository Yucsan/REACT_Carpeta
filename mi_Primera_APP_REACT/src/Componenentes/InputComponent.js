import React, { Component } from 'react';


export default class InputComponent extends Component {
    state = {  } 
    render() { 
        return (
            <div>
                <input value={this.props.nombre} onChange={this.props.cambiarNombre}></input>
            </div>
        );
    }
}
 
