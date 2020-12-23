import React from 'react';
import GraphicIcon from '@material-ui/icons/GraphicEq';
import FlashIcon from '@material-ui/icons/FlashOn';
import PawIcon from 'react-ionicons/lib/MdPaw';

import Colors from '../constants/Colors';


import '../styles/pokemons';

export default function Separator(props){
    return(
        <div className="separator">
            <div className="separator_indicator"></div>
            {props.iconName === 'graphic' ?
                <GraphicIcon style={{color: Colors.mainColors.blueLight, fontSize: '2.4rem', marginLeft: 10}} />
            :
            props.iconName === 'flash' ?
                <FlashIcon style={{color: Colors.mainColors.blueLight, fontSize: '2.4rem', marginLeft: 10}} />
            :
            props.iconName === 'paw' ?
                <PawIcon color={Colors.mainColors.blueLight} style={{marginLeft: 10}} fontSize="2.4rem"/>
            :
                <GraphicIcon style={{color: Colors.mainColors.blueLight, fontSize: '2.4rem', marginLeft: 10}} />
            }
            <p>Status:</p>
        </div>
    )
}