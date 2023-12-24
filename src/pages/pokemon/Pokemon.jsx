import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPokemonList, fetchPokemonTypes } from '../../redux/actions/PokemonAction';
import { PokemonCards } from '../../components';

export default function Pokemon() {
    const dispatch = useDispatch();
    const pokemonList = useSelector((state) => state.pokemon.pokemonList);
    const pokemonTypes = useSelector((state) => state.pokemon.pokemonTypes);

    const [searchQuery, setSearchQuery] = useState('');
    const [selectedType, setSelectedType] = useState('');

    useEffect(() => {
        dispatch(fetchPokemonList());
        dispatch(fetchPokemonTypes());
    }, [dispatch]);

    const filteredPokemonList = pokemonList.filter((pokemon) =>
        pokemon.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
        (!selectedType || pokemon.types.includes(selectedType))
    );

    const handleTypeChange = (e) => {
        setSelectedType(e.target.value);
    };

    return (
        <>
            <div className='home-page'>
                <div className='bg-img'>
                    <img src="../img/bg-1.jpg" alt="" />
                </div>
                <div className='d-flex position-sticky z-1 top-0 bg-white flex-wrap justify-content-between p-3 px-4'>
                    <div className='mt-2'>
                        <h6>Search your Fav Pokemon</h6>
                        <input
                            className='p-2 w-100 rounded-2 border'
                            type='text'
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder='Enter Pokemon Name'
                        />
                    </div>
                    <div className='mt-2'>
                        <h6>Select Pokemon Type</h6>
                        <select
                            className='p-2 w-100 rounded-2 border'
                            value={selectedType}
                            onChange={handleTypeChange}
                        >
                            <option value=''>All Types</option>
                            {pokemonTypes && pokemonTypes.map((type) => (
                                <option key={type} value={type}>
                                    {type}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
                <div className='d-flex p-4 flex-wrap justify-content-center'>
                    {filteredPokemonList.map((pokemon, index) => (
                        <PokemonCards key={index} name={pokemon.name} types={pokemon.types} stats={pokemon.stats} imageUrl={pokemon.imageUrl} />
                    ))}
                </div>
            </div>
        </>
    );
}
