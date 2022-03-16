import React, { Component } from 'react';

class Primero extends Component {
    
    constructor(props)  {
        super(props);
        this.setState = {edad: this.props.edad}
    }

    aumentarEdad()  {
        const newEdad = this.setState.edad+1;
        this.setState({edad:newEdad});
    }


    render() {
        return (
            <div>
                <h1>hola    {this.props.nombre} {this.props.edad}  </h1>
                <h2>    {this.props.edad >20 ? "eres viejo": "eres joven"}  </h2>
                <h3> mi edad es {this.setState.edad} </h3>
                <button onClick={()=> this.aumentarEdad()} >Aumentar</button>
            </div>
        );
    }
}

export default Primero;
