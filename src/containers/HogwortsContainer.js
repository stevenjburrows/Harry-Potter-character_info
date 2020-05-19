import React, { Component } from 'react';
import CharacterSelector from '../components/CharacterSelector'
import CharacterDetails from '../components/CharacterDetails'

class HogwortsContainer extends Component {
    render() {
        return (
            <div>
                <h2>container</h2>

                <CharacterSelector />
                <CharacterDetails />
            </div>
        );
    }
}

export default HogwortsContainer;