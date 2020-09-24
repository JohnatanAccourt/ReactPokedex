import React from 'react';
import '../styles/pokemons';

export default function Pagination(props){
    return(
        <button onClick={props.page}>{props.numberPage}</button>
    )
}