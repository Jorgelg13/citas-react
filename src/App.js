import React, { Component } from 'react';
import Header from './componentes/Header';
import Formulario from './componentes/Formulario';
import Lista from './componentes/Lista';

class App extends Component {

  state ={
    citas:[]
  }

  componentDidMount(){
    console.log('Esta listo')
    const citasLocalStorage = localStorage.getItem('citas');
    if(citasLocalStorage){
      this.setState({
        citas: JSON.parse(citasLocalStorage)
      })
    }
  }

  componentWillMount(){
    console.log('yo me ejecuto antes');
  }

  componentWillUnmount(){
    console.log('yo hasta que cierra el componente');
  }

  componentDidUpdate(){
    console.log('algo cambio');
    localStorage.setItem(
      'citas',
      JSON.stringify(this.state.citas)
    )
  }

  crearCita = (IngresarCita) =>{
    const citas = [...this.state.citas,IngresarCita];
    console.log(citas);

    this.setState({
      citas: citas
    })
  }

  borrarCita = id =>{
    //obtener copia del state
    const citasActuales = [...this.state.citas];
    //borrar el elemento del state
    const citas = citasActuales.filter(lista => lista.id !== id);
    //actualizar el state
    this.setState({
      citas
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
          <div className="col-md-6">
            <Lista
              citas ={this.state.citas}
              borrarCita ={this.borrarCita}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
