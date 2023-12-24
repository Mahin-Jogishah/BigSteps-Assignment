import React from 'react';
import Modal from 'react-bootstrap/Modal';

export default function PokemonModal({ show, handleClose, name, types, stats }) {
    return (
        <Modal show={show} onHide={handleClose} backdrop="static" >
            <Modal.Header closeButton>
                <Modal.Title>{name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>Types: {types.join(', ')}</p>
                <h3>Stats:</h3>
                <ul>
                    {stats.map((stat) => (
                        <li key={stat.name}>{stat.name}: {stat.value}</li>
                    ))}
                </ul>
            </Modal.Body>
        </Modal>
    );
}
