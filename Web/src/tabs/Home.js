import React, { useEffect, useState } from 'react';
import axios from 'axios';

import WebIcon from '@material-ui/icons/Web';
import StoreIcon from '@material-ui/icons/Store';
import FacebookIcon from 'react-ionicons/lib/LogoFacebook';
import TwitterIcon from 'react-ionicons/lib/LogoTwitter';
import YoutubeIcon from 'react-ionicons/lib/LogoYoutube';
import InstagranIcon from 'react-ionicons/lib/LogoInstagram';

import { 
    HomeContainer, 
    HomeHeader, 
    HomeBanner, 
    HomeSocial,
    HomeBtn,
    HomePokemons
} from '../styles/home';

import Colors from '../constants/Colors';
import Color from 'color-thief-react';

export default function Home(props){
    const [data, setData] = useState([]);

    async function loadData(){
        axios.get(`https://pokeapi.co/api/v2/pokemon/?offset=${Math.floor(Math.random() * 1049)}&limit=5`)
        .then(function(res){
            setData(res.data.results)

        })
        .catch(function (error) {  console.log(error)  })
    }

    useEffect(() => {
        loadData();
    }, [])
    return(
        <HomeContainer>
            <HomeHeader>
                <h1>Bem vindo ao pokedex!</h1>
                <img src={require('../images/logos/logopoke.png')} alt="logo" />
            </HomeHeader>

            <HomeBanner>
                <img src={require('../images/samples/sample.png')} alt="pokemon"/>
                <div>
                    <h1>Pokedex APP</h1>
                    <h3>Baixe o app do ReactPokedex! com isso você pode ver a qualquer momento todos os pokémons.</h3>
                    <a rel="noopener noreferrer" href="https://drive.google.com/file/d/1wv67W7U_uZDe2KIcZZ04N--EC0efQ8gb/view" target="_blank" >
                        <button>Download APP</button>
                    </a>
                </div>
            </HomeBanner>

            <HomeBtn onClick={props.onClickPokemon}>
                <h2>Ver mais Pokemons:</h2>
            </HomeBtn>

            <HomePokemons>
                {data.map(index => (
                    <Color key={index.url.split('/')[6]} src={require("../images/samples/pikachu.png")} format="hex">
                    {({data, loading, error}) => (
                        <div style={{backgroundColor: data }}>
                            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${index.url.split('/')[6]}.png`} alt="pokemon" />
                            <div>
                                <h2>{index.name}</h2>
                            </div>
                        </div>
                    )}
                    </Color>
                ))}
            </HomePokemons>

            <h5>Acompanhe Pokémon nas redes sociais:</h5>
            
            <HomeSocial>
                <div>
                    <WebIcon style={{color: Colors.mainColors.blueLight, fontSize: 100}} />
                    <h5>Website oficial do Pokémon</h5>
                    <a rel="noopener noreferrer" href="https://www.pokemon.com/br/" target="_blank" >
                        <button>Acessar</button>
                    </a>
                </div>

                <div>
                    <YoutubeIcon color={Colors.mainColors.blueLight} fontSize="100px"/>
                    <h5>Canal oficial do Pokémon no Youtube</h5>
                    <a rel="noopener noreferrer" href="https://www.youtube.com/channel/UCFctpiB_Hnlk3ejWfHqSm6Q" target="_blank" >
                        <button>Acessar</button>
                    </a>
                </div>

                <div>
                    <FacebookIcon color={Colors.mainColors.blueLight} fontSize="100px"/>
                    <h5>Facebook oficial do Pokémon</h5>
                    <a rel="noopener noreferrer" href="https://pt-br.facebook.com/Pokemon/" target="_blank" >
                        <button>Acessar</button>
                    </a>
                </div>

                <div>
                    <TwitterIcon color={Colors.mainColors.blueLight} fontSize="100px"/>
                    <h5>Twitter oficial do Pokémon</h5>
                    <a rel="noopener noreferrer" href="https://twitter.com/pokemon" target="_blank" >
                        <button>Acessar</button>
                    </a>
                </div>

                <div>
                    <InstagranIcon color={Colors.mainColors.blueLight} fontSize="100px"/>
                    <h5>Instagran oficial do Pokémon</h5>
                    <a rel="noopener noreferrer" href="https://www.instagram.com/pokemon/?hl=pt-br" target="_blank" >
                        <button>Acessar</button>
                    </a>
                </div>

                <div>
                    <StoreIcon style={{color: Colors.mainColors.blueLight, fontSize: 100}} />
                    <h5>Loja virtual oficial do Pokémon</h5>
                    <a rel="noopener noreferrer" href="https://www.pokemoncenter.com/" target="_blank" >
                        <button>Acessar</button>
                    </a>
                </div>
                
            </HomeSocial>
        </HomeContainer>
    )
}