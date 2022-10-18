import { useState } from 'react'
import './App.css'
import Gasto from './components/Gasto';
import Header from './components/Header'
import ListadoGastos from './components/listadoGastos';
import Modal from './components/Modal';
import { generateId } from './helpers';
import IconoNuevoGasto from './img/nuevo-gasto.svg'

function App() {
  
  const [spends, setSpends] = useState([])
  const [presupuesto, setPresupuesto] = useState(0);
  const [isValidPResupuesto, setIsValidPresupuesto] = useState(false);
  const [modal, setModal] = useState(false);
  const [modalAnimate, setModalAnimate] = useState(false);


  const handleNewSpend = () => {
    setModal(true)
    setTimeout(() => {
      setModalAnimate(true)
    }, 500);
  }

  const saveSpend = spend => {
    spend.id = generateId();
    spend.date = Date.now();
    setSpends([...spends, spend])

    setModalAnimate(false);
    setTimeout(() => {
      setModal(false)
    }, 500);
  }

  return (
    <div className={ modal ? 'fijar' : ''}>
      <Header
      spends={ spends }
      presupuesto={ presupuesto }
      setPresupuesto={ setPresupuesto }
      isValidPResupuesto={ isValidPResupuesto }
      setIsValidPresupuesto={ setIsValidPresupuesto }/>
      
      {isValidPResupuesto && (
        <>
          <main>
            <ListadoGastos spends={ spends }/>
          </main>
          <div className="nuevo-gasto">
            <img 
              src={ IconoNuevoGasto } 
              alt='icono nuevo gasto'
              onClick={ handleNewSpend }
              />
          </div>
        </>
      )}

      {modal && <Modal 
        setModal={ setModal }
        modalAnimate={ modalAnimate }
        setModalAnimate={ setModalAnimate }
        saveSpend={ saveSpend }/>}
    </div>
  )
}

export default App
