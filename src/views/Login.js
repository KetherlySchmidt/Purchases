import React, {useState, useLayoutEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { View, Text, StyleSheet, Button, CheckBox, TouchableOpacity, Image } from 'react-native'
import Input from '../components/Input'
import * as LoginAction from '../services/actions/loginAction'
import { useSelector, useDispatch } from 'react-redux';

export default function Login(props){

    const [lembreme, setLembreme] = useState(false);

    const {navigation} = props
    const dispatch = useDispatch()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const [msg, setMsg] = useState("")

    useLayoutEffect(()=>{

        const getEmailAndPassord = async () => {

            let email = await AsyncStorage.getItem("email")
            let password = await AsyncStorage.getItem("password")

            if (email){ 
                setEmail (email)
                setLembreme(true)
            }
            if (password) setPassword (password)
            
        }

        getEmailAndPassord()


    }, [])


    const validar = async() => {

        try {
            await dispatch(LoginAction.login(email, password, lembreme))
            navigation.replace("Menu")
            
        } catch (error) {
            setMsg(error)
        }
            
    }

    return(
        <View style={styles.container}>
            <Image
                style={styles.tinyLogo}
                source={require('../images/login.png')}
            />

            <Text style={styles.title}>Login: </Text>
            <Text style={ {color:'red', margin:5} }> {msg} </Text>
            {/* <Text style={{color:"red"}}>{msg} </Text> */}
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

            <View style={styles.checkboxContainer}>

                <CheckBox
                value={lembreme}
                onValueChange={setLembreme}
                style={styles.checkbox}
                />
                <Text style={styles.label}>lembre-me</Text>


            </View>

            <View style={styles.botao}>

                <Button

                    title= "Login"
                    onPress={validar}

                />

            </View>

            <View>

                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate("Cadastro")}
                >
                    <Text>Cadastre-se</Text>
                </TouchableOpacity>

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

    checkboxContainer: {
        flexDirection: "row",
        marginBottom: 20,
    },
    checkbox: {
        alignSelf: "center",
    },
    label: {
        margin: 8,
    },

    button: {
        alignItems: "center",
        backgroundColor: "#DDDDDD",
        padding: 10,
        margin: 10,
    },

    title: {

        fontSize: 35,
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