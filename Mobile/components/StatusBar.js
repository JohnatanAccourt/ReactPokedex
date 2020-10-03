import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Colors from '../constants/Colors';

// import styles from '../screens/pokemon/styles.js';

export default function StatusBar(props){
    return(
        <View style={styles.wrapperStatusBar}>
            <Text style={styles.StatusBarName}>{props.description}</Text>
            <View style={styles.bar}>
                {/* <View style={[styles.filledLife, {width: props.size }]}></View> */}
                {props.whichStyle === 'Life' ?
                    <View style={[styles.filledLife, {maxWidth: `${props.size}%`}]}></View>    
                :
                props.whichStyle === 'Ataque' ?
                    <View style={[styles.filledAttack, {maxWidth: `${props.size}%`}]}></View>    
                :
                props.whichStyle === 'AtaqueEsp' ?
                    <View style={[styles.filledSpecialAttack, {maxWidth: `${props.size}%`}]}></View>    
                :
                props.whichStyle === 'Defesa'?
                    <View style={[styles.filledDefense, {maxWidth: `${props.size}%`}]}></View> 
                :
                props.whichStyle === 'DefesaEsp' ?
                    <View style={[styles.filledSpecialDefense, {maxWidth: `${props.size}%`}]}></View>   
                :
                props.whichStyle === 'Velocidade' ?
                    <View style={[styles.filledSpeed, {maxWidth: `${props.size}%`}]}></View>
                :
                    <View style={[styles.bar, {maxWidth: `${props.size}%`}]}></View>
                }
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapperStatusBar:{
        width: '95%',
        alignSelf: 'center',
        flexDirection: "column",
        marginTop: 15
    },
    StatusBarName:{
        color: '#fff',
        fontSize: 15,
        marginBottom: 5
    },
    bar:{
        backgroundColor: `${Colors.statsColors.empty}`,
        height: 20,
        borderRadius: 20,
    },
    filledLife:{
        backgroundColor: `${Colors.statsColors.life}`,
        height: '100%',
        borderRadius: 20
    },
    filledAttack:{
        backgroundColor: `${Colors.statsColors.attack}`,
        height: '100%',
        borderRadius: 20
    },
    filledSpecialAttack:{
        backgroundColor: `${Colors.statsColors.specialAttack}`,
        height: '100%',
        borderRadius: 20
    },
    filledDefense:{
        backgroundColor: `${Colors.statsColors.defense}`,
        height: '100%',
        borderRadius: 20
    },
    filledSpecialDefense:{
        backgroundColor: `${Colors.statsColors.specialDefense}`,
        height: '100%',
        borderRadius: 20
    },
    filledSpeed:{
        backgroundColor: `${Colors.statsColors.speed}`,
        height: '100%',
        borderRadius: 20
    }
})