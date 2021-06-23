import React from 'react'
import { View, Text, StyleSheet, TextInput, TextPropTypes } from 'react-native'

export default function Input(props){

    return(
        <View style={styles.caixaTexto}>

            <TextInput
      
                placeholder={props.placeholder}
                value = {props.value}
                onChangeText= {value => props.name ? props.setValue({[props.name]:value}) :  props.setValue(value)}
                secureTextEntry = {props.secureTextEntry}
    
            />

        </View>
    )

}

const styles = StyleSheet.create({
    caixaTexto: {
        borderWidth: 1,
        margin: 10,
        padding:3,
        paddingLeft:15,
        borderColor:"gray",
        borderRadius: 50,
        width:"80%",

    }

})