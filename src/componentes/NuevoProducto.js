import React, { Component } from 'react';


import { connect } from 'react-redux';
import {agregarProducto} from '../actions/productosActions';


class NuevoProducto extends Component {

    state = {
        nombre: '',
        precio: '',
        error: false,
    }
    

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    nuevoProducto = e => {
        e.preventDefault();
        const {nombre, precio} = this.state;
        if(nombre === '' || precio === '') {
            this.setState({
                error: true,
            });
            return;
        }
        
        this.setState({
            error: false,
        });

        const producto = {
            nombre,
            precio 
        }

        this.props.agregarProducto(producto);
        console.log(this.props.history);
        this.props.history.push('/');
    }

    render() {
        const {error} = this.state
        return (
            <div className="row justify-content-center mt-5">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-body">
                            <h2 className="text-center">Agregar Nuevo Producto</h2>
                            <form onSubmit={this.nuevoProducto}>
                                <div className="form-group">
                                    <label>nombre</label>
                                    <input type="text" onChange={this.handleChange} name="nombre" className="form-control" placeholder="nombre" />
                                </div>
                                <div className="form-group">
                                    <label>Precio del Producto</label>
                                    <input type="text" onChange={this.handleChange} name="precio" className="form-control" placeholder="Precio" />
                                </div>
                                <button type="submit" className="btn btn-primary font-weight-bold text-uppercase d-block w-100">Agregar</button>
                            </form>
                            { error ? 
                                <div className="font-weight-bold alert alert-danger text-center mt-4">
                                    Todos los campos son obligatorios
                                </div> :
                                ''

                            }
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(null, {agregarProducto}) (NuevoProducto);