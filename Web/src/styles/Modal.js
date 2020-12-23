import styled from 'styled-components';
import Colors from '../constants/Colors';


const font = 'Roboto';
const fontBold = '700'; 

export const ModalContainer = styled.div `
    position: absolute;
    top: 0;
    left: 0;

    display: flex;
    justify-content: center;
    align-items: center;

    width: 100vw;
    height: 100vh;
    background-color: rgba(0,0,0, 0.5); 
    z-index: 1000000;
    div{
        position: relative;
        width: 50vw;
        padding: 10%;
        background-color: ${Colors.mainColors.blueMid}; 
        z-index: 1000001;
        .btnClose{
            position: absolute;
            top: 5%;
            left: 5%;
            outline: none;
            border: none;
            background-color: transparent;
            font-size: 2rem;
            color: white;
        }
    }
`

export const WrapperBtn = styled.div `
    display: flex;
    flex-direction: row;
    align-items: center;
    cursor: pointer;
    transition: 0.2s;
    
    :hover {
        background-color: ${Colors.mainColors.blueMid};
        transition: 0.2s;
    }
    
    :hover > *{
        transition: 0.3s;
        font-size: 1.5em;
    }

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
        cursor: pointer;
    }
    img{
        width: 33px;
        height: 33px;
        transition: 0.3s;
    }
`