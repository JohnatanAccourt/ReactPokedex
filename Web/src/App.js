import React, { useState } from 'react';

import SideBar from './components/SideBar';
import Home from './tabs/Home';
import Pokemons from './tabs/Pokemons';
import Github from './tabs/Github';
import Modal from './components/Modal';

import './styles/reset.css';
import { Container } from './styles/grid';

function App() {
    const [page, setPage] = useState('home');
    const [menu, setMenu] = useState(false);

    const onChangeMenu = () => { setMenu(!menu) }

    return (
        <Container>
            <div className="sideBar">
                <SideBar 
                    onClickHome={() => setPage('home')} 
                    onClickPokemon={() => setPage('pokemon')} 
                    onClickGitHub={() => setPage('github')}
                />
            </div>
            <div className="mainGrid">
                { menu ? 
                    <Modal
                        onClickHome={() => [setPage('home'), setMenu(!menu)]} 
                        onClickPokemon={() => [setPage('pokemon'), setMenu(!menu)]} 
                        onClickGitHub={() => [setPage('github'), setMenu(!menu)]}
                        onClickCloseModal={() => setMenu(!menu)}
                    />
                    :
                    <></>
                }
                { page === 'home' ? 
                    <Home menuMobile={onChangeMenu} onClickPokemon={() => setPage('pokemon')} /> 
                : page === 'pokemon' ? 
                    <Pokemons menuMobile={onChangeMenu} /> 
                : page === 'github' ? 
                    <Github menuMobile={onChangeMenu} /> 
                :   <Home menuMobile={onChangeMenu} /> }
                
            </div>
        </Container>
    );
}

export default App;
