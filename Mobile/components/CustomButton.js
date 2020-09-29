import React, { useState } from 'react';
import { TouchableOpacity, StyleSheet, Text} from 'react-native';

import { Ionicons } from '@expo/vector-icons';

export default function CustomButton(props) {  

    return (
        <TouchableOpacity onPress={props.onPress} style={styles.drawerButton}>
            <Ionicons
                style={styles.icon} 
                name={props.icon}
                size={40}
            />
            <Text style={styles.textButton}>{props.name}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    drawerButton:{
        flexDirection: 'row',
        width: '90%',
        alignSelf: "center",
        alignItems: 'center',
        marginTop: 14
    },
    icon:{
        color: '#fff',
    },
    textButton:{
        fontSize: 18,
        color: '#fff',
        marginLeft: 10
    }


})