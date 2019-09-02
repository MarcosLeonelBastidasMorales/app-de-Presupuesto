import React from 'react';

const Errores = ({mensaje}) => {
    return (
        <p className='alert alert-danger error'>{mensaje}</p>
    );
};

export default Errores;