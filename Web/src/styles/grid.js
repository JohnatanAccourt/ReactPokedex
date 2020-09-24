import styled from 'styled-components';
import Colors from '../constants/Colors';

export const Container = styled.div `
    display: grid;
    grid-template-columns: 2fr 10fr;
    height: 100vh;
    
    .sideBar{
        background-color: ${Colors.mainColors.blueLight};
    }

    .mainGrid{
        background-color: ${Colors.mainColors.blueMid};
    }

`