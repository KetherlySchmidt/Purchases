import AsyncStorage from "@react-native-async-storage/async-storage"
import firebase from "firebase"

export const SET_LOGIN_DATA = "SET_LOGIN_DATA"
export const CLEAR_LOGIN_DATA = "CLEAR_LOGIN_DATA"

export const login =(email, password, lembreme) => async (dispatch, getState) => {

    try {

        if (!lembreme) {
            AsyncStorage.removeItem(email)
            AsyncStorage.removeItem(password)

        }

        await firebase
            .auth()
            .signInWithEmailAndPassword(email, password)

                if (lembreme) {
                    AsyncStorage.setItem("email", email)//para colocar e armazenar o usuario
                    AsyncStorage.setItem("password", password)
                }

                let usuario = {
                    email
                }

                return dispatch({
                    type: SET_LOGIN_DATA,
                    payload: usuario


                })
        
    }
    
    catch (error) {
        throw error.message
        
    }

}

export const logoff =() => async (dispatch, getState) => {

    return dispatch({
        type: CLEAR_LOGIN_DATA,

    })
            
}

export const saveNewUser =(email, password) => async (dispatch, getState) => {

    try {

        await firebase.auth().createUserWithEmailAndPassword(email, password)

    } catch (error) {
        throw error.message
    }
}
