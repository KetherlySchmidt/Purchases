import AsyncStorage from "@react-native-async-storage/async-storage"
import firebase from "firebase"

export const login = (email, password, lembreme) => {

    return new Promise((resolve, reject) => {

        if (!lembreme) {
            AsyncStorage.removeItem(email)
            AsyncStorage.removeItem(password)

        }

        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then(() => {

                if (lembreme) {
                    AsyncStorage.setItem("email", email)//para colocar e armazenar o usuario
                    AsyncStorage.setItem("password", password)
                }
                resolve()
            })

            .catch((erro) => {
                reject(erro.message)

            })

    })

}

export const cadastro = (email, password) => {

    return new Promise((resolve, reject) => {
        firebase.auth().createUserWithEmailAndPassword(email, password)

            .then(() => {
                resolve()
               
            })
            .catch((erro) => {

                reject(erro.message)
            });
    })
    


}