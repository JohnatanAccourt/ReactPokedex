import { ScrollView, StyleSheet } from 'react-native'; 
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
        zIndex: 10
        // backgroundColor: `${Colors.mainColors.blueLight}`
    },
    HeaderIcon:{
        color: '#fff'
    },
    HeaderImage:{
        width: 190,
        height: 70,
    },

    mainView:{
        marginTop: -1000,
        paddingTop: 1000,
        alignItems: "center",
        overflow: 'hidden',
    },
    wrapperContent:{
        backgroundColor: `${Colors.mainColors.blueMid}`,
        alignItems: "center",
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        marginTop: -110,
    },
    pokemonName:{
        color: '#fff',
        fontSize: 45,
        marginVertical: 30,
        fontWeight: 'bold'
    },
    roundedSquare:{
        backgroundColor: `${Colors.mainColors.blueStrong}`,
        marginTop: -200,
        zIndex: 200,
        width: 240,
        height: 250,
        borderRadius: 30,
        alignItems: "center"
    },
    pokemonImg:{
        marginTop: -60,
        width: 310,
        height: 310, 
    },

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
    },
    wrapperPokemonContent:{
        marginTop: 130,
        alignItems: "center",
        width: '100%',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        backgroundColor: `${Colors.mainColors.blueLight}`,
    },
    roundedIcon:{
        height: 200,
        width: 200,
        borderRadius: 200,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: `${Colors.mainColors.blueStrong}`,
        marginTop: -100
    },
    icon:{
        height: '100%',
        width: '100%',
    },
    pokemonTypeText:{
        color: '#fff',
        fontSize: 40,
        marginVertical: 10,
        fontWeight: 'bold'
    },
    innerContent:{
        width: '90%',
        alignSelf: "center",
        borderRadius: 20,
        backgroundColor: `${Colors.mainColors.blueStrong}`,
        marginTop: 10,
        marginBottom: 30
    },
    textTitle:{
        color: '#fff',
        fontSize: 35,
        marginVertical: 40,
        fontWeight: 'bold',
        textAlign: "center"
    },
    wrapperContentText:{
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        width: '90%',
        alignSelf: "center"
    },
    contentText:{
        color: '#fff',
        fontSize: 25,
        textAlign: "center",
        width: '47%',
        marginVertical: 10
    }
})