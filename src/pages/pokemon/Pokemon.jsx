import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPokemonList, fetchPokemonTypes } from '../../redux/actions/PokemonAction';
import { PokemonCards, SelectComponent, InputComponent } from '../../components';

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
        <React.Fragment>
            <div className='home-page'>
                <div className='bg-img'>
                    <img src="../img/bg-1.jpg" alt="" />
                </div>
                <div className='position-sticky top-0 z-1'>
                    <div className='logo p-2 px-4 text-center'>
                        <img title="Reset Game" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/2000px-International_Pok%C3%A9mon_logo.svg.png" alt="Pokemon" />
                    </div>
                    <div className='input-field d-flex justify-content-center flex-wrap'>
                        <div className='m-2'>
                            <InputComponent
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                placeholder='🔍 Search Your Favorite Pokemon'
                            />
                        </div>
                        <div className='m-2'>
                            <SelectComponent
                                value={selectedType}
                                onChange={handleTypeChange}
                                options={pokemonTypes}
                            />
                        </div>
                    </div>
                </div>
                <div className='pokemon-list d-flex p-4 flex-wrap justify-content-center'>
                    {filteredPokemonList.map((pokemon, index) => (
                        <div>
                            <PokemonCards key={index} name={pokemon.name} types={pokemon.types} stats={pokemon.stats} imageUrl={pokemon.imageUrl} />
                        </div>
                    ))}
                </div>
            </div>
        </React.Fragment>
    );
}
