import React from 'react';
import '../styles/pokemons';

export default function Separator(props){
    return(
        <div className="status">
            <p>{props.description}</p>
            <div className="bar">
                <div className={props.barType} style={{maxWidth: `${props.width}%`}}></div>
            </div>
        </div>
    )
}
