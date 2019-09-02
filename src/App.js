import React, { useState, useEffect} from 'react';
import Pregunta from './components/Pregunta';
import Formulario from './components/Formulario';
import Listado from './components/Listado';
import ControlPresupuesto from './components/ControlPresupuesto';

function App() {

  const [presupuesto, guardarPresupuesto] = useState(0);
  const [restante, guardarRestante] = useState(0);
  const [preguntaPresupuesto, guardarPreguntaPresupuesto]=useState(true);
  const [crearGasto, guardarCrearGasto] = useState(false);
  const [gasto, guardarGasto] = useState({});
  const [gastos, guardarGastos] = useState([]);
  useEffect(() =>{
    if (crearGasto){
      const listadoGastos = [...gastos, gasto];
      guardarGastos(listadoGastos);
      const disminuirRestante= restante - gasto.cantidadGasto;
      guardarRestante(disminuirRestante);
    }
    guardarCrearGasto(false)

  },[crearGasto] )


  return (
    <div className="app container">
      <header>
        <h1>Gasto Semanal</h1>
        <div className="contenido-principal contenido">
          {(preguntaPresupuesto) ?
            <Pregunta 
              guardarPresupuesto={guardarPresupuesto}
              guardarPreguntaPresupuesto={guardarPreguntaPresupuesto}
              guardarRestante={guardarRestante}
            />
          :
            (
              <div className="row">
                <div className="one-half column">
                  <Formulario 
                    guardarCrearGasto={guardarCrearGasto}
                    guardarGasto={guardarGasto}
                  />
                </div>
                <div className="one-half column">
                  <Listado 
                    gastos={gastos}     
                  />
                  <ControlPresupuesto
                    presupuesto={presupuesto}
                    restante={restante}
                  />
                </div>
                
              </div>
            )

          }
        </div>
      </header>
    </div>
  );
}

export default App;
