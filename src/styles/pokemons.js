import styled from 'styled-components';
import Colors from '../constants/Colors';

import { 
    toBlueMid,
    toBlueLight,
    fillSlowly,
    delay
} from './animations';

const font = 'Roboto';
const fontLight = '400'; 
const fontMedium = '500'; 
const fontBold = '700'; 

export const LoadingContainer = styled.div `
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 0px;
    margin: 0;
    padding: 0;
    flex-direction: column;
    img{
        margin-right: 10%;
    }
    div{
        display: flex;
        flex-direction: row;
        p{
            font-size: 2em;
            text-align: center;
            color: white;
            font-family: ${font};
            font-weight: ${fontBold};
            margin-top: 10px;
            margin-bottom: 10px;
            &:nth-child(1){
                animation: ${delay} 0.7s 0.5s normal infinite;
            }
            &:nth-child(2){
                animation: ${delay} 0.7s 1s normal infinite;
            }
            &:nth-child(3){
                animation: ${delay} 0.7s 1.5s normal infinite;
            }
            &:nth-child(4){
                animation: ${delay} 0.7s 2s normal infinite;
            }
            &:nth-child(5){
                animation: ${delay} 0.7s 2.5s normal infinite;
            }
            &:nth-child(6){
                animation: ${delay} 0.7s 3s normal infinite;
            }
            &:nth-child(7){
                animation: ${delay} 0.7s 3.5s normal infinite;
            }
            &:nth-child(8){
                animation: ${delay} 0.7s 4s normal infinite;
            }
            &:nth-child(9){
                animation: ${delay} 0.7s 4.5s normal infinite;
            }
            &:nth-child(10){
                animation: ${delay} 0.7s 5s normal infinite;
            }
            &:nth-child(11){
                animation: ${delay} 0.7s 5.5s normal infinite;
            }
            &:nth-child(12){
                animation: ${delay} 0.7s 6s normal infinite;
            }
            &:nth-child(13){
                animation: ${delay} 0.7s 6.5s normal infinite;
            }
        }
    }
`
export const PokemonsContainer = styled.div `
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: row;
    .tip4user{
        position: absolute;
        top: 0;
        background-color: ${Colors.mainColors.blueStrong};
        padding: 1%;    
        z-index: 100;

        font-size: 1em;
        color: white;
        font-family: ${font};
        font-weight: ${fontMedium};
    }
    section{
        display: flex;
        flex-direction: row;  
        flex-wrap: wrap;      
        justify-content: space-around;
        /* align-content: flex-start; */
        
        overflow-x: scroll;
        overflow-y: none;
        overflow-x: hidden;

        height: 100vh;
        max-width: 100%;
        margin-left: auto;
        background: ${Colors.mainColors.blueMid};
        animation: ${toBlueMid} 1s 0s forwards;
        .fixFlexWrap{
            height: 0;
            width: '200px';
        }
        ::-webkit-scrollbar {
            width: 0px;
            background: transparent; /* make scrollbar transparent */
        }
        div{
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            background: ${Colors.mainColors.yellow};
            height: 38vh;
            width: 200px;
            margin: 2px; 
            img{
                padding: 5px 0px 5px 0px;
                height: 80%;
                width: 90%;
                cursor: pointer;
            }
            img:hover {
                filter: drop-shadow(7px 7px 0 rgba(0, 0, 0, 0.2));
                height: 82%;
                width: 92%;
                transition: 0.2s;
                cursor: pointer;
            }
            div{
                margin: 0;
                justify-content: center;
                align-items: center;
                height: 20%;
                background-color: ${Colors.mainColors.blueStrong};
                h2{
                    font-size: 1.4em;
                    color: white;
                    font-family: ${font};
                    font-weight: ${fontMedium};
                    cursor: pointer;
                }
            }
        }
    }
    .footer{
        /* position: relative; */
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        max-width: 100%;
        height: 7vh;
        background-color: ${Colors.mainColors.blueMid};
        *:hover{
            font-size: 1.2em;
        }
        p{
            font-size: 1em;
            color: white;
            font-family: ${font};
            font-weight: ${fontMedium};
        }
        button{
            border: none;
            outline: none;
            font-family: ${font};
            font-weight: ${fontMedium};
            background-color: transparent;
            margin-left: 5px;
            margin-right: 5px;
            color: white;
            font-size: 1em;
            cursor: pointer;
        }
    }
    .teste{
        position: absolute;
        width: 100%;
    }

    aside{
        height: 100vh;
        max-width: 250px;
        background: ${Colors.mainColors.blueLight};
        display: flex;
        align-items: center;
        flex-direction: column;
        animation: ${toBlueLight} 1s 0s forwards;
        overflow-x: scroll;
        overflow-y: none;
        overflow-x: hidden;
        ::-webkit-scrollbar {
            width: 0px;
            background: transparent; /* make scrollbar transparent */
        }
        .header{
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            width: 100%;
            height: 50%;
            background-color: ${Colors.mainColors.blueStrong};
            h1{
                text-align: center;
                color: white;
                margin-top: 10px;
                font-family: ${font};
                font-weight: ${fontBold};
            }
            img{
                width: 200px;
                height: 200px;
            }
        }
        .separator{
            display: flex;
            align-items: center;
            flex-direction: row;
            position: relative;
            width: 100%;
            height: 45px;
            padding: 5px 0px 5px 0px;
            background-color: ${Colors.mainColors.blueMid};
            .separator_indicator{
                position: absolute;
                width: 3%;
                height: 100%;
                background-color: ${Colors.mainColors.yellow};
            }
            p{
                font-size: 1.3em;
                font-family: ${font};
                font-weight: ${fontBold};
                color: white;
                margin-left: 10px;
            }
        }
        .status{
            width: 95%;
            margin: 3% auto;
            p{
                font-size: 0.9em;
                font-family: ${font};
                font-weight: ${fontBold};
                color: white;
                margin-bottom: 3px;
            }
            .bar{
                width: 95%;
                height: 13px;
                background-color: ${Colors.statsColors.empty};
                border-radius: 30px;
                .filled_bar_life{
                    height: 100%;
                    background-color: ${Colors.statsColors.life};
                    border-radius: 30px;
                    opacity: 0;
                    transition: 0.6s;
                    animation: ${fillSlowly} 3s 0.5s normal forwards;
                }
                .filled_bar_attack{
                    height: 100%;
                    background-color: ${Colors.statsColors.attack};
                    border-radius: 30px;
                    opacity: 0;
                    transition: 0.6s;
                    animation: ${fillSlowly} 3s 0.5s normal forwards;
                }
                .filled_bar_special_attack{
                    height: 100%;
                    background-color: ${Colors.statsColors.specialAttack};
                    border-radius: 30px;
                    opacity: 0;
                    transition: 0.6s;
                    animation: ${fillSlowly} 3s 0.5s normal forwards;
                }
                .filled_bar_defesa{
                    height: 100%;
                    background-color: ${Colors.statsColors.defense};
                    border-radius: 30px;
                    opacity: 0;
                    transition: 0.6s;
                    animation: ${fillSlowly} 3s 0.5s normal forwards;
                }
                .filled_bar_special_defesa{
                    height: 100%;
                    background-color: ${Colors.statsColors.specialDefense};
                    border-radius: 30px;
                    opacity: 0;
                    transition: 0.6s;
                    animation: ${fillSlowly} 3s 0.5s normal forwards;
                }
                .filled_bar_speed{
                    height: 100%;
                    background-color: ${Colors.statsColors.speed};
                    border-radius: 30px;
                    opacity: 0;
                    transition: 0.6s;
                    animation: ${fillSlowly} 3s 0.5s normal forwards;
                }
            }
        }
        .pokemon_moves{
            width: 95%;
            margin: 10% auto;
            p{
                text-align: center;
                font-size: 1.2em;
                font-family: ${font};
                font-weight: ${fontBold};
                color: white;
                padding-top: 5px;
            }
        }
        .pokemon_type{
            width: 95%;
            margin: 10% auto;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction:column;
            img{
                height: 130px;
                width: 130px;
            }
            p{
                font-size: 1.3em;
                font-family: ${font};
                font-weight: ${fontBold};
                color: white;
                padding-top: 5px;
            }
        }
        .wrapper_measure{
            display: flex;
            flex-direction: row;
            width: 100%;
            height: 100px;
            background-color: ${Colors.mainColors.blueStrong};
            .inner_measure{
                width: 50%;
                display: flex;
                justify-content: center;
                flex-direction: column;    
                align-items: center;
            }
            .pokemon_height{
                font-size: 2em;
                font-family: ${font};
                font-weight: ${fontBold};
                color: white;
            }
            .pokemon_weight{
                font-size: 2em;
                font-family: ${font};
                font-weight: ${fontBold};
                color: white;
            }
            .bottom_description{
                font-size: 1.3em;
                font-family: ${font};
                font-weight: ${fontLight};
                color: white;
            }
        }
    }
`
