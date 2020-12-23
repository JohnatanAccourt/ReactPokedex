import styled from 'styled-components';
import Colors from '../constants/Colors';
import img from '../images/logos/me.jpg';

import { 
    textWrap, 
    toBlueMid,
    toBlueLight 
} from './animations';

const font = 'Roboto';
const fontLight = '400'; 
// const fontMedium = '500'; 
const fontBold = '700'; 

export const GithubContainer = styled.div `
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: row;
    @media(max-width: 1400px){
        flex-direction: column-reverse;
    }
    .mobileBTN{
        display: none;
        position: fixed;
        top: 1%;
        left: 1%;
        background-color: transparent;
        border: none;
        outline: none;
        cursor: pointer;
        z-index: 10000;
        @media(max-width: 1000px){
            display: block;
        }
        span{
            display: flex;
            justify-content: center;
            align-items: center;
            width: 80px;
            height: 80px;
            border-radius: 80px;
            background: ${Colors.mainColors.blueStrong};   
        }
    }
    div{
        overflow-x: scroll;
        overflow-y: none;
        overflow-x: hidden;
        height: 100vh;
        width: 75%;
        padding: 0% 3% 0% 3%;
        background: ${Colors.mainColors.blueMid};
        animation: ${toBlueMid} 1s 0s forwards;
        @media(max-width: 1400px){
            width: 95%;
        }
        h2{
            text-align: left;
            font-size: 3em;
            color: white;
            font-family: ${font};
            font-weight: ${fontBold};
            margin-top: 20px;
            margin-bottom: 20px;
            display: block;
            animation: ${textWrap} 3s 0s forwards;
        }
        h3, p{
            text-align: left;
            font-size: 3em;
            color: white;
            font-family: ${font};
            font-weight: ${fontBold};
            margin-top: 20px;
            margin-bottom: 20px;
        }
        h3{
            font-size: 1em;
            font-weight: ${fontLight};
        }
        p{
            font-size: 1em;
            font-weight: ${fontLight};
        }
        button{
            width: 100%;
            background-color: ${Colors.mainColors.blueStrong};
            height: 40px;
            padding: 0;
            border: none;
            outline: none;
            cursor: pointer;
            transition: 0.5s;
            a{
                text-decoration: none;
                font-size: 1.2em;
                color: white;
                font-family: ${font};
                font-weight: ${fontBold};
            }
            :hover{
                background-color: ${Colors.mainColors.green};
                border-radius: 10px;
                transition: 0.5s;
            }
        }
        ::-webkit-scrollbar {
            width: 0px;
            background: transparent; /* make scrollbar transparent */
        }
    }
    section{
        height: 100vh;
        width: 5%;
        background: ${Colors.mainColors.blueStrong};
        display: flex;
        flex-direction: column;
        align-items: center;
        @media(max-width: 1400px){
            flex-direction: row;
            justify-content: space-evenly;
            height: 7%;
            width: 100%;
        }
        a{
            margin-top: 25px;
            transition: 0.7s;
            @media(max-width: 1400px){
                margin-top: 10px;
            }
        }
        a:hover{
            transform: rotate(360deg);
            transition: 0.7s;
        }
    }
    aside{
        height: 100vh;
        width: 25%;
        background: ${Colors.mainColors.blueLight};
        display: flex;
        align-items: center;
        flex-direction: column;
        animation: ${toBlueMid} 1s 0s forwards;
        overflow-x: scroll;
        overflow-y: none;
        overflow-x: hidden;
        @media(max-width: 1400px){
            height: 100vh;
            width: 100%;
            overflow-x: none;
        }
        .imgPerson{
            width: 200px;
            height: 400px;
            border-radius: 100%;
            background-image: url(${img});
            background-size: cover;
            background-position: center;
            margin-top: 5px;
            border-style: solid;
            border-width: 10px;
            border-color: ${Colors.mainColors.blueLight};
            @media(max-width: 1400px){
                width: 200px;
                height: 550px;
            }
        }
        h1{
            width: 50%;
            text-align: center;
            font-size: 1.9em;
            color: white;
            font-family: ${font};
            font-weight: ${fontBold};
            margin-top: 10px;
            margin-bottom: 10px;
        }
        ::-webkit-scrollbar {
            width: 0px;
            background: transparent; /* make scrollbar transparent */
        }
        .wrapperLogos{
            width: 95%;
            background-color: ${Colors.mainColors.blueLight};
            animation: ${toBlueLight} 1s 0s forwards;
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: space-around;
            @media(max-width: 1400px){
                height: 250px;
            }
            img{
                margin-top: 30px;
                width: 100px;
                height: 100px;
            }
        }
    }
`