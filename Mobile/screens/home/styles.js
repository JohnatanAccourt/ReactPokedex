import { StyleSheet } from 'react-native'; 
import Colors from '../../constants/Colors';

export default StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: `${Colors.mainColors.blueLight}`
    },
    header:{
        paddingHorizontal: 10,
        height: 90,
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: `${Colors.mainColors.blueLight}`
    },
    HeaderIcon:{
        color: '#fff'
    },
    HeaderImage:{
        width: 190,
        height: 70,
    },

    pokemons:{
        flex: 1,
    },
    pokemonContainer:{
        width: '53%',
        alignItems: "center"
    },
    pokemonCard:{
        width: '90%',
        height: 250,
        backgroundColor: `${Colors.mainColors.yellow}`,
        borderRadius: 20,
        marginBottom: 10
    },
    pokemonImageWrapper:{
        width: '100%',
        height: '85%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    pokemonImg:{
        width: 170,
        height: 170,
    },
    pokemonWrapperText:{
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: `${Colors.mainColors.blueStrong}`,
        width: '100%',
        height: '15%',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20
    },
    pokemonText:{
        fontSize: 20,
        color: '#fff'
    },
    emptyContainer:{
        height: '100%',
        justifyContent: 'center'
    },
    emptyGif:{
        alignSelf: "center",
        width: 280,
        height: 200,
        marginTop: -100
    }
})