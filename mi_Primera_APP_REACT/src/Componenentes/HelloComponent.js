import React, {Component} from 'react'


class HelloComponent extends Component {
    state = {  } 

    render() { 
        return (
            <div>
               <h1>Hola {this.props.nombre} </h1> 
            </div>
        );
    }
}
 

export default HelloComponent;