import React from 'react';
import Color from 'color-thief-react';

export default function Pokemon(props){
    return(
        <Color src={require("../images/samples/pikachu.png")} format="hex">
        {({data, loading, error}) => (
            <div style={{backgroundColor: data }}>
                <img src={props.PokemonImg} alt="pokemon"/>
                <div>
                    <h2>{props.name}</h2>
                </div>
            </div>
        )}
        </Color>
    )
}