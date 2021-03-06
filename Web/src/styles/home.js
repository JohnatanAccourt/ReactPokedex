import styled from 'styled-components';
import Colors from '../constants/Colors';

import {
    toBlueMid,
    toBlueStrong,
    imgBannerExtend,
    textSlide,
} from './animations';

const font = 'Roboto';
const fontLight = '400'; 
const fontMedium = '500'; 
const fontBold = '700';

export const HomeContainer = styled.div `
    height: 100vh;
    width: 100%;
    overflow-x: scroll;
    overflow-y: none;
    overflow-x: hidden;
    animation: ${toBlueMid} 1.5s 0s forwards;
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
    h5{
        width: 95%;
        margin: auto;
        text-align: left;
        font-size: 1.2em;
        color: white;
        font-family: ${font};
        font-weight: ${fontMedium};
        margin-top: 20px;
        margin-bottom: 20px;
    }
    h6{
        width: 95%;
        margin: auto;
        text-align: center;
        font-size: 1em;
        color: white;
        font-family: ${font};
        font-weight: ${fontMedium};
        margin-top: 20px;
        margin-bottom: 20px;
    }

`
export const HomeHeader = styled.div `
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 10vh;
    max-width: 100%;
    padding: 4px 5% 4px 5%;
    background-color: ${Colors.mainColors.blueStrong};
    animation: ${toBlueStrong} 1s 0s forwards;
    h1{
        color: white;
        font-size: 1.5em; 
        font-family: ${font};
        font-weight: ${fontBold};
    }
    img{
        height: 60px;
        width: 160px;
    }
`

export const HomeBanner = styled.div `
    height: 40vh;
    width: 95%;
    margin: auto;
    background-color: ${Colors.mainColors.blueStrong};
    margin-top: 2%;
    overflow: hidden;
    display: flex;
    flex-direction: row;
    img{
        display: block;
        position: relative;
        height: 200%;
        max-width: 60%;
        top: 0px;
        animation: ${imgBannerExtend} 3s 0.5s forwards;
        @media(max-width: 640px){
            left: -6%;
            height: 170%;
            max-width: 70%;
        }
    }
    div{
        width: 60%;
        padding-top: 30px;
        padding-left: 50px;
        padding-right: 50px;
        display: flex;
        flex-direction: column;
        align-items: center;
        @media(max-width: 640px){
            width: 30%;
            padding-top: 20px;
            padding-left: 0px;
        }
        h1{
            opacity: 0;
            position: relative;
            left: 200px;
            text-align: center;
            color: white;
            font-family: ${font};
            font-weight: ${fontBold};
            margin-bottom: 5px;
            animation: ${textSlide} 3s 1s forwards;
        }
        h3{
            opacity: 0;
            position: relative;
            left: 200px;
            text-align: center;
            color: white;
            font-family: ${font};
            font-weight: ${fontLight};
            width: 90%;
            animation: ${textSlide} 3s 1s forwards;

        }
        button{
            opacity: 0;
            position: relative;
            left: 200px;
            padding: 0;
            border: none;
            outline: none;
            font-family: ${font};
            font-weight: ${fontMedium};
            background-color: ${Colors.mainColors.green};
            width: 250px;
            height: 35px;
            margin-top: 20px;
            border-radius: 10px;
            color: white;
            font-size: 1em;
            align-self: center;
            cursor: pointer;
            animation: ${textSlide} 3s 0.5s forwards;
            @media(max-width: 640px){
                width: 150px;
                height: 25px;
                font-size: 0.8em;
            }
        }

    }

`
    
export const HomeSocial = styled.div `
    display: flex;
    justify-content: space-evenly;
    flex-direction: row;
    flex-wrap: wrap;
    width: 96%;
    margin: auto;
    margin-bottom: 20px;
    div{
        display: flex;  
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: ${Colors.mainColors.blueStrong};
        width: 150px;
        height: 200px;
        border-radius: 10px;
        margin-left: 1%;
        margin-bottom: 2%;
    }
    a > button:hover {
        background-color: ${Colors.mainColors.green};
        color: white;
        height: 35px;
        transition: 0.3s;
        font-size: 1em;
        border-radius: 20px;
    }
    h5{
        text-align: center;
        font-size: 0.8em;
        color: white;
        margin: 0;
        font-family: ${font};
        font-weight: ${fontMedium};
    }
    a > button{
        padding: 10;
        border: none;
        outline: none;
        font-family: Goudy Bookletter 1911, sans-serif;
        font-weight: ${fontBold};
        background-color: ${Colors.mainColors.yellow};
        width: 100px;
        height: 25px;
        margin-top: 10px;
        border-radius: 10px;
        color: ${Colors.mainColors.blueStrong};
        font-size: 0.8em;
        align-self: center;
        cursor: pointer;
        transition: 0.3s;
    }
`

export const HomeBtn = styled.div `
    width: 95%;
    height: 35px;
    margin: auto;
    display: flex;
    align-items: center;
    margin-top: 10px;
    h2{
        width: 25%;
        height: 70%;
        line-height: 25px;
        text-align: center;
        font-size: 0.9em;
        color: white;
        font-family: ${font};
        font-weight: ${fontMedium};
        background-color: ${Colors.mainColors.blueLight};
        border-radius: 10px;
        margin-top: 20px;
        margin-bottom: 10px;
        align-self: center;
        cursor: pointer;
        transition: 0.2s;

    }
    h2:hover {
        background-color: ${Colors.mainColors.green};
        width: 30%;
        transition: 0.2s;
    }

`

export const HomePokemons = styled.div `
    display: flex;
    justify-content: space-between;
    position: relative;
    flex-wrap: wrap;
    flex-direction: row;  
    width: 95%;
    margin: 40px auto;
    div{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        width: 200px;
        @media(max-width: 1270px){
            margin-bottom: 10%;
        }
        img{
            padding: 7% 4%;
            height: 90%;
            width: 90%;
            cursor: pointer;
        }
        img:hover {
            filter: drop-shadow(7px 7px 0 rgba(0, 0, 0, 0.2));
            transition: 0.2s;
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
`

