import React, {useLayoutEffect} from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, FlatList, Image } from 'react-native'
import * as ComprasAction from '../services/actions/comprasAction'
import * as CompraAction from '../services/actions/compraAction'
import { useSelector, useDispatch } from 'react-redux';
import { Icon } from 'react-native-elements'
import icon from '@ant-design/icons'

export default function Menu(props) {

    const { navigation } = props
    const dispatch = useDispatch()
    const compras = useSelector(store => store.compras)
    const user = useSelector(store => store.login)

    useLayoutEffect(() => {
        dispatch(ComprasAction.getList())

    }, [dispatch])

    const deletar = (id) =>{
        dispatch(CompraAction.remove(id))
    }
        
    return (
        <View>
            <View style={styles.logoff}>

                <Button
                    title="Logout"
                    onPress={() => navigation.replace("Login")}

                />

            </View>
            <View>

                <Text style={styles.title}>Olá, {user.email} </Text>

            </View>
            <View style={{width:"100%", margin:1, flexDirection:"row"}}>
                
                    <TouchableOpacity
                    style={styles.button}
                        onPress={() => navigation.navigate("CadastroCompras")}
                    >
                        <View style={styles.botao}> 
                            <Text>Adicionar compra</Text>

                        </View>
                    </TouchableOpacity>  

                    <TouchableOpacity
                    style={styles.button}
                        onPress={() => navigation.navigate("Mapa")}
                    >
                        <View style={styles.botao}> 
                            <Text>Mapa</Text>

                        </View>
                    </TouchableOpacity>             
            </View>

            <View style={{width:"100%", margin:0, flexDirection:"row"}}>
                
                    <TouchableOpacity
                    style={styles.button}
                        onPress={() => navigation.navigate("Modelo")}
                    >
                        <View style={styles.botao}> 
                            <Text>Modelo</Text>

                        </View>
                    </TouchableOpacity>  

                    <TouchableOpacity
                    style={styles.button}
                        onPress={() => navigation.navigate("Arquitetura")}
                    >
                        <View style={styles.botao}> 
                            <Text>Arquitetura</Text>

                        </View>
                    </TouchableOpacity>

                     <TouchableOpacity
                    style={styles.button}
                        onPress={() => navigation.navigate("FAQ")}
                    >
                        <View style={styles.botao}> 
                            <Text>FAQ</Text>

                        </View>
                    </TouchableOpacity>  

                    <TouchableOpacity
                    style={styles.button}
                        onPress={() => navigation.navigate("Sobre")}
                    >
                        <View style={styles.botao}> 
                            <Text>Sobre</Text>

                        </View>
                    </TouchableOpacity>             
            </View>

            <View>

                <FlatList
                
                    data={compras}
                    
                    renderItem={({item}) => 
                        <View style={{width:"100%", margin:15, flexDirection:"row"}}>
                            <View style={{width:100}}>


                                <Button
                                    title="Excluir"
                                    onPress={() => deletar(item.id)}
                                    
                                
                                />

                            </View>

                            <TouchableOpacity
                                onPress={() => navigation.navigate("CadastroCompras", item)}
                            >
                                <View> 
                                    <Text> {`${item.produto} - R$${item.valor},00`} </Text>

                                </View>
                            </TouchableOpacity>
                    
                            

                        </View>
                    }
                    keyExtractor={item => item.id}
                />

            </View>

            

            

        

        </View>
    )
}

const styles = StyleSheet.create({
    botao:{
        margin: 1,
        marginBottom: 5,
   
        height: 50,
        backgroundColor: "#66cd00",
        borderRadius: 20,
        alignItems:"center",
        paddingTop: 15,
    },

    button:{
        flex:1,
        width:"50%",
    },

    logoff:{

        marginTop: 10,
        
    },

    title: {

        fontSize: 15,
        fontWeight: 'bold',
        alignItems:"center",
        justifyContent:'center',
        margin: 10,

    },


})
