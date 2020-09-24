import React from 'react';

import { 
    LoadingContainer
} from '../styles/pokemons';

export default function Loading(props){
    return(
        <LoadingContainer>
            <img src={require('../images/samples/loading.gif')} alt="loading"/>
            <div>
                <p>C</p>
                <p>a</p>
                <p>r</p>
                <p>r</p>
                <p>e</p>
                <p>g</p>
                <p>a</p>
                <p>n</p>
                <p>d</p>
                <p>o</p>
                <p>.</p>
                <p>.</p>
                <p>.</p>
            </div>
        </LoadingContainer>
    )
}