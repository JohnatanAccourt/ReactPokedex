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
        padding: 0% 3% 0% 3%;
        background: ${Colors.mainColors.blueMid};
        animation: ${toBlueMid} 1s 0s forwards;
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
