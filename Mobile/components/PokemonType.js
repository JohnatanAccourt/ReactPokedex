import React, { useState } from 'react';
import { View } from 'react-native';
import styles from '../screens/pokemon/styles';

import Bug from '../assets/types/bug.svg';
import Dark from '../assets/types/dark.svg';
import Dragon from '../assets/types/dragon.svg';
import Electric from '../assets/types/electric.svg';
import Fairy from '../assets/types/fairy.svg';
import Fighting from '../assets/types/fighting.svg';
import Fire from '../assets/types/fire.svg';
import Flying from '../assets/types/flying.svg';
import Ghost from '../assets/types/ghost.svg';
import Grass from '../assets/types/grass.svg';
import Ground from '../assets/types/ground.svg';
import Ice from '../assets/types/ice.svg';
import Normal from '../assets/types/normal.svg';
import Poison from '../assets/types/poison.svg';
import Vug from '../assets/types/psychic.svg';
import Steel from '../assets/types/steel.svg';
import Water from '../assets/types/water.svg';
// import { TouchableOpacity, StyleSheet, Text, } from 'react-native';


export default function PokemonTypes(props) {  
    return (
        <View>
            {props.type == 'bug' ?
                <View style={styles.roundedIcon}>
                    <Bug width={130} height={130}/>
                </View>
                :
            props.type == 'dark' ?
                <View style={styles.roundedIcon}>
                    <Dark width={130} height={130} />
                </View>
                :
            props.type == 'dark' ?
                <View style={styles.roundedIcon}>
                    <Dark width={130} height={130} />
                </View>
                :
            props.type == 'dragon' ?
                <View style={styles.roundedIcon}>
                    <Dragon width={130} height={130} />
                </View>
                :
            props.type == 'electric' ?
                <View style={styles.roundedIcon}>
                    <Electric width={130} height={130} />
                </View>
                :
            props.type == 'fairy' ?
                <View style={styles.roundedIcon}>
                    <Fairy width={130} height={130} />
                </View>
                :
            props.type == 'fighting' ?
                <View style={styles.roundedIcon}>
                    <Fairy width={130} height={130} />
                </View>
                :
            props.type == 'fire' ?
                <View style={styles.roundedIcon}>
                    <Fire width={130} height={130} />
                </View>
                :
            props.type == 'flying' ?
                <View style={styles.roundedIcon}>
                    <Flying width={130} height={130} />
                </View>
                :
            props.type == 'ghost' ?
                <View style={styles.roundedIcon}>
                    <Ghost width={130} height={130} />
                </View>
                :
            props.type == 'grass' ?
                <View style={styles.roundedIcon}>
                    <Grass width={130} height={130} />
                </View>
                :
            props.type == 'ground' ?
                <View style={styles.roundedIcon}>
                    <Ground width={130} height={130} />
                </View>
                :
            props.type == 'ice' ?
                <View style={styles.roundedIcon}>
                    <Ice width={130} height={130} />
                </View>
                :
            props.type == 'normal' ?
                <View style={styles.roundedIcon}>
                    <Normal width={130} height={130} />
                </View>
                :
            props.type == 'poison' ?
                <View style={styles.roundedIcon}>
                    <Poison width={130} height={130} />
                </View>
                :
            props.type == 'vug' ?
                <View style={styles.roundedIcon}>
                    <Vug width={130} height={130} />
                </View>
                :
            props.type == 'steel' ?
                <View style={styles.roundedIcon}>
                    <Steel width={130} height={130} />
                </View>
                :
            props.type == 'water' ?
                <View style={styles.roundedIcon}>
                    <Water width={130} height={130} />
                </View>
                :
                <View style={styles.roundedIcon}>
                    <Normal width={130} height={130} />
                </View>
            }
        </View>
    );
}