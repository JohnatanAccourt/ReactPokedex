import React, { useRef } from 'react';
import { View, Text, Image, ScrollView, Animated, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

import StatusBar from '../../components/StatusBar';
import PokemonType from '../../components/PokemonType';
import styles from './styles';


export default function PokemonScreen({ navigation }) {
    const route = useRoute();
    const id = route.params.id;
    const name = route.params.name;
    const life = route.params.life;
    const attack = route.params.attack;
    const specialAttack = route.params.specialAttack;
    const defense = route.params.defense;
    const specialDefense = route.params.specialDefense;
    const speed = route.params.speed;
    const type = route.params.type;
    // const moves = route.params.moves;

    const ScrollPosition = useRef(new Animated.Value(0)).current

    return (
        <Animated.ScrollView 
            style={styles.container}
            onScroll={Animated.event(
                [{nativeEvent: {contentOffset: {y: ScrollPosition}}}], { useNativeDriver: true}
            )}
        >
            <View style={styles.mainView}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Ionicons
                            style={styles.HeaderIcon}
                            name='md-arrow-back'
                            size={50}
                        />
                    </TouchableOpacity>
                    <Image style={styles.HeaderImage} source={require('../../assets/logos/logopoke.png')} />
                </View>

                <Animated.Image style={styleAnimated.banner(ScrollPosition)} source={require('../../assets/samples/background.jpg')}/>
                
            </View>
            
            <View style={styles.wrapperContent}>
                <View style={styles.roundedSquare}>
                    <Image style={styles.pokemonImg} source={{uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}} />
                </View>

                <Text style={styles.pokemonName}>{name}</Text>

                <StatusBar whichStyle='Life' size={life} description='Life:'/>
                <StatusBar whichStyle='Ataque' size={attack} description='Ataque:'/>
                <StatusBar whichStyle='AtaqueEsp' size={specialAttack} description='Ataque Especial:'/>
                <StatusBar whichStyle='Defesa' size={defense} description='Defesa:'/>
                <StatusBar whichStyle='DefesaEsp' size={specialDefense} description='Defesa Especial:'/>
                <StatusBar whichStyle='Velocidade' size={speed} description='Velocidade:'/>

                <View style={styles.wrapperPokemonContent}>
                    <PokemonType type={type} />
                    <Text style={styles.pokemonTypeText}>{type}</Text> 

                    <View style={styles.innerContent}>
                    </View>
                </View>
            </View>
        </Animated.ScrollView>
    );
}

const styleAnimated = StyleSheet.create({
    banner: ScrollPosition => ({
        height: 400,
        width: '200%',
        position: 'relative',
        top: -90,
        transform: [
            {
                translateY: ScrollPosition
            },
            {
                scale: ScrollPosition.interpolate({
                    inputRange: [-600, 0, 600, 600 + 1],
                    outputRange: [2, 1, 0.5, 0.5]
                })
            }
        ]
    })
})
