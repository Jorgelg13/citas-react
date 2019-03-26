import React, { Component } from 'react';
import uuid from 'uuid';

class Formulario extends Component {

    //creando refs
    nombreMascota = React.createRef();
    nombreDueno = React.createRef();
    fecha = React.createRef();
    hora = React.createRef();
    sintomas = React.createRef();

    state = { 
        error:false
     }

    crearNuevaCita = (e) => {
        e.preventDefault();

        const mascota = this.nombreMascota.current.value,
            propietario = this.nombreDueno.current.value,
            fecha = this.fecha.current.value,
            hora = this.hora.current.value,
            sintomas = this.sintomas.current.value;

        if (mascota === '' || propietario === '' || fecha === '' || hora === '' || sintomas === '') {
            this.setState({
                error: true
            })
        } else {
            const nuevaCita = {
                id: uuid(),
                mascota: mascota,
                propietario: propietario,
                fecha: fecha,
                hora: hora,
                sintomas: sintomas
            }

            //se eniva el objeto hacia el padre para actualizar el state
            this.props.crearCita(nuevaCita);

            //reiniciar el formulario
            e.currentTarget.reset();

            this.setState({
                error: false
            })
        }
    }

    render() { 
        const existeError = this.state.error;
        return ( 
            <div className="card mt-5">
              <div className="card-body">
                 <h2 className="card-title text-center mb-5">Agregar las citas aqui</h2>
                  <form onSubmit={this.crearNuevaCita}>
                    <div className="form-group row">
                        <label className="col-sm-4 col-lg-2 col-form-label">Nombre Mascota</label>
                        <div className="col-sm-8 col-lg-10">
                            <input type="text" className="form-control" placeholder="Nombre Mascota" ref={this.nombreMascota} />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-4 col-lg-2 col-form-label">Nombre Dueño</label>
                        <div className="col-sm-8 col-lg-10">
                            <input type="text" className="form-control"  placeholder="Nombre Dueño de la Mascota" ref={this.nombreDueno} />
                        </div>
                    </div>

                    <div className="form-group row">
                        <label className="col-sm-4 col-lg-2 col-form-label">Fecha</label>
                        <div className="col-sm-8 col-lg-4  mb-4 mb-lg-0">
                            <input type="date" className="form-control" ref={this.fecha} />
                        </div>                            

                        <label className="col-sm-4 col-lg-2 col-form-label">Hora</label>
                        <div className="col-sm-8 col-lg-4">
                            <input type="time" className="form-control" ref={this.hora} />
                        </div>
                    </div>

                    <div className="form-group row">
                        <label className="col-sm-4 col-lg-2 col-form-label">Sintomas</label>
                        <div className="col-sm-8 col-lg-10">
                            <textarea  className="form-control" ref={this.sintomas}></textarea>
                        </div>
                    </div>
                    <div className="form-group row justify-content-end">
                        <div className="col-sm-3">
                            <button type="submit" className="btn btn-success w-100">Agregar</button>
                        </div>
                    </div>
                </form>
                {existeError? <div className="alert alert-danger">Todos los campos son requeridos</div> : '' }
              </div>
            </div>
         );
    }
}
 
export default Formulario;