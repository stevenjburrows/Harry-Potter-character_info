import React, { Component } from 'react';
import CharacterSelector from '../components/CharacterSelector'
import CharacterDetails from '../components/CharacterDetails'

class HogwortsContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
            characters: [],
            selectedCharacter: ''
        }
        this.handleCharacterSelected = this.handleCharacterSelected.bind(this)

        
    }

    componentDidMount() {
        const url = 'http://hp-api.herokuapp.com/api/characters';
        fetch(url)
        .then(res => res.json())
        .then(characters => this.setState({characters: characters}))
        .catch(err => console.err(err)
        )
    }

    handleCharacterSelected(name) {
        this.setState({selectedCharacter: name})
    }

   


    render() {
        const selectedCharacterFind = this.state.characters.find (character => {
            return character.name === this.state.selectedCharacter
        })
        return (
            <div>
                <h2>Characters of Harry Potter</h2>

                <CharacterSelector
                characters={this.state.characters} 
                onCharacterSelected ={this.handleCharacterSelected}
                />

                <CharacterDetails
                character = {selectedCharacterFind} />
            </div>
        );
    }
}

export default HogwortsContainer;