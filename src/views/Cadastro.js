import React, {useState, useLayoutEffect} from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native'
import Input from '../components/Input'
import * as LoginService from '../services/LoginService'

export default function Cadastro(props) {
    const {navigation} = props

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const [msg, setMsg] = useState("")

    const registrar = () => {

        LoginService.cadastro(email, password)
            .then(()=>{
                navigation.replace("Login")

            })

            .catch(erro =>{
                setMsg(erro)

            })

    }

    return (
        <View style={styles.container}>
            <Image
                style={styles.tinyLogo}
                source={require('../images/cadastro.png')}
            />
            <Text style={styles.title}>Cadastro de Usuários</Text>
            

            <Input
                placeholder="E-mail"
                value={email}
                setValue={setEmail}
                secureTextEntry = {false}
            />
            <Input
                placeholder="Password"
                value={password}
                setValue={setPassword}
                secureTextEntry = {true}
            />

            <View style={styles.botao}>

                <Button

                    title= "Cadastrar"
                    onPress={registrar}

                />
            </View>

            <Text style={ {color:'red', margin:5} }> {msg} </Text>

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
        marginBottom: 10,

    },


})
