import { StyleSheet } from 'react-native'; 
import Colors from '../../constants/Colors';

export default StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: `${Colors.mainColors.blueLight}`
    },
    wrapperSection:{
        width: '100%',
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: 5
    },
    personImg:{
        position: "relative",
        left: 27,
        width: 200,
        height: 200,
        borderRadius: 200,
    },
    gitIcon:{
        position: "relative",
        right: 27,
    },
    wrapperTexts:{
        width: '90%',
        alignSelf: "center"  
    },
    h1:{
        color: '#fff',
        fontSize: 35,
        fontWeight: "bold",
        textAlign: "center",
        marginVertical: 15
    },
    text:{
        color: '#fff',
        fontSize: 17,
        fontWeight: "normal",
        marginBottom: 14
    },
    button:{
        width: '100%',
        height: 60,
        justifyContent: "center",
        alignItems: 'center',
        backgroundColor: `${Colors.mainColors.blueStrong}`,
        marginTop: 10
    },
    buttonText:{
        color: '#fff',
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center"
    }
})