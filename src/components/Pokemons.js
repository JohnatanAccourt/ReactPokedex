import React, { useState, useEffect } from 'react';
import Color from 'color-thief-react';
import { Palette } from 'color-thief-react';
import axios from 'axios';

import GraphicIcon from '@material-ui/icons/GraphicEq';
import FlashIcon from '@material-ui/icons/FlashOn';
import PawIcon from 'react-ionicons/lib/MdPaw';
import SchoolIcon from 'react-ionicons/lib/MdSchool';

import Colors from '../constants/Colors';
import types from '../constants/Types';

import { 
    PokemonsContainer
} from '../styles/pokemons';

export default function Pokemons(props){
    const [data, setData] = useState([]);

    const [imgName, setImgName] = useState(0);
    const [name, setName] = useState('');

    const [life, setLife] = useState('');
    const [attack, setAttack] = useState('');
    const [specialAttack, setSpecialAttack] = useState('');
    const [defense, setDefense] = useState('');
    const [specialDefense, setSpecialDefense] = useState('');
    const [speed, setSpeed] = useState('');
    const [type, setType] = useState('');

    const [moves, setMoves] = useState([]);

    const [weight, setWeight] = useState([]);
    const [height, setHeight] = useState([]);

    const [bar, showBar] = useState('0%');

    async function loadData(){
        axios.get('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=15')
        .then(function(res){
            setData(res.data.results)

        })
        .catch(function (error) {  console.log(error)  })
    }
    async function showPokemonData(id){
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
        .then(function(res){
            console.log(res.data.weight)

            setName(res.data.name);
            setImgName(id);

            setLife(res.data.stats[0].base_stat);
            setAttack(res.data.stats[1].base_stat);
            setSpecialAttack(res.data.stats[2].base_stat);
            setDefense(res.data.stats[3].base_stat);
            setSpecialDefense(res.data.stats[4].base_stat);
            setSpeed(res.data.stats[5].base_stat);

            setType(res.data.types[0].type.name);

            setMoves(res.data.moves);

            setWeight(res.data.weight)
            setHeight(res.data.height)

            showBar('100%')


        })
        .catch(function (error) {  console.log(error)  })
    }

    useEffect(() => {
        loadData();
    }, [])

    return(
        <PokemonsContainer>
            <section>
                {data.map(index => (
                    <Color key={index.url.split('/')[6]} src={require(`../images/samples/pikachu.png`)} format="hex">
                    {({data, loading, error}) => (
                        <div style={{backgroundColor: data, marginBottom: 10, marginTop: 10 }} onClick={() => showPokemonData(index.url.split('/')[6])}>
                            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${index.url.split('/')[6]}.svg`} alt="pokemon"/>
                            <div>
                                <h2>{index.name}</h2>
                            </div>
                        </div>
                    )}
                    </Color>
                ))}

                {/* Hacky to solve problem with flex wrap, alinging all elements to left */}
                <div className="fixFlexWrap"></div>
                <div className="fixFlexWrap"></div>
                <div className="fixFlexWrap"></div>
                <div className="fixFlexWrap"></div>
                
            </section>

            <aside style={{width: bar, transition: '0.3s'}}>
                <div className="header">
                    <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${imgName}.svg`} alt="pokemon"/>
                    <h1>{name}</h1>
                </div>

                <div className="separator">
                    <div className="separator_indicator"></div>
                    <GraphicIcon style={{color: Colors.mainColors.blueLight, fontSize: 40, marginLeft: 10}} />
                    <p>Status:</p>
                </div>

                    <div className="status">
                        <p>HP/Life:</p>
                        <div className="bar">
                            <div className="filled_bar_life" style={{maxWidth: `${life}%`}}></div>
                        </div>
                    </div>

                    <div className="status">
                        <p>Ataque:</p>
                        <div className="bar">
                            <div className="filled_bar_attack" style={{maxWidth: `${attack}%`}}></div>
                        </div>
                    </div>

                    <div className="status">
                        <p>Ataque Especial:</p>
                        <div className="bar">
                            <div className="filled_bar_attack" style={{maxWidth: `${specialAttack}%`}}></div>
                        </div>
                    </div>

                    <div className="status">
                        <p>Defesa:</p>
                        <div className="bar">
                            <div className="filled_bar_defesa" style={{maxWidth: `${defense}%`}}></div>
                        </div>
                    </div>

                    <div className="status">
                        <p>Defesa Especial:</p>
                        <div className="bar">
                            <div className="filled_bar_special_defesa" style={{maxWidth: `${specialDefense}%`}}></div>
                        </div>
                    </div>

                    <div className="status">
                        <p>Velocidade:</p>
                        <div className="bar">
                            <div className="filled_bar_speed" style={{maxWidth: `${speed}%`}}></div>
                        </div> 
                    </div>

                <div className="separator">
                    <div className="separator_indicator"></div>
                    <FlashIcon style={{color: Colors.mainColors.blueLight, fontSize: 40, marginLeft: 10}} />
                    <p>Tipo do Pokemon:</p>
                </div>

                    <div className="pokemon_type">
                        <img src={types[type]} alt="type"/>
                        <p>{type}</p>
                    </div>

                <div className="separator">
                    <div className="separator_indicator"></div>
                    <PawIcon color={Colors.mainColors.blueLight} style={{marginLeft: 10}} fontSize="40px"/>
                    <p>Movimentos:</p>
                </div>

                    <div className="pokemon_moves">
                        {moves.map((data, index) => (
                            <p key={index}>{data.move.name}</p>
                        ))}
                    </div>

                    <footer className="wrapper_measure">
                        <div className="inner_measure">
                            <p className="pokemon_height">{Math.round(height)}cm</p>
                            <p className="bottom_description">Altura</p>
                        </div>
                        <div className="inner_measure">
                            <p className="pokemon_weight">{Math.round(weight)}kg</p>
                            <p className="bottom_description">Peso</p>
                        </div>
                    </footer>
            </aside>
        </PokemonsContainer>
    )
}