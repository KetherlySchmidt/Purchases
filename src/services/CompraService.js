import db from "../services/ConectFirebase"

const collection = "Compra"

export const save = (param) => {

    return new Promise((resolve, reject) => {

        let id = param.id
        delete param.id

        if (id){
            
            db.collection(collection)
                .doc(id)
                .update(param)
                .then(()=>{
                    resolve()

                })
                .catch((erro) =>{

                    reject(erro)
                })

        }else{

            db.collection(collection)
                .add(param)
                .then(()=>{
                    resolve()

                })
                .catch((erro) =>{

                    reject(erro)
                })

        }

    })
    

}

export const get = () => {

    return new Promise((resolve, reject) => {
        db.collection(collection)
            .get()
            .then((dados)=>{
                let lista = []
                dados.forEach(item=>{

                    let objeto = Object.assign({}, item.data(), {id: item.id})
                    lista.push(objeto)

                })

                
                resolve(lista)

            })
            .catch((erro) =>{

                reject(erro)
            })
    })
    

}

export const del = (id) => {

    return new Promise((resolve, reject) => {
        db.collection(collection)
            .doc(id)
            .delete()
            .then(()=> resolve())
            .catch((erro) =>{

                reject(erro)
            })
    })
    

}
