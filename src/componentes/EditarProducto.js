import React, { Component } from 'react';


import { connect } from 'react-redux';
import {mostrarProducto, editarProducto} from '../actions/productosActions';


class EditarProducto extends Component {

    state = {
        nombre: '',
        precio: '',
        error: false,
    }
    
    componentDidMount() {
        const {id} = this.props.match.params;
        
        this.props.mostrarProducto(id);

    }

    //se ejecuta cuando recibe las props
    componentWillReceiveProps(nextProps, nextState) {
        const {nombre, precio} = nextProps.producto;
        this.setState({
            nombre,
            precio
        })
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    editarProducto = e => {
        e.preventDefault();
        const {nombre, precio} = this.state;
        const {id} = this.props.match.params;
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
            id,
            nombre,
            precio 
        }

        this.props.editarProducto(producto);
        this.props.history.push('/');
    }

    render() {
        const {nombre, precio, error} = this.state;

        return (
            <div className="row justify-content-center mt-5">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-body">
                            <h2 className="text-center">Agregar Nuevo Producto</h2>
                            <form onSubmit={this.editarProducto}>
                                <div className="form-group">
                                    <label>nombre</label>
                                    <input type="text" onChange={this.handleChange} name="nombre" className="form-control" placeholder="nombre" defaultValue={nombre}/>
                                </div>
                                <div className="form-group">
                                    <label>Precio del Producto</label>
                                    <input type="text" onChange={this.handleChange} name="precio" className="form-control" placeholder="Precio" defaultValue={precio}/>
                                </div>
                                <button type="submit" className="btn btn-primary font-weight-bold text-uppercase d-block w-100">Guardar cambios</button>
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

const mapStateToProps = state => ({
    producto: state.productos.producto
})

export default connect(mapStateToProps, {mostrarProducto, editarProducto}) (EditarProducto);