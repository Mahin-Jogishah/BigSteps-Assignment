import React, { useState } from 'react';
import PokemonModal from './PokemonModal';

export default function PokemonCards({ name, imageUrl, types, stats }) {

    const [show, setShow] = useState(false);

    const handleCardClick = () => {
        setShow(true);
    };

    const handleClose = () => {
        setShow(false);
    };

    return (
        <React.Fragment>
            <div className='pokemon-card text-black rounded-4 p-4 m-2' onClick={handleCardClick}>
                <img src={imageUrl} alt={name} />
                <li className='fs-2'>{name}</li>
                <li>{types.join(', ')}</li>
            </div>
            <PokemonModal show={show} handleClose={handleClose} name={name} types={types} stats={stats} imageUrl={imageUrl} />
        </React.Fragment>
    );
}
