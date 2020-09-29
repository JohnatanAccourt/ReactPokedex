import * as React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, Linking } from 'react-native';

import CustomHeader from '../../components/Customheader';
import { Ionicons } from '@expo/vector-icons';
import styles from './styles';

export default function GitHubScreen({ navigation }) {

    const url = 'https://github.com/JohnatanAccourt'

    return (
        <ScrollView style={styles.container}>
            <CustomHeader icon="md-menu" onPress={() => navigation.openDrawer()}/>
            <View style={styles.wrapperSection}>
                <Image style={styles.personImg} source={require('../../assets/logos/me.jpg')} />  
                <Ionicons
                    style={styles.gitIcon}
                    name='logo-github'
                    size={190} 
                /> 
            </View>

            <View style={styles.wrapperTexts}>
                <Text style={styles.h1}>Olá, sou Johnatan</Text>

                <Text style={styles.text}>
                    Tenho 20 anos sou Front-End Developer, criei este projeto com o intuito de extender meu portifolio para mostrar meu trabalho através de redes sociais tais como o linkedin.
                </Text>

                <Text style={styles.text}>
                    Esse pequeno projeto consiste em trabalhar com o React utilizando o máximo dos conhecimentos adquiridos através de documentações e vídeos, ou seja, hooks, estados, componentes e props. E também utilizar conhecimentos prévios que já possuo.
                    Usando a API complexa como do pokeapi que possui toneladas de informações acredito muito que daqui em diante vou ter mais facilidade de trabalhar com requests HTTP.
                </Text>
                <Text style={styles.text}>
                    Quando olhei esta API vi uma grande oportunidade para criar esse app pois possuia um conhecimento do React mas apenas teórico mas usei o que aprendi no React para trabalhar em um projeto em React Native e só agora, aqui, tive a chance de executar tudo que aprendi na teoria e tudo que executei no React Native aqui na Pokedex.
                </Text>
                <Text style={styles.text}>
                    Esse projeto em React Native foi mais tranquilo de ser feito pois possuo um pouco mais de prática do que o React.js em si. Caso esteja vendo esse projeto e quiser implementar algo por favor fique a vontade 😁.
                </Text>
                <Text style={styles.text}>
                    Não se esqueça de conferir meu GitHub 👋
                </Text>
            </View>
            <TouchableOpacity onPress={() => Linking.openURL(url)} style={styles.button}>
                <Text style={styles.buttonText}>Toque aqui para olhar meu GitHub</Text>
            </TouchableOpacity>
        </ScrollView>
    );
}
