import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiceOne } from '@fortawesome/free-solid-svg-icons/faDiceOne'
import { faDiceTwo } from '@fortawesome/free-solid-svg-icons/faDiceTwo'
import { faDiceThree } from '@fortawesome/free-solid-svg-icons/faDiceThree'
import { faDiceFour } from '@fortawesome/free-solid-svg-icons/faDiceFour'
import { faDiceFive } from '@fortawesome/free-solid-svg-icons/faDiceFive'
import { faDiceSix } from '@fortawesome/free-solid-svg-icons/faDiceSix'

export default function Tile(props) {

function defineIcon() {
    switch(props.value) {
        case 1: return faDiceOne;
        case 2: return faDiceTwo;
        case 3: return faDiceThree;
        case 4: return faDiceFour;
        case 5: return faDiceFive;
        case 6: return faDiceSix;
    }
}

    return (
            <FontAwesomeIcon 
            className={`tile ${props.isLocked && "locked"} `} 
            icon={defineIcon()} 
            onClick={props.onClick}
            color={props.isLocked ? '#59E391' : '#708090'}
            />
    )
}
