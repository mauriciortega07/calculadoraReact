import React,{ Component } from "react";

class CelciusToFarenheit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active: true,
            resultadoFarenheit: 32,
        }

        this.convertCelciusToFarenheit = this.convertCelciusToFarenheit.bind(this);
    }

    convertCelciusToFarenheit = () => {
        const getCelcius = document.querySelector(".numCelcius").value;
        const celcius = parseFloat(getCelcius);
        const resultadoFar = ((celcius * 9/5) + 32);

        getCelcius && resultadoFar !== NaN ? this.setState({resultadoFarenheit: resultadoFar}) : alert("Ingresa un valor correcto")
        
    }

    componentDidUpdate(prevState, prevProps) {
        if(prevState !== this.state) {
            document.querySelector(".resultAreaF").value = this.state.resultadoFarenheit
        }
    }




    render(){
        return(
            <div>
                <h2>{this.props.title}</h2>
                <div>
                    <input type='number' placeholder='introduce los °Celcius' className='numCelcius' required></input>
                    <button onClick={this.convertCelciusToFarenheit} >Convertir</button>
                    <h3>=</h3>
                    <input type='text' placeholder='resultado en °Farenheit' className='resultAreaF' defaultValue={this.state.resultadoFarenheit}></input>
                </div>
            </div>
        )
    }
}

export default CelciusToFarenheit;