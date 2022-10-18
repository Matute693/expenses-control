import { useState } from 'react';
import closeModalButton from './../img/cerrar.svg'
import Message from './message';

const Modal = ({ setModal, modalAnimate, setModalAnimate, saveSpend }) => {
  
  const [ message, setMessage ] = useState('')

  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [category, setCategory] = useState('');

  const hiddeModal = () => {
    setModalAnimate(false);
    
    setTimeout(() => {
      setModal(false)
    }, 500);
  }

  const handleSubmit = e => {
    e.preventDefault();
    if([ name, quantity, category ].includes('')) {
      setMessage('complete los campos');

      setTimeout(() => {
        setMessage('')
      }, 2000);
      return;
    }

    saveSpend({name, quantity, category})
  }

  return (
    <div className="modal">
      <div className="cerrar-modal">
        <img 
          className='pointer'
          src={ closeModalButton } 
          alt="close modal"
          onClick={ hiddeModal }
          />
      </div>

      <form onSubmit={handleSubmit} className={`formulario ${modalAnimate ? "animar" : 'cerrar'}`}>
          <legend>NUEVO GASTO</legend>
          {message && <Message type='error'>{ message }</Message> }
          
          <div className="campo">
            <label htmlFor="name">Nombre del gasto</label>
          <input 
            id="name"
            type="text"
            placeholder='Añade el nombre del gasto'
            value={name}
            onChange={ e => setName(e.target.value) } />
          </div>

          <div className="campo">
            <label htmlFor="Precio">Cantidad</label>
            <input 
              id="cantidad"
              type="number"
              placeholder='Añade el precio: ej: 3000' 
              value={quantity}
              onChange={e => setQuantity(Number(e.target.value))}/>
          </div>

          <div className="campo">
            <label htmlFor="categoria">Categoria</label>
              <select value={category} onChange={e => setCategory( e.target.value )} name="" id="categoria">
                <option value=""> -- Seleccione</option>
                <option value="ahorro">Ahorro</option>
                <option value="comida">Comida</option>
                <option value="casa">Casa</option>
                <option value="gastos varios">Gastos varios</option>
                <option value="ocio">Ocio</option>
                <option value="varios">Salud</option>
                <option value="subscripciones">Subscripciones</option>
              </select>
          </div>

          <input 
            type="submit"
            value='Añadir gasto' />
      </form>
      
    </div>
  )
}

export default Modal
