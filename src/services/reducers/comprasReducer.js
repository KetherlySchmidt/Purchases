import * as Actions from '../actions/index'

const initialState = []

const compras = function (state = initialState, action) {

    switch (action.type){
        case Actions.SET_COMPRAS_DATA:
            {
                return[
                    ...initialState,
                    ...action.payload
                ]
            }

            default:
                {
                    return state
                }
    }
}

export default compras;