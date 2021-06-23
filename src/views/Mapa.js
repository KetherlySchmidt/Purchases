import React, {useState, useLayoutEffect} from 'react'
import { Alert, StyleSheet, Text, View } from 'react-native'
import MapView, {Marker} from 'react-native-maps'
import * as Location from "expo-location"
import {Dimensions} from 'react-native'
import { useSelector } from 'react-redux'

export default function Mapa() {

    const compras = useSelector(store => store.compras)

    const [myPosition, setMyPosition] = useState (null)

    const [pontoInicial, setPontoinicial] = useState({
        latitude: -28.449514793550883,
        longitude: -52.20068526753267,
        latitudeDelta: 0.015,
        longitudeDelta: 0.015,
    })

    useLayoutEffect(() => {
        getMyPosition()
    }, [])

    const getMyPosition = async () =>{

        let{status} = await Location.requestForegroundPermissionsAsync()
        if(status !== 'granted'){
            Alert.alert("Permissão GPS negada")
        }

        else{
            try {
                const minhaLocalizacao = await Location.getCurrentPositionAsync()
                setMyPosition(minhaLocalizacao.coords)
                
            } catch (error) {
                Alert.alert("Erro ao acessar o GPS!")
                
            }
        }

    }
    return (
        <View>
            <MapView 
                style={styles.mapStyle}
                region={pontoInicial}
            
            >
                {myPosition ?

                <Marker 
                    coordinate={{

                        latitude:myPosition.latitude,
                        longitude: myPosition.longitude,

                    }}
                    title='Agora!'
                    description=" "
                >
                    

                </Marker>
                : null}

                {/* {compras.map(item => 
                <Marker 
                    key={item.id}
                    coordinate={{
                    latitude: item.latitude,
                    longitude: item.longitude,
                }}
                    title={item.produto}
                    description=" "
                
                >

                </Marker>)} */}



            </MapView>
        </View>
    )
}

const styles = StyleSheet.create({
    mapStyle:{
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    }

})
