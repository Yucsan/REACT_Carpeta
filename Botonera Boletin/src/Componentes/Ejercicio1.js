import React, { Component } from 'react';


class Ejercicio1 extends Component {
    constructor(props) {
        super(props);

          // sin usar state 
          this.num1 = React.createRef();
          this.num2 = React.createRef();
    }
    state = {
        resultadoSuma: 0
    }

    realizarSuma = () => {
        const num1 = parseFloat(this.num1.current.value)
        const num2 = parseFloat(this.num2.current.value)
    
        const suma = num1+num2
        this.setState({resultadoSuma: suma})
    }

    render() {

        const { cambiaEj } = this.props;

    

        return (
            <div>
                <h3>Ejercicio1</h3>

                <h2>{this.state.resultadoSuma}</h2>

                <input type="number" ref={this.num1} ></input>
                <input type="number" ref={this.num2} ></input>

                <button onClick={this.realizarSuma}>Sumar</button>

                <button onClick={() => cambiaEj("")}>
                    Volver al Home
                </button>
            </div>
        );
    }
}




export default Ejercicio1;