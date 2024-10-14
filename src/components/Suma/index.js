import React, { Component } from 'react';

class Suma extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active: true,
            resultado: undefined
        }

        this.sumaClick = this.sumaClick.bind(this);
    }

    sumaClick = () => {
        console.log("Click Suma");
        
        const numOneSuma = document.querySelector(".numOneSuma").value;
        const newOneSuma = parseFloat(numOneSuma);
        const numTwoSuma = document.querySelector(".numTwoSuma").value;
        const newTwoSuma = parseFloat(numTwoSuma);
        
        const resultadoSuma = (newOneSuma + newTwoSuma);

        resultadoSuma && newOneSuma && newTwoSuma !== NaN ? this.setState({resultado: resultadoSuma}) : alert("Ingresa un valor correcto");  
    }

    componentDidUpdate(prevState, prevProps){
       if (prevState !== this.state){
        document.querySelector(".resultAreaSuma").value = this.state.resultado;
       }
    }

    render(){
        return(
            <div>
                <h2>{this.props.title}</h2>
                <div>
                    <input type='number' placeholder='Introduce un numero' className='numOneSuma' required></input>
                    <h3>+</h3>
                    <input type='number' placeholder='Introduce un numero' className='numTwoSuma' required></input>
                    <button onClick={this.sumaClick}>+</button>
                    <h3>=</h3>
                    <input type='text' placeholder='resultado' className='resultAreaSuma'></input>
                </div>
            </div>
        )
    }
}

export default Suma;