import styled from 'styled-components';
import Colors from '../constants/Colors';

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
    padding-left: 5%;
    padding-right: 5%;
    padding-top: 4px;
    padding-bottom: 4px;
    background-color: ${Colors.mainColors.blueStrong};
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
        height: 100vh;
        width: 540px;
        top: -150px;
    }
    div{
        width: 60%;
        padding-top: 30px;
        padding-left: 50px;
        padding-right: 50px;
        display: flex;
        flex-direction: column;
        align-items: center;
        h1{
            text-align: center;
            color: white;
            font-family: ${font};
            font-weight: ${fontBold};
            margin-bottom: 5px;
        }
        h3{
            text-align: center;
            color: white;
            font-family: ${font};
            font-weight: ${fontLight};
            width: 90%;
        }
        button{
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
        }

    }

`
    
export const HomeSocial = styled.div `
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    width: 96%;
    margin: auto;
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
    }
    button:hover {
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
    button{
        padding: 0;
        border: none;
        outline: none;
        font-family: Goudy Bookletter 1911, sans-serif;
        font-weight: ${fontBold};
        background-color: ${Colors.mainColors.yellow};
        width: 85%;
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
        width: 20%;
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
    flex-direction: row;
    width: 95%;
    height: 38vh;
    margin: auto;
    margin-top: 10px;
    div{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;    
        height: 38vh;
        width: 200px;
        background-color: ${Colors.mainColors.yellow};

        img{
            padding: 5px 0px 5px 0px;
            height: 80%;
            width: 90%; 
        }
        div{
            justify-content: center;
            align-items: center;
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

