import React, { Component } from 'react';
import Header from './componentes/Header';
import Formulario from './componentes/Formulario';

class App extends Component {

  state ={
    citas:[]
  }

  crearCita = (IngresarCita) =>{
    const citas = [...this.state.citas,IngresarCita];
    console.log(citas);

    this.setState({
      citas: citas
    })
  }

  render() {
    return (
      <div className="container">
        <Header
          titulo="Administrador de veterinaria."
        />
        <div className="row">
          <div className="col-md-6">
            <Formulario
            crearCita ={this.crearCita}
            ></Formulario>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
