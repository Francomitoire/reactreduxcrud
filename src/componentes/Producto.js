import React, { Component } from 'react';
import {Link} from 'react-router-dom';


import { connect } from 'react-redux';
import {eliminarProducto} from '../actions/productosActions';

class Producto extends Component {


    eliminarProducto = () => {
        const {id} = this.props.producto;
        this.props.eliminarProducto(id);
        
    }

    render() {
        const { id, nombre, precio } = this.props.producto;

        return (
            <li className="list-group-item">
                <div className="row justify-content-between align-items-center">
                    <div className="col-md-8 d-flex justify-content-between align-items-center">
                        <p className="m-0 text-dark">
                            {nombre}
                        </p>
                        <span className="badge badge-warning text-dark">
                           $ {precio}
                        </span>
                    </div>
                    <div className="col-md-4 justify-content-end d-flex acciones">
                        <Link to={`productos/editar/${id}`} className="btn btn-primary mr-2">Editar</Link>
                        <button type="button" onClick={this.eliminarProducto} className="btn btn-danger">Borrar</button>
                    </div>
                </div>
            </li>
        );
    }
}

export default connect(null, {eliminarProducto}) (Producto);