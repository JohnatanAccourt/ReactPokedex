import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { StatusBar } from 'react-native';
import * as React from 'react';

import HomeScreen from './screens/home/HomeScreen.js';
import GitHubScreen from './screens/github/GitHubScreen.js';
import DrawerNav from './components/DrawerNav';

const Drawer = createDrawerNavigator();

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
        </Drawer.Navigator>
    </NavigationContainer>
  );
}