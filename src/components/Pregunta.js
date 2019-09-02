import React, {Fragment, useState} from 'react';
import Errores from './Errores';

function Pregunta (props) {

    const {guardarPresupuesto, guardarPreguntaPresupuesto, guardarRestante} = props;

    const [cantidad, guardarCantidad] = useState(0);
    const [error, guardarError] = useState(false);

    const agregarPesupuesto= e =>{
        e.preventDefault();
        if (cantidad < 1 || isNaN(cantidad)){
            guardarError(true);
            return;
        } else {
            guardarError(false);
        }
        guardarPresupuesto(cantidad);
        guardarRestante(cantidad);

        guardarPreguntaPresupuesto(false)
    };
    return(
        <Fragment>
            <h2>Coloca tu presupuesto</h2>
            {error ? <Errores mensaje='EL Presupesto es Incorrecto'/> : null}
            <form
                onSubmit={agregarPesupuesto}
            >
                <input
                    type="number"
                    className='u-full-width'
                    placeholder='Agrega tu presupuesto'
                    onChange= {e => guardarCantidad (parseInt( e.target.value, 10 ) )}
                ></input>

                <input
                    type='submit'
                    className='button-primary u-full-width'
                    value='Definir Presupuesto'
                ></input>
            </form>
        </Fragment>
    )
};

export default Pregunta;