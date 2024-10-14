import React, { Component } from 'react';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: null,
        }

    } 

    componentDidMount(){
        const getDate = new Date();
        setTimeout(()=>{
            let day = getDate.toDateString();
            this.setState({date: day});
        }, 1000);
    }

    

    render() {
        return (
            <header>
                <h1>Bienvenido a la {this.props.appName}</h1>
                <p>Hoy es: {this.state.date}</p>
            </header>
        )
    }
}

export default Header;