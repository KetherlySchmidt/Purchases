import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

export default function Sobre() {
    return (
        <View>

            <Image
                style={styles.tinyLogo}
                source={require('../images/user.png')}
            />
            <Text style={styles.title}>Ketherly Schmidt</Text>
            <Text style={styles.texto}>Estudante de ciências da computação Imed</Text>
            <Text style={styles.texto}>1118663</Text>

        </View>
    )
}

const styles = StyleSheet.create({

    tinyLogo: {
        width: 50,
        height: 50,
        alignItems:'center',
        justifyContent: 'center',
        marginTop: 15,
        marginLeft:175,

    },

    title: {

        fontSize: 25,
        fontWeight: 'bold',
        alignItems:"center",
        paddingTop: 15,
        margin: 10,
        justifyContent:'center'
    },

    texto: {
        margin: 10,

    }
})
