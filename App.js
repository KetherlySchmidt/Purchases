import React from 'react';
import 'react-native-gesture-handler'
import {createStackNavigator} from '@react-navigation/stack'
import Login from './src/views/Login';
import Menu from './src/views/Menu';
import Cadastro from './src/views/Cadastro';
import "./src/services/ConectFirebase"
import CadastroCompras from './src/views/CadastroCompras';
import Mapa from './src/views/Mapa';
import Modelo from './src/views/Modelo';
import Arquitetura from './src/views/Arquitetura';
import { NavigationContainer } from '@react-navigation/native'
import { Provider as StoreProvider } from 'react-redux';
import store from './src/services/store'
import FAQ from './src/views/FAQ';
import Sobre from './src/views/Sobre'

import {LogBox} from 'react-native'

LogBox.ignoreLogs(['Setting a timer'])


export default function App() {

  const Stack = createStackNavigator()

  return (

    <StoreProvider store={store}>

      <NavigationContainer>

        <Stack.Navigator initialRouteName="Login">

          <Stack.Screen
            name="Login"
            component={Login}      
          />

          <Stack.Screen
            name="Menu"
            component={Menu}      
          />

          <Stack.Screen
            name="Cadastro"
            component={Cadastro}      
          />

          <Stack.Screen
            name="CadastroCompras"
            component={CadastroCompras}      
          />

          <Stack.Screen
            name="Mapa"
            component={Mapa}      
          />

          <Stack.Screen
            name="Modelo"
            component={Modelo}      
          />

          <Stack.Screen
            name="Arquitetura"
            component={Arquitetura}      
          />

          <Stack.Screen
            name="FAQ"
            component={FAQ}      
          />

          <Stack.Screen
            name="Sobre"
            component={Sobre}      
          />

        </Stack.Navigator>


      </NavigationContainer>

    </StoreProvider>
    
  );
}

