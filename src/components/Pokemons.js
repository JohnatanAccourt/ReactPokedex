import React from 'react';
import Color from 'color-thief-react';

import GraphicIcon from '@material-ui/icons/GraphicEq';
import FlashIcon from '@material-ui/icons/FlashOn';
import PawIcon from 'react-ionicons/lib/MdPaw';
import SchoolIcon from 'react-ionicons/lib/MdSchool';

import Colors from '../constants/Colors';

import { 
    PokemonsContainer
} from '../styles/pokemons';

export default function Pokemons(props){
    return(
        <PokemonsContainer>
            <section>
                <Color src={require("../images/samples/pikachu.png")} format="hex">
                {({data, loading, error}) => (
                    <div style={{backgroundColor: data }}>
                        <img src={require("../images/samples/pikachu.png")}/>
                        <div>
                            <h2>Pikachu</h2>
                        </div>
                    </div>
                )}
                </Color>

                <Color src={require("../images/samples/pikachu.png")} format="hex">
                {({data, loading, error}) => (
                    <div style={{backgroundColor: data }}>
                        <img src={require("../images/samples/pikachu.png")}/>
                        <div>
                            <h2>Pikachu</h2>
                        </div>
                    </div>
                )}
                </Color>

                <Color src={require("../images/samples/pikachu.png")} format="hex">
                {({data, loading, error}) => (
                    <div style={{backgroundColor: data }}>
                        <img src={require("../images/samples/pikachu.png")}/>
                        <div>
                            <h2>Pikachu</h2>
                        </div>
                    </div>
                )}
                </Color>

                <Color src={require("../images/samples/pikachu.png")} format="hex">
                {({data, loading, error}) => (
                    <div style={{backgroundColor: data }}>
                        <img src={require("../images/samples/pikachu.png")}/>
                        <div>
                            <h2>Pikachu</h2>
                        </div>
                    </div>
                )}
                </Color>

                {/* Hacky to solve problem with flex wrap, alinging all elements to left */}
                <div className="fixFlexWrap"></div>
                <div className="fixFlexWrap"></div>
                <div className="fixFlexWrap"></div>
                <div className="fixFlexWrap"></div>
                
            </section>

            <aside>
                <div className="header">
                    <img src={require("../images/samples/pikachu.png")}/>
                    <h1>Pikachu</h1>
                </div>

                <div className="separator">
                    <div className="separator_indicator"></div>
                    <GraphicIcon style={{color: Colors.mainColors.blueLight, fontSize: 40, marginLeft: 10}} />
                    <p>Status:</p>
                </div>

                    <div className="status">
                        <p>HP/Life:</p>
                        <div className="bar">
                            <div className="filled_bar_life" style={{width: '57%'}}></div>
                        </div>
                    </div>

                    <div className="status">
                        <p>Ataque:</p>
                        <div className="bar">
                            <div className="filled_bar_attack" style={{width: '54%'}}></div>
                        </div>
                    </div>

                    <div className="status">
                        <p>Defesa:</p>
                        <div className="bar">
                            <div className="filled_bar_defesa" style={{width: '54%'}}></div>
                        </div>
                    </div>

                    <div className="status">
                        <p>Defesa Especial:</p>
                        <div className="bar">
                            <div className="filled_bar_special_defesa" style={{width: '54%'}}></div>
                        </div>
                    </div>

                    <div className="status">
                        <p>Velocidade:</p>
                        <div className="bar">
                            <div className="filled_bar_speed" style={{width: '54%'}}></div>
                        </div>
                    </div>

                <div className="separator">
                    <div className="separator_indicator"></div>
                    <FlashIcon style={{color: Colors.mainColors.blueLight, fontSize: 40, marginLeft: 10}} />
                    <p>Tipo do Pokemon:</p>
                </div>

                    <div className="pokemon_type">
                        <img src={require("../images/types/grass.svg")}/>
                        <p>Grass</p>
                    </div>

                <div className="separator">
                    <div className="separator_indicator"></div>
                    <PawIcon color={Colors.mainColors.blueLight} style={{marginLeft: 10}} fontSize="40px"/>
                    <p>Movimentos:</p>
                </div>

                    <div className="pokemon_moves">
                        <p><span>🔘</span> Sneeze</p>
                        <p><span>🔘</span> Sneeze</p>
                    </div>

                <div className="separator">
                    <div className="separator_indicator"></div>
                    <SchoolIcon color={Colors.mainColors.blueLight} style={{marginLeft: 10}} fontSize="40px"/>
                    <p>Habilidades:</p>
                </div>

                    <div className="pokemon_moves">
                        <p><span>🔘</span> Sneeze</p>
                    </div>

                    <footer className="wrapper_measure">
                        <div className="inner_measure">
                            <p className="pokemon_height">40cm</p>
                            <p className="bottom_description">Centímetros</p>
                        </div>
                        <div className="inner_measure">
                            <p className="pokemon_weight">20kg</p>
                            <p className="bottom_description">Peso</p>
                        </div>
                    </footer>
            </aside>
        </PokemonsContainer>
    )
}