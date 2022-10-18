import { useState } from 'react'
import Message from './message';

const NuevoPresupuesto = ({ presupuesto, setPresupuesto, setIsValidPresupuesto }) => {
  const [ message, setMessage ] = useState('');


  const handlePresupuesto = (e) => {
    e.preventDefault();
    if(!presupuesto || presupuesto < 0) {
      setMessage('No es un presupuesto valido');
      return
    }
    setMessage('');
    setIsValidPresupuesto(true);
  }


  return (
    <div className='contenedor-presupuesto contenedor sombra'>
      <form onSubmit={handlePresupuesto} className='formulario'>
        <div className="campo">
          <label htmlFor="">Definir presupuesto</label>
          <input className='nuevo-presupuesto'
                  type="number"
                  placeholder='Añade tu presupuesto'
                  value={ presupuesto }
                  onChange={ e => setPresupuesto(e.target.value)}/>
        </div>

        <input type="submit" value="Añadir" />
        { message && <Message type="error" children={message}>{ message } </Message>}
      </form>
    </div>
  )
}

export default NuevoPresupuesto