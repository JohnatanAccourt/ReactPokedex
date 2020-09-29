import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';

import styles from '../screens/home/styles.js';

export default function EmptyList(props){
    return(
        <View style={styles.emptyContainer}>
            <Image style={styles.emptyGif} source={require('../assets/samples/loading.gif')} />
        </View>
    )
}