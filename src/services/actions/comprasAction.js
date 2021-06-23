import db from '../ConectFirebase'

const collection = "Compra"

export const SET_COMPRAS_DATA = 'SET_COMPRAS_DATA'

export const getList = () => async(dispatch, getState) => {

    try {

        let dados = await db.collection(collection).get()

        let lista = []

        dados.forEach(item => {

            let objeto = Object.assign({}, item.data(), {id: item.id})
            lista.push(objeto)

        })

        return dispatch({

            type: SET_COMPRAS_DATA,
            payload: lista
        })
        
    } catch (error) {
        throw error.message
        
    }

}