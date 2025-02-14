import React, { Component } from 'react';


class Ejercicio1 extends Component {
    constructor(props) {
        super(props);
    }
    state = {
        resultadoSuma: 0
    }
    render() {

        const { cambiaEj } = this.props;

        // sin usar state 
        const num1 = React.createRef();
        const num2 = React.createRef();

        const realizarSuma = () => {
            const num1 = parseFloat(this.num1.current.value)
            const num2 = parseFloat(this.num2.current.value)
        
            const suma = num1+num2
            this.state.resultadoSuma = suma 
        }

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