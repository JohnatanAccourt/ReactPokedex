import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
// import { TouchableOpacity } from 'react-native-gesture-handler';

import styles from '../screens/home/styles.js';

export default function Customheader(props){
    return(
        <View style={styles.header}>
            <TouchableOpacity onPress={props.onPress}>
                <Ionicons
                    style={styles.HeaderIcon}
                    name={props.icon}
                    size={50}
                />
            </TouchableOpacity>
            <Image style={styles.HeaderImage} source={require('../assets/logos/logopoke.png')} />
        </View>
    )
}