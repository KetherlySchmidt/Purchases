import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

export default function FAQ() {
    return (
        <View>
            <Image
                style={styles.tinyLogo}
                source={{
                uri: 'https://4netweb.com.br/wp-content/uploads/2019/02/faqk.png',
                }}
            />

            <Text style={styles.title}>O que é o app?</Text>
            <Text style={styles.texto}>Aplicativo para cadastro de compras realizadas</Text>

            <Text style={styles.title}>Como realizar o cadastro de uma compra?</Text>
            <Text style={styles.texto}>Basta clicar no botão 'Adicionar compra' e preencher o nome do produto e o seu valor</Text>

            <Text style={styles.title}>O que a função mapa faz?</Text>
            <Text style={styles.texto}>Pega a sua localização atual e informa</Text>

            <Text style={styles.title}>Posso excluir uma compra cadastrada?</Text>
            <Text style={styles.texto}>Sim, basta clicar no botão para exclui-la</Text>

            <Text style={styles.title}>Como edito a minha compra?</Text>
            <Text style={styles.texto}>Clica em cima da dascrição da compra ele já irá direcionar para a edição</Text>
        </View>
    )
}

const styles = StyleSheet.create({

    tinyLogo: {
        width: 50,
        height: 50,
        alignItems: "center",
        width:"15%",
        marginLeft: 175,
        marginTop: 15,


        
    },

    title: {

        fontSize: 15,
        fontWeight: 'bold',
        alignItems:"center",
        paddingTop: 15,
        margin: 10,
    },

    texto: {
        margin: 10,

    }

})
