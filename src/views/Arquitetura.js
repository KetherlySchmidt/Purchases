import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

export default function Arquitetura() {
    return (
        <View>

            <Text style={{fontSize: 25, fontWeight: 'bold', marginTop: 15, marginLeft: 15}}>Arquitetura de Software</Text>

            <Text style={styles.title}>src</Text>
            <Text style={styles.texto}>É a pasta mais importante de um projeto, é ela que organiza e estrutura todo o projeto</Text>

            <Text style={styles.title}>components</Text>
            <Text style={styles.texto}>É responsável por armazenar todos os componentes do projeto, para que possamos reutilizá-los quando necessário.</Text>

            <Text style={styles.title}>images</Text>
            <Text style={styles.texto}>Armazena todas as imagens do projeto.</Text>

            <Text style={styles.title}>services</Text>
            <Text style={styles.texto}>Armazena toda a parte inteligente da estrutura do aplicativo.</Text>

            <Text style={styles.title}>action</Text>
            <Text style={styles.texto}>Faz as ações disparadas pelo Redux.</Text>

            <Text style={styles.title}>reducers</Text>
            <Text style={styles.texto}>Recebe todos os reducers do produto, que alteram o estado feita anteriormente para uma forma mais otimizada, 
                recebendo um objeto e retornando um outro objeto completamente novo que tenha copiado todas as informações do estado.
            </Text>

            <Text style={styles.title}>views</Text>
            <Text style={styles.texto}>É responsável pelas páginas das aplicações, as que vão ficar visíveis aos usuários.</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    title: {

        fontSize: 15,
        fontWeight: 'bold',
        alignItems:"center",
        justifyContent:'center',
        marginLeft: 15,

    },

    texto: {
        marginLeft: 12,
        margin: 10,

    },

})
