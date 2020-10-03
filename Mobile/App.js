import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';

import { StatusBar } from 'react-native';
import * as React from 'react';

import HomeScreen from './screens/home/HomeScreen.js';
import GitHubScreen from './screens/github/GitHubScreen.js';
import PokemonScreen from './screens/pokemon/PokemonScreen.js';
import DrawerNav from './components/DrawerNav';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
        <StatusBar
            barStyle='light-content'
            backgroundColor='#0571FF'
        />
        <Drawer.Navigator initialRouteName={HomeScreen} drawerContent={props => <DrawerNav {...props} />}> 
            <Drawer.Screen name="Home" component={HomeScreen} />
            <Drawer.Screen name="GitHub" component={GitHubScreen} />
            <Stack.Screen name="Pokemon" component={PokemonScreen} /> 
        </Drawer.Navigator>
    </NavigationContainer>
  );
}