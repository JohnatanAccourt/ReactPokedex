import styled from 'styled-components';
import Colors from '../constants/Colors';

export const Container = styled.div `
    display: grid;
    grid-template-columns: 2fr 10fr auto;
    position: relative;
    margin: auto;
    
    .sideBar{
        background-color: ${Colors.mainColors.blueLight};
        height: auto;
    }

    .mainGrid{
        background-color: ${Colors.mainColors.blueMid};
        height: auto;
        overflow-x: scroll;
    }

    @media(max-width: 1000px){
        grid-template-columns: 1fr;
        height: 100vh;
        
        .sideBar{
            display: none;
        }
    }

`