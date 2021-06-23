import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function Modelo() {
    return (
        <View>
            <Text style={{fontSize: 25, fontWeight: 'bold', marginTop: 15, marginLeft: 15}}>EXPO</Text>

            <Text style={styles.texto}> O modo foi escolhido pela sua forma rápida 
                de facilitade de desenvolvimento e construção 
                de aplicativos multiplataformas</Text>

            <Text style={styles.texto}>Expo é a maneira mais rápida de construir apps.</Text>
        </View>
    )
}

const styles = StyleSheet.create({

    texto: {
        marginLeft: 12,
        margin: 10,

    }

})
