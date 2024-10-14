import React,{Component} from "react";
import Suma from "../Suma";
import Resta from "../Resta";
import CelciusToFarenheit from "../Temperatura";

class Main extends Component {
    constructor(props){
        super(props);
        this.state = {
            active: true,
        }
    }

    render(){
        return(
            <main>
                <Suma title = 'Sumas'/>
                <Resta title = 'Restas'/>
                <CelciusToFarenheit title = "Covertidor de °C a °F"/>
            </main>
            
        )
    }
}

export default Main;