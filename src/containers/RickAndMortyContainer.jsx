import React from 'react';
import useGetCharacter from '../hooks/CharacterHooks.js';
import CharacterList from '../components/app/characters/CharacterList.jsx';

const RickAndMortyContainer = () => {

    const {loading, characters} = useGetCharacter()

    if(loading)return<img src="https://powerusers.microsoft.com/t5/image/serverpage/image-id/118082i204C32E01666789C?v=v2" 
        alt="loading spinner" />

    return<CharacterList characters={characters} />
    
};

export default RickAndMortyContainer;