import React, { useState } from 'react';
import { View, StyleSheet, Image, Text, Linking } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import Colors from '../constants/Colors';

import CustomButton from './CustomButton';


export default function DrawerNav({ navigation }) {  

    const url = 'https://www.flaticon.com/br/autores/nikita-golubev'
    return (
        <View style={styles.container}>
            <TouchableOpacity activeOpacity={0.8} onPress={() => Linking.openURL(url)}>
                <Image style={styles.drawerImage} source={require('../assets/logos/pokemon.png')} />
            </TouchableOpacity>

            <Text style={styles.drawerText}>Pokedex APP</Text>

            <CustomButton icon="md-home" name="Home" onPress={() => navigation.navigate('Home')}/>
            <CustomButton icon="logo-github" name="Git Hub" onPress={() => navigation.navigate('GitHub')}/>

            <View style={styles.drawerButton}>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: `${Colors.mainColors.blueLight}`
    },
    drawerImage:{
        width: 200,
        height: 200,
        alignSelf: 'center',
        marginTop: 10
    },
    drawerText:{
        fontSize: 32,
        color: 'white',
        textAlign: "center",
        marginVertical: 10
    }


})