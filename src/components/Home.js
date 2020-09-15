import React from 'react';
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


export default function Home(props){
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
                    <h3>Baixe o app do pokedex.js se precisar de uma versão poket</h3>
                    <button>Download APP</button>
                </div>
            </HomeBanner>

            <HomeBtn onClick={props.onClickPokemon}>
                <h2>Ver mais Pokemons:</h2>
            </HomeBtn>

            <HomePokemons>
                <div>
                    <img src={require("../images/samples/pikachu.png")}/>
                    <div>
                        <h2>Pikachu</h2>
                    </div>
                </div>

                <div>
                    <img src={require("../images/samples/pikachu.png")}/>
                    <div>
                        <h2>Pikachu</h2>
                    </div> 
                </div>

                <div>
                    <img src={require("../images/samples/sample.png")}/>
                    <div>
                        <h2>Pikachu</h2>
                    </div>
                </div>

                <div>
                    <img src={require("../images/samples/pikachu.png")}/>
                    <div>
                        <h2>Pikachu</h2>
                    </div>
                </div>

                <div>
                    <img src={require("../images/samples/pikachu.png")}/>
                    <div>
                        <h2>Pikachu</h2>
                    </div>
                </div>
            </HomePokemons>

            <h5>Acompanhe Pokémon nas redes sociais:</h5>
            
            <HomeSocial>
                <div>
                    <WebIcon style={{color: Colors.mainColors.blueLight, fontSize: 100}} />
                    <h5>Website oficial do Pokémon</h5>
                    <button>Acessar</button>
                </div>

                <div>
                    <YoutubeIcon color={Colors.mainColors.blueLight} fontSize="100px"/>
                    <h5>Canal oficial do Pokémon no Youtube</h5>
                    <button>Acessar</button>
                </div>

                <div>
                    <FacebookIcon color={Colors.mainColors.blueLight} fontSize="100px"/>
                    <h5>Facebook oficial do Pokémon</h5>
                    <button>Acessar</button>
                </div>

                <div>
                    <TwitterIcon color={Colors.mainColors.blueLight} fontSize="100px"/>
                    <h5>Twitter oficial do Pokémon</h5>
                    <button>Acessar</button>
                </div>

                <div>
                    <InstagranIcon color={Colors.mainColors.blueLight} fontSize="100px"/>
                    <h5>Instagran oficial do Pokémon</h5>
                    <button>Acessar</button>
                </div>

                <div>
                    <StoreIcon style={{color: Colors.mainColors.blueLight, fontSize: 100}} />
                    <h5>Loja virtual oficial do Pokémon</h5>
                    <button>Acessar</button>
                </div>
                
            </HomeSocial>

            <h6>Espero que tenha uma boa experiência com esse pequeno projeto 😁.</h6>
        </HomeContainer>
    )
}