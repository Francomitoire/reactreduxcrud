import {MOSTRAR_PRODUCTOS, MOSTRAR_PRODUCTO, ELIMINAR_PRODUCTO, AGREGAR_PRODUCTO, EDITAR_PRODUCTO} from '../actions/types';

const initialState = {
    productos: []
}

export default function(state = initialState, action) {
    switch(action.type) {
        case MOSTRAR_PRODUCTOS:
            return {
                ...state,
                productos: action.payload
            }
        case MOSTRAR_PRODUCTO:
            return {
                ...state,
                producto: action.payload
            }
        case AGREGAR_PRODUCTO:
            return {
                ...state,
                productos: [...state.productos, action.payload]
            }
        case EDITAR_PRODUCTO:
            return {
                ...state,
                productos: state.productos.map(
                    producto => (producto.id === action.payload) ?
                    producto = action.payload :
                    producto
                )
            }
        case ELIMINAR_PRODUCTO:
            return {
                ...state,
                productos: state.productos.filter(producto => producto.id !== action.payload)
            }
        default:
            return state;
    }
}