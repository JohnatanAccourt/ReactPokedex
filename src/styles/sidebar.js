import styled from 'styled-components';
import Colors from '../constants/Colors';

const font = 'Roboto';
const fontLight = '400'; 
const fontMedium = '500'; 
const fontBold = '700'; 

export const SideBarContainer = styled.div `
    height: 100vh;
    width: 100%;
    .header{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        width: 100%;
        height: 40%;
        background-color: ${Colors.mainColors.blueStrong};
        h1{
            text-align: center;
            color: white;
            margin-top: 10px;
            font-family: ${font};
            font-weight: ${fontBold};
        }
        a{
            img{
                width: 150px;
                height: 150px;
            }
        }
    }
`

export const WrapperBtn = styled.div `
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 10px;
    cursor: pointer;
    :hover {
        background-color: ${Colors.mainColors.blueMid};
        transition: 0.2s;
    }
    transition: 0.2s;

    button:focus{
        outline: 0;
    }
    button{
        padding: 0;
        border: none;
        outline: none;
        background-color: transparent;
        color: white;
        font-family: ${font};
        font-weight: ${fontBold};
        margin-left: 10px;
        font-size: 1em;
        align-self: center;
    }
`
    