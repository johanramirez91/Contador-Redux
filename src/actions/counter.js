
import { counter as CounterTypes } from '../constants/actionTypes'


export const incrementarContador = () => (dispatch) => {
    dispatch({
        type: 'counter/INCREMENTAR'
    })
}

export const decrementarContador = () => (dispatch) => {
    dispatch({
        type: 'counter/DECREMENTAR'
    })
}

export default{
    incrementarContador,
    decrementarContador,
}