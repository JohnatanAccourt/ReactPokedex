import styled, { keyframes, css } from 'styled-components';
import Colors from '../constants/Colors';

export const textWrap = keyframes `
    from { position: relative; left: -200px; opacity: 0;}
    to { position: relative; left: 0px; font-size: 3em; opacity: 1;}
`


export const toBlueLight = keyframes `
    from { background-color: ${Colors.mainColors.blueMid} }
    to { background-color: ${Colors.mainColors.blueLight}}
` 
export const toBlueMid = keyframes `
    from { background-color: ${Colors.mainColors.blueLight} }
    to { background-color: ${Colors.mainColors.blueMid}}
`
export const toBlueStrong = keyframes `
    from { background-color: ${Colors.mainColors.blueMid} }
    to { background-color: ${Colors.mainColors.blueStrong}}
` 


export const imgBannerExtend = keyframes `
    from { top: -0px; }
    to {top: -150px; }
` 

export const textSlide = keyframes `
    from { left: 200px; opacity: 0;}
    to { left: 0px; opacity: 1;}
` 




 


