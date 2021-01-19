import React from 'react';
import HomeIcon from '@material-ui/icons/Home';
import GitHubIcon from 'react-ionicons/lib/LogoGithub';
import { SideBarContainer, WrapperBtn } from '../styles/sidebar.js';

export default function SideBar(props){
    return(
        <SideBarContainer data-test="sideBar">
            <div className="header">
                <a 
                    href="https://www.flaticon.com/br/autores/nikita-golubev" 
                    title="Nikita Golubev"
                    alt="pokeball"
                >
                    <img data-test='headerIMG' src={require('../images/logos/pokemon.png')} alt="logo pokemon"/>
                </a>
                    <h1>Pokédex</h1>
            </div>
            <WrapperBtn onClick={props.onClickHome}>
                <HomeIcon style={{color: "white", fontSize: 35, transition: '0.3s'}} />
                <button data-test="click-home">Home</button>
            </WrapperBtn>

            <WrapperBtn onClick={props.onClickPokemon}>
                <img src={require('../images/logos/pokemon.png')} alt="pokeball"/>
                <button data-test="click-pokemon">Pokemons</button>
            </WrapperBtn>

            <WrapperBtn onClick={props.onClickGitHub}>
                <GitHubIcon color="#fff" fontSize="35px" style={{transition: '0.3s'}} />
                <button data-test="click-github">GitHub</button>
            </WrapperBtn>
        </SideBarContainer>
    )
}