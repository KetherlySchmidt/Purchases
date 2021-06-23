import * as Actions from '../actions'
import compras from './comprasReducer'

const initialState = {}

const compra = function(state = initialState, action){
    switch(action.type){
        case Actions.SET_COMPRA_DATA:
            {
                return{
                    ...action.payload
                }
            }
        case Actions.CLEAR_COMPRA_DATA:
            {
                return{}
            }
        
        default:
            {
                return state
            }
    }
}

export default compra;