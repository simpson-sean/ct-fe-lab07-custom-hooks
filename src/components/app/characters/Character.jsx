import React from 'react';
import PropTypes from 'prop-types';


const Character = ({ name, status, image }) => (
    <>
        <img src={image} alt={name} />
        <h1>{name}</h1>
        <h3>{status}</h3>
    </>
);

Character.propTypes = {
    name: PropTypes.string.isRequired,
    id: PropTypes.number,
    status: PropTypes.string,
    image: PropTypes.string.isRequired,
};

export default Character;