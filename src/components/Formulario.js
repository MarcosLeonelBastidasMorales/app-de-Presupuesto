import React, { useState} from "react";
import Errores from './Errores';
import shortid from 'shortid'

function  Formulario (props) {
    const {guardarGasto, guardarCrearGasto} = props;


    const [nombreGasto, guardarNombreGasto] = useState('');
    const [cantidadGasto, guardarCantidadGasto] = useState('');
    const [error, guardarError] = useState (false);
    
    //Cuando se agrega el gasto
    const agregarGasto = e => {
        e.preventDefault();
        // validar
        if (cantidadGasto <1 || isNaN(cantidadGasto) || nombreGasto ==''){
            guardarError(true);
            return;
        } else {
            guardarError(false)
        }
    

       

                        /// crear un componente  para almanecar los datos
        const gasto= {
            nombreGasto,
            cantidadGasto,
            id: shortid.generate()
        }   
         //Agregar el Gasto al Componente Principal

        guardarGasto(gasto)
        guardarCrearGasto(true)

        //limpiomos el formulario
        guardarNombreGasto('');
        guardarCantidadGasto('');

    }

    return (
        <form
            onSubmit={agregarGasto}
        >
            <h2>Agrega Tus Gastos</h2>
            {error ? <Errores mensaje='Llenar Ambos Campos es Necesario' /> : null}

            <div className="campo">
                <label>Nombre Gastos</label>
                <input
                    type='text'
                    className='u-full-width'
                    placeholder='Ej. Transporte'
                    onChange= {e => guardarNombreGasto(e.target.value)}
                    value={nombreGasto}
                />
            </div>
            <div className="campo">
                <label>Cantidad del Gasto</label>
                <input
                    type='number'
                    className='u-full-width'
                    placeholder='Ej. 300'
                    onChange= { e => guardarCantidadGasto(parseInt(e.target.value, 10) )}
                    value= {cantidadGasto}
                />
            </div>
            <input 
                type='submit'
                className='button-primary u-full-widt'
                value='Agregar Gastos' />
        </form>

    );
}

export default Formulario;