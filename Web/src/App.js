import React, { useState } from 'react';

import SideBar from './components/SideBar';
import Home from './tabs/Home';
import Pokemons from './tabs/Pokemons';
import Github from './tabs/Github';

import './styles/reset.css';
import { Container } from './styles/grid';

function App(props) {
    const [home, setHome] = useState(true);
    const [pokemon, setPokemon] = useState(false);
    const [github, setGitHub] = useState(false);

    return (
        <Container>
            <div className="sideBar">
                <SideBar 
                    onClickHome={() => [setHome(true), setPokemon(false), setGitHub(false)] } 
                    onClickPokemon={() => [setPokemon(true), setHome(false), setGitHub(false)]} 
                    onClickGitHub={() => [setGitHub(true), setPokemon(false), setHome(false)]}
                />
            </div>
            <div className="mainGrid">
                { home ? 
                    <Home onClickPokemon={() => [setPokemon(true), setHome(false), setGitHub(false)]}/> 
                : pokemon ? 
                    <Pokemons /> 
                : github ? 
                    <Github /> 
                :   <Home /> }
            </div>
        </Container>
    );
}

export default App;
