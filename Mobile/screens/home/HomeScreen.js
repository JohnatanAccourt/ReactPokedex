import React, { useEffect, useState} from 'react';
import { View, Text, Image, RefreshControl } from 'react-native';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import axios from 'axios';

import styles from './styles';

import CustomHeader from '../../components/Customheader';
import ListEmpty from '../../components/EmptyList';

export default function HomeScreen({ navigation }) {
    const [data, setData] = useState([]);
    const [page, setPage] = useState('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=14');
    const [nextURL, setNextURL] = useState('');
    const [refresh, setRefresh] = useState(false);

    async function loadData(){
        setRefresh(true)

        axios.get(page)
        .then(function(res){
            setData(res.data.results);
            setNextURL(res.data.next);
            setRefresh(false);
        })
        .catch(function (error) {  console.log(error)  })
    }

    async function loadMoreData(){
        setRefresh(true)

        axios.get(nextURL)
        .then(function(res){
            setData([...data, ...res.data.results]);
            setNextURL(res.data.next);
            setRefresh(false);
        })
        .catch(function (error) {  console.log(error)  })
    }
    
    function navigateToPokemonInfo(id){
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
        .then(function(res){
            navigation.navigate('Pokemon', {
                id: id,
                name: res.data.name,
                life: res.data.stats[0].base_stat,
                attack: res.data.stats[1].base_stat,
                specialAttack: res.data.stats[2].base_stat,
                defense: res.data.stats[3].base_stat,
                specialDefense: res.data.stats[4].base_stat,
                speed: res.data.stats[5].base_stat,
                type: res.data.types[0].type.name,
                moves: res.data.moves
            })
            
        })
        .catch(function (error) {  console.log(error)  })
    }

    useEffect(() => {
        loadData();
    }, [])

    return (
        <View style={styles.container}>
            <CustomHeader icon="md-menu" onPress={() => navigation.openDrawer()}/>

            <FlatList
                data={data}
                style={styles.pokemons}
                onEndReachedThreshold={0.6}
                keyExtractor={pokemon => String(pokemon.name)}
                ListEmptyComponent={ListEmpty}
                onEndReached={loadMoreData}
                columnWrapperStyle={{justifyContent:'space-around'}}
                refreshControl={
                    <RefreshControl 
                        progressBackgroundColor="#123465" 
                        colors={['#0571FF', '#FFCB05', '#fff']}  
                        onRefresh={loadMoreData}
                        refreshing={refresh}
                    />
                }
                numColumns={2}  
                renderItem={({ item:pokemon }) => (
                    <View style={styles.pokemonContainer}>
                        <View style={styles.pokemonCard}>
                            <View style={styles.pokemonImageWrapper}>
                                <TouchableOpacity activeOpacity={0.6} onPress={() => navigateToPokemonInfo(pokemon.url.split('/')[6])} >
                                    <Image style={styles.pokemonImg} source={{uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.url.split('/')[6]}.png`}} />  
                                </TouchableOpacity>
                            </View>
                            <View style={styles.pokemonWrapperText}>
                                <Text style={styles.pokemonText}>{pokemon.name}</Text>
                            </View>
                        </View>
                    </View>
                )}
            />
        </View>
    );
}
