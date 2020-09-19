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
    div{
        overflow-x: scroll;
        overflow-y: none;
        overflow-x: hidden;
        height: 100vh;
        width: 75%;
        background: ${Colors.mainColors.blueMid};
        animation: ${toBlueMid} 1s 0s forwards;
        h2{
            width: 90%;
            margin: auto;
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
            width: 90%;
            margin: auto;
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
    }
    section{
        height: 100vh;
        width: 5%;
        background: ${Colors.mainColors.blueStrong};
        display: flex;
        flex-direction: column;
        align-items: center;
        a{
            margin-top: 25px;
            transition: 0.7s;
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
        animation: ${toBlueLight} 1s 0s forwards;
        div{
            width: 200px;
            height: 200px;
            border-radius: 100%;
            background-image: url(${img});
            background-size: cover;
            background-position: center;
            margin-top: 10px;
        }
        h1{
            text-align: center;
            font-size: 1.9em;
            color: white;
            font-family: ${font};
            font-weight: ${fontBold};
            margin-top: 10px;
            margin-bottom: 10px;
        }
    }
`
