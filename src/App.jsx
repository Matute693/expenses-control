import { useState, useEffect } from 'react'
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

  const [editSpend, setEditSpend] = useState({});

  useEffect(() => {
    if(Object.keys(editSpend).length > 0) {
      setModal(true);

      setTimeout(() => {
        setModalAnimate(true)
      }, 500);
    }
  }, [editSpend])


  const handleNewSpend = () => {
    setModal(true);
    setEditSpend({});
    setTimeout(() => {
      setModalAnimate(true)
    }, 500);
  }

  const saveSpend = spend => {
    if(spend.id) {
      const updatedSpend = spends.map( spendState => spendState.id === spend.id ? spend : spendState )
      setSpends(updatedSpend);
    } else {
      spend.id = generateId();
      spend.date = Date.now();
      setSpends([...spends, spend])
      // neqw spend
    }
    setModalAnimate(false);
    setTimeout(() => {
      setModal(false)
    }, 500);
  }

  const deleteSpend = id => {
    const updatedSpend = spends.filter( item => item.id !== id );
    setSpends(updatedSpend)
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
            <ListadoGastos 
              spends={ spends }
              setEditSpend={ setEditSpend }
              deleteSpend={ deleteSpend }
              />
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
        saveSpend={ saveSpend }
        editSpend={ editSpend }
        setEditSpend={ setEditSpend }
        />}
    </div>
  )
}

export default App
