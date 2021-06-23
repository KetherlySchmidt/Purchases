import React, {useState, useLayoutEffect} from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native'
import Input from '../components/Input'
import * as ComprasAction from '../services/actions/comprasAction'
import * as CompraAction from '../services/actions/compraAction'
import { useSelector, useDispatch } from 'react-redux';
import * as Location from "expo-location"




export default function CadastroCompras(props) {

    const dispatch = useDispatch()

    const {navigation} = props

    const [msg, setMsg] = useState("")

    const[form, setForm] = useState({

        produto: " ",
        valor: " "

    })

    const atualizaForm = (field) => setForm(oldValue => Object.assign({}, oldValue, field))

    useLayoutEffect(() => {

        const dados = props.route.params

        if (dados) setForm(dados)

        const acesso = async() =>{

            let {status} = await Location.requestForegroundPermissionsAsync()
            if(status !== 'granted'){
                setMsg("GPS não habilitado")
                return
            }
        }

        acesso()

    }, [])


    const validar = () =>{

        let campos = Object.getOwnPropertyNames(form)
        for (const campo of campos){
            if(form[campo] == " " || form[campo] == null)
            return false
        }

        return true
    }
    
    const cadastrar = async () => {

        if (validar()){
            try {
                await dispatch(CompraAction.save(form))
                navigation.navigate("Menu")
                
            } catch (error) {
                setMsg(error)
                
            }
            
    
            
        }

        else{
            
        }       
    }

    return (
        <View style={styles.container}>
            <Image
                style={styles.tinyLogo}
                source={require('../images/compras.png')}
            />
            <Text style={styles.title}>Cadastro de compras</Text>

            <Input
                placeholder="Produto"
                value={form.produto}
                setValue={atualizaForm}
                secureTextEntry = {false}
                name = "produto"
            />

            <Input
                placeholder="Valor"
                value={form.valor}
                setValue={atualizaForm}
                secureTextEntry = {false}
                name = "valor"
                keyboardType = "numeric"
            />

            <View style={styles.botao}>

                <Button

                    title= "Salvar"
                    onPress={cadastrar}
                />
            </View>
            <View>
                <Text> {msg} </Text>

            </View>

        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent:'center'
    },

    botao:{

        borderRadius:50,
        width:"80%",
        margin:5,
    },

    title: {

        fontSize: 20,
        fontWeight: 'bold',
    },

    tinyLogo: {
        width: 50,
        height: 50,
        alignItems:'center',
        justifyContent: 'center',
        marginTop: 15,
        marginLeft:10,
        marginBottom:10

    },
})
