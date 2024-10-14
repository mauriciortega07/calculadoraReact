import React, { Component } from 'react';

class Resta extends Component {
    constructor(props){
        super(props);
        this.state = {
            active: true,
            resultado: undefined
        }

        this.restaClick = this.restaClick.bind(this);
    }

    restaClick = () => {
        console.log("Click Resta");
        
        const numOneRest = document.querySelector(".numOneRest").value;
        const newOneRest  = parseFloat(numOneRest);
        const numTwoRest  = document.querySelector(".numTwoRest").value;
        const newTwoRest  = parseFloat(numTwoRest);
                
        const resultadoRest  = (newOneRest  - newTwoRest );

        resultadoRest  && newOneRest  && newTwoRest  !== NaN ? this.setState({resultado: resultadoRest }) : alert("Ingresa un valor correcto");  
    }

    componentDidUpdate(prevState, prevProps){
        if(prevState !== this.state) {
            document.querySelector(".resultAreaRest").value = this.state.resultado;
        }

    }

    render(){
        return(
            <div>
                <h2>{this.props.title}</h2>
                <div>
                    <input type='number' placeholder='introduce un numero' className='numOneRest' required></input>
                    <h3>-</h3>
                    <input type='number' placeholder='introduce un numero' className='numTwoRest' required></input>
                    <button onClick={this.restaClick} >-</button>
                    <h3>=</h3>
                    <input type='text' placeholder='resultado' className='resultAreaRest'></input>

                </div>
            </div>
        )
    }

}

export default Resta;