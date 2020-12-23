import React from 'react';
import HomeIcon from '@material-ui/icons/Home';
import GitHubIcon from 'react-ionicons/lib/LogoGithub';
import { SideBarContainer, WrapperBtn } from '../styles/sidebar.js';

export default function SideBar(props){
    return(
        <SideBarContainer>
            <div className="header">
                <a 
                    href="https://www.flaticon.com/br/autores/nikita-golubev" 
                    title="Nikita Golubev"
                    alt="pokeball"
                >
                    <img src={require('../images/logos/pokemon.png')} alt="logo pokemon"/>
                </a>
                    <h1>Pokédex</h1>
            </div>
            <WrapperBtn onClick={props.onClickHome}>
                <HomeIcon style={{color: "white", fontSize: 35, transition: '0.3s'}} />
                <button>Home</button>
            </WrapperBtn>

            <WrapperBtn onClick={props.onClickPokemon}>
                <img src={require('../images/logos/pokemon.png')} alt="pokeball"/>
                <button>Pokemons</button>
            </WrapperBtn>

            <WrapperBtn onClick={props.onClickGitHub}>
                <GitHubIcon color="#fff" fontSize="35px" style={{transition: '0.3s'}} />
                <button>GitHub</button>
            </WrapperBtn>
        </SideBarContainer>
    )
}