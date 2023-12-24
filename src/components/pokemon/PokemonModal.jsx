import React from 'react';
import Modal from 'react-bootstrap/Modal';
import ProgressBar from 'react-bootstrap/ProgressBar';

export default function PokemonModal({ show, handleClose, name, types, stats, imageUrl }) {
    return (
        <React.Fragment>
            <Modal className='pokemon-modal' show={show} onHide={handleClose} backdrop="static" >
                <Modal.Header closeButton>
                    <Modal.Title>{name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='text-center'>
                        <img src={imageUrl} alt={name} />
                        <p className='fs-6'>Types : {types.join(', ')}</p>
                    </div>
                    <h5>Stats :</h5>
                    <ul className='p-0'>
                        {stats.map((stat) => (
                            <>
                                <li className='mt-1' key={stat.name}>{stat.name}: {stat.value} </li>
                                <ProgressBar animated key={stat.name} now={stat.value} variant={getProgressBarVariant(stat.value)} />
                            </>
                        ))}
                    </ul>
                </Modal.Body>
            </Modal>
        </React.Fragment>
    );
}

function getProgressBarVariant(value) {
    if (value >= 75) {
        return 'success';
    } else if (value >= 55) {
        return 'info';
    } else if (value >= 30) {
        return 'warning';
    } else {
        return 'danger';
    }
}