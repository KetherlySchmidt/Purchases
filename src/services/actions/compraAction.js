import db from "../ConectFirebase";

import * as ComprasAction from './comprasAction'
import * as Location from "expo-location"

const collection = "Compra"

export const SET_COMPRA_DATA = "SET_COMPRA_DATA"
export const CLEAR_COMPRA_DATA = "CLEAR_COMPRA_DATA"

export const get =(id) => async (dispatch, getState) => {

    try {

        let dados = await db.collection(collection).doc(id).get()
        let objeto = Object.assign({}, dados.data(), {id: dados.id})
        return dispatch({

            type: SET_COMPRA_DATA,
            payload: objeto
        })
        
    } catch (error) {
        throw error.message
    }
}

export const clear =() => async (dispatch, getState) => {

    return dispatch({
        type: CLEAR_COMPRA_DATA,

    })
            
}

export const save =(param) => async (dispatch, getState) => {

    try {

        let id = param.id
        delete param.id

        let coordenadas = await Location.geocodeAsync(param.produto)
        if(coordenadas.length>0){
            param.latitude = coordenadas[0].latitude
            param.longitude = coordenadas[0].longitude
        }

        if(id){
            await db.collection(collection).doc(id).update(param)

        }else{
            await db.collection(collection).add(param)

        }

        return dispatch (ComprasAction.getList())
        
    } catch (error) {
        throw error.message
    }
}

export const remove =(id) => async (dispatch, getState) => {

    try {

       await db.collection(collection).doc(id).delete()
       return dispatch (ComprasAction.getList())
        
    } catch (error) {
        throw error.message
    }
}
