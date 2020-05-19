import React from 'react';
import './CharacterDetails.css'

const CharacterDetails = (props) => {
    if (!props.character) return null;
    
        return (
            <div>
                <h2>{props.character.name}</h2>
                <img src={props.character.image} alt={props.character.name}></img>
                <p>house: {props.character.house}</p>
                <p>Ancestry: {props.character.ancestry} </p>
                <p>Actor: {props.character.actor}</p>
            </div>
        );
    
}

export default CharacterDetails;