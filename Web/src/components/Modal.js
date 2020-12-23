import React from 'react';

import HomeIcon from '@material-ui/icons/Home';
import GitHubIcon from 'react-ionicons/lib/LogoGithub';

import { 
    ModalContainer,
    WrapperBtn
} from '../styles/Modal';

export default function Modal(props){
    return(
        <ModalContainer>
            <div>
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

                <button onClick={props.onClickCloseModal} className="btnClose">X</button>
            </div>
        </ModalContainer>
    )
}