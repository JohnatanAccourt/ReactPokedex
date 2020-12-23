import React, { useState, useEffect } from 'react';
import axios from 'axios';

import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Menu from '@material-ui/icons/Menu';

import types from '../constants/Types'; 

import Loading from '../components/Loading';
import Pagination from '../components/Pagination';
import Separator from '../components/Separator';
import Status from '../components/Status';

import { 
    PokemonsContainer
} from '../styles/pokemons';

export default function Pokemons(props){
    const [loading, setLoading] = useState(true);
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
    const [tip, setTip] = useState('block');

    const [page, setPage] = useState('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=15');
    const [prevURL, setPrevURL] = useState('');
    const [nexURL, setNexURL] = useState('');

    async function showPokemonData(id){
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
        .then(function(res){
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

            setWeight(res.data.weight);
            setHeight(res.data.height);

            showBar('300%');
            setTip('none')
        })
        .catch(function (error) {  console.log(error)  })
    }

    useEffect(() => {
        let cancel;
        setLoading(true);
        axios.get(page, {
            // This used for avoid amount data when user press to next page or previous page, if that happen all app will slow.
            cancelToken: new axios.CancelToken(c => cancel = c)
        })
        .then(function(res){
            setData(res.data.results);
            setPrevURL(res.data.previous);
            setNexURL(res.data.next);
        })
        .catch(function (error) {  console.log(error)  })
        // UseEffect can return something when data is reloaded, we're using that function cancel of cancelToken
        // to avoid amount of data ensuring only data of that page is showing.
        setTimeout(() => {
            setLoading(false);
        }, 2000)
        return () => cancel();

    }, [page])

    return(
        <PokemonsContainer>
            {loading ? 
                <Loading />
                :
                <section>
                    <button className="mobileBTN" onClick={props.menuMobile}>
                        <span>
                            <Menu style={{color: '#fff', fontSize: '3rem'}} />
                        </span>
                    </button>
                    <p className="tip4user" style={{display: tip}}>Clique em algum pokemon</p>
                    {data.map(index => (
                        <div key={index.url.split('/')[6]} style={{backgroundColor: data, marginBottom: 10, marginTop: 10}} onClick={() => showPokemonData(index.url.split('/')[6])}>
                            {/* <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${index.url.split('/')[6]}.svg`} alt="pokemon"/> */}
                            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${index.url.split('/')[6]}.png`} alt="pokemon" />
                            <div>
                                <h2>{index.name}</h2>
                            </div>
                        </div>
                    ))}
                    {/* Hacky to solve problem with flex wrap, alinging all elements to left */}
                    <div className="fixFlexWrap"></div>
                    <div className="fixFlexWrap"></div>
                    <div className="fixFlexWrap"></div>
                    <div className="fixFlexWrap"></div>

                    <footer className="footer">
                        <ChevronLeft style={{color: "#fff", fontSize: 35, alignSelf: 'center', cursor: 'pointer'} } onClick={() => setPage(prevURL)} />
                            <Pagination page={() => setPage(`https://pokeapi.co/api/v2/pokemon/?offset=0&limit=15`)} numberPage='1' />
                            <Pagination page={() => setPage(`https://pokeapi.co/api/v2/pokemon/?offset=15&limit=15`)} numberPage='15'/>
                            <Pagination page={() => setPage(`https://pokeapi.co/api/v2/pokemon/?offset=30&limit=15`)} numberPage='30'/>
                            <Pagination page={() => setPage(`https://pokeapi.co/api/v2/pokemon/?offset=45&limit=15`)} numberPage='45'/>
                            <Pagination page={() => setPage(`https://pokeapi.co/api/v2/pokemon/?offset=60&limit=15`)} numberPage='60'/>
                            <Pagination page={() => setPage(`https://pokeapi.co/api/v2/pokemon/?offset=75&limit=15`)} numberPage='75'/>
                            <Pagination page={() => setPage(`https://pokeapi.co/api/v2/pokemon/?offset=90&limit=15`)} numberPage='90'/>
                            <Pagination page={() => setPage(`https://pokeapi.co/api/v2/pokemon/?offset=105&limit=15`)} numberPage='105'/>
                            <Pagination page={() => setPage(`https://pokeapi.co/api/v2/pokemon/?offset=120&limit=15`)} numberPage='120'/>
                            <Pagination page={() => setPage(`https://pokeapi.co/api/v2/pokemon/?offset=135&limit=15`)} numberPage='135'/>
                            <Pagination page={() => setPage(`https://pokeapi.co/api/v2/pokemon/?offset=150&limit=15`)} numberPage='150'/>
                            <Pagination page={() => setPage(`https://pokeapi.co/api/v2/pokemon/?offset=180limit=15`)} numberPage='180'/>
                            <Pagination page={() => setPage(`https://pokeapi.co/api/v2/pokemon/?offset=1000&limit=15`)} numberPage='1000'/>
                        <ChevronRight style={{color: "#fff", fontSize: 35, alignSelf: 'center', cursor: 'pointer'}} onClick={() => setPage(nexURL)} />
                    </footer>
                </section>
            }
            <aside style={{width: bar, transition: '0.3s'}}>
                <div className="header">
                    <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${imgName}.svg`} alt="pokemon"/>
                    <h1>{name}</h1>
                </div>

                <Separator iconName="graphic" />

                <Status description='HP/Life:' barType='filled_bar_life' width={life} />
                <Status description='Ataque:' barType='filled_bar_attack' width={attack} />
                <Status description='Ataque Especial:' barType='filled_bar_attack' width={specialAttack} />
                <Status description='Defesa:' barType='filled_bar_defesa' width={defense} />
                <Status description='Defesa Especial:' barType='filled_bar_special_defesa' width={specialDefense} />
                <Status description='Velocidade:' barType='filled_bar_speed' width={speed} />

                <Separator iconName="flash" />

                <div className="pokemon_type">
                    <img src={types[type]} alt="type"/>
                    <p>{type}</p>
                </div>

                <Separator iconName="paw" />

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