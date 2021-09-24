import {useState, useEffect} from 'react';
import { findCharacters, findCharacterById } from '../services/RickAndMortyAPI';
import { useParams } from 'react-router-dom';


const useGetCharacter = () => {
    const [loading, setLoading] = useState(true);
    const [character, setCharacter] = useState({});
    const {id} = useParams()

    useEffect( () => {
        findCharacterById(id).then((character) => {
            setCharacter(character);
            setLoading(false);
        })
    }, [] )

    return(
        {loading, character}
    )
}

const useGetCharacterList = () => {
    const [loading, setLoading] = useState(true);
    const [characters, setCharacters] = useState([]);

    useEffect( () => {
        findCharacters().then((characters) => {
            setCharacters(characters);
            setLoading(false);
        })

    }, [] )

    return(
        {loading, characters}
    )


}

export default useGetCharacter; useGetCharacterList;