import React from 'react';
import { useGetCharacter } from '../hooks/CharacterHooks';
import { Link } from 'react-router-dom';
import Character from '../components/app/characters/Character';


const RickAndMortyDetailsContainer = () => {

    const {loading, character} = useGetCharacter();

    if(loading)return<img src="https://powerusers.microsoft.com/t5/image/serverpage/image-id/118082i204C32E01666789C?v=v2" alt="loading spinner" />

    return (
        <div data-testid="testing-div">
            <Character image={character.image} name={character.name} status={character.status}  />
            <Link to={`/`}>Go Back</Link>
        </div>
    )
    }

export default RickAndMortyDetailsContainer;
